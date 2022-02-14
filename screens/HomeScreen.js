import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { auth } from '../firebase'

const HomeScreen = () => {

    const navigation = useNavigation()

    const handleSignOut = () => {
        auth.signOut()
        .then(() => navigation.replace('Login'))
        .catch(error => alert(error.message))
    }

  return (
    <View style={styles.container}>
      <Text>Email: {auth.currentUser?.email}</Text>
      <TouchableOpacity
        onPress={handleSignOut}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    button: {
        backgroundColor: "#0782F9",
        width: "60%",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 40,
      },
    
      buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "700",
      },
})