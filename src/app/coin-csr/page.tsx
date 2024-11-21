"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Rates {
  [key: string]: number;
}

const Page: React.FC = () => {
  const apiKey = "68769c00c9467bf293a395c18c963d89";
  const url = `http://api.coinlayer.com/api/live?access_key=${apiKey}`;
  const [rate, setRate] = useState<Rates>({});
  const router = useRouter();
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(url);
        console.log(response.data.rates);
        setRate(response.data.rates);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-900">
       <nav className="bg-gray-900 py-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center px-6">
          <div className="flex items-center">
            <Image
              src="/images/cryptogenesis.png"
              alt="Logo"
              width={80}
              height={80}
              className="mr-3"
            />
            <span className="text-3xl font-bold text-white">Crypto Genesis.</span>
          </div>
          <ul className="flex space-x-8 text-white">
            {[
              { label: "Home", path: "/" },
              { label: "CSR", path: "/coin-csr" },
              { label: "SSR", path: "/coin-ssr" },
              { label: "ISR", path: "/coin-isr" },
              { label: "SSG", path: "/coin-ssg" },
            ].map(({ label, path }, index) => (
              <li
                key={index}
                className="cursor-pointer hover:text-blue-500"
                onClick={() => router.push(path)}
              >
                {label}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <h1 className="text-center text-3xl font-bold text-white mb-6 mt-4">
        Live Currency Rates (CSR)
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 scale-up-center">
        {Object.entries(rate).map(([currency, value], index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-6 transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
            <Image
              src="/images/csr.png"
              alt={currency}
              height={100}
              width={100}
              className="h-18 w-20 mx-auto mb-4 rounded-full"
            />
            <h2 className="text-lg font-semibold text-gray-800 text-center">
              {currency}
            </h2>
            <p className="text-center text-gray-600 text-sm">
              Rate: {value.toFixed(2)}
            </p>
            <button
            type="button"
            className="mt-4 w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-500 transition-all duration-300">
              View More
            </button>
          </div>
        ))}
      </div>
      <footer className="bg-gray-900 text-center py-6 mt-12 text-gray-400 text-sm">
        <p>© 2024 Currency Exchange App. All Rights Reserved.</p>
      </footer>
    </div>
  );
};export default Page;