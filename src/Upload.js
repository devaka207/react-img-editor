import React, { useState } from 'react';

function Upload({ onImageUpload }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
    onImageUpload(file);
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
      />
      {selectedImage && (
        <img
          src={selectedImage}
          alt="Selected"
          style={{ maxWidth: '100%', maxHeight: '300px' }}
        />
      )}
    </div>
  );
}

export default Upload;
