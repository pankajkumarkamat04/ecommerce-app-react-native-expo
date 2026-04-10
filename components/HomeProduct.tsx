import React from 'react';
import { FlatList, Image, Text, View } from 'react-native';

const HomeProduct = () => {
    interface Product { id: number; productName: string; productPrice: number; discountedPrice: number; productImage: string; productRating: number; }
    const productList: Product[] = [
        {
            id: 1,
            productName: "Premium Wireless Headphones",
            productPrice: 199.99,
            discountedPrice: 149.99,
            productImage: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L3BmMzkta2Fyb2xpbmEtZ3JhYm93c2thLWthYm9vbXBpY3MtNjg3NC5qcGc.jpg",
            productRating: 4.8,
        },
        {
            id: 2,
            productName: "Smart Fitness Watch",
            productPrice: 89.00,
            discountedPrice: 65.50,
            productImage: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L3BmMzkta2Fyb2xpbmEtZ3JhYm93c2thLWthYm9vbXBpY3MtNjg3NC5qcGc.jpg",
            productRating: 4.5,
        },
        {
            id: 3,
            productName: "Ergonomic Mechanical Keyboard",
            productPrice: 120.00,
            discountedPrice: 99.99,
            productImage: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L3BmMzkta2Fyb2xpbmEtZ3JhYm93c2thLWthYm9vbXBpY3MtNjg3NC5qcGc.jpg",
            productRating: 4.7,
        },
        {
            id: 4,
            productName: "Portable Bluetooth Speaker",
            productPrice: 55.00,
            discountedPrice: 45.00,
            productImage: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L3BmMzkta2Fyb2xpbmEtZ3JhYm93c2thLWthYm9vbXBpY3MtNjg3NC5qcGc.jpg",
            productRating: 4.3,
        },
        {
            id: 5,
            productName: "Ultra HD Web Camera",
            productPrice: 75.00,
            discountedPrice: 59.99,
            productImage: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L3BmMzkta2Fyb2xpbmEtZ3JhYm93c2thLWthYm9vbXBpY3MtNjg3NC5qcGc.jpg",
            productRating: 4.6,
        },
        {
            id: 6,
            productName: "Noise Cancelling Earbuds",
            productPrice: 150.00,
            discountedPrice: 125.00,
            productImage: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L3BmMzkta2Fyb2xpbmEtZ3JhYm93c2thLWthYm9vbXBpY3MtNjg3NC5qcGc.jpg",
            productRating: 4.4,
        },
        {
            id: 7,
            productName: "Gaming Mouse RGB",
            productPrice: 49.99,
            discountedPrice: 39.99,
            productImage: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L3BmMzkta2Fyb2xpbmEtZ3JhYm93c2thLWthYm9vbXBpY3MtNjg3NC5qcGc.jpg",
            productRating: 4.9,
        },
        {
            id: 8,
            productName: "Fast Charging Power Bank",
            productPrice: 40.00,
            discountedPrice: 29.99,
            productImage: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L3BmMzkta2Fyb2xpbmEtZ3JhYm93c2thLWthYm9vbXBpY3MtNjg3NC5qcGc.jpg",
            productRating: 4.2,
        },
        {
            id: 9,
            productName: "LED Desk Lamp",
            productPrice: 35.00,
            discountedPrice: 25.00,
            productImage: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L3BmMzkta2Fyb2xpbmEtZ3JhYm93c2thLWthYm9vbXBpY3MtNjg3NC5qcGc.jpg",
            productRating: 4.1,
        }
    ];

    return (
        <View>
            <FlatList<Product>
                data={productList}
                numColumns={3}
                keyExtractor={(product) => product.id.toString()}
                renderItem={({ item: product }) => (
                    <View style={{ height: 250, width: "33.3%", padding: 5, justifyContent: "space-around" }}>
                        <View style={{ backgroundColor: "#e2e2e2", height: "90%", borderRadius: 10 }}>
                            <Image source={{ uri: product.productImage }} style={{ height: "70%", width: "100%", borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />
                            <View style={{ padding: 5 }}>
                                <Text>{(product.productName.length <= 20 ? product.productName : `${product.productName.slice(0,20)}...`)}</Text>
                                <View style={{flexDirection : "row", alignItems: 'center'}}>
                                    <Text style={{ color: "green", fontWeight: 500 , fontSize : 16}}>${product.discountedPrice}</Text>
                                    <Text style={{ color: "red", fontWeight: 300, textDecorationLine: 'line-through', paddingStart : 3, fontSize : 12 }}>${product.productPrice}</Text>
                                </View>

                            </View>
                        </View>
                    </View>
                )}
            />
        </View>
    )
}

export default HomeProduct