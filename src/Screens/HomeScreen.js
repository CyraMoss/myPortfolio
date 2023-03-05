import React from 'react';
import ContactCard from '../Components/ContactCard';

export default function HomeScreen() {
  return (
    <div className="app">
      <div className="homeinfo">
        <h1>Hi, I'm Cyra</h1>
        <h2>Software Developer from Auckland, New Zealand</h2>
        <p className="bio">
          Come check out my portfolio
          <br />
          for my latest project{' '}
          <a href="https://nznoizcyra.herokuapp.com/?fbclid=IwAR32eRusmM2WCDpiU7KDXC6VQpIwAj6PCqdupmqM2lKDld51sZD8dUOKOwc">
            click here!
          </a>
        </p>
        <p>
          I have just started my portfolio so only have one project so far! will
          add more as I do more!
        </p>
      </div>
      <div className="picbox">
        <img className="homepic" src="./images/me.png" alt="mee"></img>
      </div>

      <ContactCard />
    </div>
  );
}
