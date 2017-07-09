import React from 'react';
import Interactive from 'react-interactive';
import { Link } from 'react-router';
import s from '../styles/home.style';
import FunctionBox from './FunctionBox';

function Home() {
  const repoReadmeLink = text => (
    <Interactive
      as="a"
      {...s.link}
      href=""
    >{text}</Interactive>
  );

  return (
    <div className='homepage'>
      <div className='npmInstall'>$ npm install piecewisecss</div>
      <FunctionBox />
    </div>
  );
}

export default Home;
