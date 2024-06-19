"use client";
import React, { useEffect, useState } from "react";
import axios from 'axios';

import StockCard from "./StockCard";
import Presentation from "../Presentation";

const Dashboard: React.FC = () => {


    const [dataStock, setChart] = useState<any>([])
    const [isLoading, setLoading] = useState([true])
    const [dataStockCard, setStockCard] = useState<any>([])


    const token = "mXF7E3cgxuBv5AF6kSdC9X"

    let getListStocks = 'https://brapi.dev/api/quote/list?sortBy=close&sortOrder=desc&token=' + token


    useEffect(() => {
        async function fetchData() {
            const res = await axios.get(getListStocks);
            setStockCard(res.data.stocks);
        }
        fetchData();
    }, []);


    return (
        <>
            <Presentation title="Ações" description="Bem vindo, Matheus. Aqui você encontrará as melhores ações validadas pela nossa IA."></Presentation>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
                {dataStockCard.map((card: any, index: any) => (
                    Number(card.change) < 0 ? (
                        <StockCard key={index} symbolStock={card.stock} nameStock={card.name} logoStock={card.logo} valueToday={card.close} rate={card.change} levelDown></StockCard>
                    ) : (<StockCard key={index} symbolStock={card.stock} nameStock={card.name} logoStock={card.logo} valueToday={card.close} rate={card.change} levelUp></StockCard> )
                ))}
            </div>

        </>
    );
};

export default Dashboard;
