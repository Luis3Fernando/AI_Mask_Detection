import React, { useRef, useEffect } from 'react';
import { useImageContext } from '../context/ImageContext';

function ImageList() {
  const { images } = useImageContext();
  const imagesContainerRef = useRef(null); // Referencia al contenedor de imágenes

  useEffect(() => {
    const container = imagesContainerRef.current;
    if (container) {
      container.scrollTo(0, 0); // Desplazar hacia arriba (cambiar a scrollTop si es necesario)
    }
  }, [images]);

  const reversedImages = [...images].reverse();

  return (
    <div className="w-1/4">
      <div className='w-full h-full bg-white rounded-md p-6'>
        <h2 className="text-xl font-semibold mb-4">Personas sin mascarilla</h2>
        <div
          ref={imagesContainerRef} // Asignar referencia al contenedor
          className="flex flex-col items-center bg-gray-100 w-full max-h-[600px] overflow-y-auto p-2"
          style={{ scrollBehavior: 'smooth' }} // Para una transición más suave (opcional)
        >
          {reversedImages.length === 0 ? (
            <p className="text-gray-500">No hay imágenes para mostrar</p>
          ) : (
            reversedImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Persona sin mascarilla ${index + 1}`}
                className="mb-2 border-2 border-red-500"
                width="150"
                height="150"
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default ImageList;
