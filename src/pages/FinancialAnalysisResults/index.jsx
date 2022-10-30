import React from 'react';
//import { FinancialAnalysisResultscontainer } from './styles';
import './analysis.css';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from 'recharts';
import { PieChart, Pie, Sector, Cell } from 'recharts';
import NavBar12 from '../../component/Navbar1';
import Sidebar from '../../component/Sidebar1';

const data = [
  {
    name: '1',
    benford: 30.1,
    finstat: 20.51,
    amt: 2400,
  },
  {
    name: '2',
    benford: 17.6,
    finstat: 7.69,
    amt: 2210,
  },
  {
    name: '3',
    benford: 12.49,
    finstat: 10.25,
    amt: 2290,
  },
  {
    name: '4',
    benford: 9.69,
    finstat: 15.38,
    amt: 2000,
  },
  {
    name: '5',
    benford: 7.91,
    finstat: 10.25,
    amt: 2181,
  },
  {
    name: '6',
    benford: 6.69,
    finstat: 0.0,
    amt: 2500,
  },
  {
    name: '7',
    benford: 5.79,
    finstat: 7.69,
    amt: 2100,
  },
  {
    name: '8',
    benford: 5.11,
    finstat: 5.12,
    amt: 2101,
  },
  {
    name: '9',
    benford: 4.57,
    finstat: 23.07,
    amt: 2103,
  },
];

// const section1_2_data = [
//   {
//     id: 'illinois',
//     value: 713,
//     color: 'red',
//   },
//   {
//     id: 'Washington',
//     value: 583,
//     color: 'orange',
//   },
//   {
//     id: 'Mississippi',
//     value: 924,
//     color: 'yellow',
//   },
//   {
//     id: 'California',
//     value: 664,
//     color: 'green',
//   },
//   {
//     id: 'Maryland',
//     value: 560,
//     color: 'blue',
//   },
//   {
//     id: 'Alaska',
//     value: 793,
//     color: 'purple',
//   },
// ];

const data1_2 = [
  {
    name: 'Z-score',
    A: 3,
    B: 3,
    C: 0,
    fullMark: 150,
  },
  {
    name: 'K2-score',
    A: 0,
    B: 1,
    C: 1,
    fullMark: 150,
  },
  {
    name: 'KB-score',
    A: 4,
    B: 0,
    C: 4,
    fullMark: 150,
  },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

function FinancialAnalysisResults() {
  return (
    <>
      <div className='root'>
        <div className='section1'>
          <div className='section1_1'>
            <p className='section1_1_1'>재무 분석 결과</p>
            <p className='section1_1_2'>$34040</p>
            <p className='section1_1_3'>
              <img className='inveset-result' alt='pngwing' src='img/pngwing.svg' />
            </p>
            <p className='section1_1_4'></p>
          </div>
          {/* <div className='section1_2'>
            {section1_2_data.map((d, i) => {
              return (
                <div key={i} className='bar_line'>
                  <p className='bar_title'>{d.id}</p>
                  <div className='bar'>
                    <div className='gage_bar' style={{ backgroundColor: d.color }}></div>
                  </div>
                  <p className='bar_value'>{d.value}</p>
                </div>
              );
            })}
          </div> */}
          <div className='section1_3'>
            <RadarChart cx={300} cy={250} outerRadius={150} width={500} height={500} data={data1_2}>
              <PolarGrid />
              <PolarAngleAxis dataKey='name' />
              <PolarRadiusAxis />
              <Radar stroke='#000000' fill='#0088FE' fillOpacity={0.6} dataKey='A'></Radar>
              <Radar stroke='#000000' fill='#00C49F' fillOpacity={0.6} dataKey='B'></Radar>
              <Radar stroke='#000000' fill='#FFBB28' fillOpacity={0.6} dataKey='C'></Radar>
            </RadarChart>
            <div className='section1_3_box'>
              <div className='section1_3_0'>
                <div className='section1_3_1'>Z-score</div>
                {/* <div className='section1_3_2'></div>
                <div className='section1_3_3'></div> */}
              </div>
            </div>
          </div>
        </div>
        <div className='section2'>
          <div className='section3'>
            <div className='section3_1'>
              <p className='section3_1_1'>벤포드의 법칙</p>
              <p className='section3_1_2'>
                다양한 수치 데이터들의 앞자리 숫자가 큰 수일수록 비중은 작은 경향을 보이는데요.
                분석회계 탐지에 이용돼요.
              </p>
              {/* <div className='section3_2'>
                <div className='section3_2_1'>
                  <p className='section3_2_2'>Order value</p>
                  <p className='section3_2_3'>12.3K</p>
                </div>
                <div className='section3_2_1'>
                  <p className='section3_2_2'>Orders</p>
                  <p className='section3_2_3'>14K</p>
                </div>
                <div className='section3_2_1'>
                  <p className='section3_2_2'>Users</p>
                  <p className='section3_2_3'>71.56%</p>
                </div>
                <div className='section3_2_1'>
                  <p className='section3_2_2'>Downloads</p>
                  <p className='section3_2_3'>34040</p>
                </div>
              </div> */}
            </div>
            <ResponsiveContainer width={450} height={200}>
              <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='name' />
                <YAxis />
                <Tooltip />
                <Line type='monotone' dataKey='finstat' stroke='#8884d8' activeDot={{ r: 10 }} />
                <Line type='monotone' dataKey='benford' stroke='#82ca9d' />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className='section4'>
            <div className='sectoin4_1'>
              <div className='section4_1_1'>
                <p className='section4_1_1_1'>유동비율</p>
                <p className='section4_1_1_2'>0.6816</p>
                <p className='section4_1_1_3'>68.16%(2021년)</p>
              </div>
              <div className='section4_1_2'>
                <p className='section4_1_1_1'>총자산회전률</p>
                <p className='section4_1_1_2'>61344</p>
                <p className='section4_1_1_3'>22.00%(30 days)</p>
              </div>
              <div className='section4_1_3'>
                <p className='section4_1_1_1'>자기자본비율</p>
                <p className='section4_1_1_2'>61344</p>
                <p className='section4_1_1_3'>22.00%(30 days)</p>
              </div>
            </div>
            <div className='sectoin4_1'>
              <div className='section4_1_1'>
                <p className='section4_1_1_1'>부채비율</p>
                <p className='section4_1_1_2'>34040</p>
                <p className='section4_1_1_3'>2.00%(30 days)</p>
              </div>
              <div className='section4_1_2'>
                <p className='section4_1_1_1'>총자산순이익률</p>
                <p className='section4_1_1_2'>47033</p>
                <p className='section4_1_1_3'>0.22%(30 days)</p>
              </div>
              <div className='section4_1_3'>
                <p className='section4_1_1_1'>충자본경상이익률</p>
                <p className='section4_1_1_2'>61344</p>
                <p className='section4_1_1_3'>22.00%(30 days)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FinancialAnalysisResults;
