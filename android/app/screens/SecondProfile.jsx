import { View, Text, StyleSheet, ScrollView, Image, ImageBackground } from 'react-native'
import React from 'react'

const SecondProfile = () => {
  return (
      <ImageBackground style={styles.backgroundProfile} blurRadius={16} source={require('../assets/images/userImage.jpg')}>
        <ScrollView style={styles.container}>
            <View style={styles.mainWrapper}>
              {/* header part start from here  */}
              <View style={styles.headerPart}>
                <View>


                  <View style={styles.aboutBox}>
                    <View style={styles.imageBox}>
                      <Image style={styles.userImage} source={require('../assets/images/userImage.jpg')} />
                    </View>


                    <View style={styles.folowers}>
                      <View style={styles.friends}>
                        <Text style={styles.friendsNumber}>78</Text>
                        <Text style={styles.friendsText}>Views</Text>
                      </View>
                      <View style={styles.friends}>
                        <Text style={styles.friendsNumber}>30</Text>
                        <Text style={styles.friendsText}>New Fans</Text>
                      </View>
                      <View style={styles.friends}>
                        <Text style={styles.friendsNumber}>1</Text>
                        <Text style={styles.friendsText}>New Beans</Text>
                      </View>
                      <View style={styles.friendsLast}>
                        <Text style={styles.friendsNumber}>45</Text>
                        <Text style={styles.friendsText}>Gift-Givers</Text>
                      </View>
                    </View>

                  </View>

                </View>
              </View>
              {/* header part end from here  */}

              <View style={styles.bodyPart}>

                <View style={styles.profileBodyItem}>
                  <View style={styles.profileBodyLeft}>
                    <Image source={require('../assets/images/comment.png')}/>
                    <Text style={styles.profileMessage}>Room Level</Text>
                  </View>
                  <View style={styles.profileBodyRight}>
                    <Image source={require('../assets/images/right-chevron.png')}/>
                  </View>

                </View>

                <View style={styles.profileBodyItem}>
                  <View style={styles.profileBodyLeft}>
                    <Image source={require('../assets/images/notification.png')}/>
                    <Text style={styles.profileMessage}>Room Level</Text>
                  </View>
                  <View style={styles.profileBodyRight}>
                    <Image source={require('../assets/images/right-chevron.png')}/>
                  </View>

                </View>

                <View style={styles.profileBodyItem}>
                  <View style={styles.profileBodyLeft}>
                    <Image source={require('../assets/images/comment.png')}/>
                    <Text style={styles.profileMessage}>Room Level</Text>
                  </View>
                  <View style={styles.profileBodyRight}>
                    <Image source={require('../assets/images/right-chevron.png')}/>
                  </View>

                </View>

              </View>

            </View>
        </ScrollView>
      </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container:{
    height:'100%',
    backgroundColor:'#00000059'
  },
  headerPart: {
    padding: 5,
    paddingBottom:12,
  },
  Me: {
    color: 'black',
    fontSize: 24,
    fontWeight: 700
  },
  headerWrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  headerRight: {
    display: 'flex',
    flexDirection: 'row',
  },
  settingImg: {
    marginRight: 16,
  },
  userImage: {
    height: 90,
    width: 90,
    borderRadius: 100,
  },
  imageBox: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    flexDirection: 'row',
    paddingTop: 30,
  },
  profileBadge: {
    height: 22,
    width: 22,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 700,
    color: 'black',
  },
  titleBadges: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:10,
  },
  verifiedUserWrapper: {
    height: 25,
    width: 25,
    backgroundColor: 'skyblue',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginRight: 8,
    marginLeft: 8,
    borderRadius: 5,
  },
  profileBadgeWrapper: {
    height: 25,
    width: 25,
    backgroundColor: '#2CBB85',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: 5,
  },
  idNumebr:{
    textAlign:'center',
    marginTop: 12,
  },
  folowers:{
    flex:3,
    flexDirection:'row',
    flexWrap:'wrap',
    marginTop:18
  },
  friends:{
    flex:1,
    height:50,
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-around',
  },
  friendsLast:{
    flex:1,
    height:50,
    display:'flex',
  },
  friendsNumber:{
    textAlign:'center',
    fontWeight:700,
    fontSize:22,
    color:'white'
  },
  friendsText:{
    textAlign:'center',
    color:'white'
  },
  following:{
    backgroundColor:'green',
    flex:1,
  },
  fans:{
    backgroundColor:'pink',
    flex:1,
  },
  earWay:{
    flex:4,
    flexDirection:'row',
    flexWrap:'wrap',
    marginTop:20
  },
  VIP:{
    display:'flex',
    flex:1,
    justifyContent:'center',
    flexDirection:'column',
    alignItems:'center',
  },
  VipBg:{
    height:80,
    display:'flex',
    justifyContent:'space-evenly',
    flexDirection:'column',
    alignItems:'center',
    width:'97%'
  },
  earnWayTitle:{
    fontSize:11,
  },
  profileBodyLeft:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
  },
  profileMessage:{
    marginLeft:14,
    color:'black',
    fontWeight: 500,
    fontSize:16
  },
  profileBodyItem:{
    display:'flex',
    justifyContent:'space-between',
    flexDirection:'row',
    alignItems:'center',
    paddingVertical:14,
    paddingHorizontal:10,
    backgroundColor:'#a7a49a63',
    borderRadius:12,
    marginBottom:5
  },
  profileBodyRightBadge:{
    backgroundColor:'red',
    borderRadius:15,
    paddingVertical:2,
    paddingHorizontal:8,
    marginRight:8
  },
  profileBodyRightBadgeText:{
    color:'white',
    fontSize:10,
  },
  profileBodyRight:{
    display:'flex',
    flexDirection:'row'
  },
  bodyPart: {
    padding: 5,
    paddingBottom:12,
  },
})

export default SecondProfile