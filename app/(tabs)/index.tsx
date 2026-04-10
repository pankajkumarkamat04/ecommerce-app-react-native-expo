import HeroSlider from '@/components/HeroSlider';
import HomeCategory from '@/components/HomeCategory';
import HomeProduct from '@/components/HomeProduct';
import React from 'react';
import { ScrollView } from 'react-native';



const index = () => {
  return (
    <ScrollView style={{
      flex: 1,
    }}>
      <HeroSlider />
      <HomeCategory />
      <HomeProduct />
    </ScrollView>
  )
}

export default index