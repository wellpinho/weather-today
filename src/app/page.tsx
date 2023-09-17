"use client";
import Tables from "@/components/Tables";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [cityName, setCityName] = useState("");
  const [data, setData] = useState({});
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

  return (
    <div className="mx-auto max-w-7xl pb-24 pt-4 sm:px-6 sm:py-32 lg:px-8">
      <h2 className="text-center mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Wellington Pinho
        <div className="text-gray-400 font-thin btn btn-tremura">
          <a href="https://wellpinho.com">
            wellpinho.com <span aria-hidden="true">→</span>
          </a>
        </div>
      </h2>
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
  );
}
