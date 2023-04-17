import { ScrollView, Text, View, StyleSheet, Image, ImageBackground } from 'react-native'
import React, { Component } from 'react'

export class Room extends Component {
  render() {
    return (
      <ScrollView style={styles.Room}>
        <View style={styles.containerWrapper}>
            <View style={styles.Container}>

                <View style={styles.alignSpaceBetween1}>
                    {/* header code  start from here  */}
                    <View style={styles.header}>

                    <View style={styles.headerLeft}>
                        <Image style={styles.headerleftUserImage} source={require('../assets/images/userImage.jpg')}/>
                        <View style={styles.headerLeftTitleId}>
                            <Text style={styles.roomCreatorName}>Midul Hosen's Room</Text>
                            <Text style={styles.roomCreatorId}>Id:62535353535</Text>
                        </View>
                    </View>

                    <View style={styles.headerRight}>
                        <View style={styles.close}>
                            <Image source={require('../assets/images/reload.png')}/>
                        </View>
                        <View style={styles.close}>
                            <Image source={require('../assets/images/zoom.png')}/>
                        </View>
                        <View style={styles.close}>
                            <Image source={require('../assets/images/close.png')}/>
                        </View>
                    </View>
                    </View>
                    {/* header code  end from here  */}

                    {/* second header code  start from here  */}
                    <View style={styles.header}>

                    <View style={styles.SecondHeaderLeft}>
                        <Image style={styles.seondHeaderleftUserImage} source={require('../assets/images/fire.png')}/>
                        <View style={styles.headerLeftTitleId}>
                            <Text style={styles.roomCreatorName}>323</Text>
                        </View>
                    </View>

                    <View style={styles.headerRight}>
                        <View >
                            <Image style={styles.seeMoreUsers} source={require('../assets/images/userImage.jpg')}/>
                        </View>
                        <View >
                            <Image style={styles.seeMoreUsers} source={require('../assets/images/userImage.jpg')}/>
                        </View>
                        <View >
                            <Image style={styles.seeMoreUsers} source={require('../assets/images/userImage.jpg')}/>
                        </View>
                        <View style={styles.seeMoreNumberOfPeople}>
                            <Text style={styles.seeMoreNumberOfPeopleText}>17</Text>
                        </View>
                    </View>
                    </View>
                    {/* second header code  end from here  */}

                    {/* body code start from here  */}

                    <View style={styles.Body}>
                    <View style={styles.Users}>

                        <View style={styles.userWrapper}>
                            <View style={styles.user}>
                            <ImageBackground style={styles.hostImage} imageStyle={{borderRadius:100, backgroundColor:'red'}}  resizeMode="cover" source={require('../assets/images/userImage.jpg')}>
                                <Text style={styles.host}>Host</Text>  
                            </ImageBackground>
                            </View>
                            <Text style={styles.userName}>MIdul Hosen</Text>
                            <Text style={styles.userName}>0</Text>
                        </View>

                        <View style={styles.userWrapper}>
                            <View style={styles.user}>
                                <Image source={require('../assets/images/plus.png')}/>
                            </View>
                            <Text style={styles.userName}>MIdul Hosen</Text>
                            <Text style={styles.userName}>1</Text>
                        </View>

                        <View style={styles.userWrapper}>
                            <View style={styles.user}>
                                <Image source={require('../assets/images/plus.png')}/>
                            </View>
                            <Text style={styles.userName}>MIdul Hosen</Text>
                            <Text style={styles.userName}>2</Text>
                        </View>

                        <View style={styles.userWrapper}>
                            <View style={styles.user}>
                                <Image source={require('../assets/images/plus.png')}/>
                            </View>
                            <Text style={styles.userName}>MIdul Hosen</Text>
                            <Text style={styles.userName}>3</Text>
                        </View>

                        <View style={styles.userWrapper}>
                            <View style={styles.user}>
                                <Image source={require('../assets/images/plus.png')}/>
                            </View>
                            <Text style={styles.userName}>MIdul Hosen</Text>
                            <Text style={styles.userName}>4</Text>
                        </View>

                        <View style={styles.userWrapper}>
                            <View style={styles.user}>
                                <Image source={require('../assets/images/plus.png')}/>
                            </View>
                            <Text style={styles.userName}>MIdul Hosen</Text>
                            <Text style={styles.userName}>5</Text>
                        </View>

                    </View>
                    </View>

                    {/* body code end from here  */}
                </View>

                <View style={styles.alignSpaceBetween2}>
                        <ScrollView style={styles.comments}>

                            <View style={styles.commentsWrapper}>
                                <Text style={styles.commentText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                            </View>

                            <View style={styles.commentsWrapper}>
                                <Text style={styles.commentText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </Text>
                            </View>

                            <View style={styles.commentsWrapper}>
                                <Text style={styles.commentText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                            </View>

                        </ScrollView>
                        <View style={styles.Footer}>
                            <View style={styles.footerLeft}>
                                <View style={styles.footerLeftItems}>
                                    <View style={styles.comment}>
                                        <Image source={require('../assets/images/commentLive.png')}/>
                                    </View>
                                    <View style={styles.comment}>
                                        <Image source={require('../assets/images/happy.png')}/>
                                    </View>

                                    <View style={styles.comment}>
                                        <Image source={require('../assets/images/mic.png')}/>
                                    </View>

                                    <View style={styles.comment}>
                                        <Image source={require('../assets/images/menu.png')}/>
                                    </View>

                                    <View style={styles.comment}>
                                        <Image source={require('../assets/images/gift-boxes.png')}/>
                                    </View>

                                    <View style={styles.comment}>
                                        <Image source={require('../assets/images/gift-boxes.png')}/>
                                    </View>

                                </View>
                            </View>
                            {/* <View style={styles.footerRight}>
                                <Text>HiTher</Text>
                            </View> */}
                        </View>
                </View>

            </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
    Room:{
        backgroundColor:'skyblue',
        height:'100%'
    },
    Container:{
        padding:5,
    },
    alignSpaceBetween2:{
        paddingTop:58,
    },
    headerleftUserImage:{
        height:40,
        width:40,
        borderRadius:8
    },
    header:{
        display:'flex',
        flex:2,
        flexDirection:'row',
        marginBottom:10,
    },
    headerLeft:{
        display:'flex',
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        backgroundColor:'#a7a49a63',
        borderTopRightRadius:25,
        borderBottomRightRadius:25,
        borderTopLeftRadius:8,
        borderBottomLeftRadius:8,
        paddingVertical:3,
        paddingHorizontal:3,
    },
    roomCreatorName:{
        color:'white',
        fontWeight:700,
        fontSize:12,
    },
    roomCreatorId:{
        color:'#f5f5f5',
        fontSize:10,
    },
    headerRight:{
        flex:1,
        display:'flex',
        justifyContent:'flex-end',
        alignItems:'center',
        flexDirection:'row'
    },
    close:{
        backgroundColor:'#a7a49a63',
        padding:8,
        borderRadius:100,
        marginRight:8
    },
    SecondHeaderLeft:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',
        height:25,
        width:55,
        backgroundColor:'#a7a49a63',
        borderRadius:12
    },
    seeMoreUsers:{
        height:25,
        width:25,
        borderRadius:100,
        marginRight:8
    },
    seeMoreNumberOfPeople:{
        height:25,
        width:25,
        backgroundColor:'#a7a49a63',
        borderRadius:100,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    seeMoreNumberOfPeopleText:{
        color:'white',
        fontSize:12,
        fontWeight:500
    },
    user:{
        height:45,
        width:45,
        backgroundColor:'#a7a49a63',
        display:'flex',
        justifyContent: 'center',
        alignItems:'center',
        borderRadius:100
    },
    userName:{
        color:'white',
        fontSize:10,
    },
    Users:{
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap'
    },
    userWrapper:{
        width:'20%',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:10
    },
    hostImage:{
        height:'100%',
        width:'100%',
        display:'flex',
        justifyContent:'flex-end'

    },
    host:{
        color:'pink',
        fontSize:10,
        textAlign:'center',
        fontWeight:700

    },
    comment:{
        height:40,
        width:40,
        backgroundColor:'#a7a49a63',
        borderRadius:100,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    footerLeftItems:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    Footer:{
        flex:7,
        flexDirection:'row'
    },
    footerLeft:{
        flex:5,
    },
    footerRight:{
        backgroundColor:'#a7a49ab8',
        flex:2,
        borderRadius:25,
        marginLeft:90
    },
    comments:{
        height:250,
        width:"70%",
    },
    commentsWrapper:{
        backgroundColor:'#a7a49a63',
        padding:10,
        borderRadius:8,
        marginBottom:7,
    }
    
})

export default Room