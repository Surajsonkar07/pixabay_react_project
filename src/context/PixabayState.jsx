import React, { useEffect, useState } from "react";

import PixabayContext from './pixabay_context';
// import PixabayContext from "./Pixabay_context";

const pixabayState = (props) => {
    const api_key = "46008902-ed2f1dfebd409f058de2131b7";

    const [imageData, setImageData] = useState([]);
    const [query, setQuery] = useState('london');
    useEffect(() => {
    const fetchData = async () => {
      const api = await fetch(
        `https://pixabay.com/api/?key=${api_key}&q=${query}&image_type=photo&per_page=100`
      );
      const data = await api.json();
      setImageData(data.hits);
      console.log(data.hits);
    };
    fetchData();
  }, [query]);
  const fetchImageByCategory = async (cat) => {
    const api = await fetch(
      `https://pixabay.com/api/?key=${api_key}&category=${cat}&image_type=photo&per_page=100`
      
    );
    const data = await api.json();
    setImageData(data.hits);
    console.log(data.hits);
  };
  return (
    <PixabayContext.Provider value={{ imageData, fetchImageByCategory,setQuery }}>
      {props.children}
    </PixabayContext.Provider>
  );
};

export default pixabayState;
