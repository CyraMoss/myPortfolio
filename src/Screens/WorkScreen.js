import React from 'react';
import WorkCard from '../Components/WorkCard';

export default function WorkScreen() {
  return (
    <div className="blur border margin10 ">
      <h1 className="center">My Work</h1>
      <hr />
      <div className="work margin1">
        <WorkCard />
        <WorkCard />
        <WorkCard />
        <WorkCard />
      </div>
    </div>
  );
}
