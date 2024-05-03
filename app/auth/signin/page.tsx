
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layout/DefaultLayout";


export const metadata: Metadata = {
    title: "Next.js SignIn Page | TailAdmin - Next.js Dashboard Template",
    description: "This is Next.js Signin Page TailAdmin Dashboard Template",
};

const SignIn: React.FC = () => {
    return (
        <div className="relative min-h-screen flex">
            <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 bg-white">
                <div className="sm:w-1/2 xl:w-3/5 h-full hidden md:flex flex-auto items-center justify-center p-10 overflow-hidden bg-blue-900 text-white bg-no-repeat bg-cover relative">
                    <div className="absolute bg-gradient-to-b from-blue-600 to-blue-500 opacity-75 inset-0 z-0"></div>
                    <div className="w-full max-w-md z-10">
                        <div className="sm:text-4xl xl:text-5xl font-bold leading-tight mb-6">Reference site about Lorem Ipsum..</div>
                        <div className="sm:text-sm xl:text-md text-gray-200 font-normal"> What is Lorem Ipsum Lorem Ipsum is simply dummy
                            text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever
                            since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it
                            has?</div>
                    </div>
                    <ul className="circles">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div className="md:flex md:items-center md:justify-center w-full sm:w-auto md:h-full w-2/5 xl:w-2/5 p-8 md:p-10 lg:p-14 sm:rounded-lg md:rounded-none bg-white">
                    <div className="max-w-md w-full space-y-8 items-center">
                        <div className="w-full flex justify-center">
                            <Image
                                width={80}
                                height={32}
                                src={"/images/logo/logotipo.svg"}
                                alt="Logo"
                                priority
                            />
                        </div>

                        <div className="text-center">
                            <h2 className="mt-6 text-3xl font-bold text-gray-900">
                                Bem vindo!
                            </h2>
                            <p className="mt-2 text-sm text-gray-500">Por favor, entre com os dados da sua conta</p>
                        </div>
                        <form className="mt-8 space-y-6" action="#" method="POST">
                            <input type="hidden" name="remember" value="true"></input>
                            <div className="relative">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <input id="email" name="email" type="email" autoComplete="email"
                                    className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full"></input>
                            </div>
                            <div className="relative">
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Senha
                                </label>
                                <input id="password" name="password" type="password" autoComplete="current-password"
                                    className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full"></input>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input id="remember_me" name="remember_me" type="checkbox"
                                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"></input>
                                    <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                                        Lembre-me
                                    </label>
                                </div>
                                <div className="text-sm">
                                    <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                                        Esqueceu a senha?
                                    </a>
                                </div>
                            </div>
                            <div>
                                <button type="submit"
                                    className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                    Entrar
                                </button>
                            </div>
                            <div>
                                <span className="flex items-center justify-center space-x-2">
                                    <span className="h-px w-16 bg-gray-200"></span>
                                    <span className="text-gray-300 font-normal">Você não tem uma conta?</span>
                                    <span className="h-px w-16 bg-gray-200"></span>
                                </span>
                            </div>
                            <div>
                                <button type="submit"
                                    className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-blue-600 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                    Cadastrar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default SignIn;
