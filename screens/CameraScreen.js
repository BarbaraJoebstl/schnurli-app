import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { Camera, Permissions, MailComposer } from 'expo';

export default class CameraScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  //TODO enum for white balance Camera.Constants.WhiteBalance: auto, sunny, cloudy, shadow, fluorescent, incandescent

  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
    af: true,
    path: null
  };

  schnurliwurli = async () => {
    if (this.camera) {
      let photo = await this.camera.takePictureAsync();
      this.setState({ path: photo.uri });
    }
  };

  send = () => {
    const readable_timestamp = new Date().toLocaleString();

    MailComposer.composeAsync({
      // todo 
      // - get email recipients
      // - subject
      // - body text via settings
      recipients: [],
      subject: `You schnurlizerd: ${readable_timestamp}`,
      body: "Hi! Here is the attachment...",
      attachments: [`${this.state.path}`]
    })

    this.setState({ path: null });

  }

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  renderCamera() {
    return (
      <Camera style={{ flex: 1 }}
        type={this.state.type}
        ref={ref => { this.camera = ref; }}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{
              alignSelf: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              this.schnurliwurli()
            }}>
            <Text
              style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
              {' '}Shot{' '}
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{
              alignSelf: 'flex-end',
              alignItems: 'center',
            }}
            onPress={() => {
              this.setState({
                type: this.state.type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back,
              });
            }}>
            <Text
              style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
              {' '}Flip{' '}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignSelf: 'flex-end',
              alignItems: 'center',
            }}
            onPress={() => {
              this.setState({
                type: this.state.af === true
                  ? Camera.Constants.AutoFocus = true
                  : Camera.Constants.AutoFocus = false,
              });
            }}>
            <Text
              style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
              {' '}Toggle AF{' '}
            </Text>
          </TouchableOpacity>
        </View>
      </Camera>
    );
  }

  renderPreview() {
    return (
      <View style={{ flex: 1 }}>
        <Image
          source={{ uri: this.state.path }}
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            height: 100,
            width: 100
          }}
        />
        <Text
          style={{
            alignSelf: 'flex-end',
            alignItems: 'center',
          }}
          onPress={() => this.setState({ path: null })}
        >Cancel
          </Text>
        <Text
          style={{
            alignSelf: 'flex-end',
            alignItems: 'center',
          }}
          onPress={() => { this.send() }}>
          Send
        </Text>
      </View>
    );
  }

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          {this.state.path ? this.renderPreview() : this.renderCamera()}
        </View>
      )
    }
  }
}