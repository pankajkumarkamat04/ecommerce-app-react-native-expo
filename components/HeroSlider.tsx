import React from 'react';
import { Dimensions, FlatList, Image, View } from 'react-native';

const { width } = Dimensions.get('window');
interface SliderItem {
    id: string;
    uri: string;
}
const HeroSlider = () => {
    const images: SliderItem[] = [
        { id: '1', uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVjTZWnmpLX6lvzYTzngXODIIIseSykEa5Nw&s' },
        { id: '2', uri: 'https://static.vecteezy.com/system/resources/thumbnails/004/707/493/small/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg' },
        { id: '3', uri: 'https://www.zilliondesigns.com/blog/wp-content/uploads/Perfect-Ecommerce-Sales-Banner.jpg' },
    ];
    return (
        <View>
            <FlatList
                data={images}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => ( 
                    <View style={{ width, height : 200}}>
                        <Image source={{ uri: item.uri }} style={{width : "100%", height : "100%"}} />
                    </View>
                )}
            />
        </View>
    )
}

export default HeroSlider