import React from 'react';
import styles from './Testimonial.module.css';

interface TestimonialProps {
  testimonial: {
    quote: string;
    image: string; // Add image property
    attribution: {
      name: string;
      company: string;
    };
  };
}

export const Testimonial: React.FC<TestimonialProps> = ({ testimonial }) => {
  return (
    <div className={styles.testimonialWrapper}>
      <div className={styles.testimonialContainer}>
        {/* <div className={styles.imageContainer}>
          <img src={"https://www.tenforums.com/attachments/user-accounts-family-safety/322690d1615743307-user-account-image-log-user.png"} alt={testimonial.attribution.name} className={styles.testimonialImage} />
        </div> */}
        <div className={styles.contentContainer}>
          <div className={styles.quoteMarkContainer}>
            <div className={styles.quoteMark}>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="20" fill="#E6FAF5"/>
                <path d="M15 15L20 25H17L12 15H15ZM23 15L28 25H25L20 15H23Z" fill="#4FD1C5"/>
              </svg>
            </div>
          </div>
          <p className={styles.quote}>{testimonial.quote}</p>
          <div className={styles.attribution}>
            <span className={styles.name}>{testimonial.attribution.name}</span>
            <span className={styles.separator}>, </span>
            <span className={styles.company}>{testimonial.attribution.company}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;