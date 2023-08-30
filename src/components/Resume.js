import React from 'react';
import '../pages.css'
import '../assets/ToDo.png'

export default function Resume() {
  return (
    <section className='page'>
      <div className='resume'>
        <h1>Sydney Birza</h1>
        <a href="../assets/ToDo.png" download="ToDo.png">Click here to download</a>
        <h2>Front-end Skills</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
        <h2>Back-end Skills</h2>
        <ul>
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>REST</li>
          <li>GraphQl</li>

        </ul>
      </div>
    </section>
  );
};