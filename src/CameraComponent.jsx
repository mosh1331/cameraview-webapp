import React, { useEffect, useRef } from 'react';

const CameraComponent = () => {
  const videoRef = useRef(null);

  const enterFullScreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        /* Safari */
        videoRef.current.webkitRequestFullscreen();
      } else if (videoRef.current.msRequestFullscreen) {
        /* IE11 */
        videoRef.current.msRequestFullscreen();
      }
    }
  };

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: { exact: "environment" } // Use the rear camera
      }
    });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        enterFullScreen()
      }
    } catch (error) {
      console.error('Error accessing the camera:', error);
    }
  };


  

  useEffect(()=>{
    startCamera()
  },[])

  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden'}}>
      <video
        ref={videoRef}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        autoPlay
      ></video>
    </div>
  );
};

export default CameraComponent;
