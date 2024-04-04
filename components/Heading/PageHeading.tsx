import React from "react";

function PageHeading() {
    return (
        <>
            <div className="px-4">
                <div className="py-7 bg-gray-50 w-full ">
                    <div className="flex flex-col items-start justify-between px-4 lg:items-center lg:px-6 md:px-4 lg:flex-row md:flex-row md:items-center">
                        <div className="flex flex-col">
                            <p className="text-2xl font-semibold leading-normal text-gray-800">
                                Dashboard
                            </p>
                            <div className="flex mt-3 gap-x-2">
                                <p className="text-xs leading-3 text-indigo-700 cursor-pointer">
                                    Portal
                                </p>
                                <svg
                                    className="cursor-pointer"
                                    width={14}
                                    height={14}
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M4.10332 3.06284L8.04082 7.00034L4.10332 10.9378L5.03139 11.8659L9.89697 7.00034L5.03139 2.13477L4.10332 3.06284Z"
                                        fill="#4338CA"
                                    />
                                </svg>
                                <p className="text-xs leading-3 text-indigo-700 cursor-pointer">
                                    Dashboard
                                </p>
                                <svg
                                    className="cursor-pointer"
                                    width={14}
                                    height={14}
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M4.10332 3.06284L8.04082 7.00034L4.10332 10.9378L5.03139 11.8659L9.89697 7.00034L5.03139 2.13477L4.10332 3.06284Z"
                                        fill="#4338CA"
                                    />
                                </svg>
                                <p className="text-xs leading-3 text-indigo-700 cursor-pointer">
                                    KPIs
                                </p>
                            </div>
                        </div>
                    </div>
                    <hr className="my-4 border-1 border-slate-300" />

                </div>
                <div></div>
            </div>
        </>
    );
}

export default PageHeading;
