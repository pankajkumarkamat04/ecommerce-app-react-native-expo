import HeroSlider from '@/components/HeroSlider'
import HomeCategory from '@/components/HomeCategory'
import React from 'react'
import { View } from 'react-native'


const index = () => {
  return (
    <View style={{
      flex: 1,
    }}>
      <HeroSlider />
      <HomeCategory />
    </View>
  )
}

export default index