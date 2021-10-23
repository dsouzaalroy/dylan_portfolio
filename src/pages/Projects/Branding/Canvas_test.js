import React,{useEffect, useRef} from "react";
import canvas3 from "../../../assets/canvas_back3.png"


const Canvas_test = (draw) => {

  const canvasRef = useRef(null)

  useEffect(() => {

    const canvas = canvasRef.current
    const context = canvas.getContext("2d")
    canvas.height=1080;
    canvas.width=1920;

    let imgObj = new Image()
    imgObj.onload = () =>{
      context.drawImage(imgObj,0,0)
    }
    imgObj.src=canvas3;

  })

  return <canvas ref={canvasRef}></canvas>
}

export default Canvas_test