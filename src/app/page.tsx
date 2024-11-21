"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const HomePage: React.FC = () => {
  const router = useRouter();

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

      <header className="relative text-center py-20 px-8">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/hero-background.jpg"
            alt="Hero Background"
            fill
            className="object-cover opacity-40"
          />
        </div>
        <h1 className="text-5xl font-extrabold text-white mb-6">
          Welcome to the Currency Exchange App
        </h1>
        <p className="text-lg text-gray-300 mb-10">
          Explore the latest currency exchange rates with real-time updates.
        </p>
        <div className="space-x-4">
          <button
            onClick={() => router.push("/rates")}
            className="bg-blue-600 text-white py-3 px-8 rounded-lg shadow-lg text-lg font-semibold transform hover:scale-110 hover:bg-blue-500 transition-all duration-300"
          >
            View Rates
          </button>
          <button
            onClick={() => router.push("/about")}
            className="bg-gray-700 text-white py-3 px-8 rounded-lg shadow-lg text-lg font-semibold transform hover:scale-110 hover:bg-gray-600 transition-all duration-300"
          >
            Learn More
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto p-8">
        {[
          { label: "CSR Page", path: "/coin-csr" },
          { label: "SSR Page", path: "/coin-ssr" },
          { label: "ISR Page", path: "/coin-isr" },
          { label: "SSG Page", path: "/coin-ssg" },
        ].map(({ label, path }, index) => (
          <button
            key={index}
            className="bg-blue-600 text-white py-6 px-8 rounded-lg shadow-md text-xl font-medium transform hover:scale-105 hover:bg-blue-500 transition-all duration-300"
            onClick={() => router.push(path)}
          >
            {label}
          </button>
        ))}
      </div>

      <footer className="bg-gray-900 text-center py-6 mt-12 text-gray-400 text-sm">
        <p>© 2024 Currency Exchange App. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
