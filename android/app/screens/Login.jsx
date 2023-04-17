import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native'
import { Button } from 'react-native'

const Login = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../assets/images/logo.png')} />
            <Text style={styles.title}>Login</Text>
            <TextInput style={styles.emailInput} placeholder='Email' />
            <TextInput style={styles.emailInput} placeholder='Password' />
            <Text style={styles.LoginBtn}>Login</Text>

            <View><Text style={styles.LoginOrTxt}>OR</Text></View>

            <View style={styles.main}>
                <Image style={styles.googleSign} source={require('../assets/images/google.png')}/>
                <Image style={styles.facebookSign} source={require('../assets/images/facebook.png')}/>
            </View>

            <Text style={styles.registerBtn}>Register Now</Text>

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
    LoginBtn: {
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

export default Login