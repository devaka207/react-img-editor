import React, { useState } from 'react';

function ImageEdit({ image }) {
  const [brightness, setBrightness] = useState(100);
  const [contrast, setContrast] = useState(100);
  const [editedImage, setEditedImage] = useState(null);



  
  const downloadButton = () => {
    if (editedImage) {
      const a = document.createElement('a');
      a.href = editedImage;
      a.download = 'edited_image.png';
      a.click();
    }
  };
  
  const Filters = () => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const img = new Image();
    img.src = URL.createObjectURL(image);

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;

      context.drawImage(img, 0, 0, img.width, img.height);
      context.filter = `brightness(${brightness}%) contrast(${contrast}%)`;

      context.drawImage(img, 0, 0, img.width, img.height);

      canvas.toBlob((blob) => {
        setEditedImage(URL.createObjectURL(blob));
      });
    };
  };

  

  return (
    <div>
      <div>
        <label htmlFor="brightness">Brightness</label>
        <input
          type="range"
          id="brightness"
          min="0"
          max="200"
          value={brightness}
          onChange={(e) => setBrightness(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="contrast">Contrast</label>
        <input
          type="range"
          id="contrast"
          min="0"
          max="200"
          value={contrast}
          onChange={(e) => setContrast(e.target.value)}
        />
      </div>
      <button onClick={Filters}>Set</button>
      <button onClick={downloadButton}>Download </button>
      {editedImage && (
        <img
          src={editedImage}
          alt="Edited"
          style={{ maxWidth: '100%', maxHeight: '300px' }}
        />
      )}
    </div>
  );
}

export default ImageEdit;
