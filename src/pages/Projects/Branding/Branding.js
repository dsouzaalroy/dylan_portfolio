import React, { useEffect, useRef } from "react"
//Custom Hook
import useWindowSize from "../../../hooks/useWindowSize"
//Context
// import canvas1 from "https://i.pinimg.com/originals/a2/4e/d1/a24ed1a9e230248c45b8c30df1319732.jpg"
import canvas2 from "../../../assets/over_canvas.jpg"
import canvas3 from "../../../assets/canvas_back3.png"


import {
  Banner,
  Canvas,
  Canvas_Image
} from "../Branding/css/homeStyles"

const Branding = ({ onCursor }) => {
  const size = useWindowSize()
  let canvas = useRef(null)
  useEffect(() => {
    let renderingElement = canvas.current
    // create an offscreen canvas only for the drawings
    let drawingElement = renderingElement.cloneNode()
    let drawingCtx = drawingElement.getContext("2d")
    let renderingCtx = renderingElement.getContext("2d")
    let lastX
    let lastY
    let moving = false
    window.scrollTo(0, 0);

    renderingCtx.globalCompositeOperation = "source-over"
    let img=new Image();
    img.onload = function(){
      renderingCtx.drawImage(img,0,0,size.width,size.height);
    };
    img.src=canvas2 //"https://i.pinimg.com/originals/a2/4e/d1/a24ed1a9e230248c45b8c30df1319732.jpg";

    renderingElement.addEventListener("mouseover", ev => {
      moving = true
      lastX = ev.pageX - renderingElement.offsetLeft
      lastY = ev.pageY - renderingElement.offsetTop
    })

    renderingElement.addEventListener("click", ev => {
      moving = true
      lastX = ev.pageX - renderingElement.offsetLeft
      lastY = ev.pageY - renderingElement.offsetTop
    })

    renderingElement.addEventListener("mouseup", ev => {
      moving = false
      lastX = ev.pageX - renderingElement.offsetLeft
      lastY = ev.pageY - renderingElement.offsetTop
    })

    renderingElement.addEventListener("mousemove", ev => {
      if (moving) {
        drawingCtx.globalCompositeOperation = "source-over"
        renderingCtx.globalCompositeOperation = "destination-out"
        let currentX = ev.pageX - renderingElement.offsetLeft
        let currentY = ev.pageY - renderingElement.offsetTop
        drawingCtx.lineJoin = "round"
        drawingCtx.moveTo(lastX, lastY)
        drawingCtx.lineTo(currentX, currentY)
        drawingCtx.closePath()
        drawingCtx.lineWidth = 90
        drawingCtx.stroke()
        lastX = currentX
        lastY = currentY
        renderingCtx.drawImage(drawingElement, 0, 0)
      }
    })
  }, [])

  const container = {
    initial: { y: 800 },
    animate: {
      y: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }
  const item = {
    initial: { y: 800 },
    animate: {
      y: 0,
      transition: {
        duration: 1,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  }

  return (

    <Banner>
    <Canvas_Image src={canvas3}/>
      <Canvas
        height={size.height}
        width={size.width}
        ref={canvas}
        onMouseEnter={() => onCursor("hovered")}
        onMouseLeave={onCursor}
      />
    </Banner>
  )
}

export default Branding
