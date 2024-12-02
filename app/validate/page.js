// Natalia Arevalo, id student: 200560279
// Project: personal portfolio

"use client";

import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function ValidatePhone() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [validationResult, setValidationResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://api.api-ninjas.com/v1/validatephone?number=${phoneNumber}`,
        {
          method: 'GET',
          headers: {
            'X-Api-Key': 'Uw2rSNgY/8muWJZepCTc1g==FlqNwMTc0wmc50Qv',
          },
        }
      );

      if (!response.ok) throw new Error('Failed to validate phone number');
      const data = await response.json();
      setValidationResult(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Validate Phone API</title>
        <meta name="description" content="Check if a phone number is valid and get its metadata." />
      </Head>
      <div className="container mt-4">
        <h1 className="text-center text-elegant">Validate Phone Number</h1>

        <div className="row">
          
          <div className="col-lg-3 mb-4">
            <div className="card">
              <div className="card-header text-elegant">Categories</div>
              <div className="card-body">
                <ul className="list-unstyled mb-0">
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/about">About</Link></li>
                  <li><Link href="/portfolio">Portfolio</Link></li>
                  <li><Link href="/contact">Contact</Link></li>
                </ul>
              </div>
            </div>
          </div>

          
          <div className="col-lg-9">
            <form onSubmit={handleSubmit} className="form-container mx-auto mt-4">
              <div className="mb-3">
                <label htmlFor="phoneNumber" className="form-label">
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phoneNumber"
                  className="form-control form-small"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-pink">
                  Validate
                </button>
              </div>
            </form>

            {loading && <p className="text-center mt-3">Loading...</p>}
            {error && <p className="text-danger text-center">{error}</p>}

            {validationResult && (
              <div className="mt-4 result-container mx-auto">
                <h4 className="text-elegant">Validation Result:</h4>
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <th>Valid</th>
                      <td>{validationResult.is_valid ? 'Yes' : 'No'}</td>
                    </tr>
                    <tr>
                      <th>Formatted Properly</th>
                      <td>{validationResult.is_formatted_properly ? 'Yes' : 'No'}</td>
                    </tr>
                    <tr>
                      <th>Country</th>
                      <td>{validationResult.country}</td>
                    </tr>
                    <tr>
                      <th>Location</th>
                      <td>{validationResult.location || 'Unknown'}</td>
                    </tr>
                    <tr>
                      <th>Timezones</th>
                      <td>{validationResult.timezones.join(', ')}</td>
                    </tr>
                    <tr>
                      <th>National Format</th>
                      <td>{validationResult.format_national}</td>
                    </tr>
                    <tr>
                      <th>International Format</th>
                      <td>{validationResult.format_international}</td>
                    </tr>
                    <tr>
                      <th>E.164 Format</th>
                      <td>{validationResult.format_e164}</td>
                    </tr>
                    <tr>
                      <th>Country Code</th>
                      <td>{validationResult.country_code}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .text-elegant {
          color: #d63384;
          font-family: 'Cursive', sans-serif;
        }
        .btn-pink {
          background-color: #ff85a2;
          color: white;
        }
        .btn-pink:hover {
          background-color: #e63956;
        }
        .form-container {
          width: 80%;
        }
        .form-small {
          font-size: 14px;
        }
        .result-container {
          width: 100%;
        }
        .categories-box {
          background-color: #ffeff6;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
          margin-bottom: 30px;
        }
        .categories-list {
          list-style-type: none;
          padding: 0;
        }
        .categories-list li {
          background-color: #f8c9d1;
          color: #d63384;
          padding: 8px 12px;
          border-radius: 10px;
          margin-bottom: 10px;
          cursor: pointer;
          font-weight: bold;
        }
        .categories-list li:hover {
          background-color: #f6a8c2;
        }
      `}</style>
    </>
  );
}
