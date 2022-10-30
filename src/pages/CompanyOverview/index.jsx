import React from 'react';
//import { Companyoverviewcontainer } from './styles';
import './test1.css';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
//import { PieChart, Pie, Sector, Cell } from 'recharts';

const data = [
  {
    name: '22-10-24',
    고가: 24750,
    저가: 23750,
  },
  {
    name: '22-10-25',
    고가: 25350,
    저가: 24200,
  },
  {
    name: '22-10-26',
    고가: 25600,
    저가: 23800,
  },
  {
    name: '22-10-27',
    고가: 24550,
    저가: 23800,
  },
  {
    name: '22-10-28',
    고가: 24100,
    저가: 23500,
  },
  {
    name: '22-10-31',
    고가: 23900,
    저가: 23600,
  },
  // {
  //   name: '70',
  //   uv: 3490,
  //   pv: 4300,
  //   amt: 2100,
  // },
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
  { name: '외국인', value: 1.25 },
  { name: '개인/기관', value: 98.75 },
  // { name: 'Group C', value: 300 },
];
const COLORS = ['#00C49F', '#f66571'];

function Companyoverview() {
  return (
    <>
      <div className='root'>
        <div className='section1'>
          <div className='section1_1'>
            <p className='section1_1_1'>일동홀딩스</p>
            <p className='section1_1_2'>24,000 KRW</p>
            <p className='section1_1_3'>+100.00 (+0.42%)</p>
            <p className='section1_1_4'>KOSPI 종목 : 의약품</p>
          </div>
          <div className='section1_2'>
            <p className='section1_2_1'>
              동사는 지주회사로서 일동제약, 일동바이오사이언스, 아이디언스를 포함하여 총 9개의
              사업부문을 이루고 있음.
            </p>
            <p className='section1_2_1'>
              일동제약 등 12개의 국내 계열회사가 있으며 광고대행, 의료기기 및 건강기능식품 개발,
              소프트웨어부문 등에서 사업을 추진함.
            </p>
            <p className='section1_2_1'>
              주요 계열사인 일동제약은 대한민국 유산균 역사를 선도해온 비오비타와 종합비타민
              블록버스터 제품인 아로나민 등 파워브랜드 다수를 보유하고 있음.
            </p>
          </div>
          {/* <div className='section1_3'>
            <p className='section1_3'>시가총액 2,816억원</p>
            <p className='section1_3'>시가총액순위 코스피 445위</p>
            <p className='section1_3'>외국인 소진율 1.25% 그래프로</p>
            <p className='section1_3'></p>
            <p className='section1_3'></p>
          </div> */}
          <div className='section1_3'>
            <PieChart width={300} height={250}>
              <Pie
                data={data1_2}
                cy={100}
                innerRadius={50}
                outerRadius={80}
                fill='#8884d8'
                paddingAngle={0}
                dataKey='value'
              >
                {data1_2.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
            <div className='section1_3_box'>
              <div className='section1_3_1'></div>
              <div className='section1_3_0'>개인/기관 98.75%</div>
              <div className='section1_3_2'></div>
              <div className='section1_3_0'>외국인 1.25%</div>
            </div>
          </div>
        </div>
        <div className='section2'>
          <div className='section3'>
            <div className='section3_1'>
              <p className='section3_1_1'>실시간 주가</p>
              <p className='section3_1_2'></p>
              <div className='section3_2'>
                {/* <div className='section3_2_1'>
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
                </div> */}
              </div>
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
                <YAxis domain={('dataMin-3000', 'dataMax+3000')} />
                <Tooltip />
                <Line type='monotone' dataKey='저가' stroke='#8884d8' activeDot={{ r: 8 }} />
                <Line type='monotone' dataKey='고가' stroke='#82ca9d' />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className='section4'>
            <div className='section4_1'>
              <div className='section4_1_1'>
                <p className='section4_1_1_1'>PER</p>
                <p className='section4_1_1_2'>69.15</p>
                <p className='section4_1_1_3'></p>
              </div>
              <div className='section4_1_2'>
                <p className='section4_1_1_1'>PBR</p>
                <p className='section4_1_1_2'>5.21배</p>
                <p className='section4_1_1_3'></p>
              </div>
            </div>
            <div className='section4_1'>
              <div className='section4_1_3'>
                <p className='section4_1_1_1'>ROA</p>
                <p className='section4_1_1_2'>-6.92</p>
                <p className='section4_1_1_3'></p>
              </div>
              <div className='section4_1_4'>
                <p className='section4_1_1_1'>배당수익률</p>
                <p className='section4_1_1_2'>0.42%</p>
                <p className='section4_1_1_3'></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Companyoverview;
