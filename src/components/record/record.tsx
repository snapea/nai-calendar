import React from 'react'
import { View, Input, Swiper, SwiperItem, Image } from '@tarojs/components'
import './record.scss'

export default function record(props) {
  console.log(props.visiable)
  return (
    <>
      {props.visiable && (
        <View className='record-container'>record, 123123</View>
      )}
    </>
  )
}
