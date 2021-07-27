import logo from './logo.svg';
import './App.css';

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
          <a href="https://github.com/AlexJG501" targer="_blank" rel="noreferrer" title="GitHub">
            GitHub
          </a>
          <a href="#" targer="_blank" rel="noreferrer" title="LinkedIn">
            LinkedIn
          </a>
          <a href="https://stackoverflow.com/users/16479419/ronan-codes" targer="_blank" rel="noreferrer" title="GitHub">
            Stack
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
