'use client'

import { PieChart, Pie, Sector, ResponsiveContainer, Tooltip, Line, Legend, Label, LabelList } from 'recharts';
import useSWR from "swr";
import fetcher from "../../../../lib/fetcher";
import { useState, useCallback } from 'react';
import Loading from '../UI/loading';

//This is used for recharts library pie chart customization. 
const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const {
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
      payload,
      percent,
      value
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? "start" : "end";
  
    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill='#ffffffb5'>
          {payload.name}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill='#18D860'
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path
          d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
          stroke={fill}
          fill="none"
        />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 2}
          y={ey}
          dy={8}
          textAnchor={textAnchor}
          fill="#999"
        >
          {`${(percent * 100).toFixed(2)}%`}
        </text>
      </g>
    );
  };

  export default function Trends() {
    const [activeIndex, setActiveIndex] = useState(0);
    const onPieEnter = useCallback(
      (_, index) => {
        setActiveIndex(index);
      },
      [setActiveIndex]
    );
    
    const { data, isValidating, isLoading } = useSWR(
        "/api/data/trends",
        fetcher,
        {}
      );
      if(isLoading || isValidating ){
        return (
            <div className="h-80 flex items-center justify-center font-Inter text-2xl"> <p className="animate-pulse duration-500 font-semibold">Loading </p><Loading /></div>
        )
    }
      if(data){
          return (
            <div className='md:h-80 w-full h-full flex flex-col justify-center items-center relative md:bg-[#ffffff0f] md:rounded-xl md:border  md:border-[#ffffff22]'id='trends'>
                <h2 className='font-Inter text-xl font-bold text-[#ffffffcf] bg-[#00000000] pt-2'> Trending Genres </h2>
                <div className='flex items-center justify-centers flex-col h-full'id='trends'>
                    <ResponsiveContainer height={'100%'} width={'100%'} >
                        <PieChart width={300} height={300} className='capitalize font-Inter font-bold text-sm'>
                             <Pie
                                activeIndex={activeIndex}
                                activeShape={renderActiveShape}
                                data={data}
                                cx={'50%'}
                                cy={'46%'}
                                innerRadius={65}
                                outerRadius={80}
                                fill="#18d862b6"
                                dataKey="value"
                                onMouseEnter={onPieEnter}
                                paddingAngle={2}
                                stroke='#969696'
                                />  
                                 
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                <p className='text-xs pl-8 py-1 absolute bottom-0 right-5 text-[#ffffff61] '>The makeup of the top eight genres from your recent listening </p>
            </div>
        );
    }
  }