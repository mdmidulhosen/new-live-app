import { Text, View, StyleSheet, Image, TextInput } from 'react-native'
import React, { Component } from 'react'

export class LoginRequired extends Component {
  render() {
    return (
      <View style={styles.loginRequired}>
        <View style={styles.container}>
            <Text style={styles.headerTitle}>Update Your Profile</Text>
            <View style={styles.imageWrap}>
                <Image style={styles.userImage} source={require('../assets/images/userImage.jpg')}/>
                <Text style={styles.uploadBtn}>Upload</Text>
            </View>
            <View style={styles.inputFields}>
                <TextInput style={styles.emailInput} placeholder='Name' />
                <TextInput style={styles.emailInput} placeholder='Email' />
                <TextInput style={styles.emailInput} placeholder='Phone' />
                <TextInput style={styles.emailInput} placeholder='Confirm Password' />
            </View>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
    container: {
        padding:10,
        height:'100%'
    },
    userImage:{
        height:80,
        width:80
    },
    uploadBtn:{
        backgroundColor:'#2bc48a',
        width:100,
        paddingVertical:8,
        borderRadius:8,
        textAlign:'center',
        color:'white',
        fontWeight:700,
        marginTop:10
    },
    headerTitle:{
        textAlign:'center',
        fontSize:24,
        fontWeight:700,
        marginBottom:30
    },
    emailInput:{
        borderColor:'#cccccc',
        borderWidth:1,
        borderRadius: 8,
        marginBottom:8,
    }
})

export default LoginRequired