import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function WorkCard() {
  const navigate = useNavigate();

  const moreinfo = () => {
    navigate('/project');
  };
  return (
    <div className="workcard ">
      <img className="workpic" src="./images/work.png" alt="mee"></img>
      <div className="workinfo">
        <h3 className="center">NZ Noiz</h3>
        <div className="workabout">
          <p>
            <strong>This is a MERN stack e-commerce project</strong>
            <br />
            <span>to visit project </span>{' '}
            <a href="https://comforting-fudge-6d0f12.netlify.app/">
              click here
            </a>
            <button className="btn" onClick={moreinfo}>
              more info
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
