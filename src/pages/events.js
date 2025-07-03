// src/pages/events.js
import React, { useState } from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const upcomingEvents = [
  {
    id: 1,
    title: "Coffee Cupping Workshop",
    date: "July 15, 2025",
    time: "2:00 PM - 4:00 PM",
    description: "Learn the art of coffee tasting with our master barista. Discover different flavor profiles and brewing techniques.",
    image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&h=250&fit=crop",
    price: "$25",
    category: "Workshop",
    spots: 12
  },
  {
    id: 2,
    title: "Live Jazz Night",
    date: "July 20, 2025",
    time: "7:00 PM - 10:00 PM",
    description: "Enjoy smooth jazz music while sipping your favorite coffee. Featuring local artists and a cozy atmosphere.",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=250&fit=crop",
    price: "Free",
    category: "Music",
    spots: 50
  },
  {
    id: 3,
    title: "Latte Art Competition",
    date: "July 25, 2025",
    time: "11:00 AM - 2:00 PM",
    description: "Show off your latte art skills! Open to all skill levels. Prizes for the most creative designs.",
    image: "https://images.unsplash.com/photo-1516711462093-6b492fb284b3?w=400&h=250&fit=crop",
    price: "$15",
    category: "Competition",
    spots: 20
  },
  {
    id: 4,
    title: "Book Club Meeting",
    date: "August 1, 2025",
    time: "6:00 PM - 8:00 PM",
    description: "Join our monthly book club discussion. This month we're reading 'The Coffee Trader' by David Liss.",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=250&fit=crop",
    price: "Free",
    category: "Literature",
    spots: 15
  },
  {
    id: 5,
    title: "Pastry Making Class",
    date: "August 8, 2025",
    time: "10:00 AM - 1:00 PM",
    description: "Learn to make our signature pastries from scratch. Take home your creations and recipe cards.",
    image: "https://images.unsplash.com/photo-1555507036-ab794f4aadb3?w=400&h=250&fit=crop",
    price: "$35",
    category: "Workshop",
    spots: 8
  }
];

export default function Events() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [registeredEvents, setRegisteredEvents] = useState([]);

  const categories = ['All', ...new Set(upcomingEvents.map(event => event.category))];
  
  const filteredEvents = selectedCategory === 'All' 
    ? upcomingEvents 
    : upcomingEvents.filter(event => event.category === selectedCategory);

  const handleRegister = (eventId) => {
    if (!registeredEvents.includes(eventId)) {
      setRegisteredEvents([...registeredEvents, eventId]);
    }
  };

  return (
    <Layout title="Events" description="Join us for exciting events at Comrades Cafe">
      <div className="container margin-vert--lg">
        <header className="text--center margin-bottom--xl">
          <h1 className="hero__title">Upcoming Events</h1>
          <p className="hero__subtitle">
            Join our community for workshops, entertainment, and special gatherings
          </p>
        </header>

        {/* Category Filter */}
        <div className={styles.categoryFilter}>
          {categories.map(category => (
            <button
              key={category}
              className={`${styles.categoryBtn} ${selectedCategory === category ? styles.active : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className={styles.eventsGrid}>
          {filteredEvents.map((event) => (
            <div key={event.id} className={styles.eventCard}>
              <div className={styles.eventImage}>
                <img src={event.image} alt={event.title} />
                <div className={styles.eventCategory}>
                  {event.category}
                </div>
              </div>
              
              <div className={styles.eventContent}>
                <h3 className={styles.eventTitle}>{event.title}</h3>
                
                <div className={styles.eventDetails}>
                  <div className={styles.eventDate}>
                    <span className={styles.icon}>📅</span>
                    {event.date}
                  </div>
                  <div className={styles.eventTime}>
                    <span className={styles.icon}>🕐</span>
                    {event.time}
                  </div>
                  <div className={styles.eventPrice}>
                    <span className={styles.icon}>💰</span>
                    {event.price}
                  </div>
                  <div className={styles.eventSpots}>
                    <span className={styles.icon}>👥</span>
                    {event.spots} spots available
                  </div>
                </div>
                
                <p className={styles.eventDescription}>
                  {event.description}
                </p>
                
                <button 
                  className={`${styles.registerBtn} ${
                    registeredEvents.includes(event.id) ? styles.registered : ''
                  }`}
                  onClick={() => handleRegister(event.id)}
                  disabled={registeredEvents.includes(event.id)}
                >
                  {registeredEvents.includes(event.id) ? 'Registered ✓' : 'Register Now'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={styles.ctaSection}>
          <h2>Want to Host an Event?</h2>
          <p>
            Comrades Cafe is the perfect venue for your next gathering. 
            Contact us to learn about our private event options.
          </p>
          <button className={styles.ctaBtn}>
            Contact Us About Events
          </button>
        </div>
      </div>
    </Layout>
  );
}