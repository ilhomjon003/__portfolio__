import React from 'react';
import c from './Work.module.css';

const Home = () => {
  return (
    <div className={c.work_page}>
      <h1>Work</h1>
      <div className={c.container_work}>

        <div className={c.work}>
          <img src="" alt="" />
          <h3>Work</h3>
        </div>
        <div className={c.work}>
          <img src="" alt="" />
          <h3>Work</h3>
        </div>
      </div>
    </div>
  )
}

export default Home