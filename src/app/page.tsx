"use client";
import Tables from "@/components/Tables";
import axios from "axios";
import Image from "next/image";
import Link from 'next/link';
import { useEffect, useState } from "react";


export default function Home() {
  const [cityName, setCityName] = useState("");
  const [data, setData] = useState({});

  // Adicionado estado e função de toggle para o menu responsivo
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const [cache, setCache] = useState({});
  // const displayNone = false;

  // TODO: salvar os dados da pesquisa no localstorage
  // useEffect(() => {
  //   const data = localStorage.getItem('data')

  //   if (!data) {

  //   }
  // }, [])


  async function handleGetCity(e: any) {
    e.preventDefault();

    const name = encodeURI(cityName);
    const cityUrl = `${process.env.NEXT_PUBLIC_ANALYTICS_URL}?format=json-cors&key=${process.env.NEXT_PUBLIC_ANALYTICS_ID}&city_name=${name}`;

    try {
      const response = await axios.get(cityUrl);
      setData(response.data);

      setCityName("");
    } catch (error) {
      alert("some problem in the request happened");
      console.log(error);
    }
  }

  // Adicionado estado e função de toggle para o menu responsivo
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  /* 
   Alterações no Navbar:
   - Adicionado estado (isMenuOpen) para controlar a visibilidade do menu responsivo.
   - Adicionada função (toggleMenu) para alternar o estado do menu.
   - Adicionado ícone do menu com um botão de toggle.
   - Adicionada lógica para exibir ou ocultar o menu responsivo com base no estado (isMenuOpen).
  */

  // Adicionada página de equipe em pages/equipe.tsx
  // A página inclui informações sobre a equipe (nomes, GitHub, LinkedIn)

  return (
    <div>
      {/* Inicio Nav */}
      <nav className="bg-nav">
        <div className=" w-[92%] mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              {/* Logo e outros elementos do Navbar */}
              <div className="flex-shrink-0">
                <a href="/" className="text-white text-3xl font-signature">
                  weather today
                </a>
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
                <a href="/" className="text-white hover:bg-white hover:text-black rounded-lg p-2 transition duration-500 ease-in-out">
                  Contact
                </a>
              </div>
            </div>

            <div className="hidden lg:flex items-center space-x-2">
              <Link href="/login">
                <button className="text-white border-solid border-white border-2 px-5 py-2 text-1 hover:bg-white hover:text-black transition duration-500 ease-in-out rounded-md text-sm font-bold">
                  Entrar
                </button>
              </Link>
              <Link href="/cadastro">
                <button className="text-white border-solid border-white border-2 px-5 py-2 text-1 hover:bg-white hover:text-black transition duration-500 ease-in-out rounded-md text-sm font-bold">
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
              <Link href="/login">
                <button className="text-white border-solid border-white border-2 px-9 py-2 mb-3 text-1 hover:bg-white hover:text-black transition duration-500 ease-in-out rounded-md text-sm font-bold">
                  Entrar
                </button>
              </Link>
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
      <div className="mx-auto max-w-7xl pb-24 pt-4 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle
              cx={512}
              cy={512}
              r={512}
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Confira o clima em sua cidade.
            </h2>

            <form onSubmit={handleGetCity}>
              <div className="relative mt-2 rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-0">
                  <span className="text-gray-500 sm:text-sm">
                    <Image width={28} height={28} src="/map.svg" alt="" />
                  </span>
                </div>
                <input
                  value={cityName}
                  onChange={(e) => setCityName(e.target.value)}
                  type="text"
                  name="price"
                  id="price"
                  className="block w-full rounded-md border-0 py-1.5 pl-10 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="cidade"
                />
              </div>
            </form>

            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="https://github.com/wellpinho/weather-today"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Github
              </a>
              <a
                href="https://www.linkedin.com/in/wellpinho/"
                className="text-sm font-semibold leading-6 text-white"
              >
                Linkedin <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
            <Tables data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};


