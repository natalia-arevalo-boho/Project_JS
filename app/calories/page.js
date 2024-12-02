// Natalia Arevalo, student ID: 200560279
// Project: Personal Portfolio
// This page calculates the number of calories burned based on the activity, weight, and duration input by the user.

"use client";

import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import '/styles/styles.css'; 

export default function Calories() {
  // State variables to handle user inputs and API response data
  const [activity, setActivity] = useState(''); // Activity name input
  const [weight, setWeight] = useState(160); // Weight input in pounds
  const [duration, setDuration] = useState(60); // Duration input in minutes
  const [caloriesData, setCaloriesData] = useState(null); // Stores the data from the API response
  const [loading, setLoading] = useState(false); // Indicates loading state while fetching data
  const [error, setError] = useState(null); // Stores error messages

  // Function to fetch calories burned data from the API
  const fetchCaloriesBurned = async () => {
    if (!activity || weight <= 0 || duration <= 0) {
      setError('Please fill in all fields correctly.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Fetching data from the API
      const response = await fetch(
        `https://api.api-ninjas.com/v1/caloriesburned?activity=${activity}&weight=${weight}&duration=${duration}`,
        {
          headers: { 'X-Api-Key': 'Uw2rSNgY/8muWJZepCTc1g==FlqNwMTc0wmc50Qv' },
        }
      );

      // Check if the response is valid
      if (!response.ok) throw new Error('Failed to fetch calories data');

      const data = await response.json();
      console.log('API Response:', data);

      // Check if the response data is in the expected format
      if (data && data[0]) {
        setCaloriesData(data[0]);
      } else {
        throw new Error('Invalid response format');
      }
    } catch (err) {
      console.log('Error:', err); 
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Function to calculate the total calories burned based on duration
  const calculateTotalCalories = (caloriesPerHour, durationInMinutes) => {
    const durationInHours = durationInMinutes / 60;
    return caloriesPerHour * durationInHours;
  };

  return (
    <>
      <Head>
        <title>Calories Burned API</title>
        <style>
          {`
            .text-pink {
              color: #E1A7D1 !important; /* Cool pink for links */
            }

            .btn-pink {
              background-color: #E1A7D1;
              color: white;
              border: none;
            }

            .btn-pink:hover {
              background-color: #F3C6D9;
            }

            .card-header {
              background-color: #E1A7D1 !important; /* Pink header for categories */
              color: white;
              font-size: 1.2rem;
              padding: 10px;
              text-align: center;
            }

            h1 {
              color: #E1A7D1 !important; /* Pink title */
              text-align: center;
            }

            .card-body a {
              color: #E1A7D1 !important; /* Pink links inside the categories */
              text-decoration: none;
            }

            .card-body a:hover {
              color: #F3C6D9 !important;
            }

            .btn-pink {
              font-size: 0.9rem;
              padding: 10px 20px;
              margin: 10px auto;
              display: block;
            }
          `}
        </style>
      </Head>
      
      <div className="container mt-4">
        <div className="row">
          {/* Categories section for navigation */}
          <div className="col-lg-3 mb-4">
            <div className="card shadow-lg rounded">
              <div className="card-header">
                Categories
              </div>
              <div className="card-body">
                <ul className="list-unstyled mb-0">
                  <li><Link href="/" className="text-pink">Home</Link></li>
                  <li><Link href="/about" className="text-pink">About</Link></li>
                  <li><Link href="/portfolio" className="text-pink">Portfolio</Link></li>
                  <li><Link href="/contact" className="text-pink">Contact</Link></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Main section where the user inputs their data */}
          <div className="col-lg-9">
            <h1 className="mb-4">Calories Burned Calculator</h1>

            {/* Input for activity name */}
            <div className="form-group mb-3">
              <label className="h5">Activity (e.g., running)</label>
              <input
                type="text"
                className="form-control"
                value={activity}
                onChange={(e) => setActivity(e.target.value)}
                placeholder="Enter activity name"
              />
            </div>
            {/* Input for weight */}
            <div className="form-group mb-3">
              <label className="h5">Weight (lbs)</label>
              <input
                type="number"
                className="form-control"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Enter weight in pounds"
              />
            </div>
            {/* Input for duration */}
            <div className="form-group mb-3">
              <label className="h5">Duration (minutes)</label>
              <input
                type="number"
                className="form-control"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                placeholder="Enter duration in minutes"
              />
            </div>

            {/* Button to fetch calories burned data */}
            <button
              onClick={fetchCaloriesBurned}
              className="btn btn-pink w-auto mx-auto mt-3"
              disabled={loading}
            >
              {loading ? 'Calculating...' : 'Calculate'}
            </button>

            {/* Error message */}
            {error && <p className="text-danger mt-3">{error}</p>}

            {/* Display calculated calories data */}
            {caloriesData && (
              <div className="mt-3 p-3 border border-info rounded">
                <p><strong>Calories Per Hour:</strong> {caloriesData.calories_per_hour}</p>
                
                {caloriesData.calories_per_hour && (
                  <p><strong>Total Calories Burned:</strong> {calculateTotalCalories(caloriesData.calories_per_hour, duration).toFixed(2)}</p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

