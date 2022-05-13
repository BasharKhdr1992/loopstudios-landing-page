import React, { useState } from 'react';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import './App.css';
import DropDown from './components/header/DropDown';

const App = () => {
  const [dropDown, setDropDown] = useState(false);

  const openDropdown = () => {
    setDropDown(true);
  };

  const closeDropdown = () => setDropDown(false);

  return (
    <div className="wrapper">
      {dropDown && <DropDown onDropdownClose={closeDropdown} />}
      <Header onDropdownOpen={openDropdown} />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
