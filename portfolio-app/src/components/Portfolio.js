import React from 'react';
import '../pages.css'
import ToDo from '../assets/ToDo.png';

export default function Portfolio() {
    return (
        <section>
            <div className='portfolio'>
                <div><h2>My Portfolio</h2></div>
                <div className='project'>
                    <a href="https://github.com/sydKB/To-Do-List" target="_blank">
                        <img src= {ToDo} alt="To-Do List Project" />
                        <div className='proj-description'>
                            <p>To-Do List that stores items in local storage.</p>
                        </div>
                    </a>
                    <a href="https://github.com/sydKB/To-Do-List" target="_blank">
                        <img src= {ToDo} alt="ToDo" />
                        <div className='proj-description'>
                            <p>To-Do</p>
                        </div>
                    </a>
                    <a href="https://github.com/sydKB/To-Do-List" target="_blank">
                        <img src= {ToDo} alt="ToDo" />
                        <div className='proj-description'>
                            <p>To-Do</p>
                        </div>
                    </a>
                    <a href="https://github.com/sydKB/To-Do-List" target="_blank">
                        <img src= {ToDo} alt="ToDo" />
                        <div className='proj-description'>
                            <p>To-Do</p>
                        </div>
                    </a>
                    <a href="https://github.com/sydKB/To-Do-List" target="_blank">
                        <img src= {ToDo} alt="ToDo" />
                        <div className='proj-description'>
                            <p>To-Do</p>
                        </div>
                    </a>
                    <a href="https://github.com/sydKB/To-Do-List" target="_blank">
                        <img src= {ToDo} alt="ToDo" />
                        <div className='proj-description'>
                            <p>To-Do</p>
                        </div>
                    </a>
                </div>
            </div>
        </section>
        
    );
};