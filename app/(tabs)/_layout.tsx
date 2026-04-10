import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import React from 'react';


const TabLayout = () => {
    return (
        <Tabs>
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color }) => <FontAwesome name="home" size={28} />
                }
                }
            />
            <Tabs.Screen
                name="shop"
                options={{
                    title: "Shop",
                    tabBarIcon: ({ color }) => <AntDesign name="shop" size={28} color={color} />,
                }}
            />
            <Tabs.Screen
                name="login"
                options={{
                    title: "Login",
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color} />,
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: "Login",
                    href: null
                }}
            />
            <Tabs.Screen
                name="signup"
                options={{
                    title: "Sign Up",
                    href: null
                }}
            />

        </Tabs>
    )
}

export default TabLayout