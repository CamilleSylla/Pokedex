import React from 'react';
import './style/detailView.css';

const detailView = () => {

  return (
    <section className="detail-view">
      <img className='sprite-image' />
      <div className='data-wrapper'>
        <h1 className='data-name'></h1>
        <p className="data-char"></p>
      </div>
    </section>
  )
}

export default detailView;