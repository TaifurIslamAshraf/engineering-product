"use client";

import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { whyUs } from "@/constant/images";

const ContactInformation = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Animation triggers only once
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
        backgroundImage: `url(${whyUs.src})`, 
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "#fff",
        padding: "20px",
          overflow: "hidden",
        marginTop: '80px'
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
          Contact Us
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          We are here to assist you! Reach out to us for any queries or support.
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Email: syntax.solutions.bd@gmail.com<br />
          Phone: +123 456 7890<br />
          Address: 1234 Example St, City, Country
        </Typography>
      </motion.div>
    </Box>
  );
};

export default ContactInformation;
