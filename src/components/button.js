import React from 'react'
import { Button } from 'react-native'

import styles from './button.scss'
console.log(styles)

export default function ButtonType({...props}){
  return (
    <Button style={styles.buttontype} {...props}/>
  )
}