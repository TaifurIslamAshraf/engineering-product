"use client";

import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import img from '@/assets/1.2.jpg'

const AskForQuote = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger animation only once
    threshold: 0.1, // Trigger when 10% of the element is in view
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <Box
      ref={ref}
      sx={{
        position: "relative",
        height: "300px",
        backgroundImage: `url(${img.src})`, // Replace with your background image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "#fff",
        padding: "20px",
        overflow: "hidden",
      }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        style={{
          width: "100%",
          maxWidth: "600px",
          padding: "20px",
          background: "rgba(0, 0, 0, 0.7)", // Dark overlay for better text contrast
          borderRadius: "8px",
        }}
      >
        <Typography variant="h4" sx={{ mb: 2, fontWeight: "bold" }}>
          Need a Custom Quote?
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Contact us for a tailored quote that meets your specific needs.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          href="#contact-form" // Adjust the link as necessary
        >
          Request a Quote
        </Button>
      </motion.div>
    </Box>
  );
};

export default AskForQuote;
