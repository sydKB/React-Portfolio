import React from 'react';
import '../pages.css'
import Me from '../assets/Me.png'

export default function AboutMe() {
  return (
    <section className='page'>
      <div className='about'>
        <div className='me'>
          <h1>Sydney Birza</h1>
          <p>Full-Stack Developer</p>
          <img src= {Me} alt="To-Do List Project" className='me-img'/>
        </div>
        <div className='bio'>
          <h3>About me</h3>
          <p>Hey! I'm Sydney, a UC Berkeley Full-Stack Coding bootcamp graduate.
            This React portfolio should give you an idea of the skills I've acquired 
            over the course of this program. Feel free to navigate between the tabs in
            the navbar. 
          </p>
        </div>
      </div>
      
  </section>
  );
};