import React, { useState } from "react";
import "./contactPage.css";

const PhoneIcon = () => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='#fff'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.29 6.29l1.17-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z' />
  </svg>
);

const MailIcon = () => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='#fff'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z' />
    <polyline points='22,6 12,13 2,6' />
  </svg>
);

const ContactPage: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", form);
  };

  return (
    <div className='contact-page'>
      <div className='contact-card'>
        <div className='contact-info'>
          <div className='contact-info-block'>
            <div className='contact-info-icon'>
              <PhoneIcon />
            </div>
            <h3 className='contact-info-title'>Call To Us</h3>
            <p className='contact-info-text'>We are available 24/7, 7 days a week.</p>
            <p className='contact-info-text'>Phone: +88016111112222</p>
          </div>

          <hr className='contact-divider' />

          <div className='contact-info-block'>
            <div className='contact-info-icon'>
              <MailIcon />
            </div>
            <h3 className='contact-info-title'>Write To US</h3>
            <p className='contact-info-text'>Fill out our form and we will contact you within 24 hours.</p>
            <p className='contact-info-text'>Emails: customer@exclusive.com</p>
            <p className='contact-info-text'>Emails: support@exclusive.com</p>
          </div>
        </div>

        <form className='contact-form' onSubmit={handleSubmit}>
          <div className='contact-form-row'>
            <input
              className='contact-input'
              type='text'
              name='name'
              placeholder='Your Name *'
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              className='contact-input'
              type='email'
              name='email'
              placeholder='Your Email *'
              value={form.email}
              onChange={handleChange}
              required
            />
            <input
              className='contact-input'
              type='tel'
              name='phone'
              placeholder='Your Phone *'
              value={form.phone}
              onChange={handleChange}
              required
            />
          </div>

          <textarea
            className='contact-textarea'
            name='message'
            placeholder='Your Message'
            value={form.message}
            onChange={handleChange}
            rows={8}
          />

          <div className='contact-form-footer'>
            <button type='submit' className='contact-submit-btn'>
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
