'use client'

import React from 'react';
import classes from './Contact.module.css';

interface ContactProps {
  heading?: string;
  description?: string;
  minimumProjectValue?: string;
  blockType: 'contactBlock';
}

export const Contact: React.FC<ContactProps> = ({
  heading = 'Contact us',
  description,
  minimumProjectValue = '$25,000',
}) => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    try {
      // Add your form submission logic here
      console.log('Form submitted:', Object.fromEntries(formData));
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className={classes.contactBlock}>
      <div className={classes.container}>
        <div className={classes.content}>
          <div className={classes.leftContent}>
            <h2>{heading}</h2>
            <p>{description}</p>
            {minimumProjectValue && (
              <p className={classes.projectNote}>
                Please be aware that our current minimum project engagement is {minimumProjectValue}.
              </p>
            )}
          </div>
          <form onSubmit={handleSubmit} className={classes.form}>
            <div className={classes.formRow}>
              <div className={classes.formGroup}>
                <label htmlFor="firstName">FIRST NAME</label>
                <input 
                  type="text" 
                  id="firstName"
                  name="firstName"
                  placeholder="Your first name" 
                />
              </div>
              <div className={classes.formGroup}>
                <label htmlFor="lastName">LAST NAME</label>
                <input 
                  type="text" 
                  id="lastName"
                  name="lastName"
                  placeholder="Your last name" 
                />
              </div>
            </div>
            <div className={classes.formRow}>
              <div className={classes.formGroup}>
                <label htmlFor="company">COMPANY</label>
                <input 
                  type="text" 
                  id="company"
                  name="company"
                  placeholder="Company name" 
                />
              </div>
              <div className={classes.formGroup}>
                <label htmlFor="contact">CONTACT</label>
                <input 
                  type="text" 
                  id="contact"
                  name="contact"
                  placeholder="Email address or phone number" 
                />
              </div>
            </div>
            <div className={classes.formGroup}>
              <label htmlFor="message">MESSAGE</label>
              <textarea 
                id="message"
                name="message"
                placeholder="What problem can Maslow help solve?" 
                rows={4}
              ></textarea>
            </div>
            <button type="submit" className={classes.submitButton}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};