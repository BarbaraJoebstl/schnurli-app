import { StyleSheet } from 'react-native'
import Colors from './Colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.defaultBackground,
        fontSize: 18,
        flexDirection: 'column',
        justifyContent: 'space-between'
         },
      content: {
        alignItems: 'center',
        justifyContent: 'center',
        alignItems: 'stretch'
      },
      footer: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        alignItems: 'stretch'
      },
      card: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        backgroundColor: Colors.tintColor85
      },
      flipCardA: {
        padding: 10,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        backgroundColor: Colors.tintColor85,
        height: 200,
        alignItems: 'stretch',
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center'
      },
      primaryButton: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        padding: 10,
        fontSize: 20,
        backgroundColor: Colors.tintColor,
        color: 'white',
        elevation: 1
      }, 
      secondaryButton: {
        fontSize: 20,
        color: Colors.tintColor,
        textDecorationLine: "underline"
      },
      bigText: {
          fontSize: 18,
          fontWeight: "bold",
          color: "white"
      },
      smallText: {
          fontSize: 14,
          fontWeight: "normal"
      },
      input: {
          backgroundColor:"white",
          fontSize: 20,
          padding: 10,
          marginBottom: 20
      }
})
