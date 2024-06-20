import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import emailjs from 'emailjs-com';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('service_FiSOC24', 'template_FiSOC24', formData, 'FiSOC')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Your message has been sent!');
        setFormData({ name: '', email: '', message: '' }); // Clear form fields
      }, (err) => {
        console.log('FAILED...', err);
        alert('Failed to send the message. Please try again later.');
      });
  };

  return (
    <div className='bg-bgcolor text-whitesmoke pt-12 pb-12' id='contact'>
      <h1 className='text-5xl font-bold mb-8 text-center text-blue'>Contact Us</h1>
      <div className='px-4 lg:px-14 max-w-screen-xl mx-auto mt-2 mb-8 flex flex-col md:flex-row gap-8'>
        <div className='md:w-1/2'>
          <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
            <div className='flex flex-col'>
              <label htmlFor="name" className='text-lg mb-2'>Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className='p-3 rounded bg-gray-800 text-black border border-gray-700'
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor="email" className='text-lg mb-2'>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className='p-3 rounded bg-gray-800 text-black border border-gray-700'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor="message" className='text-lg mb-2'>Message</label>
              <textarea
                id="message"
                name="message"
                className='p-3 rounded bg-gray-800 text-black border border-gray-700'
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className='p-3 rounded hover:bg-blue-700' style={{ backgroundColor: '#88e1ff', color: '#001c30' }} > Send </button>
          </form>
        </div>
        <div className='md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left'>
          <p className='md:text-lg text-whitesmoke mb-4'>
            Email: <a href="mailto:fisoc@cumminscollege.in" className='text-blue'>fisoc@cumminscollege.in</a>
          </p>
        
          <p className='md:text-lg text-whitesmoke mb-4'>
            Finance and Economics Club of MKSSS Cummins College of Engineering, Pune
          </p>
          <div className='flex justify-center md:justify-start mt-4'>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className='mx-2 text-2xl text-whitesmoke hover:text-blue'>
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className='mx-2 text-2xl text-whitesmoke hover:text-blue'>
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
