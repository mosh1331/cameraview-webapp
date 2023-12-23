import React, { useRef } from 'react';

const CameraComponent = () => {
  const videoRef = useRef(null);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error('Error accessing the camera:', error);
    }
  };

  return (
    <div>
      <button onClick={startCamera}>Start Camera</button>
      <video ref={videoRef} width="400" height="300" autoPlay></video>
    </div>
  );
};

export default CameraComponent;
