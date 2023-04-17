import { View, Text, StyleSheet, ScrollView, Image, ImageBackground } from 'react-native'
import React from 'react'

const Profile = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.mainWrapper}>
        {/* header part start from here  */}
        <View style={styles.headerPart}>
          <View>

            <View style={styles.headerWrapper}>

              <View style={styles.headerLeft}>
                <Text style={styles.Me}>Me</Text>
              </View>

              <View style={styles.headerRight}>
                <Image style={styles.settingImg} source={require('../assets/images/setting.png')} />
                <Image source={require('../assets/images/user.png')} />
              </View>

            </View>

            <View style={styles.aboutBox}>
              <View style={styles.imageBox}>
                <Image style={styles.userImage} source={require('../assets/images/userImage.jpg')} />
              </View>

              <View style={styles.titleBadges}>
                <Text style={styles.profileName}>John Doe</Text>
                <View style={styles.verifiedUserWrapper}>
                  <Image style={styles.verifiedUser} source={require('../assets/images/verifiedUser.png')} />
                </View>
                <View style={styles.profileBadgeWrapper}>
                  <Image style={styles.profileBadge} source={require('../assets/images/level-up.png')} />
                </View>
              </View>

              <Text style={styles.idNumebr}>ID:3224323432</Text>

              <View style={styles.folowers}>
                <View style={styles.friends}>
                  <Text style={styles.friendsNumber}>4</Text>
                  <Text style={styles.friendsText}>Friends</Text>
                </View>
                <View style={styles.friends}>
                  <Text style={styles.friendsNumber}>78</Text>
                  <Text style={styles.friendsText}>Following</Text>
                </View>
                <View style={styles.friendsLast}>
                  <Text style={styles.friendsNumber}>45</Text>
                  <Text style={styles.friendsText}>Fans</Text>
                </View>
              </View>

              <View style={styles.earWay}>
                <View style={styles.VIP}>
                  <ImageBackground imageStyle={{borderRadius:4}} style={styles.VipBg} source={require('../assets/images/soft1.jpg')}>
                    <Image source={require('../assets/images/crown.png')}/>
                    <Text style={styles.earnWayTitle}>Check My VIP</Text>
                  </ImageBackground>
                </View>

                <View style={styles.VIP}>
                  <ImageBackground imageStyle={{borderRadius:4}} style={styles.VipBg} source={require('../assets/images/soft2.jpg')}>
                    <Image source={require('../assets/images/shield.png')}/>
                    <Text style={styles.earnWayTitle}>Family</Text>
                  </ImageBackground>
                </View>

                <View style={styles.VIP}>
                  <ImageBackground imageStyle={{borderRadius:4}} style={styles.VipBg} source={require('../assets/images/soft3.jpg')}>
                    <Image source={require('../assets/images/money-bag.png')}/>
                    <Text style={styles.earnWayTitle} resizeMode="cover">Earn Money</Text>
                  </ImageBackground>
                </View>

                <View style={styles.VIP}>
                  <ImageBackground imageStyle={{borderRadius:4}} style={styles.VipBg} source={require('../assets/images/soft4.jpg')}>
                    <Image source={require('../assets/images/ludo.png')}/>
                    <Text style={styles.earnWayTitle}>Ludo</Text>
                  </ImageBackground>
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
              <Text style={styles.profileMessage}>Message</Text>
            </View>
            <View style={styles.profileBodyRight}>
              <Image source={require('../assets/images/right-chevron.png')}/>
            </View>

          </View>

          <View style={styles.profileBodyItem}>
            <View style={styles.profileBodyLeft}>
              <Image source={require('../assets/images/notification.png')}/>
              <Text style={styles.profileMessage}>Ofiicial Message</Text>
            </View>
            <View style={styles.profileBodyRight}>
              <View style={styles.profileBodyRightBadge}>
                <Text style={styles.profileBodyRightBadgeText}>99+</Text>
              </View>
              <Image source={require('../assets/images/right-chevron.png')}/>
            </View>
          </View>

          <View style={styles.profileBodyItem}>
            <View style={styles.profileBodyLeft}>
              <Image source={require('../assets/images/wallet.png')}/>
              <Text style={styles.profileMessage}>Wallet</Text>
            </View>
            <View style={styles.profileBodyRight}>
              <Image source={require('../assets/images/right-chevron.png')}/>
            </View>

          </View>

          <View style={styles.profileBodyItem}>
            <View style={styles.profileBodyLeft}>
              <Image source={require('../assets/images/bag.png')}/>
              <Text style={styles.profileMessage}>Item Bag</Text>
            </View>
            <View style={styles.profileBodyRight}>
              <View style={styles.profileBodyRightBadge}>
                <Text style={styles.profileBodyRightBadgeText}>1</Text>
              </View>
              <Image source={require('../assets/images/right-chevron.png')}/>
            </View>
          </View>

          <View style={styles.profileBodyItem}>
            <View style={styles.profileBodyLeft}>
              <Image source={require('../assets/images/post.png')}/>
              <Text style={styles.profileMessage}>My Post</Text>
            </View>
            <View style={styles.profileBodyRight}>
              <Image source={require('../assets/images/right-chevron.png')}/>
            </View>

          </View>


        </View>

        <View style={styles.bodyPart}>

          <View style={styles.profileBodyItem}>
            <View style={styles.profileBodyLeft}>
              <Image source={require('../assets/images/comment.png')}/>
              <Text style={styles.profileMessage}>Message</Text>
            </View>
            <View style={styles.profileBodyRight}>
              <Image source={require('../assets/images/right-chevron.png')}/>
            </View>

          </View>

          <View style={styles.profileBodyItem}>
            <View style={styles.profileBodyLeft}>
              <Image source={require('../assets/images/notification.png')}/>
              <Text style={styles.profileMessage}>Ofiicial Message</Text>
            </View>
            <View style={styles.profileBodyRight}>
              <View style={styles.profileBodyRightBadge}>
                <Text style={styles.profileBodyRightBadgeText}>99+</Text>
              </View>
              <Image source={require('../assets/images/right-chevron.png')}/>
            </View>
          </View>

          <View style={styles.profileBodyItem}>
            <View style={styles.profileBodyLeft}>
              <Image source={require('../assets/images/wallet.png')}/>
              <Text style={styles.profileMessage}>Wallet</Text>
            </View>
            <View style={styles.profileBodyRight}>
              <Image source={require('../assets/images/right-chevron.png')}/>
            </View>

          </View>

          <View style={styles.profileBodyItem}>
            <View style={styles.profileBodyLeft}>
              <Image source={require('../assets/images/bag.png')}/>
              <Text style={styles.profileMessage}>Item Bag</Text>
            </View>
            <View style={styles.profileBodyRight}>
              <View style={styles.profileBodyRightBadge}>
                <Text style={styles.profileBodyRightBadgeText}>1</Text>
              </View>
              <Image source={require('../assets/images/right-chevron.png')}/>
            </View>
          </View>

          <View style={styles.profileBodyItem}>
            <View style={styles.profileBodyLeft}>
              <Image source={require('../assets/images/post.png')}/>
              <Text style={styles.profileMessage}>My Post</Text>
            </View>
            <View style={styles.profileBodyRight}>
              <Image source={require('../assets/images/right-chevron.png')}/>
            </View>

          </View>


        </View>

        <View style={styles.bodyPart}>

          <View style={styles.profileBodyItem}>
            <View style={styles.profileBodyLeft}>
              <Image source={require('../assets/images/comment.png')}/>
              <Text style={styles.profileMessage}>Message</Text>
            </View>
            <View style={styles.profileBodyRight}>
              <Image source={require('../assets/images/right-chevron.png')}/>
            </View>

          </View>

          <View style={styles.profileBodyItem}>
            <View style={styles.profileBodyLeft}>
              <Image source={require('../assets/images/notification.png')}/>
              <Text style={styles.profileMessage}>Ofiicial Message</Text>
            </View>
            <View style={styles.profileBodyRight}>
              <View style={styles.profileBodyRightBadge}>
                <Text style={styles.profileBodyRightBadgeText}>99+</Text>
              </View>
              <Image source={require('../assets/images/right-chevron.png')}/>
            </View>
          </View>

          <View style={styles.profileBodyItem}>
            <View style={styles.profileBodyLeft}>
              <Image source={require('../assets/images/wallet.png')}/>
              <Text style={styles.profileMessage}>Wallet</Text>
            </View>
            <View style={styles.profileBodyRight}>
              <Image source={require('../assets/images/right-chevron.png')}/>
            </View>

          </View>

          <View style={styles.profileBodyItem}>
            <View style={styles.profileBodyLeft}>
              <Image source={require('../assets/images/bag.png')}/>
              <Text style={styles.profileMessage}>Item Bag</Text>
            </View>
            <View style={styles.profileBodyRight}>
              <View style={styles.profileBodyRightBadge}>
                <Text style={styles.profileBodyRightBadgeText}>1</Text>
              </View>
              <Image source={require('../assets/images/right-chevron.png')}/>
            </View>
          </View>

          <View style={styles.profileBodyItem}>
            <View style={styles.profileBodyLeft}>
              <Image source={require('../assets/images/post.png')}/>
              <Text style={styles.profileMessage}>My Post</Text>
            </View>
            <View style={styles.profileBodyRight}>
              <Image source={require('../assets/images/right-chevron.png')}/>
            </View>

          </View>


        </View>

      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  headerPart: {
    padding: 5,
    borderBottomColor:'#EEF3F6',
    borderBottomWidth:8,
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
    borderRightColor:'#cccccc',
    borderRightWidth:1,
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
  },
  friendsText:{
    textAlign:'center'
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
    paddingVertical:10,
    borderBottomColor:'#f5f5f5',
    borderBottomWidth:2,
    paddingHorizontal:10
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
    borderBottomColor:'#EEF3F6',
    borderBottomWidth:8,
    paddingBottom:12,
  },
})

export default Profile