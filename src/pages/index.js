// src/pages/index.js

import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      {/* Hero Content */}
      <div className="container">
        <div className={clsx(styles.heroContent, {
          [styles.heroContentVisible]: isVisible
        })}>
          
          {/* Left Side - Text Content */}
          <div className={styles.heroTextContent}>
            <h1 className={styles.heroTitle}>
              Welcome to Comrades Cafe
            </h1>
            
            <p className={styles.heroSubtitle}>
              Where every sip and bite feels like coming home. 
              Specializing in artisanal desserts and crafted beverages 
              in a warm, welcoming atmosphere.
            </p>

            <div className={styles.heroStats}>
             <div className={styles.statItem}>
               <span className={styles.statNumber}>5000+</span>
               <span className={styles.statLabel}>Happy Customers</span>
             </div>
             <div className={styles.statItem}>
               <span className={styles.statNumber}>100%</span>
               <span className={styles.statLabel}>Fresh Daily</span>
             </div>
             <div className={styles.statItem}>
               <span className={styles.statNumber}>4.9★</span>
               <span className={styles.statLabel}>Customer Rating</span>
             </div>
            </div>

          </div>

          {/* Right Side - Image Content */}
          <div className={styles.heroImageContent}>
            <img 
              src='./img/cafe.png'
              alt="Cozy cafe interior with warm lighting and customers"
              className={styles.heroImage}
            />
            <div className={styles.imageOverlay}></div>
          </div>
        </div>
      </div>

      {/* Hero Wave Divider */}
      <div className={styles.waveContainer}>
        <svg className={styles.wave} viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            opacity=".25" 
            className={styles.shapeFill}
          />
          <path 
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
            opacity=".5" 
            className={styles.shapeFill}
          />
          <path 
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
            className={styles.shapeFill}
          />
        </svg>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  
  useEffect(() => {
    // Add smooth scrolling behavior to all anchor links
    const handleClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        e.preventDefault();
        const id = target.getAttribute('href').substring(1);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start' 
          });
        }
      }
    };
    
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);
  
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Welcome to Comrades Cafe - Your friendly neighborhood cafe serving joy in every sip and bite">
      <HomepageHeader />
      <main>
        
        {/* Our Story Section */}
        <section id="info" className={styles.ourStorySection}>
          <div className="container">
            <div className={styles.storyContent}>
              <div className={styles.storyText}>
                <h2 className={styles.storyTitle}>Our Story</h2>
                <p className={styles.storyDescription}>
                  Founded in 1900, Comrades Cafe brings together the perfect 
                  blend of traditional recipes and modern techniques to create 
                  unforgettable dessert and drink experiences.
                </p>
                <p className={styles.storyDescription}>
                  Our passionate team of pastry chefs and baristas work 
                  tirelessly to deliver innovative flavors using only the highest 
                  quality ingredients.
                </p>
              </div>
              
              <div className={styles.storyImage}>
                <img 
                  src='./img/story.png' 
                  alt="Comrades Cafe Interior - Modern cozy atmosphere with hanging plants and wooden tables"
                  className={styles.cafeInteriorImage}
                />
                <div className={styles.imageOverlay}>
                  <div className={styles.overlayContent}>
                    <span className={styles.overlayText}>Experience Our Cozy Atmosphere</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <HomepageFeatures />
      </main>
    </Layout>
  );
}