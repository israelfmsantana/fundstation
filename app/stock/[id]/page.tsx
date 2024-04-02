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

// Component where the parameter is passed






export default StockPage;
  // const [detailsStock, setStockDetails] = useState<any>([])
  // const { stockName } = router.params;
  // const token = "mXF7E3cgxuBv5AF6kSdC9X"



  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await axios.get('https://brapi.dev/api/quote/' + stockName + '?token=' + token);
  //     setStockDetails(res.data.results);
  //   }
  //   fetchData();
  // }, []);

  // Faça uma requisição à API Brapi para obter os detalhes do estoque com o ID fornecido
  // Exiba os detalhes do estoque no componente

