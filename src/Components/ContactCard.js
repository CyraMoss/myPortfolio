import React from 'react';

export default function ContactCard() {
  return (
    <div className="pc">
      <h3>
        Let's Talk
        <a href="https://www.facebook.com" target="blank">
          <i className="fa-brands fa-facebook cicon"></i>
        </a>
        <a href="mailto:cyramoss@icloud.com">
          <i className="fa-regular fa-envelope cicon"></i>
        </a>
        <a href="tel:+64221656290">
          <i className="fa-solid fa-phone cicon"></i>
        </a>
        <a href="https://www.instagram.com">
          <i class="fa-brands fa-instagram cicon"></i>
        </a>
      </h3>
    </div>
  );
}
