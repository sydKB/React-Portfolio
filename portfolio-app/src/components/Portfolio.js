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
                                <p>quiiiiizzzz</p>
                            </div>
                        </a>
                    </div>
                    <div className='image'>
                        <div className='project-title'><h2>Local storage scheduler</h2></div>
                        <a href="https://github.com/sydKB/Workday-Scheduler" target="_blank">
                            <img src= {Scheduler} alt="Workday-Scheduler" />
                            <div className='project-description'>
                                <p>y a  know</p>
                            </div>
                        </a>
                    </div>
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
                        <div className='project-title'><h2>Social Network API</h2></div>
                        <a href="https://github.com/sydKB/Social-Network-API" target="_blank">
                            <img src= {Social} alt="Social Network API" />
                            <div className='project-description'>
                                <p>Social Network API that uses MongoDB.</p>
                            </div>
                        </a>
                    </div>
                    <div className='image'>
                        <div className='project-title'><h2>Employee Finder</h2></div>
                        <a href="https://github.com/sydKB/Employee-Finder" target="_blank">
                            <img src= {EmployeeFinder} alt="To-Do List Project" />
                            <div className='project-description'>
                                <p>Finding employee.</p>
                            </div>
                        </a>
                    </div>
                    <div className='project-image'>
                        <div className='project-title'><h2>Password Generator</h2></div>
                        <a href="https://github.com/sydKB/Password-Generator" target="_blank">
                            <img src= {Password} alt="Password Generator" />
                            <div className='project-description'>
                                <p>To-Do List that stores items in local storage.</p>
                            </div>
                        </a>
                    </div>
                    <div className='image'>
                        <div className='project-title'><h2>SVG Logo Maker</h2></div>
                        <a href="https://github.com/sydKB/Logo-Maker" target="_blank">
                            <img src= {LogoMaker} alt="SVG Logo Maker" />
                            <div className='project-description'>
                                <p>Customizing logo in terminal.</p>
                            </div>
                        </a>
                    </div>
                    <div className='image'>
                        <div className='project-title'><h2>E-commerce ORM</h2></div>
                        <a href="https://github.com/sydKB/E-Commerce_Back_End" target="_blank">
                            <img src= {Ecommerce} alt="E-Commerce-ORM" />
                            <div className='project-description'>
                                <p>Object Relational mapping background.</p>
                            </div>
                        </a>
                    </div>
                    
                </div>
            </div>
        </section>
        
    );
};