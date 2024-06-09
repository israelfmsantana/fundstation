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



const PortfolioPage = ({

}) => {

    return (
        <DefaultLayout>
            <PageHeading></PageHeading>
            <Presentation title="Minha carteira" description="Aqui você encontrarar as ações que foram compradas, mostrando os seus rendimentos e detalhes da sua carteira"></Presentation>
            <StockPortfolio></StockPortfolio>
        </DefaultLayout>
    );
};

export default PortfolioPage;
