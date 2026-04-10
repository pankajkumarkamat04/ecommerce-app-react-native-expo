import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';

const HomeCategory = () => {
    interface Categories { name: string, imageUrl: string }
    const categories: Categories[] = [
        {
            name: "All",
            imageUrl: "https://www.shutterstock.com/image-vector/category-symbols-featuring-square-grids-600nw-2614452525.jpg"
        },
        {
            name: "Electronics",
            imageUrl: "https://www.shutterstock.com/image-vector/category-symbols-featuring-square-grids-600nw-2614452525.jpg"
        },
        {
            name: "Fashion",
            imageUrl: "https://www.shutterstock.com/image-vector/category-symbols-featuring-square-grids-600nw-2614452525.jpg"
        },
        {
            name: "Home",
            imageUrl: "https://www.shutterstock.com/image-vector/category-symbols-featuring-square-grids-600nw-2614452525.jpg"
        },
        {
            name: "Beauty",
            imageUrl: "https://www.shutterstock.com/image-vector/category-symbols-featuring-square-grids-600nw-2614452525.jpg"
        },
        {
            name: "Sports",
            imageUrl: "https://www.shutterstock.com/image-vector/category-symbols-featuring-square-grids-600nw-2614452525.jpg"
        },
        {
            name: "Groceries",
            imageUrl: "https://www.shutterstock.com/image-vector/category-symbols-featuring-square-grids-600nw-2614452525.jpg"
        }
    ];

    return (
        <View style={{ marginTop: 10 }}>
            <ScrollView
                horizontal={true} >
                {categories.map((c: Categories) => (
                    <View style={{ backgroundColor: "#e2e2e2", padding: 3, marginHorizontal: 5, flex: 1, justifyContent: "center", alignItems: "center", height: 80, width: 80 ,borderRadius : 10}}>
                        <Image source={{ uri: c.imageUrl }} style={{ width: 35, height: 35 }} />
                        <Text style={{ fontSize: 16, color: "brown", paddingTop: 5 }}>{c.name.slice(0, 10)}</Text>
                    </View>
                ))
                }
            </ScrollView >
        </View >
    )
}

export default HomeCategory