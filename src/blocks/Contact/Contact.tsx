'use client'

import React, { useState } from 'react';  // Add useState to the import
import classes from './Contact.module.css';
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

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
  const router = useRouter()
  const [success, setSuccess] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    const form = e.target as HTMLFormElement; // Store form reference
    const formData = new FormData(form);
    
    try {
      const response = await fetch('/api/form-submit', {
        method: 'POST',
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        setSuccess(true);
        form.reset(); // Use stored form reference
      } else {
        const data = await response.json();
        throw new Error(data.error || 'Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setError(error instanceof Error ? error.message : 'Failed to submit form');
    } finally {
      setIsLoading(false);
    }
};

  // In your return statement, update the button and add error message:
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
            <button 
              type="submit" 
              className={classes.submitButton}
              disabled={isLoading}
            >
              {isLoading ? 'Submitting...' : 'Submit'}
            </button>
            {error && (
              <div className={classes.errorMessage}>
                {error}
              </div>
            )}
            {success && (
              <div className={classes.successMessage}>
                Thank you for your message. We'll get back to you soon!
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
