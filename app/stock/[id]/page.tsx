"use client";

import { useRouter, useParams } from 'next/navigation';
import React from "react";
import axios from 'axios';
import DefaultLayout from "@/components/Layout/DefaultLayout";
import StockDetails from "@/components/Stock/StockDetails";
import PageHeading from '@/components/Heading/PageHeading';



const StockPage = ({

}) => {
  const params = useParams<{id: string}>()

  
  return (
    <DefaultLayout>
      <PageHeading></PageHeading>
      <StockDetails nameStock={params.id}/>
    </DefaultLayout>
  );
};


export default StockPage;
