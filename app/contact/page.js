// Natalia Arevalo - ID: 1234567
// This is the Contact page of my personal website. It includes a contact form and links to my social media profiles like LinkedIn, Email, and GitHub.

"use client";

import Head from 'next/head';
import Link from 'next/link'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import '/styles/styles.css';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Get in touch" />
      </Head>

      <header className="py-5 bg-light border-bottom mb-4">
        <div className="container text-center my-5">
          <h1 className="fw-bolder">Contact Me</h1>
          <p className="lead mb-0">Feel free to reach out!</p>
          
          <div className="d-flex justify-content-center my-3">
            <a href="https://www.linkedin.com/in/natalia-arevalo-boho/" target="_blank" rel="noopener noreferrer" className="mx-2">
              <img src="/images/link.png" alt="LinkedIn" width="40" height="40" />
            </a>
            <a href="mailto:arevalonataliab@gmail.com" className="mx-2">
              <img src="/images/email.jpg" alt="Email" width="40" height="40" />
            </a>
            <a href="https://github.com/natalia-arevalo-boho" target="_blank" rel="noopener noreferrer" className="mx-2">
              <img src="/images/git.png" alt="GitHub" width="40" height="40" />
            </a>
          </div>
        </div>
      </header>

      <div className="container">
        <div className="row">
   
          <div className="col-lg-4 mb-4">
            <div className="card">
              <div className="card-header">Categories</div>
              <div className="card-body">
                <ul className="list-unstyled mb-0">
                  <li>
                    <Link href="/" legacyBehavior>
                      <a>Home</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" legacyBehavior>
                      <a>About</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/portfolio" legacyBehavior>
                      <a>Portfolio</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" legacyBehavior>
                      <a>Contact</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" legacyBehavior>
                      <a>Blog</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        
          <div className="col-lg-8">
            <form>
             
              <div className="mb-3">
                <label className="form-label" htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Your email"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="message">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="5"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>

              
              <button type="submit" className="btn btn-primary">Send</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
