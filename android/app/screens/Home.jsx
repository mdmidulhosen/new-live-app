import { Text, View, StyleSheet, Image, ImageBackground, ScrollView } from 'react-native';
import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';

const Boxes =() =>{
  return(
    <ScrollView>
      <View style={styles.boxContainer}>
      <View style={styles.box}>
          <ImageBackground imageStyle={{ borderRadius: 8}} resizeMode="cover" style={styles.boxImage} source={require('../assets/images/model1.jpg')}>
            <View style={styles.boxTextMain}>
              <View style={styles.boxTexts}>
              <Image style={styles.boxBadge} source={require('../assets/images/badgeLevel2.png')}/>
              <Text style={styles.boxView}>312</Text>
              </View>
              <View><Text style={styles.homeBoxName}>Midul Hosen</Text></View>
            </View>
          </ImageBackground>
          
      </View>

      <View style={styles.box}>
          <ImageBackground imageStyle={{ borderRadius: 8}} resizeMode="cover" style={styles.boxImage} source={require('../assets/images/model1.jpg')}>
            <View style={styles.boxTextMain}>
              <View style={styles.boxTexts}>
              <Image style={styles.boxBadge} source={require('../assets/images/badge.png')}/>
              <Text style={styles.boxView}>312</Text>
              </View>
              <View><Text style={styles.homeBoxName}>Midul Hosen</Text></View>
            </View>
          </ImageBackground>
          
      </View>

      <View style={styles.box}>
          <ImageBackground imageStyle={{ borderRadius: 8}} resizeMode="cover" style={styles.boxImage} source={require('../assets/images/model1.jpg')}>
            <View style={styles.boxTextMain}>
              <View style={styles.boxTexts}>
              <Image style={styles.boxBadge} source={require('../assets/images/badgeLevel2.png')}/>
              <Text style={styles.boxView}>312</Text>
              </View>
              <View><Text style={styles.homeBoxName}>Midul Hosen</Text></View>
            </View>
          </ImageBackground>
          
      </View>

      <View style={styles.box}>
          <ImageBackground imageStyle={{ borderRadius: 8}} resizeMode="cover" style={styles.boxImage} source={require('../assets/images/model1.jpg')}>
            <View style={styles.boxTextMain}>
              <View style={styles.boxTexts}>
              <Image style={styles.boxBadge} source={require('../assets/images/badge.png')}/>
              <Text style={styles.boxView}>312</Text>
              </View>
              <View><Text style={styles.homeBoxName}>Midul Hosen</Text></View>
            </View>
          </ImageBackground>
          
      </View>

      <View style={styles.box}>
          <ImageBackground imageStyle={{ borderRadius: 8}} resizeMode="cover" style={styles.boxImage} source={require('../assets/images/model1.jpg')}>
            <View style={styles.boxTextMain}>
              <View style={styles.boxTexts}>
              <Image style={styles.boxBadge} source={require('../assets/images/badge.png')}/>
              <Text style={styles.boxView}>312</Text>
              </View>
              <View><Text style={styles.homeBoxName}>Midul Hosen</Text></View>
            </View>
          </ImageBackground>
          
      </View>

      <View style={styles.box}>
          <ImageBackground imageStyle={{ borderRadius: 8}} resizeMode="cover" style={styles.boxImage} source={require('../assets/images/model1.jpg')}>
            <View style={styles.boxTextMain}>
              <View style={styles.boxTexts}>
              <Image style={styles.boxBadge} source={require('../assets/images/badge.png')}/>
              <Text style={styles.boxView}>312</Text>
              </View>
              <View><Text style={styles.homeBoxName}>Midul Hosen</Text></View>
            </View>
          </ImageBackground>
          
      </View>

      <View style={styles.box}>
          <ImageBackground imageStyle={{ borderRadius: 8}} resizeMode="cover" style={styles.boxImage} source={require('../assets/images/model1.jpg')}>
            <View style={styles.boxTextMain}>
              <View style={styles.boxTexts}>
              <Image style={styles.boxBadge} source={require('../assets/images/badgeLevel2.png')}/>
              <Text style={styles.boxView}>312</Text>
              </View>
              <View><Text style={styles.homeBoxName}>Midul Hosen</Text></View>
            </View>
          </ImageBackground>
          
      </View>

      <View style={styles.box}>
          <ImageBackground imageStyle={{ borderRadius: 8}} resizeMode="cover" style={styles.boxImage} source={require('../assets/images/model1.jpg')}>
            <View style={styles.boxTextMain}>
              <View style={styles.boxTexts}>
              <Image style={styles.boxBadge} source={require('../assets/images/badgeLevel2.png')}/>
              <Text style={styles.boxView}>312</Text>
              </View>
              <View><Text style={styles.homeBoxName}>Midul Hosen</Text></View>
            </View>
          </ImageBackground>
          
      </View>

      <View style={styles.box}>
          <ImageBackground imageStyle={{ borderRadius: 8}} resizeMode="cover" style={styles.boxImage} source={require('../assets/images/model1.jpg')}>
            <View style={styles.boxTextMain}>
              <View style={styles.boxTexts}>
              <Image style={styles.boxBadge} source={require('../assets/images/badgeLevel2.png')}/>
              <Text style={styles.boxView}>312</Text>
              </View>
              <View><Text style={styles.homeBoxName}>Midul Hosen</Text></View>
            </View>
          </ImageBackground>
          
      </View>

      <View style={styles.box}>
          <ImageBackground imageStyle={{ borderRadius: 8}} resizeMode="cover" style={styles.boxImage} source={require('../assets/images/model1.jpg')}>
            <View style={styles.boxTextMain}>
              <View style={styles.boxTexts}>
              <Image style={styles.boxBadge} source={require('../assets/images/badgeLevel2.png')}/>
              <Text style={styles.boxView}>312</Text>
              </View>
              <View><Text style={styles.homeBoxName}>Midul Hosen</Text></View>
            </View>
          </ImageBackground>
          
      </View>

      
      
    </View>
    </ScrollView>
  )
}

// export class Home extends Component {
//   render() {
//     return (
//      <SafeAreaView style={styles.container}>
//         <Boxes>
          
//         </Boxes>
//      </SafeAreaView>
//     )
//   }
// }


const styles = StyleSheet.create({
    container:{
      flex:1,
    },
    boxContainer:{
      width:'100%',
      height:'85%',
      padding:5,
      flexDirection:'row',
      flexWrap:'wrap'
    },
    box:{
      width:'50%',
      height:160,
      padding:5,
      marginBottom:10,
      // backgroundColor:'green',
      borderRadius:8
    },
    boxImage:{
      width:'100%',
      height:160,
      backgroundColor:'green',
      borderRadius:8,
    },
    boxTexts:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      paddingLeft:5,
      paddingRight:5,
    },
    boxView:{
      color:'white',
      fontWeight:800,
    },
    boxBadge:{
      height:30,
      width:30
    },
    boxTextMain:{
      display:'flex',
      flexDirection:'column',
      justifyContent:'space-between',
      height:'100%'
    },
    homeBoxName:{
      color:'white',
      fontSize:16,
      paddingLeft:5,
      paddingRight:5,
      fontWeight:700
    }
});

export default Boxes;