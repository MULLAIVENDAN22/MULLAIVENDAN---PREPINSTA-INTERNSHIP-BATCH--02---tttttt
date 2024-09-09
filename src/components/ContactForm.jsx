// src/components/ContactForm.js
import React, { useState } from 'react';
import './ContactForm.css';
import video from './video.mp4';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to server)
    console.log(formData);
  };

  return (
    <section id="contact" className="contact-section">
      <video
      autoPlay
      loop
      muted
      className="background-video"
      style={{
        width: '100%',
        height: '100vh',
        objectFit: 'cover',
        zIndex: 1,
      }}>
      <source src={video} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
      <h2>Get in Touch</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Message:
          <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
        </label>
        <button type="submit" className="btn-primary">Send Message</button>
      </form>
    </section>
  );
};

export default ContactForm;
