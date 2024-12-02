// Natalia Arevalo, id student: 200560279
// This code defines the home page of my personal portfolio website. It includes a welcome section, a search widget, category links for easy navigation, and showcases some of my featured projects such as a JavaScript calculator and a weather app. The page uses Next.js for structure and Bootstrap for styling.

"use client";

import { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/styles.css';

// useEffect hook to dynamically import Bootstrap's JavaScript bundle for functionality (e.g., dropdowns, modals).
export default function Home() {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <>
      <Head>
        <title>Personal Website</title>
        <meta name="description" content="Welcome to my personal website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Main header section with a welcoming message */}
      <header className="py-5 bg-light border-bottom mb-4">
        <div className="container">
          <div className="text-center my-5">
            <h1 className="fw-bolder">Welcome to My Personal Website!</h1>
            <p className="lead mb-0">Discover my projects, learn about my journey, and get in touch!</p>
          </div>
        </div>
      </header>

      {/* Main content area, including search and category navigation */}
      <main className="container">
        <div className="row">

          {/* Search widget in a card component */}
          <div className="col-lg-12 mb-4">
            <div className="row">
              <div className="col-md-6">
                <div className="card">
                  <div className="card-header">Search</div>
                  <div className="card-body">
                    <div className="input-group">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Search..."
                        aria-label="Search"
                      />
                      <button className="btn btn-primary" type="button">
                        Go!
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Category navigation links */}
              <div className="col-md-6">
                <div className="card">
                  <div className="card-header">Categories</div>
                  <div className="card-body">
                    <ul className="list-unstyled mb-0">
                      <li>
                        <Link href="/about">About</Link>
                      </li>
                      <li>
                        <Link href="/portfolio">Portfolio</Link>
                      </li>
                      <li>
                        <Link href="/contact">Contact</Link>
                      </li>
                      <li>
                        <Link href="/blog">Blog</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Featured projects section */}
          <div className="col-lg-12">
            <div className="card mb-4">
              <a href="#!">
                <img
                  className="card-img-top"
                  src="https://dummyimage.com/850x350/dee2e6/6c757d.jpg"
                  alt="Featured Project"
                />
              </a>
              <div className="card-body">
                <h2 className="card-title">Featured Project: JavaScript Calculator</h2>
                <p className="card-text">
                  This is a calculator app I built using vanilla JavaScript. It supports basic operations and has a responsive design.
                </p>
                <a className="btn btn-primary" href="#!">View Details →</a>
              </div>
            </div>

            <div className="card mb-4">
              <a href="#!">
                <img
                  className="card-img-top"
                  src="https://dummyimage.com/850x350/ced4da/495057.jpg"
                  alt="Another Project"
                />
              </a>
              <div className="card-body">
                <h2 className="card-title">Featured Project: Weather App</h2>
                <p className="card-text">
                  A weather app built using React and OpenWeather API, showcasing real-time weather updates and a sleek UI.
                </p>
                <a className="btn btn-primary" href="#!">View Details →</a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
