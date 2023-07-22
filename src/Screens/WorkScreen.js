import React from 'react';

export default function WorkScreen() {
  return (
    <div className="blur border margin10">
      <h1 className="center">My Work</h1>
      <hr />
      <div className="flex padding">
        <h2 className='green'><a href="https://www.properteasy.co.nz">ProperTEasy</a></h2> <h6 className='green'>{`<< Click here to go to the website`}</h6>
      </div>
      <p className='padding'>
        This project showcases my skills in Full Stack development.
      </p>
      <hr/>
      <div>
      <h2 className='marginright1 green'>what problem does ProperTEasy solve?</h2>
      <ul className='marginright1'>
        <li>
         <strong> Tenant screening and Selection </strong> 
         <h6>ProperTEasy offers landlords access to tenant histories, including rental payment records, 
          previous tenant reviews, and inspection results. This empowers landlords to make informed 
          decisions when selecting tenants, ensuring they choose reliable and responsible individuals.
        </h6></li>
        <hr/>
        <li>
          <strong>
          Efficient Property Management:</strong>
          <h6>For landlords, PropertEasy streamlines property management by providing a centralized platform
             to manage rental listings, tenant details, maintenance requests, and property inspections.
              This helps landlords save time, reduce paperwork, and efficiently handle day-to-day operations.
        </h6></li>
        <hr/>
        <li>
          <strong>
          Transparent Tenant-Landlord Communication:</strong> 
          <h6>
            The platform facilitates clear and transparent communication between tenants and landlords. 
            Tenants can easily update their rental status, request maintenance, and leave reviews for their 
            landlords. This improved communication helps build trust and enhances the rental experience for 
            both parties.
        </h6></li>
        <hr/>
        <li>
          <strong>Enhanced Tenant Satisfaction:</strong>
          <h6>Tenants benefit from a user-friendly platform that allows them to update their rental status, 
            request maintenance assistance, and review their landlords. By providing a platform for tenants 
            to voice their needs and concerns, ProperTEasy promotes tenant satisfaction and fosters positive 
            landlord-tenant relationships.
       </h6>
            </li>
        <hr/>
        <li>
          <strong>Access to a Quality Tenant Pool:</strong>
          <h6>By connecting landlords with a curated pool of pre-screened and trustworthy tenants actively 
            seeking rentals, ProperTEasy ensures that landlords have access to a reliable tenant pool, 
            making the tenant selection process more efficient and effective.
        </h6>
           </li>
        <hr/>
        <li>
          <strong>
          Empowering Landlords and Small Agencies:</strong> 
          <h6>ProperTEasy levels the playing field for small landlords and real estate agencies, 
            offering them access to a feature-rich platform that enhances their property management 
            capabilities. This democratization of property management tools helps smaller entities compete 
            more effectively in the market.
        </h6></li>
        <hr/>
      </ul>
      <h6 className='center'>Overall, PropertEasy addresses pain points in the property rental process, improving efficiency, 
        transparency, and communication between landlords and tenants. By offering valuable insights into 
        tenant histories, facilitating maintenance requests, and providing a seamless rental management 
        experience, the platform aims to make property rental a smoother and more enjoyable experience for 
        all stakeholders involved.</h6>
      </div>
      <hr/>
      <h2 className='marginright1 green'>Here are some key features I made to the project:</h2>
      <ul className='marginright1'>
        <li>
         <strong> User Login with Clerk: </strong> 
         <h6>Implemented secure user login and authentication using Clerk, providing a seamless and protected experience for users accessing the platform.
        </h6></li>
        <hr/>
        <li>
          <strong>
          Rental Status Update:</strong>
          <h6>Developed a feature that allows tenants to update their rental status, enabling them to indicate their availability and preferences to potential landlords.
        </h6></li>
        <hr/>
        <li>
          <strong>
          Landlord & Tenant Reviews:</strong> 
          <h6>Created a feature that enables tenants to leave & receive reviews for their landlords, promoting transparency and helping other tenants make informed decisions when choosing a rental property.
        </h6></li>
        <hr/>
        <li>
          <strong>Rental Search:</strong>
          <h6>Developed a robust search functionality, enabling tenants to search for available rentals based on their preferences, streamlining the process of finding suitable properties.
       </h6>
            </li>
        <hr/>
        <li>
          <strong>Tenant History:</strong>
          <h6>Designed a tenant history feature that allows landlords to request and view a tenant's rental payment history, previous tenant reviews, and house inspection results, aiding landlords in making informed tenant selection decisions.
        </h6>
           </li>
        <hr/>
        <li>
          <strong>
          Maintenance Request Management:</strong> 
          <h6>Developed a system for landlords to respond to tenant maintenance requests, ensuring timely resolution and improving tenant satisfaction.
        </h6></li>
        <hr/>
        <li>
          <strong>
          Inspection Management:</strong> 
          <h6>Implemented a feature that allows landlords to fill out property inspections using a form and save them as PDFs, enabling easy documentation and record-keeping of property inspections.
        </h6></li>
        <hr/>
        <li>
          <strong>
          Document Management:</strong> 
          <h6>Implemented a feature that allows users to upload and store important documents related to their tenancy, such as lease agreements, move-in checklists, or maintenance records. This central repository can help keep track of essential paperwork and ensure easy access when needed.
        </h6></li>
        <hr/>
        <li>
          <strong>Messaging System:</strong>
            <h6>Implement a built-in messaging system that allows landlords and tenants to communicate directly within the platform. This can streamline communication and make it easier for both parties to discuss rental details, maintenance requests, and other important matters.
       </h6>
          </li>
      </ul>
    </div>
  );
}
