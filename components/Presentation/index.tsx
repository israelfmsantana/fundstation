"use client";
import React, { useEffect, useState } from "react";


const Presentation: React.FC = () => {


    const [isLoading, setLoading] = useState([true])


    return (
        <>
            <div className="mb-8">
                <div className="text-xl font-bold text-black dark:text-white">Dashboard</div>
                <div className="text-lg font-normal">Feliz em ver novamente Matheus. Obtenha atualização do seu ativo hoje, boa sorte.</div>
            </div>
        </>
    );
};

export default Presentation;
