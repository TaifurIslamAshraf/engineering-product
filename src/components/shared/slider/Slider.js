"use client";

import { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import {slider1, slider2, slider3} from "@/constant/images"
import { COLORS } from "@/constant/constant";

// Example images and content data for the slider
const sliderData = [
  {
    image: slider1,
    heading: "Innovative Engineering Solutions",
    subHeading: "Leading the Future of Engineering",
    cta: "Learn More",
    link: "/products",
  },
  {
    image: slider2,
    heading: "High-Quality Products",
    subHeading: "Built to Last",
    cta: "Shop Now",
    link: "/products",
  },
  {
    image: slider3,
    heading: "Customer Satisfaction Guaranteed",
    subHeading: "Your Trust, Our Commitment",
    cta: "Contact Us",
    link: "/contact",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatically change slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 5000); // Slide duration

    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: { opacity: 0, x: 100 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.5, duration: 0.8 },
    },
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <AnimatePresence>
        {sliderData.map(
          (slide, index) =>
            index === currentSlide && (
              <motion.div
                key={index}
                initial="enter"
                animate="center"
                exit="exit"
                variants={slideVariants}
                transition={{ duration: 1 }}
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  backgroundImage: `url(${slide.image.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Black overlay */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black
                  }}
                />
                <Box
                  sx={{
                    textAlign: "center",
                    color: "#fff",
                    padding: { xs: "10px", sm: "20px" }, // Responsive padding
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                    position: "relative", // Ensure content is above overlay
                  }}
                >
                  <motion.div initial="hidden" animate="visible" variants={textVariants}>
                    <Typography
                      variant="h2"
                      sx={{
                        fontWeight: "bold",
                        fontSize: { xs: "1.5rem", sm: "2rem", md: "3rem" }, // Responsive font size
                      }}
                    >
                      {slide.heading}
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{
                        mb: 3,
                        fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" }, // Responsive font size
                      }}
                    >
                      {slide.subHeading}
                    </Typography>
                    <Button
                      variant="contained"
                      href={slide.link}
                      sx={{
                        backgroundColor: COLORS.secondary,
                        fontWeight: "bold",
                        fontSize: { xs: "0.875rem", sm: "1rem" }, // Responsive font size
                          padding: { xs: "10px 20px", sm: "12px 24px" }, // Responsive padding
                        color: '#000'
                      }}
                    >
                      {slide.cta}
                    </Button>
                  </motion.div>
                </Box>
              </motion.div>
            )
        )}
      </AnimatePresence>
    </Box>
  );
};

export default Slider;
