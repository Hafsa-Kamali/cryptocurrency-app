import React from "react";
import Image from "next/image";
import Link from "next/link";
interface Rates {
  [key: string]: number;
}

const fetchRates = async (): Promise<Rates> => {
  const apiKey = "abdab83e8051d04ec3a723a1bcaad215";
  const url = `http://api.coinlayer.com/api/live?access_key=${apiKey}`;
  try {
    const response = await fetch(url, { next: { revalidate: 60 } }); 
    const data = await response.json();
    return data.rates || {};
  } catch (error) {
    console.error("Error fetching rates:", error);
    return {};
  }
};

const Page = async () => {
  const rates = await fetchRates();

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
          <Link href="/"><li className="cursor-pointer hover:text-blue-500">Home</li></Link>
            <Link href={"/coin-csr"} ><li className="cursor-pointer hover:text-blue-500">CSR</li></Link>
            <Link href={"/coin-ssr"}><li className="cursor-pointer hover:text-blue-500">SSR</li> </Link>
            <Link href={"/coin-isr"}><li className="cursor-pointer hover:text-blue-500">ISR</li></Link>
            <Link href={"/coin-ssg"}><li className="cursor-pointer hover:text-blue-500">SSG</li></Link>
          </ul>
        </div>
      </nav>

      <h1 className="text-center text-3xl font-bold text-white mb-6 mt-4">
        Live Currency Rates (SSG)
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 scale-up-center">
        {Object.entries(rates).map(([currency, value], index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-6 transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
            <Image
              src="/images/flags/bitcoin.png"
              alt={currency}
              height={50}
              width={50}
              className="h-18 w-20 mx-auto mb-4 rounded-full"
            />
            <h2 className="text-lg font-semibold text-gray-800 text-center">
              {currency}
            </h2>
            <p className="text-center text-gray-600 text-sm">
              Rate: {value.toFixed(2)}
            </p>
            <button
            type = "button"
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
};

export default Page;

