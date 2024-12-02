// Natalia Arevalo, id student: 200560279
// Project: personal portfolio

// This code defines a portfolio page for displaying a collection of coding projects and achievements.
// The page is built using Next.js, Bootstrap for styling.
// It showcases various projects such as a Crypto API, a Calories Burned API, and a Phone Validation API.

"use client";

import Head from 'next/head';
import Link from 'next/link';
import '/styles/styles.css';

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Portfolio</title> 
        <meta name="description" content="A collection of coding projects and achievements." />
      </Head>

      <div className="container my-5">
      
        <div className="text-center my-4">
          <h1 className="text-elegant">Portfolio</h1>
          <p className="text-muted">
            Explore my collection of coding projects, showcasing APIs and other achievements in web development.
          </p>
        </div>
{/* Portfolio Content */}
<div className="row mt-5">
  {/* Categories section */}
  <div className="col-lg-3 mb-4">
    <div className="card">
      <div className="card-header text-elegant">Categories</div>
      <div className="card-body">
        <ul className="list-unstyled mb-0">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/portfolio">Portfolio</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/blog">Blog</Link></li>
        </ul>
      </div>
    </div>
  </div>

          {/* Portfolio Projects */}
          <div className="col-lg-9">
            <div className="d-flex justify-content-between flex-wrap">
              {/* Calories Burned API Project */}
              <div className="card portfolio-card text-center m-2">
                <div className="card-body">
                  <h5 className="card-title text-elegant">Calories Burned API</h5>
                  <p className="card-text">Calculate calories burned based on activity.</p>
                  <Link href="/calories">
                    <button className="btn btn-pink">Explore Calories API</button>
                  </Link>
                </div>
              </div>

              {/* Phone Validation API Project */}
              <div className="card portfolio-card text-center m-2">
                <div className="card-body">
                  <h5 className="card-title text-elegant">Validate Phone API</h5>
                  <p className="card-text">Check if a phone number is valid and get its metadata.</p>
                  <Link href="/validate">
                    <button className="btn btn-pink">Explore Phone Validation API</button>
                  </Link>
                </div>
              </div>

              {/* Crypto API Project */}
              <div className="card portfolio-card text-center m-2">
                <div className="card-body">
                  <h5 className="card-title text-elegant">Crypto API</h5>
                  <p className="card-text">Track cryptocurrency prices in real-time.</p>
                  <Link href="/crypto">
                    <button className="btn btn-pink">Explore Crypto API</button>
                  </Link>
                </div>
              </div>
            </div>
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
        .card {
          border: 1px solid #ffe4e1;
        }
        .card-title {
          font-size: 1.2rem;
        }
        .container {
          padding: 20px;
        }
      `}</style>
    </>
  );
}
