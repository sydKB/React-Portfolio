import React from 'react';
import '../pages.css'
import Quiz from '../assets/Quiz.png';
import Scheduler from '../assets/Scheduler.png';
import ToDo from '../assets/ToDo.png';
import Social from '../assets/Social-API.png';
import EmployeeFinder from '../assets/Employee-Finder.png';
import Password from '../assets/Password.png';
import LogoMaker from '../assets/Logo-Maker.png';
import Ecommerce from '../assets/Ecommerce.png';


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
                    <div className='image'>
                        <div className='project-title'><h2>Timed Quiz</h2></div>
                        <a href="https://github.com/sydKB/Code-Quiz" target="_blank">
                            <img src= {Quiz} alt="Code-Quiz" />
                            <div className='project-description'>
                                <p>A timed quiz that tracks scores based on correct answers and time elapsed.</p>
                            </div>
                        </a>
                    </div>
                    <div className='image'>
                        <div className='project-title'><h2>Local storage scheduler</h2></div>
                        <a href="https://github.com/sydKB/Workday-Scheduler" target="_blank">
                            <img src= {Scheduler} alt="Workday-Scheduler" />
                            <div className='project-description'>
                                <p>A workday scheduler with save buttons for each hour block. Colors change based on current time.</p>
                            </div>
                        </a>
                    </div>
                    <div className='project-image'>
                        <div className='project-title'><h2>To Do List</h2></div>
                        <a href="https://github.com/sydKB/To-Do-List" target="_blank">
                            <img src= {ToDo} alt="To-Do-List" />
                            <div className='project-description'>
                                <p>To-Do List that creates, stores, and deletes list items in database.</p>
                            </div>
                        </a>
                    </div>
                    <div className='image'>
                        <div className='project-title'><h2>Social Network API</h2></div>
                        <a href="https://github.com/sydKB/Social-Network-API" target="_blank">
                            <img src= {Social} alt="Social-Network-API" />
                            <div className='project-description'>
                                <p>Social Network API that uses MongoDB.</p>
                            </div>
                        </a>
                    </div>
                    <div className='image'>
                        <div className='project-title'><h2>Employee Finder</h2></div>
                        <a href="https://github.com/sydKB/Employee-Finder" target="_blank">
                            <img src= {EmployeeFinder} alt="Employee-Finder" />
                            <div className='project-description'>
                                <p>Command-line application that views and modifies MySQL database based on Inquirer responses.</p>
                            </div>
                        </a>
                    </div>
                    <div className='project-image'>
                        <div className='project-title'><h2>Password Generator</h2></div>
                        <a href="https://github.com/sydKB/Password-Generator" target="_blank">
                            <img src= {Password} alt="Password-Generator" />
                            <div className='project-description'>
                                <p>Random password generator.</p>
                            </div>
                        </a>
                    </div>
                    <div className='image'>
                        <div className='project-title'><h2>SVG Logo Maker</h2></div>
                        <a href="https://github.com/sydKB/Logo-Maker" target="_blank">
                            <img src= {LogoMaker} alt="SVG-Logo-Maker" />
                            <div className='project-description'>
                                <p>Interactive application that generates SVG logo based on selected Inquirer choices.</p>
                            </div>
                        </a>
                    </div>
                    <div className='image'>
                        <div className='project-title'><h2>E-commerce ORM</h2></div>
                        <a href="https://github.com/sydKB/E-Commerce_Back_End" target="_blank">
                            <img src= {Ecommerce} alt="E-Commerce-ORM" />
                            <div className='project-description'>
                                <p>Object Relational Mapping Application with MySQL.</p>
                            </div>
                        </a>
                    </div>
                    
                </div>
            </div>
        </section>
        
    );
};