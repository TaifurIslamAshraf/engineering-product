"use client";

import { Box, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {pCargoElevator1, pEscalator1, pGenerator1} from "@/constant/images"

// Example product data
const productData = [
  {
    image: pCargoElevator1, // Replace with your image paths
    heading: "Product One",
    paragraph: "Description of Product One.",
  },
  {
    image: pEscalator1,
    heading: "Product Two",
    paragraph: "Description of Product Two.",
  },
  {
    image: pGenerator1,
    heading: "Product Three",
    paragraph: "Description of Product Three.",
  },
];

const ProductCard = ({ image, heading, paragraph }) => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger animation only once
    threshold: 0.1, // Trigger when 10% of the element is in view
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      style={{
        backgroundImage: `url(${image.src})`, // Ensure correct path for background image
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "300px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        textAlign: "center",
        padding: "20px",
        borderRadius: "8px",
        marginBottom: "20px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ensure text visibility with overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0, 0, 0, 0.5)", // Dark overlay for better text contrast
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ textAlign: "center", zIndex: 1 }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
            {heading}
          </Typography>
          <Typography variant="body1">{paragraph}</Typography>
        </Box>
      </Box>
    </motion.div>
  );
};

const OurProducts = () => {
  return (
    <Box
      sx={{
        padding: "40px",
        backgroundColor: "#f5f5f5",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h2" sx={{ mb: 4 }}>
        Our Products
      </Typography>
      <Grid container spacing={4}>
        {productData.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ProductCard
              image={product.image}
              heading={product.heading}
              paragraph={product.paragraph}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default OurProducts;
