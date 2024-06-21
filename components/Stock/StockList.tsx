"use client";
import React, { useEffect, useState } from "react";
import axios from 'axios';
import StockCard from "./StockCard";
import Presentation from "../Presentation";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Dashboard: React.FC = () => {
    const [dataStockCard, setStockCard] = useState<any[]>([]);
    const [isLoading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const token = "mXF7E3cgxuBv5AF6kSdC9X";
    const limit = 10; // Definindo o limite de itens por página
    const getListStocks = `https://brapi.dev/api/quote/list?sortBy=close&sortOrder=desc&token=${token}`;

    const fetchData = async (page: number) => {
        setLoading(true);
        try {
            const res = await axios.get(`${getListStocks}`);
            if (res.data.stocks.length < limit) {
                setHasMore(false);
            }
            setStockCard(prevStockCard => [...prevStockCard, ...res.data.stocks]);
        } catch (error) {
            console.error("Erro ao buscar dados:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData(page);
    }, [page]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 50 && hasMore && !isLoading) {
                setPage(prevPage => prevPage + 1);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [hasMore, isLoading]);

    return (
        <>
            <Presentation title="Ações" description="Bem vindo, Matheus. Aqui você encontrará as melhores ações validadas pela nossa IA." />

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
                {dataStockCard.map((card: any, index: number) => (
                    Number(card.change) < 0 ? (
                        <StockCard key={index} symbolStock={card.stock} nameStock={card.name} logoStock={card.logo} valueToday={card.close} rate={card.change} levelDown />
                    ) : (
                        <StockCard key={index} symbolStock={card.stock} nameStock={card.name} logoStock={card.logo} valueToday={card.close} rate={card.change} levelUp />
                    )
                ))}
                {isLoading && Array.from({ length: limit }).map((_, index) => (
                    <div key={index} className="col-span-1">
                        <Skeleton height={200}/>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Dashboard;
