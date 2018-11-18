import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { styles } from '../constants/Style';


 export default function TextButton ({ children, onPress, style={} }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[styles.reset, style]}>{children}</Text>
    </TouchableOpacity>
  )
} 


