import React, { useState } from 'react';
import About from './components/About';
import ContactForm from './components/Contact';
import Gallery from './components/Gallery';
import Nav from './components/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function App() {
  const [categories] = useState([
    {
      name: 'screenshot'
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
            <Container>
              <Row>
                <About></About>
              </Row>
            </Container>
            <Container className="my-5">
              <Row>
                <Gallery currentCategory={currentCategory}></Gallery>
              </Row>
            </Container>
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
