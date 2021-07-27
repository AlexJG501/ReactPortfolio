import React, { useState } from 'react';
import About from './components/About';
import ContactForm from './components/Contact';
import Gallery from './components/Gallery';
import Nav from './components/Nav';

function App() {
  const [categories] = useState([
    {
      name: 'portfolio'
    }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);


  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <About></About>
            <Gallery currentCategory={currentCategory}></Gallery>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>

      <footer>
        <div className="icons">
          <a href="https://github.com/AlexJG501" target="_blank" rel="noreferrer" title="GitHub">
            GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" title="LinkedIn">
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
