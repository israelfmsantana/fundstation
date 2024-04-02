"use client";
import React, { useEffect, useState, ReactNode } from "react";
import axios from 'axios';
import DefaultLayout from "@/components/Layout/DefaultLayout";
import Image from "next/image";

import {useFormatter} from 'next-intl';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    Tooltip,
    PointElement,
    LineElement,
} from "chart.js";

import { Line } from "react-chartjs-2";


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip
);

interface StockDetailsProps {
    nameStock: string;
}

const formatter = (number: any) => (number > 999999 ? (number / 1000000).toFixed(1) + 'M' : number);

// const buildData = (chartData: any) => ({
//     labels: chartData.labels,
//     datasets: [
//         {
//             label: '',
//             data: chartData.data,
//             backgroundColor: 'rgba(255, 255, 255, 0.1)',
//             borderColor: 'rgba(255, 255, 255, 1)',
//             pointBackgroundColor: 'rgba(255, 255, 255, 1)',
//             fill: 'start',
//             tension: 0.4,
//         },
//     ],
// });

const options = {
    plugins: {
        legend: {
            display: false,
        }
    },
    scales: {
        yAxes: {
            ticks: {
                color: 'rgba(255, 255, 255, 1)'
            },
            grid: {
                display: false,
                drawBorder: false,
            },
        },

        xAxes: {
            ticks: {
                color: 'rgba(255, 255, 255, 1)'
            },
            grid: {
                circular: true,
                borderColor: 'rgba(255, 255, 255, .2)',
                color: 'rgba(255, 255, 255, .2)',
                borderDash: [5, 5]
            },
        },
    },
    layout: {
        padding: {
            right: 10,
        },
    },
};

const numberToFix = (number: any, fix: any) => (number || 0).toFixed(fix);

// const convertDatetime = (datetime: any) => {
//     const format = useFormatter();
//     const dateTime = new Date(datetime);
 
//     format.dateTime(dateTime, {
//       year: 'numeric',
//       month: 'short',
//       day: 'numeric'
//     });
    
//     return dateTime;
// }


const StockCardDetails: React.FC<StockDetailsProps> = ({
    nameStock
}) => {

    const token = "mXF7E3cgxuBv5AF6kSdC9X"
    const [dataStockDetails, setStockDetails] = useState<any>([])

    let getStockDetails = 'https://brapi.dev/api/quote/' + nameStock + '?range=5d&interval=1d&token=' + token

    useEffect(() => {
        async function fetchData() {
            const res = await axios.get(getStockDetails);
            setStockDetails(res.data.results[0]);
        }
        fetchData();
    }, []);

    // const data = buildData(dataStockDetails);

    return (
        <>
        <div className="rounded shadow-xl overflow-hidden w-full md:flex" style={{ maxWidth: '900px' }}>
            <div className="flex w-full md:w-1/2 px-5 pb-4 pt-8 bg-indigo-500 text-white items-center">
                {/* <Line data={data} options={options} /> */}
            </div>
            <div className="flex w-full md:w-1/2 p-10 bg-gray-100 text-gray-600 items-center">
                <div className="w-full">
                    <h3 className="text-lg font-semibold leading-tight text-gray-800">{dataStockDetails.longName}</h3>
                    <h6 className="text-sm leading-tight mb-2">
                        <span>{dataStockDetails.shortName}</span>
                        <>
                        &nbsp;&nbsp;-&nbsp;&nbsp;{dataStockDetails.regularMarketTime}
                        
                        </>
                        
                    </h6>
                    <div className="flex w-full items-end mb-6">
                        <span className="block leading-none text-3xl text-gray-800">{numberToFix(dataStockDetails.regularMarketPrice, 3)}</span>
                        <span className="block leading-5 text-sm ml-4 text-green-500">
                            {`${dataStockDetails.regularMarketDayHigh - dataStockDetails.regularMarketDayLow < 0 ? '▼' : '▲'} ${(dataStockDetails.regularMarketDayHigh - dataStockDetails.regularMarketDayLow)} (${((dataStockDetails.regularMarketDayHigh / dataStockDetails.regularMarketDayLow) * 100 - 100)}%)`}
                        </span>
                    </div>
                    <div className="flex w-full text-xs">
                        <div className="flex w-5/12">
                            <div className="flex-1 pr-3 text-left font-semibold">Open</div>
                            <div className="flex-1 px-3 text-right">{dataStockDetails.regularMarketOpen}</div>
                        </div>
                        <div className="flex w-7/12">
                            <div className="flex-1 px-3 text-left font-semibold">Market Cap</div>
                            <div className="flex-1 pl-3 text-right">{formatter(dataStockDetails.marketCap)}</div>
                        </div>
                    </div>
                    <div className="flex w-full text-xs">
                        <div className="flex w-5/12">
                            <div className="flex-1 pr-3 text-left font-semibold">High</div>
                            <div className="px-3 text-right">{dataStockDetails.regularMarketDayHigh}</div>
                        </div>
                    </div>
                    <div className="flex w-full text-xs">
                        <div className="flex w-5/12">
                            <div className="flex-1 pr-3 text-left font-semibold">Low</div>
                            <div className="px-3 text-right">{dataStockDetails.regularMarketDayLow}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
};



export default StockCardDetails;

