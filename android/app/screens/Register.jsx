import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native'
import { Button } from 'react-native'

const Register = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../assets/images/logo.png')} />
            <Text style={styles.title}>Register</Text>
            <TextInput style={styles.emailInput} placeholder='Name' />
            <TextInput style={styles.emailInput} placeholder='Email' />
            <TextInput style={styles.emailInput} placeholder='Password' />
            <TextInput style={styles.emailInput} placeholder='Confirm Password' />
            <Text style={styles.RegisterBtn}>Registration</Text>

        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        paddingRight: 40,
        paddingLeft: 40,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height:'100%'
    },

    title: {
        color: 'pink',
        fontSize: 24,
        color: 'black',
        textAlign: 'center',
        marginBottom: 10,
        fontWeight:700
    },
    logo: {
        height: 100,
        width: 100,
    },
    emailInput: {
        borderWidth: 1,
        borderColor: '#000000',
        width: '100%',
        borderRadius: 8,
        paddingLeft: 20,
        marginBottom: 18
    },
    RegisterBtn: {
        backgroundColor: 'skyblue',
        width: '100%',
        textAlign: 'center',
        borderRadius: 8,
        paddingTop: 14,
        paddingBottom: 14,
        fontWeight:700,
    },
    LoginOrTxt: {
        color: 'black',
        marginTop: 10,
        marginBottom: 10,
    },
    main:{
        display:'flex',
        width: 120,
        flexDirection:'row',
        justifyContent:'space-evenly'
    },
    googleSign:{
        height:32,
        width:32,
    },
    facebookSign:{
        height:32,
        width:32,
    },
    registerBtn:{
        backgroundColor:'skyblue',
        paddingHorizontal:18,
        paddingVertical:10,
        borderRadius: 8,
        marginTop:14,
    }


})

export default Register;