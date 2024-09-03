import React, { useState, useRef, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import "../assets/styles/detection.css";
import { useImageContext } from "../context/ImageContext";

function Detection() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [model, setModel] = useState(null);
  const [prediction, setPrediction] = useState("");
  const [statusClass, setStatusClass] = useState("safe");
  const { addImage } = useImageContext();
  const [lastDetectionTime, setLastDetectionTime] = useState(0);

  useEffect(() => {
    const loadModel = async () => {
      console.log("Cargando el modelo...");
      const loadedModel = await tf.loadLayersModel("/scripts/model.json");
      setModel(loadedModel);
      console.log("Modelo cargado");
    };
    loadModel();
  }, []);

  const startCamera = () => {
    setIsCameraOn(true);
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
          processCamera();
        }
      })
      .catch((err) => {
        console.error("Error al acceder a la cámara:", err);
      });
  };

  const stopCamera = () => {
    setIsCameraOn(false);
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject;
      const tracks = stream.getTracks();
      tracks.forEach((track) => track.stop());
      videoRef.current.srcObject = null;
    }
  };

  const processCamera = () => {
    if (isCameraOn) {
      const ctx = canvasRef.current.getContext("2d");
      const [width, height] = [150, 150];
      ctx.drawImage(videoRef.current, 0, 0, width, height);
      predictImage();
      console.log("estoy corriendo");
      setTimeout(processCamera, 100);
    }
    console.log("estoy corriendo pero no entro", isCameraOn);
  };

  const predictImage = async () => {
    if (model && canvasRef.current) {
      const imageTensor = tf.browser.fromPixels(canvasRef.current)
        .resizeNearestNeighbor([150, 150])
        .toFloat()
        .expandDims(0)
        .div(255);

      console.log("Tensor de imagen:", imageTensor.shape);
      
      const prediction = model.predict(imageTensor);
      
      console.log("Predicción cruda:", prediction);
      
      const predictionData = prediction.dataSync();
      
      console.log("Datos de la predicción:", predictionData);
      
      const result = predictionData[0] <= 0.5 ? "Con mascarilla" : "Sin mascarilla";
      setPrediction(result);
      setStatusClass(result === "Sin mascarilla" ? "danger" : "safe");

      const currentTime = Date.now();
      if (result === "Sin mascarilla" && currentTime - lastDetectionTime >= 5000) {
        const imageUrl = canvasRef.current.toDataURL();
        addImage(imageUrl);
        setLastDetectionTime(currentTime);  
      }
    }
  };

  return (
    <div className="w-3/5 px-4">
      <div className="detection-container p-4 flex flex-col items-center w-full h-full bg-white rounded-md">
      <div className={`camera-wrapper ${statusClass}`}>
          <video
            ref={videoRef}
            style={{ display: isCameraOn ? "block" : "none", width: "100%" }}

          ></video>
          <canvas
            ref={canvasRef}
            className="camera-canvas border-4 border-primary"
            width="150"
            height="150"
          ></canvas>
        </div>
        <p className="mt-4 text-lg">
          {isCameraOn ? `Predicción: ${prediction}` : "Cámara apagada"}
        </p>
        <div className="button-group mt-4">
          <button
            onClick={startCamera}
            className="mr-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Encender cámara
          </button>
          <button
            onClick={stopCamera}
            className="mr-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Apagar cámara
          </button>
        </div>
      </div>
    </div>
  );
}

export default Detection;
