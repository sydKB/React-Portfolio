import React from 'react';
import '../pages.css'
import X from '../assets/Twitter.png'

export default function Footer() {
  return (
    <footer className='footer'>
        <a href='https://github.com/sydKB' target="_blank">
          <img src='https://www.shareicon.net/data/48x48/2015/09/02/94536_mark_512x512.png' alt='github' />
        </a>
        <a href='https://www.linkedin.com/in/sydney-birza-106987185/' target="_blank">
          <img src='https://www.shareicon.net/data/48x48/2017/06/28/888041_logo_512x512.png' alt='linked-in' />
        </a>
        <a href='https://twitter.com/sydb24' target="_blank">
          <img src={X} alt='twitter' />
        </a>
    </footer>
  );
};