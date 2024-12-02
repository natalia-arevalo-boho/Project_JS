// Natalia Arevalo, student ID: 200560279
// Project: Personal Portfolio
// This is the Blog page, where articles related to Technology, Geographic Information Systems (GIS), and Environmental Studies are displayed.

"use client";

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import '/styles/styles.css';

export default function Blog() {
  return (
    <>
      {/* Meta head for SEO */}
      <Head>
        <title>Blog - Technology & Environmental Studies</title>
        <meta name="description" content="Articles on GIS and Environmental Studies" />
      </Head>

      {/* Header section with blog title and description */}
      <header className="py-5 bg-light border-bottom mb-4">
        <div className="container text-center my-5">
          <h1 className="fw-bolder">Blog</h1>
          <p className="lead mb-0">Explore articles on Geographic Information Systems and Environmental Studies.</p>
        </div>
      </header>

      <div className="container">
        <div className="row">
          {/* Categories section with navigation links */}
          <div className="col-lg-3 mb-4">
            <div className="card">
              <div className="card-header">Categories</div>
              <div className="card-body">
                <ul className="list-unstyled mb-0">
                  {/* Links to other pages on the portfolio site */}
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/about">About</Link></li>
                  <li><Link href="/portfolio">Portfolio</Link></li>
                  <li><Link href="/contact">Contact</Link></li>
                  <li><Link href="/blog">Blog</Link></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Blog Articles Section */}
          <div className="col-lg-9">
            {/* First Article */}
            <div className="mb-4">
              <h2>Article 1: The Role of Software in Environmental Management</h2>
              {/* Image related to the first article */}
              <Image 
                src="/images/envi.jpg" 
                alt="Environmental Software"
                width={600} 
                height={300} 
                className="img-fluid mb-3"
              />
              {/* Paragraphs of the article */}
              <p>
                As technology advances, computer applications play an important role in environmental management. This article highlights the importance of using programming languages and computer tools to solve environmental problems, such as climate change modeling, waste management, and environmental impact assessments.
              </p>
              <p>
                Python and ArcGIS are used together in environmental management to efficiently process and analyze data. Python, with its libraries, helps organize and analyze large volumes of data, while ArcGIS focuses on spatial analysis, allowing the visualization and study of the geographic distribution of environmental problems.
              </p>
              <p>
                For example, in a project to assess the impact of deforestation, Python can be used to analyze satellite data over time, detecting patterns in forest loss. Then, ArcGIS can visualize this data on a map, showing the areas most affected by deforestation. This combination allows for better decision-making in conservation efforts by identifying critical areas for intervention.
              </p>
            </div>

            {/* Second Article */}
            <div className="mb-4">
              <h2>Article 2: Environmental Data and the Importance of Data Visualization</h2>
              {/* Image related to the second article */}
              <Image 
                src="/images/environmental-data.jpg" 
                alt="Environmental Data"
                width={600}
                height={300} 
                className="img-fluid mb-3"
              />
              {/* Paragraphs of the second article */}
              <p>
                In the field of environmental studies, data collection and analysis are essential. However, data alone can be difficult to interpret. By using software tools such as Python, environmental data can be represented visually to help better understand patterns, trends, and correlations.
              </p>
              <p>
                For example, environmental data such as air quality, temperature, and pollution levels can be visualized on maps or graphs to highlight areas that require attention. Using Python, for example, allows environmental scientists to create line graphs, bar charts, and heat maps, making it easier to identify trends over time. Additionally, tools such as ArcGIS can be used to overlay this data on geographic maps, offering a spatial view that helps identify specific regions with high pollution or temperature anomalies. These visual representations make it easier to communicate complex environmental issues to policymakers, stakeholders, and the public, allowing for more effective decision-making and targeted interventions for environmental protection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
