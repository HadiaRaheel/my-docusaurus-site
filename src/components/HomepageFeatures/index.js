// src/components/HomepageFeatures/index.js

import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

// Customer testimonials data
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    text: "The best coffee in town! I come here every morning and the staff always remembers my order. It's like having a second family.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Mike Chen",
    text: "Perfect place to work remotely. Great WiFi, amazing atmosphere, and the pastries are incredible. My productivity has never been better!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    text: "Comrades Cafe has become our weekly meetup spot. The cozy atmosphere and friendly service make every visit special.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 4,
    name: "David Thompson",
    text: "Outstanding quality and service! The latte art is beautiful and the taste is even better. Highly recommend to all coffee lovers.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
  }
];

// Menu preview data
const menuPreview = [
  {
    id: 1,
    name: "Signature Espresso",
    price: "$4.50",
    description: "Rich, bold, and perfectly extracted",
    image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=300&h=200&fit=crop",
    category: "coffee",
    popular: true
  },
  {
    id: 2,
    name: "Caramel Macchiato",
    price: "$5.25",
    description: "Sweet caramel with smooth espresso",
    image: "https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=300&h=200&fit=crop",
    category: "coffee",
    popular: true
  },
  {
    id: 3,
    name: "Fresh Croissant",
    price: "$3.75",
    description: "Buttery, flaky, baked fresh daily",
    image: './img/chococros.png',
    category: "pastry",
    popular: true
  }
];

// Instagram-style gallery data
const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&h=500&fit=crop",
    alt: "Coffee brewing equipment and beans",
    likes: 247,
    category: "Coffee Art"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=500&h=500&fit=crop",
    alt: "Modern cafe interior with industrial design",
    likes: 189,
    category: "Interior"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=500&h=500&fit=crop",
    alt: "Cozy seating area with natural lighting",
    likes: 156,
    category: "Ambiance"
  },
  {
    id: 4,
    src: './img/CafeLatte.png',
    alt: "Beautiful latte art heart design",
    likes: 421,
    category: "Coffee Art"
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/27304301/pexels-photo-27304301.jpeg",
    alt: "Fresh pastries and desserts display",
    likes: 167,
    category: "Pastries"
  }
];

// Testimonials Carousel Component
function TestimonialsCarousel() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className={styles.testimonials}>
      <div className="container">
        <h2 className="text--center margin-bottom--lg">What Our Customers Say</h2>
        <div className={styles.testimonialCarousel}>
          <button className={styles.carouselBtn} onClick={prevTestimonial}>
            ‹
          </button>
          <div className={styles.testimonialCard}>
            <div className={styles.testimonialContent}>
              <div className={styles.stars}>
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
              <p className={styles.testimonialText}>
                "{testimonials[currentTestimonial].text}"
              </p>
              <div className={styles.testimonialAuthor}>
                <img 
                  src={testimonials[currentTestimonial].image} 
                  alt={testimonials[currentTestimonial].name}
                  className={styles.authorImage}
                />
                <span className={styles.authorName}>
                  - {testimonials[currentTestimonial].name}
                </span>
              </div>
            </div>
          </div>
          <button className={styles.carouselBtn} onClick={nextTestimonial}>
            ›
          </button>
        </div>
        <div className={styles.carouselDots}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={clsx(styles.dot, {
                [styles.activeDot]: index === currentTestimonial
              })}
              onClick={() => setCurrentTestimonial(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function MenuPreview() {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <section className={styles.menuPreview}>
      <div className="container">
        <h2
            className="text--center margin-bottom--lg"
            style={{ color: '#8b4513', fontSize: '2rem', fontWeight: 'bold' }}
          >
            Our Popular Menu Items
        </h2>
        <div className={styles.menuGrid}>
          {menuPreview.map((item) => (
            <div
              key={item.id}
              className={styles.menuCard}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {item.popular && <span className={styles.popularBadge}>Popular!</span>}
              <div className={styles.menuImageContainer}>
                <img 
                  src={item.image} 
                  alt={item.name}
                  className={clsx(styles.menuImage, {
                    [styles.menuImageHovered]: hoveredItem === item.id
                  })}
                />
                <div className={clsx(styles.menuOverlay, {
                  [styles.menuOverlayVisible]: hoveredItem === item.id
                })}>
                  <p>{item.description}</p>
                </div>
              </div>
              <div className={styles.menuCardContent}>
                <h3 className={styles.menuItemName}>{item.name}</h3>
                <p className={styles.menuItemPrice}>{item.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text--center margin-top--lg">
          <a href="/docs/menu" className={styles.viewFullMenuButton}>
            View Full Menu
          </a>
        </div>
      </div>
    </section>
  );
}


function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className={styles.photoGallery}>
      <div className="container">
        <h2 className={styles.mainTitle}>Cafe Moments</h2>
        <h1 className={styles.subtitle}>A taste of the Comrades Cafe experience</h1>

        <div className={styles.galleryGrid}>
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className={styles.galleryItem}
              onClick={() => setSelectedImage(image)}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className={styles.galleryImage}
              />
              <div className={styles.galleryOverlay}>
                <span className={styles.likesCount}>❤️ {image.likes}</span>
              </div>
            </div>
          ))}
        </div>
        
        {selectedImage && (
          <div className={styles.modal} onClick={() => setSelectedImage(null)}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt}
                className={styles.modalImage}
              />
              <div className={styles.modalInfo}>
                <div className={styles.modalHeader}>
                  <span className={styles.modalCategory}>{selectedImage.category}</span>
                  <div className={styles.modalLikes}>
                    <span>❤️ {selectedImage.likes} likes</span>
                  </div>
                </div>
                <p className={styles.modalDescription}>{selectedImage.alt}</p>
              </div>
              <button 
                className={styles.closeModal}
                onClick={() => setSelectedImage(null)}
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

// Interactive Map Component
function InteractiveMap() {
  return (
    <section className={styles.mapSection}>
      <div className="container">
        <h2 className="text--center margin-bottom--lg">Visit Us</h2>
        <p className="text--center margin-bottom--xl">We'd love to see you at Comrades Cafe</p>
        <div className={styles.mapContainer}>
          <div className={styles.mapInfo}>
            <div className={styles.mapInfoSection}>
              <h3>📍 Address</h3>
              <p>123 Main Street</p>
              <p>Your City, ST 12345</p>
            </div>
            
            <div className={styles.mapInfoSection}>
              <h3>🕐 Hours</h3>
              <p>Monday - Friday: 7am - 8pm</p>
              <p>Saturday - Sunday: 8am - 9pm</p>
            </div>
            
            <div className={styles.mapInfoSection}>
              <h3>📞 Contact</h3>
              <p>Phone: (123) 456-7890</p>
              <p>Email: hello@comradescafe.com</p>
            </div>
          </div>
          <div className={styles.mapEmbed}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968459391!3d40.74844797932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1629814251436!5m2!1sen!2sus"
              width="100%"
              height="300"
              style={{border: 0}}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

// Newsletter Signup Component
function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setIsSubscribed(true);
        setEmail('');
        setTimeout(() => setIsSubscribed(false), 4000);
      }, 1500);
    }
  };

  return (
    <section className={styles.newsletter}>
      <div className="container">
        <div className={styles.newsletterCard}>
          <div className={styles.coffeeIcon}>☕</div>
          <h2>Join Our Comrades Community!</h2>
          <p>Get exclusive offers, new menu updates, and brewing tips delivered to your inbox.</p>
          
          {isSubscribed ? (
            <div className={styles.successMessage}>
              <div className={styles.successIcon}>🎉</div>
              <strong>Welcome to the Comrades family!</strong><br />
              Check your email for a special discount code.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.newsletterForm}>
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.emailInput}
                disabled={isLoading}
                required
              />
              <button 
                type="submit" 
                className={styles.subscribeBtn}
                disabled={isLoading || !email}
              >
                {isLoading ? (
                  <>
                    <span className={styles.loadingSpinner}></span>
                    Subscribing...
                  </>
                ) : (
                  'Subscribe & Get 10% Off'
                )}
              </button>
            </form>
          )}
          
          <div className={styles.newsletterBenefits}>
            <span className={styles.benefitItem}>
              <span className={styles.benefitIcon}>✨</span>
              Weekly brewing tips
            </span>
            <span className={styles.benefitItem}>
              <span className={styles.benefitIcon}>🎁</span>
              Exclusive offers
            </span>
            <span className={styles.benefitItem}>
              <span className={styles.benefitIcon}>📢</span>
              New menu alerts
            </span>
          </div>
        </div>
        
        <div className={styles.decorativeDots}>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
        </div>
      </div>
    </section>
  );
}

export default function HomepageFeatures() {
  return (
    <>
      <section id="menu">
        <MenuPreview />
      </section>
      <section id="testimonials">
        <TestimonialsCarousel />
      </section>
      <section id="visit-us">
        <InteractiveMap />
      </section>
      <section id="gallery">
        <PhotoGallery />
      </section>
      <section id="newsletter">
        <NewsletterSignup />
      </section>
    </>
  );
}