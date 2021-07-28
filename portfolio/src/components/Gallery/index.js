import React from 'react';
import PhotoList from '../PhotoList';

function Gallery(props) {
  const { currentCategory } = props;
  return (
    <section className="sectionSpacing">
      <h1 className="text-center" id="screenshot" data-testid="h1tag">Portfolio</h1>
      <p>{currentCategory.description}</p>
      
    </section>
  );
}
export default Gallery;