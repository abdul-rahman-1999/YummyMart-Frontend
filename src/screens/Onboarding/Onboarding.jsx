import React, { useState } from 'react';
import { StyleSheet, Image, Text, View, TextInput,TouchableOpacity } from "react-native"
import { CheckBox } from '@rneui/themed';
import Icon from 'react-native-vector-icons/MaterialIcons'; // For Material icons support


export default function Onboarding() {
    const [check1, setCheck1] = useState(false);
  return (
    <View style={styles.Onboarding}>
        <View style={styles.welcomeContainer}>
          <Image
            style={styles.logo}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/u47ty9jip7-2475%3A403?alt=media&token=d1695fa8-fb5d-4833-b2bc-9008f7881767",
            }}
          />
          <Text style={styles.WelcomeToYummymart}>Welcome to YummyMart</Text>
        </View>

    <View style={styles.container}>

     <View>
     <Text style={styles.headingText}>Please fill these 
details to proceed 
further</Text> 
    <Text style={styles.description}>Nutella® is famous for its authentic taste of hazelnuts and cocoa, made even more irresistible by its unique creaminess.</Text>
    <TextInput
        placeholder="Enter your name"
        style={styles.input1}
        keyboardType="numeric"
        value={''}
         placeholderTextColor="#979899"
      />
      <TextInput
        placeholder="Enter your email"
        style={styles.input2}
        keyboardType="numeric"
        value={''}
         placeholderTextColor="#979899"
      />
      {/* checkbox */}

      <CheckBox
  title="Get regular updates via Whatsapp"
  checked={check1}
  onPress={() => setCheck1(!check1)}
  containerStyle={{
    backgroundColor: 'transparent',
    borderWidth: 0,
    marginVertical: 0, 
    padding: 0,
    marginTop: 20
  }}
  textStyle={{
    margin: 0,
    padding: 0, 
  }}        checkedIcon={
          <Icon name="check-box" size={24} color="#0855AE" />
        }
        uncheckedIcon={
          <Icon name="check-box-outline-blank" size={24} color="gray" />
        }
/>

      <CheckBox
  title="Get regular updates via SMS"
  checked={check1}
  onPress={() => setCheck1(!check1)}
  containerStyle={{
    backgroundColor: 'transparent',
    borderWidth: 0,
    marginVertical: 4, 
    padding: 0, 
  }}
  textStyle={{
    margin: 0, 
    padding: 0, 
  }}        checkedIcon={
          <Icon name="check-box" size={24} color="#0855AE" />
        }
        uncheckedIcon={
          <Icon name="check-box-outline-blank" size={24} color="gray" />
        }
/>

<CheckBox
  title="Get regular updates via Email"
  checked={check1}
  onPress={() => setCheck1(!check1)}
  containerStyle={{
    backgroundColor: 'transparent',
    borderWidth: 0,
    marginVertical: 4, 
    padding: 0, 
  }}
  textStyle={{
    margin: 0, 
    padding: 0, 
  }}        checkedIcon={
          <Icon name="check-box" size={24} color="#0855AE" />
        }
        uncheckedIcon={
          <Icon name="check-box-outline-blank" size={24} color="gray" />
        }
/>

    </View>

    <View>
    <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
    </View>

    </View>
  )
}

const styles = StyleSheet.create({
  Onboarding: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
    height: 844,
    borderRadius: 24,
    boxSizing: "border-box",
    backgroundColor: "rgba(255,255,255,1)",
    padding: 20
  },
  welcomeContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    boxSizing: "border-box",
    gap: 20,
    marginTop: 20
  },
  logo: {
    width: 30,
    height: "100%",
  },
  WelcomeToYummymart: {
    color: "rgba(112,112,112,1)",
    fontSize: 16,
    lineHeight: 16,
    fontFamily: "DM Sans, sans-serif",
    fontWeight: 400,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'start',
    marginTop: 60
  },
  headingText:{
    fontSize: 40,
    fontWeight: '500',
    color: '#06161C',
  },
  description:{
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 'regular',
    color: '#979899',
    marginTop:8
  },
  input1: {
    width: '100%',
    paddingTop: 16,
    paddingRight: 20,
    paddingBottom: 16,
    paddingLeft: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#98A2B3',
    borderRadius: 100,
    fontSize: 14,
    marginTop: 24,
  },
  input2: {
    width: '100%',
    paddingTop: 16,
    paddingRight: 20,
    paddingBottom: 16,
    paddingLeft: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#98A2B3',
    borderRadius: 100,
    fontSize: 14,
    marginTop: 4,
  },
  loginButton: {
    backgroundColor: "#FF7300",
    borderColor: "#FF7300",
    borderWidth: 1,
    width: '100%',
    paddingTop: 16,
    paddingRight: 20,
    paddingBottom: 16,
    paddingLeft: 20,
    borderRadius: 100,
    alignItems: 'center', // To center the text
    justifyContent: 'center', // To center the text
    marginTop: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold', // Optional, for a bold text
  },
})
