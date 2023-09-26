import React, { useState } from 'react';
import './App.css';
import Upload from './Upload';
import ImageEdit from './ImageEdit';

function App() {
  const [uploadedImage, UploadedImage] = useState(null);

  const ImageUpload = (file) => {
    
    UploadedImage(file);
  };

  return (
    <div className="App">
      <h1>React App to Change Contrast & Brightness </h1>
      <Upload onImageUpload={ImageUpload} />


      {uploadedImage && <ImageEdit image={uploadedImage} />}
    </div>
  );
}

export default App;

