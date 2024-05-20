"use client";
import React, { useEffect, useState } from "react";

interface PresentationProps {
    title: string
    description: string
}

const Presentation: React.FC<PresentationProps> =  ({
 title,
 description
}) => {

    return (
        <>
            <div className="mb-8">
                <div className="text-xl font-bold text-black dark:text-white">{title}</div>
                <div className="text-lg font-normal">{description}</div>
            </div>
        </>
    );
};

export default Presentation;
