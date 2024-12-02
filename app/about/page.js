// Natalia Arevalo, id student: 200560279
// Project: personal portfolio/About
"use client";

import Head from 'next/head';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import '/styles/styles.css';

export default function About() {
  return (
    <>
      <Head>
        <title>About Me</title>
        <meta name="description" content="Learn more about me" />
      </Head>

      {/* Header section with title and description */}
      <header className="py-5 bg-light border-bottom mb-4">
        <div className="container text-center my-5">
          <h1 className="fw-bolder text-pink">About Me</h1>
          <p className="lead mb-0 text-muted">A glimpse into my world, passions, and growth.</p>
        </div>
      </header>

      <div className="container">
        <div className="row">
          {/* Categories section on the left side */}
          <div className="col-lg-4 mb-4">
            <div className="card shadow-lg rounded">
              <div className="card-header bg-light text-center text-pink">
                Categories
              </div>
              <div className="card-body">
                <ul className="list-unstyled mb-0">
                  <li><Link href="/" className="text-pink">Home</Link></li>
                  <li><Link href="/about" className="text-pink">About</Link></li>
                  <li><Link href="/portfolio" className="text-pink">Portfolio</Link></li>
                  <li><Link href="/contact" className="text-pink">Contact</Link></li>
                  <li><Link href="/blog" className="text-pink">Blog</Link></li> 
                </ul>
              </div>
            </div>
          </div>

          {/* Main content section with personal details */}
          <div className="col-lg-8">
            <p style={{ fontSize: '1.1rem', color: 'black' }}>
              Hi there! I'm a tech enthusiast with a deep love for web development and all things creative. With a foundation in geographic engineering and environmental studies, I blend my technical expertise with a passion for building beautiful, functional websites.
            </p>
            <p style={{ fontSize: '1.1rem', color: 'black' }}>
              My adventure began when I moved to Canada, seeking new opportunities to grow and pursue my dreams. Since then, I’ve been constantly evolving my skillset, diving into computer programming to become a more well-rounded developer.
            </p>
            <p style={{ fontSize: '1.1rem', color: 'black' }}>
              When I'm not coding, you can find me outdoors, exploring nature, or spending time with my furry friends. I love staying active and believe that a balanced life is the key to success. Whether it’s through personal projects or simply enjoying the little moments, I always strive to combine creativity with technical skills.
            </p>
          </div>

        </div>
      </div>
    </>
  );
}
