import { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import "../index.css";
import { motion } from "framer-motion";

const Cursor = forwardRef((props, ref) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  // Set cursor variant to change color on hover text
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    let requestId;

    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const updateMousePosition = (e) => {
      if (requestId) {
        cancelAnimationFrame(requestId);
      }
      requestId = requestAnimationFrame(() => mouseMove(e));
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      if (requestId) {
        cancelAnimationFrame(requestId);
      }
    };
  }, []);

  useImperativeHandle(ref, () => ({
    textEnter: () => setCursorVariant("text"),
    textLeave: () => setCursorVariant("default"),
  }));

  // Variant animation
  const variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 70,
      y: mousePosition.y - 70,
      backgroundColor: "#fff",
      color: "#33bbcf",
      mixBlendMode: "difference",
    },
  };

  return (
    <motion.div
      className="cursor"
      variants={variants}
      animate={cursorVariant}
    ></motion.div>
  );
});

export default Cursor;
