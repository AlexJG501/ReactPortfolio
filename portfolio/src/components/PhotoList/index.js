import React, { useState } from 'react';
import Modal from '../Modal';

const PhotoList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();

  const [photos] = useState([
    {
      name: 'Guess-tures',
      category: 'screenshots',
      description: 'Helping those with difficulty recognizing emotions on faces',
      liveUrl: '',
      github: ''
    },
    {
      name: 'Run Buddy',
      category: 'screenshots',
      description: 'Note Taker is your standard note-taking application that allows to you create, save, and delete notes. To create a note, add a Title and Description. For example: you can create a Task titled Homework, and include a description for the steps of your task at hand. This application utilizes Express.js to retrieve, create, and delete data from a JSON.file. Note Taker is deployed through Heroku.',
      liveUrl: '',
      github: ''
    },
    {
      name: 'RPS-Chat',
      category: 'screenshots',
      description: 'Run Buddy is a mock website for a fitness service company. Plain HTML and CSS is utilized to create the layout and various form elements.',
      liveUrl: '',
      github: ''
    }
    // {
    //   name: '',
    //   category: 'screenshots',
    //   description: '',
    //   liveUrl: '',
    //   github: ''
    // }
  ]);

  const currentPhotos = photos.filter((photo) => photo.category === category);

  const toggleModal = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {isModalOpen && <Modal onClose={toggleModal} currentPhoto={currentPhoto} />}
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/images/${category}/${i}.jpg`)}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;