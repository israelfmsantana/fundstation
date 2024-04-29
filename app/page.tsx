
import { Metadata } from "next";
import DefaultLayout from "@/components/Layout/DefaultLayout";
import StockList from "@/components/Stock/StockList";

export const metadata: Metadata = {
  title:
    "Fundstation Plataform",
  description: "Plataforma de investimentos baseados em IA",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
         <StockList></StockList>
      </DefaultLayout>
    </>
  );
}
