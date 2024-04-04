"use client";
import React, { useState, ReactNode } from "react";


interface CardProps {
    typeCard: 'left' | 'right' | 'normal';
    children: ReactNode;
    colorBg: string | null
}

const Card: React.FC<CardProps> = ({children, typeCard, colorBg}) => {

    let cardContent: React.ReactNode;

    switch(typeCard){
        case 'left':
            cardContent =   
            
            <div className="flex items-center justify-between w-full">
                <div className="flex flex-col lg:flex-row w-full min-h-64 items-start lg:items-center rounded bg-white shadow">
                    <div className="w-full dark:border-gray-700 border-t dark:bg-gray-700 bg-gray-100" />
                    <div className="w-full dark:bg-gray-800" />
                </div>
            </div>

        break;

        case 'right':
            cardContent =   
            <div className="rounded shadow-xl overflow-hidden w-full flex ">
                {children}
            </div>
            
            
            
        break;

        case 'normal':
            cardContent =   
            
            <div className="flex items-center justify-between w-full">
                <div className="flex flex-col lg:flex-row w-full items-start lg:items-center rounded bg-white shadow">
                    <div className="w-full dark:bg-gray-800">{children}</div>
                    
                </div>
            </div>
            
        break;
        
    }

  return (

    <div>
        {cardContent}
    </div>
  );
}

export default Card;
