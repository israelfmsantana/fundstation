"use client";

import { useRouter, useParams } from 'next/navigation';
import React from "react";
import axios from 'axios';
import DefaultLayout from "@/components/Layout/DefaultLayout";
import StockDetails from "@/components/Stock/StockDetails";
import PageHeading from '@/components/Heading/PageHeading';
import StockPortfolio from '@/components/Stock/StockPorttolio';



const PortfolioPage = ({

}) => {

    return (
        <DefaultLayout>
            <PageHeading></PageHeading>
            <StockPortfolio></StockPortfolio>
        </DefaultLayout>
    );
};

export default PortfolioPage;
