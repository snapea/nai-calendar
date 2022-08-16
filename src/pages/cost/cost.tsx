import React from 'react'
// import { useState, useEffect, useCallback } from "react";
import { View, Input, Swiper, SwiperItem, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
// import { AtButton } from "taro-ui";

import IconPeople from '../../assets/images/peoples.png'
import IconSearch from '../../assets/images/search.png'
import IconLinkActive from '../../assets/images/link-two-active.png'

import IconBusActive from '../../assets/images/bus-two-active.png'

import IconPlusActive from '../../assets/images/plus-active.png'

import './cost.scss'

const Cost = () => {
    return (
        <View className='cost-container'>
            <View className='cost-big-title'>
                <View className='cost-big-title-left'>账本</View>
                <View className='cost-big-title-right'>
                    <Image src={IconPeople} />
                </View>
            </View>
            <View className='search-content'>
                <View className='search-icon'>
                    <Image src={IconSearch} />
                </View>
                <Input type='text' placeholder='请输入关键字' />
            </View>
            <View className='date-header'>
                <View className='date-left'>2022年8月14日~21日</View>
                <View className='title-right'>收支日历</View>
            </View>
            <Swiper className='swiper-cotainer' indicatorDots indicatorColor='#f5f5f5' indicatorActiveColor='#f2c964'>
                <SwiperItem>
                    <View className='swiper-item-total'>
                        <View className='swiper-item-total-image'>
                            <Image src={IconLinkActive} />
                        </View>
                        <View className='swiper-title'>总支出</View>
                    </View>
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
                    <View className='date mar-r-10'>08/15</View>
                    <View className='day'>星期一</View>
                </View>
                <View className='pay-notes'>
                    <View className='pay mar-r-10'>支出:￥30.00</View>
                    <View className='income'>收入:￥1000.00</View>
                </View>
            </View>
            <View className='cost-list'>
                <View className='cost-item'>
                    <View className='cost-item-left'>
                        <View className='cost-item-icon bg-img-incoming'>
                            <Image src={IconBusActive} />
                        </View>
                        <View className='cost-item-title'>工资</View>
                    </View>
                    <View className='cost-right'>￥1000</View>
                </View>
                <View className='cost-item'>
                    <View className='cost-item-left'>
                        <View className='cost-item-icon bg-img-pay'>
                            <Image src={IconLinkActive} />
                        </View>
                        <View className='cost-item-title'>购物</View>
                    </View>
                    <View className='cost-right'>-￥10</View>
                </View>
            </View>
            <View className='add-item'>
                <Image src={IconPlusActive} />
            </View>
        </View>
    )
}

export default Cost
