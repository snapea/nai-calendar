import React from 'react'
// import { useState, useEffect, useCallback } from "react";
import { View, Text, Swiper, SwiperItem } from "@tarojs/components";
// import Taro from "@tarojs/taro";
// import { AtButton } from "taro-ui";

import "./cost.scss";

const Cost = () => {
    return (
        <View className='cost-container'>
            <iconpark-icon name="bowl"></iconpark-icon>
            {/* 输入框 */}
            <View className='date-header'>
                <View className='date-left'>2022年8月14日~21日</View>
                <View className='title-right'>收支日历</View>
            </View>
            <Swiper className='swiper-cotainer'>
                <SwiperItem>
                    <View className='swiper-title'>总支出</View>
                    <View className='swiper-cash'>￥30.00</View>
                    <View className='swiper-detail'>
                        <View className='swiper-list-item'>
                            <View className='swiper-detail-key'>总收入</View>
                            <View className='swiper-detail-value'>￥1000.00</View>
                        </View>
                        <View className='swiper-list-item'>
                            <View className='swiper-detail-key'>周结余</View>
                            <View className='swiper-detail-value'>￥970.00</View>
                        </View>
                    </View>
                </SwiperItem>
                <SwiperItem>2</SwiperItem>
                <SwiperItem>3</SwiperItem>
            </Swiper>
            <View className='center-content'>
                <View className='date-day'>
                    <View className='date'>08/15</View>
                    <View className='day'>星期一</View>
                </View>
                <View className='pay-notes'>
                    <View className='pay'>支出:￥30.00</View>
                    <View className='income'>收入:￥1000.00</View>
                </View>
            </View>
            <View className='cost-list'>
                <View className='cost-item'>
                    <View className='cost-item-left'>
                        <View className='cost-item-icon'></View>
                        <View className='cost-item-title'>工资</View>
                    </View>
                    <View className='cost-right'>￥1000</View>
                </View>
                <View className='cost-item'>
                    <View className='cost-item-left'>
                        <View className='cost-item-icon'></View>
                        <View className='cost-item-title'>购物</View>
                    </View>
                    <View className='cost-right'>-￥10</View>
                </View>
            </View>
        </View>
    )
}

export default Cost