import React from 'react';
import { Form } from 'react-router-dom';
import ContactCard from '../Components/ContactCard';

export default function ContactScreen() {
  return (
    <div>
      <div className="margin10 blur border ">
        <h1 className="center">Contact Me </h1>
        <p className="center">
          I'm Available every day during work hours - or leave me a message and
          i'll get back to you
        </p>
        <hr />
        <ul>
          <li className="contactme1">
            <a href="tel:+64223276022">
              <i className="fa-solid fa-phone "></i>Phone me on 0223276022
            </a>
          </li>
          <li className="contactme1">
            <a href="mailto:cyramoss@icloud.com">
              <i className="fa-regular fa-envelope "></i>
              E-mail me at cyramoss@icloud.com
            </a>
          </li>
          <li className="contactme1">
            <a href="https://www.facebook.com/mynameaintkyraa">
              <i className="fa-brands fa-facebook "></i>
              Give me a message on Facebook
            </a>
          </li>
        </ul>
        <div className="middle">
          <form className="center">
            <div className="message-title">Please share FeedBack</div>
            <label className="label">Message</label>
            <input type="text" placeholder="Write me a message/Feedback here" />
            <button type="Submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}
