/*
 * @Author: wenzhenjin
 * @Date: 2021-08-09 18:04:32
 * @LastEditors: wenzhenjin
 * @LastEditTime: 2021-08-13 16:30:33
 * @FilePath: /taro-mini/src/pages/index/index.tsx
 */
import { useState, useEffect, useCallback } from "react";
import { View, Text, Swiper, SwiperItem } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { AtButton } from "taro-ui";

import "taro-ui/dist/style/components/button.scss"; // 按需引入
import "./index.scss";
import calendarUtil, {
  getCalendarEles,
  getTimeFormat
} from "../../utils/calendar";

const Calendar = () => {
  const [calendarEles, setCalendarEles] = useState(getCalendarEles(new Date()));

  const [date, setDate] = useState("");
  const [day, setDay] = useState(getTimeFormat(new Date(), "day"));
  const [swiperCurrent, setSwiperCurrent] = useState(1)

  // const [y, setY] = useState(getTimeFormat(new Date(), "year"));  // 2021
  // const [m, setM] = useState(getTimeFormat(new Date(), "month")); // 8

  let y = getTimeFormat(new Date(), "year")
  let m = getTimeFormat(new Date(), "month")

  const [previousEles, setPreviousEles] = useState(getCalendarEles(new Date().setMonth(new Date().getMonth() - 1)))
  const [nextEles, setNextEles] = useState(getCalendarEles(new Date().setMonth(new Date().getMonth() + 1)))

  const monthIndex = m

  useEffect(() => {
    // const y = getTimeFormat(new Date(), "year");
    // const m = getTimeFormat(new Date(), "month");
    setDate(y + "年" + m + "月");
    // const res = calendarUtil.solar2lunar(y, m, day);
    // const tmpCalendar = [];
    // calendarEles.map((item, index) => {

    // });
    // setCalendarEles(tmpCalendar);
  }, []);
  const handleCalendarClick = useCallback(ev => {
  }, []);
  const handleSwiperChange = useCallback(ev => {
    // 原来的 > 要滑动的，则是左滑
    console.log(swiperCurrent)
    console.log(ev.detail.current)
    if(swiperCurrent > ev.detail.current) {
      const tpm = calendarEles
      setCalendarEles(previousEles)
      setNextEles(tpm)
    }
    // 原来的 < 滑动的，则是右滑
    if(swiperCurrent < ev.detail.current) {
      if(m > 0) {
        m = m - 1
      }else if(m < 0){
        m = 12
        y = y - 1
      }
      setDate(y + "年" + m + "月")
      setCalendarEles(nextEles)
    }
  }, [])
  return (
    <View className="calendar">
      <View className="title">
        <View className="date-title">{date}</View>
      </View>
      <View className="calendar-header">
        <View className="calendar-header-title">一</View>
        <View className="calendar-header-title">二</View>
        <View className="calendar-header-title">三</View>
        <View className="calendar-header-title">四</View>
        <View className="calendar-header-title">五</View>
        <View className="calendar-header-title">六</View>
        <View className="calendar-header-title">七</View>
      </View>
      <View className="swiper-wrapper">
        <Swiper className="swiper" current={swiperCurrent} onChange={handleSwiperChange}>
          <SwiperItem className="swiper-item">
            <View className="calendar-body">
              {previousEles.map((item, index) => {
                return (
                  <View
                    className={[
                      "calendar-body-ele",
                      index % 7 === 5 || index % 7 === 6
                        ? "vacation-active"
                        : null,
                      item.solar === day ||
                      (item.lunar.IDayCn && item.lunar.IDayCn.length) === 3
                        ? "taday"
                        : ""
                    ].join(" ")}
                    onClick={() => handleCalendarClick(item)}
                  >
                    <View>{item.solar}</View>
                    <View className="solarText">{item.lunar.IDayCn}</View>
                  </View>
                );
              })}
            </View>
          </SwiperItem>
          <SwiperItem>
            <View className="calendar-body">
              {calendarEles.map((item, index) => {
                return (
                  // <View>1</View>
                  <View
                    className={[
                      "calendar-body-ele",
                      index % 7 === 5 || index % 7 === 6
                        ? "vacation-active"
                        : null,
                      item.solar === day ||
                      (item.lunar.IDayCn && item.lunar.IDayCn.length) === 3
                        ? "taday"
                        : ""
                    ].join(" ")}
                    onClick={() => handleCalendarClick(item)}
                  >
                    <View>{item.solar}</View>
                    <View className="solarText">{item.lunar.IDayCn}</View>
                  </View>
                );
              })}
            </View>
          </SwiperItem>
          <SwiperItem>
            <View className="calendar-body">
              {nextEles.map((item, index) => {
                return (
                  // <View>1</View>
                  <View
                    className={[
                      "calendar-body-ele",
                      index % 7 === 5 || index % 7 === 6
                        ? "vacation-active"
                        : null,
                      item.solar === day ||
                      (item.lunar.IDayCn && item.lunar.IDayCn.length) === 3
                        ? "taday"
                        : ""
                    ].join(" ")}
                    onClick={() => handleCalendarClick(item)}
                  >
                    <View>{item.solar}</View>
                    <View className="solarText">{item.lunar.IDayCn}</View>
                  </View>
                );
              })}
            </View>
          </SwiperItem>
        </Swiper>
      </View>
    </View>
  );
};
// const Item = item => {
//   const handleCalendarClick = useCallback(() => {
//   }, [item]);

//   return <View onClick={handleCalendarClick}>{item}</View>;
// };

export default Calendar;
