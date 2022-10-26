import React from 'react';
import { Companyoverviewcontainer } from './styles';
import './test.css';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { PieChart, Pie, Sector, Cell } from 'recharts';

const data = [
  {
    name: '10',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '20',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: '30',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: '40',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: '50',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: '60',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: '70',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const section1_2_data = [
  {
    id: 'illinois',
    value: 713,
    color: 'red',
  },
  {
    id: 'Washington',
    value: 583,
    color: 'orange',
  },
  {
    id: 'Mississippi',
    value: 924,
    color: 'yellow',
  },
  {
    id: 'California',
    value: 664,
    color: 'green',
  },
  {
    id: 'Maryland',
    value: 560,
    color: 'blue',
  },
  {
    id: 'Alaska',
    value: 793,
    color: 'purple',
  },
];

const data1_2 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

function Companyoverview() {
  return (
    <>
      <div className='root'>
        <div className='section1'>
          <div className='section1_1'>
            <p className='section1_1_1'>기업개요</p>
            <p className='section1_1_2'>25,000 KRW</p>
            <p className='section1_1_3'>+650.00 (+2.67%)</p>
            <p className='section1_1_4'>KOSPI : 의약품</p>
          </div>
          <div className='section1_2'>
            동사는 지주회사로서 일동제약, 일동바이오사이언스, 아이디언스를 포함하여 총 9개의
            사업부문을 이루고 있음. 일동제약 등 12개의 국내 계열회사가 있으며 광고대행, 의료기기 및
            건강기능식품 개발, 소프트웨어부문 등에서 사업을 추진함. 주요 계열사인 일동제약은
            대한민국 유산균 역사를 선도해온 비오비타와 종합비타민 블록버스터 제품인 아로나민 등
            파워브랜드 다수를 보유하고 있음.
          </div>
          <div className='section1_3'>
            <PieChart width={300} height={300}>
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
              {data1_2.map((d, i) => {
                return (
                  <div className='section1_3_0'>
                    <div className='section1_3_1'></div>
                    <div className='section1_3_2'>{d.value}</div>
                    <div className='section1_3_3'>{d.value}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className='section2'>
          <div className='section3'>
            <div className='section3_1'>
              <p className='section3_1_1'>벤포드의 법칙</p>
              <p className='section3_1_2'>asldnlasndlkansdlknasldknaslkdnasdk</p>
              <div className='section3_2'>
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
                <YAxis />
                <Tooltip />
                <Line type='monotone' dataKey='pv' stroke='#8884d8' activeDot={{ r: 8 }} />
                <Line type='monotone' dataKey='uv' stroke='#82ca9d' />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className='section4'>
            <div className='sectoin4_1'>
              <div className='section4_1_1'>
                <p className='section4_1_1_1'>유동비율</p>
                <p className='section4_1_1_2'>4006</p>
                <p className='section4_1_1_3'>10.00%(30 days)</p>
              </div>
              <div className='section4_1_2'>
                <p className='section4_1_1_1'>재고자산회전률</p>
                <p className='section4_1_1_2'>61344</p>
                <p className='section4_1_1_3'>22.00%(30 days)</p>
              </div>
            </div>
            <div className='sectoin4_1'>
              <div className='section4_1_1'>
                <p className='section4_1_1_1'>자기자본비율</p>
                <p className='section4_1_1_2'>34040</p>
                <p className='section4_1_1_3'>2.00%(30 days)</p>
              </div>
              <div className='section4_1_2'>
                <p className='section4_1_1_1'>배당수익률</p>
                <p className='section4_1_1_2'>47033</p>
                <p className='section4_1_1_3'>0.22%(30 days)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Companyoverview;
