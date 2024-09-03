import React, { createContext, useState, useContext } from 'react';

const ImageContext = createContext();

export function ImageProvider({ children }) {
  const [images, setImages] = useState([]);

  const addImage = (image) => {
    setImages((prevImages) => [...prevImages, image]);
  };

  return (
    <ImageContext.Provider value={{ images, addImage }}>
      {children}
    </ImageContext.Provider>
  );
}

export function useImageContext() {
  return useContext(ImageContext);
}
