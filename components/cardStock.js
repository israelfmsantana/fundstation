"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Line } from "react-chartjs-2";

import { Chart as ChartJS,
    LineElement,
    CategoryScale, // x axis
    LinearScale, // y axis
    PointElement,
    Legend,
    Tooltip,
    Filler} from "chart.js";



ChartJS.register(LineElement,
    CategoryScale, // x axis
    LinearScale, // y axis
    PointElement,
    Legend,
    Tooltip,
    Filler)



const CardStock = () => {

    const [dataStock, setChart] = useState([]) 

    let getStocks = "http://localhost:3000/api/stocks"

    useEffect (() => {
        const fecthStock = async () => {
            await fetch(getStocks, {

                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }

            }).then(response => {
                response.json().then((json) => {
                    console.log(json)
                    setChart(json.data)
                })
            }).catch(error => {
                console.log(error)
            })
        }
        fecthStock()
    }, [getStocks])

    const data = {
        labels: ['10:00','','','','12:00','','','','2:00','','','','4:00'],
        datasets: [
        {
            label: "Revenue",
            data: [2.23,2.215,2.22,2.25,2.245,2.27,2.28,2.29,2.3,2.29,2.325,2.325,2.32],
            label: '',
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            borderColor: "rgba(255, 255, 255, 1)",
            pointBackgroundColor: "rgba(255, 255, 255, 1)",
            fill: true
        },
        ],
    };
    
    const options = {
        legend: {
            display: false,
        },
        scales: {
            yAxes: [{
                ticks: {
                    fontColor: "#ff0000",
                },
                gridLines: {
                    display: false,
                },
            }],
            xAxes: [{
                ticks: {
                    fontColor: "#ff0000",
                },
                gridLines: {
                    color: "#ff0000",
                    borderDash: [5, 5],
                    zeroLineColor: "rgba(255, 255, 255, .2)",
                    zeroLineBorderDash: [5, 5]
                },
            }]
        }
    };

    const layout = {
        layout: {
            padding: {
                right: 10
            }
        },
    }
    
    return (
        <div className="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5">
            <div className="rounded shadow-xl overflow-hidden w-full md:flex">
                <div className="flex w-full md:w-1/2 px-5 pb-4 pt-8 bg-indigo-500 text-white items-center">
                    <Line data={data} options={options} layout={layout}></Line>
                </div>
                <div className="flex w-full md:w-1/2 p-10 bg-gray-100 text-gray-600 items-center">
                    <div className="w-full">
                        <h3 className="text-lg font-semibold leading-tight text-gray-800"></h3>
                        <h6 className="text-sm leading-tight mb-2"><span></span>&nbsp;&nbsp;-&nbsp;&nbsp;Aug 2nd 4:00pm AEST</h6>
                        <div className="flex w-full items-end mb-6">
                            <span className="block leading-none text-3xl text-gray-800" >0</span>
                            <span className="block leading-5 text-sm ml-4 text-green-500"></span>
                        </div>
                        <div className="flex w-full text-xs">
                            <div className="flex w-5/12">
                                <div className="flex-1 pr-3 text-left font-semibold">Open</div>
                                <div className="flex-1 px-3 text-right" >0</div>
                            </div>
                            <div className="flex w-7/12">
                                <div className="flex-1 px-3 text-left font-semibold">Market Cap</div>
                                <div className="flex-1 pl-3 text-right">0</div>
                            </div>
                        </div>
                        <div className="flex w-full text-xs">
                            <div className="flex w-5/12">
                                <div className="flex-1 pr-3 text-left font-semibold">High</div>
                                <div className="px-3 text-right">0</div>
                            </div>
                            <div className="flex w-7/12">
                                <div className="flex-1 px-3 text-left font-semibold">P/E ratio</div>
                                <div className="pl-3 text-right">0</div>
                            </div>
                        </div>
                        <div className="flex w-full text-xs">
                            <div className="flex w-5/12">
                                <div className="flex-1 pr-3 text-left font-semibold">Low</div>
                                <div className="px-3 text-right">0</div>
                            </div>
                            <div className="flex w-7/12">
                                <div className="flex-1 px-3 text-left font-semibold">Dividend yield</div>
                                <div className="pl-3 text-right">0%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    }
    
    export default CardStock;

