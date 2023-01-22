import React from 'react';

export default function ProjectScreen() {
  return (
    <div className="margin10 row">
      <div className="col-4">
        <img className="pimg border" src="./images/work3.png" alt="mee"></img>
        <img className="pimg border" src="./images/work2.png" alt="mee"></img>
        <img className="pimg border" src="./images/work1.png" alt="mee"></img>
      </div>
      <div className="col blur border">
        <h2 className="center">NZ Noiz</h2>
        <div className="projectinfo">
          <p>
            This project uses MERN stack <br />
            <strong>Some skills in this project are:</strong>
            <ul>
              <li>- HTML, CSS & JS - as the base of the website</li>
              <li>
                - React - to build interactive interfaces with less code than
                vanilla js
              </li>
              <li>- Axios - to get data from external sites</li>

              <li>- Express - to help manage servers and routes</li>
              <li>- MongoDB - to store data</li>
              <li>- Cloudinary - to upload photos</li>
              <li>- Horuku - for hosting</li>
            </ul>
            <strong>In this project i added a few features including:</strong>
            <ul>
              <li>
                - A login/signup page for users to see their own purchases.
              </li>
              <li>
                - A seperate one for admins to see dashbord, all orders, all
                users etc.
              </li>
              <li>- A carousel to show latest deals.</li>
              <li>
                - Product page that shows all nessacery information about the
                product
              </li>
              <li>
                - Search page can filter items between category/price/rating
              </li>
              <li>
                - Admin can create/update and delete products/users and orders
              </li>
              <li>- Once cart has what you want you can pay with paypal.</li>
              <li>- Users can leave their review.</li>
            </ul>{' '}
            if you are checking out the website you can either sign up or use
            admin login:
            <br />
            <strong>Email:</strong> admin@example.com <br />
            <strong>Password:</strong> 123456
            <br />
            Feedback always welcomed - please let me know how I did and how i
            can improve
          </p>
        </div>
      </div>
    </div>
  );
}
