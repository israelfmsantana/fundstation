"use client";

import { useRouter, useParams } from 'next/navigation';
import React from "react";
import axios from 'axios';
import DefaultLayout from "@/components/Layout/DefaultLayout";
import StockDetails from "@/components/Stock/StockDetails";
import PageHeading from '@/components/Heading/PageHeading';
import StockPortfolio from '@/components/Stock/StockPortfolio';
import Presentation from '@/components/Presentation/index';
import StockChartPerformance from '@/components/Charts/StockChartPerformance';
import History from '@/components/History/history';



const PortfolioPage = ({

}) => {

    return (
        <DefaultLayout>
            <PageHeading></PageHeading>
            <Presentation title="Histórico" description="Aqui você encontrará o histórico de todo o seu progresso na nossa plataforma"></Presentation>
            <History></History>
        </DefaultLayout>
    );
};

export default PortfolioPage;
