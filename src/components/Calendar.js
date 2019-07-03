import React from 'react';

import { ResponsiveCalendar } from '@nivo/calendar'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

export const MyResponsiveCalendar = ({data}) => {

  const date = new Date();
  const firstDay = new Date(date.getFullYear(), 0, 1);
  const lastDay = new Date(date.getFullYear(), 11, 21);
  
  console.log({firstDay});
  console.log({lastDay});

  return (
    <ResponsiveCalendar
      data={data}
      from={firstDay}
      to={lastDay}
      emptyColor="#eeeeee"
      colors={[ '#61cdbb', '#97e3d5', '#e8c1a0', '#f47560' ]}
      margin={{ top: 10, right: 40, bottom: 0, left: 40 }}
      monthBorderColor="#ffffff"
      dayBorderWidth={2}
      dayBorderColor="#ffffff"
    />
  )
};