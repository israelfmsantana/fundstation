"use client";

import { useRouter, useParams } from 'next/navigation';
import React from "react";
import axios from 'axios';
import DefaultLayout from "@/components/Layout/DefaultLayout";
import StockDetails from "@/components/Stock/StockDetails";




const StockPage = ({

}) => {
  const params = useParams<{id: string}>()
  console.log(params.id)

  
  return (
    <DefaultLayout>
      <StockDetails nameStock={params.id}/>
    </DefaultLayout>
  );
};


export default StockPage;
