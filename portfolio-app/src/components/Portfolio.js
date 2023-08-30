import React from 'react';
import '../pages.css'
import ToDo from '../assets/ToDo.png';

export default function Portfolio() {
    return (
        <section>
            <div className='portfolio'>
                <div>
                    <h2>My Portfolio</h2>
                    <p>Hover over the project cards to read their description.</p>
                    <p>Click them to go to their respective repositories in another tab.</p>
                    <p>- - -</p>
                </div>
                <div className='projects'>
                    <div className='project-image'>
                        <div className='project-title'><h2>To Do List</h2></div>
                        <a href="https://github.com/sydKB/To-Do-List" target="_blank">
                            <img src= {ToDo} alt="To-Do List Project" />
                            <div className='project-description'>
                                <p>To-Do List that stores items in local storage.</p>
                            </div>
                        </a>
                    </div>
                    <div className='image'>
                        <div className='project-title'><h2>To Do List</h2></div>
                        <a href="https://github.com/sydKB/To-Do-List" target="_blank">
                            <img src= {ToDo} alt="To-Do List Project" />
                            <div className='project-description'>
                                <p>To-Do List that stores items in local storage.</p>
                            </div>
                        </a>
                    </div>
                    <div className='image'>
                        <div className='project-title'><h2>To Do List</h2></div>
                        <a href="https://github.com/sydKB/To-Do-List" target="_blank">
                            <img src= {ToDo} alt="To-Do List Project" />
                            <div className='project-description'>
                                <p>To-Do List that stores items in local storage.</p>
                            </div>
                        </a>
                    </div>
                    <div className='image'>
                        <div className='project-title'><h2>To Do List</h2></div>
                        <a href="https://github.com/sydKB/To-Do-List" target="_blank">
                            <img src= {ToDo} alt="To-Do List Project" />
                            <div className='project-description'>
                                <p>To-Do List that stores items in local storage.</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        
    );
};