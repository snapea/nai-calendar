/*
 * @Author: wenzhenjin
 * @Date: 2021-08-09 18:04:32
 * @LastEditors: wenzhenjin
 * @LastEditTime: 2021-08-16 18:24:21
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
  const [calendarEles, setCalendarEles] = useState([]);
  const [previousEles, setPreviousEles] = useState([]);
  const [nextEles, setNextEles] = useState([]);

  const [date, setDate] = useState("");
  const [day, setDay] = useState(0);
  const [swiperCurrent, setSwiperCurrent] = useState(0);

  // const [y, setY] = useState(getTimeFormat(new Date(), "year"));  // 2021
  // const [m, setM] = useState(getTimeFormat(new Date(), "month")); // 8

  let y = getTimeFormat(new Date(), "year");
  let m = getTimeFormat(new Date(), "month");

  const monthIndex = m;

  useEffect(() => {
    console.log(123123)
    setCalendarEles(getCalendarEles(new Date()));
    setPreviousEles(
      getCalendarEles(new Date().setMonth(new Date().getMonth() - 1))
    );
    setNextEles(
      getCalendarEles(new Date().setMonth(new Date().getMonth() + 1))
    );
    setDay(getTimeFormat(new Date(), "day"));
    setDate(y + "年" + m + "月");
  }, []);
  const handleCalendarClick = useCallback(ev => {
    console.log(ev);
  }, []);
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
        <View className="calendar-body">
          {calendarEles.map((item:any, index) => {
            return (
              // <View>1</View>
              <View
                className={[
                  "calendar-body-ele",
                  index % 7 === 5 || index % 7 === 6 ? "vacation-active" : null,
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
      </View>
    </View>
  );
};

export default Calendar;
