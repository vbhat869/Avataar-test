import React from 'react';
import DynamicMenu from './components/DynamicMenu';
import Carousel from './components/Carousel'
import Heading from './components/Heading';
import image1 from "./assets/img1.jpeg";
import image2 from "./assets/img2.jpeg";
import image3 from "./assets/img3.jpeg";
import image4 from "./assets/img4.jpeg";
import image5 from "./assets/img5.jpeg";
import './App.css';

function App() {
  const menuItems = ['Home', 'Electronics', 'Books', 'Music', 'Movies', 'Clothing', 'Games', 'Furniture', 'Mobile', 'Travel','Botanical']; // Add your menu items here
  const cards = [
    {
      id: "1",
      image: image1,
    },
    {
      id: "2",
      image: image2,
    },
    {
      id: "3",
      image: image3,
    },
    {
      id: "4",
      image: image4,
    },
    {
      id: "5",
      image: image5,
    },
  ];

  return (
    <div className="App">
      <DynamicMenu items={menuItems} />
      <Heading/>
      <Carousel cards={cards}/>
    </div>
  );
}

export default App;
