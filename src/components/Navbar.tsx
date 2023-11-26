import React from 'react'
import Link from 'next/link';
import { useEffect, useState } from "react";

interface NavbarProps {
    onEntrarClick: () => void;
}

export default function Navbar({ onEntrarClick }: NavbarProps) {
    // Adicionado estado e função de toggle para o menu responsivo
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    // Adicionado estado e função de toggle para o menu responsivo
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <div>
            {/* Inicio Nav */}
            <nav className="bg-gray-900 bg-opacity-75">

                <div className=" w-[92%] mx-auto sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            {/* Logo e outros elementos do Navbar */}
                            <div className="flex-shrink-0">
                                <Link href="/"
                                    className="text-white text-3xl font-sans">
                                    weather today

                                </Link>
                            </div>
                        </div>

                        <div className="hidden lg:block">
                            {/* Itens de menu para dispositivos maiores */}
                            <div className="ml-4 flex items-center space-x-4">
                                <a href="/" className="text-white hover:bg-white hover:text-black rounded-lg p-2 transition duration-500 ease-in-out">
                                    Home
                                </a>
                                <a href="/equipe" className="text-white hover:bg-white hover:text-black rounded-lg p-2 transition duration-500 ease-in-out">
                                    Desenvolvedores
                                </a>
                                <a href="" className="text-white hover:bg-white hover:text-black rounded-lg p-2 transition duration-500 ease-in-out">
                                    Contact
                                </a>
                            </div>
                        </div>

                        <div className="hidden lg:flex items-center space-x-2">

                            <button className="text-white border-solid border-white border-2 px-5 py-2 text-1 hover:bg-white hover:text-black transition duration-500 ease-in-out rounded-tl-lg rounded-bl-lg text-sm font-bold"
                                onClick={onEntrarClick}
                            >
                                Entrar
                            </button>

                            <Link href="/cadastro">
                                <button className="text-white border-solid border-white border-2 px-2 py-2 text-1 hover:bg-white hover:text-black transition duration-500 ease-in-out rounded-tr-lg rounded-br-lg text-sm font-bold">
                                    Criar Conta
                                </button>
                            </Link>
                        </div>




                        <div className="lg:hidden flex items-center">
                            {/* Botão de toggle para o menu responsivo */}
                            <button
                                onClick={toggleMenu}
                                className="inline-flex items-center justify-center p-2 rounded-md text-white
                 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"

                            >
                                {isMenuOpen ? (
                                    /* Ícone de fechar o menu quando está aberto */
                                    <svg className="h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                ) : (
                                    /* Ícone de abrir o menu quando está fechado */
                                    <svg className="h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 6h16M4 12h16m-7 6h7"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                {isMenuOpen && (
                    <div className="lg:hidden">
                        {/* Conteúdo do menu responsivo quando está aberto */}
                        <div className="px-2 pt-2 pb-3 space-x-1 sm:px-3 flex flex-col items-center">
                            <a href="/" className="text-white block hover:bg-white hover:text-black rounded-lg p-2 mb-3 transition duration-500 ease-in-out">
                                Home
                            </a>
                            <a href="/equipe" className="text-white block hover:bg-white hover:text-black rounded-lg p-2 mb-3 transition duration-500 ease-in-out">
                                Desenvolvedores
                            </a>
                            <a href="/" className="text-white block hover:bg-white hover:text-black rounded-lg p-2 mb-3 transition duration-500 ease-in-out">
                                Contact
                            </a>

                            <button className="text-white border-solid border-white border-2 px-9 py-2 mb-3 text-1 hover:bg-white hover:text-black transition duration-500 ease-in-out rounded-md text-sm font-bold"
                                onClick={onEntrarClick} >
                                Entrar
                            </button>

                            <Link href="/cadastro">
                                <button className="text-white border-solid border-white border-2 px-5 py-2 mb-3 text-1 hover:bg-white hover:text-black transition duration-500 ease-in-out rounded-md text-sm font-bold">
                                    Criar Conta
                                </button>
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
            {/* Final Nav */}

        </div>
    )
}
