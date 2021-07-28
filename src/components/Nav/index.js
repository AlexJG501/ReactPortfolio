import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    contactSelected,
    currentCategory,
    setContactSelected,
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

  return (
    <header className="flex-row px-1" id="headerStyle">
       <h2>
         <a data-testid="link" href="#about">Alex Godwin</a>
       </h2>
       <nav>
         <ul className="flex-row justify-content-end">
           <li className="mx-2">
           <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
               About me
             </a>
           </li>
           <li className={`mx-2 ${contactSelected && 'navActive'}`}>
             <span onClick={() => setContactSelected(true)}>Contact</span>
           </li>
          
         </ul>
       </nav>
     </header> 
  );
}

export default Nav;