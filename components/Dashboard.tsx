"use client";
import React, { useEffect, useState } from "react";
import axios from 'axios';

import CardDataStats from "./CardDataStats";

const Dashboard: React.FC = () => {


    const [dataStock, setChart] = useState<any>([])
    const [isLoading, setLoading] = useState([true])
    const [dataStockCard, setStockCard] = useState<any>([])

    // let getStocks = "http://localhost:3000/api/stocks"


    // useEffect(() => {
    //     async function fetchData() {
    //         const res = await axios.get(getStocks);
    //         setChart(res.data.results[0]);
    //     }
    //     fetchData();
    // }, []);


    let getListStocks = "http://localhost:3000/api/stock_list"


    useEffect(() => {
        async function fetchData() {
            const res = await axios.get(getListStocks);
            setStockCard(res.data.stocks);
        }
        fetchData();
    }, []);



    return (
        <>
            {/* <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardDataStats symbolStock={dataStock.symbol} nameStock={dataStock.longName}  logoStock={dataStock.logourl} valueToday={dataStock.regularMarketDayLow} rate="0.43%" levelUp>
        </CardDataStats>
      </div> */}

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
                {dataStockCard.map((card: any, index) => (
                    Number(card.change) < 0 ? (
                        <CardDataStats key={index} symbolStock={card.stock} nameStock={card.name} logoStock={card.logo} valueToday={card.close} rate={card.change} levelDown></CardDataStats>
                    ) : (<CardDataStats key={index} symbolStock={card.stock} nameStock={card.name} logoStock={card.logo} valueToday={card.close} rate={card.change} levelUp></CardDataStats> )
                ))}
            </div>

        </>
    );
};

export default Dashboard;
