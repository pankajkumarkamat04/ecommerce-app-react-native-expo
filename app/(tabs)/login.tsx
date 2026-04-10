import { Link } from 'expo-router'
import React from 'react'
import { Pressable, StyleSheet, Text, TextInput, View, } from 'react-native'

const login = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }} >
            <View style={style.Box}>
                <Text style={{ textAlign: "center", paddingBottom: 20, fontSize: 20, }}>LOGIN</Text>
                <TextInput style={style.userInput} placeholder='Enter Your Mobile No' />
                <TextInput style={[style.userInput, { marginTop: 15 }]} placeholder='Enter Your Password' />
                <Pressable style={({ pressed }) => [style.loginBtn, pressed && style.loginBtnPressed]}><Text style={style.loginBtnText}>Login</Text></Pressable>
                <Link style={{textAlign : "center", paddingTop : 10, color : "blue", fontSize : 16}} href={"/signup"}>Create A Account</Link >
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    userInput: {
        height: 42,
        backgroundColor: "#f3f1f1",
        width: "100%",
        borderRadius: 10,
        paddingStart: 10,
        boxShadow: '0 1px 8px rgba(0, 0, 0, 0.2)',

    },
    Box: {
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        height: "50%",
        padding: 20,
        borderRadius: 10,
        width: "90%",
        justifyContent: "center",
        alignContent: "center"
    },
    loginBtn: {
        fontSize: 24,
        backgroundColor: "green",
        height: 42,
        borderRadius: 10,
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    loginBtnPressed: {
        opacity: 0.7
    },
    loginBtnText: {
        color: "white",
        fontSize: 24,
        textTransform: "uppercase",
    }
})

export default login