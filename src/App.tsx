//import React from 'react';

import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';

interface CarDetails {
  name: string;
  make: string;
  model: string;
  year: number;
}

const carDetails: CarDetails = {
  name: 'Cool car bro',
  make: 'Mazda',
  model: 'CX-5',
  year: 2023,
};

function App() {
  return (
    <div className="App">
      <Header />
      <Main car={carDetails} />
      <Footer />
    </div>
  );
}

export default App;
