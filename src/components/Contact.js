import React from 'react';
import { useState } from 'react';
import '../pages.css'


export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [touchedFields, setTouchedFields] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleblur = (e) => {
    const { name } = e.target;
    setTouchedFields((prevTouched) => ({
      ...prevTouched,
      [name]: true,
    }));
  };

  return ( 
    <section className='page'>
      <div className='contact'>
        <form className='form'>
          <h2 className='contact-header'>Contact Form</h2>
            <div>
              <label htmlFor='name'>Name</label>
              <input type='text' name='name' value={form.name} onChange={handleChange} onBlur={handleblur}></input>
            </div>
            <div>
              <label htmlFor='email'>Email</label>
              <input type='email' name='email' value={form.email} onChange={handleChange} onBlur={handleblur}></input>
            </div>
            <div>
              <label htmlFor='message'>Message</label>
              <textarea rows='5' name='message' value={form.message} onChange={handleChange} onBlur={handleblur}></textarea>
              {touchedFields && !form.message && ( <p className='error'>All fields must be filled!</p>)}
            </div>
            <button type='submit'>Send</button>
        </form>
      </div>
    </section>
    )
};