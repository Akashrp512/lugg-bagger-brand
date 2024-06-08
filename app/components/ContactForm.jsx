"use client"
import { useState } from 'react';
import Input from './Input';
import TextArea from './TextArea';
import Button from './Button';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to a server
    console.log('Form submitted:', formData);
  };

  return (
    <div className="lg:max-w-[70%] w-full flex flex-col gap-5 p-5 sm:border sm:border-slate-200 rounded-lg">
      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-5">
        <Input
          label="Name"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input
          label="Phone Number"
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <Input
          label="Email (optional)"
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
        <TextArea
          label="Message"
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Submit" fullWidth />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

