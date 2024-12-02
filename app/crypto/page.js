// Natalia Arevalo, id student: 200560279
// This code defines the Crypto Symbols page of my personal portfolio website.It fetches and displays a list of cryptocurrency symbols using an external API.

"use client";

import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Crypto() {
  const [cryptoSymbols, setCryptoSymbols] = useState([]); // State to store the list of crypto symbols
  const [loading, setLoading] = useState(true); // State to manage loading status
  const [error, setError] = useState(null); // State to manage error messages

  useEffect(() => {
    // Fetch crypto symbols from external API
    const fetchCryptoSymbols = async () => {
      try {
        const response = await fetch(
          'https://api.api-ninjas.com/v1/cryptosymbols',
          {
            headers: { 'X-Api-Key': 'Uw2rSNgY/8muWJZepCTc1g==FlqNwMTc0wmc50Qv' },
          }
        );

        if (!response.ok) throw new Error('Failed to fetch crypto symbols'); 
        const data = await response.json();

        if (Array.isArray(data.symbols)) {
          setCryptoSymbols(data.symbols); 
        } else {
          throw new Error('API response format is incorrect');
        }
      } catch (err) {
        setError(err.message); 
      } finally {
        setLoading(false); 
      }
    };

    fetchCryptoSymbols(); 
  }, []);

  return (
    <>
      <Head>
        <title>Crypto Symbols API</title>
        <meta name="description" content="Get a list of cryptocurrency symbols" />
      </Head>

      <div className="main-container">
        {/* Navigation card with links */}
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">Categories</h3>
            <ul className="list-unstyled mb-0">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/portfolio">Portfolio</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>

        
        <div className="crypto-container">
          <h1 className="text-center title">Crypto Symbols</h1>
          {loading && <p className="text-center loading">Loading...</p>} 
          {error && <p className="text-danger text-center">{error}</p>} 
          {Array.isArray(cryptoSymbols) && cryptoSymbols.length > 0 ? (
            <ul className="crypto-list">
              {cryptoSymbols.map((symbol, index) => (
                <li key={index} className="crypto-item">
                  {symbol}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center no-data">
              No crypto symbols available or invalid data format.
            </p>
          )}
        </div>
      </div>

      {/* Styling for layout */}
      <style jsx>{`
        .main-container {
          display: flex;
          gap: 20px;
          padding: 20px;
          border-radius: 15px;
          width: 90%;
          margin: 20px auto;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }

        .card {
          width: 20%;
          background-color: #f8bbd0;
          border: none;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .card-body {
          padding: 20px;
        }

        .card-title {
          text-align: center;
          color: #ffffff;
          font-size: 1.5rem;
          margin-bottom: 15px;
          font-weight: bold;
        }

        .list-unstyled li {
          margin: 10px 0;
        }

        .list-unstyled a {
          text-decoration: none;
          color: #ffffff;
          font-weight: bold;
          font-size: 1rem;
        }

        .list-unstyled a:hover {
          color: #ad1457;
        }

        .crypto-container {
          width: 75%;
          text-align: center;
        }

        .title {
          color: #e91e63;
          font-family: 'Cursive', sans-serif;
          font-size: 2.5rem;
        }

        .loading {
          color: #ec407a;
        }

        .crypto-list {
          list-style: none;
          padding: 0;
          margin: 0;
          max-height: 300px;
          overflow-y: auto;
          border: 1px solid #f8bbd0;
          border-radius: 10px;
          padding: 10px;
          background-color: #ffebee;
        }

        .crypto-item {
          background-color: #f48fb1;
          margin: 5px;
          padding: 8px 15px;
          border-radius: 8px;
          font-size: 1rem;
          color: #fff;
          font-weight: bold;
        }

        .no-data {
          color: #c2185b;
        }
      `}</style>
    </>
  );
}
