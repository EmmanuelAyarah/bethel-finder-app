import { View, Text, Image, StyleSheet, bgImage, heading, TouchableOpacity} from 'react-native'
import React from 'react'
import Colors from '../../utils/Colors.js'

export default function LoginScreen() {
  return (
    <View style={{
        display: 'flex',
        justifyContent:'center',
        alignItems: 'center',
        marginTop: 50,
    }}>
      <Image source={require('./../../../assets/images/bcsflag.jpg')}
         style={styles.logoImage}
      />
      <Image source={require('./../../../assets/images/emblem.jpg')}
        style={styles.bgImage}
      />

      <View style={{padding:20}}>

        <Text style={styles.heading}>Rumuepirikom Bethel</Text>

        <Text style={styles.desc}>Do you Want to compete at the highest level in the forth coming Grading Excercise but not sure which Choir to sing with?</Text>
        <Text style={styles.desc}>Join Rumuepirikom Bethel Diamond Choir</Text>
        <Text style={styles.emoji}>🤍❤️🤍❤️🤍❤️🤍❤️🤍❤️🤍❤️</Text>
        <TouchableOpacity style={styles.button}
         onPress={()=> console.log("Button Clicked")}
        >
          <Text style={{color: Colors.WHITE,
            textAlign: 'center',
            fontFamily: 'ubuntusans'
          }}>Login With Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    logoImage:{
        width:200,
        height:40,
        objectFit:'contain'
    },

    bgImage:{
        width: '100%',
        height: 250,
        marginLeft:30,
        marginTop: 20,
        objectFit: 'contain',
    },
    heading:{
      fontSize: 30,
      fontFamily: 'ubuntusans-bold',
      textAlign: 'center',
      marginTop: -20,
      color: 'red',
    },
    desc:{
      fontSize: 15,
      fontFamily: 'ubuntusans',
      marginTop: 30,
      color: '#000',
      lineHeight: 30,
      color: Colors.GRAY,
    },
    button:{
      backgroundColor: Colors.PRIMARY,
      padding: 16,
      display: 'flex',
      borderRadius: 99,
      marginTop: 30,
      
    },
    emoji:{
      fontSize: 20,
      
    }
})