"use client";

import { Box, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from 'next/image';
import {pCargoElevator1, pCargoElevator2, pCargoElevator3, pEscalator1, pEscalator2, pGenerator1, pGenerator2, pHospitalElevator1, pHospitalElevator2, pPassengerElevator10, pPassengerElevator1, pSolarEquipment1, pSolarEquipment2} from "@/constant/images"

const productsData = [
  {
    image: pCargoElevator1,
    heading: 'Product One',
    paragraph: 'Description of Product One. This is a great product that solves many problems.',
  },
  {
    image: pCargoElevator2,
    heading: 'Product Two',
    paragraph: 'Description of Product Two. This product offers excellent features and benefits.',
  },
  {
    image: pCargoElevator3,
    heading: 'Product Two',
    paragraph: 'Description of Product Two. This product offers excellent features and benefits.',
  },
  {
    image: pEscalator1,
    heading: 'Product One',
    paragraph: 'Description of Product One. This is a great product that solves many problems.',
  },
  {
    image: pEscalator2,
    heading: 'Product Two',
    paragraph: 'Description of Product Two. This product offers excellent features and benefits.',
  },
  {
    image: pGenerator1,
    heading: 'Product Two',
    paragraph: 'Description of Product Two. This product offers excellent features and benefits.',
  },
  {
    image: pGenerator2,
    heading: 'Product One',
    paragraph: 'Description of Product One. This is a great product that solves many problems.',
  },
  {
    image: pHospitalElevator1,
    heading: 'Product Two',
    paragraph: 'Description of Product Two. This product offers excellent features and benefits.',
  },
  {
    image: pHospitalElevator2,
    heading: 'Product Two',
    paragraph: 'Description of Product Two. This product offers excellent features and benefits.',
  },
  {
    image: pPassengerElevator1,
    heading: 'Product Two',
    paragraph: 'Description of Product Two. This product offers excellent features and benefits.',
  },
  {
    image: pPassengerElevator10,
    heading: 'Product Two',
    paragraph: 'Description of Product Two. This product offers excellent features and benefits.',
  },
  {
    image: pSolarEquipment1,
    heading: 'Product Two',
    paragraph: 'Description of Product Two. This product offers excellent features and benefits.',
  },
  // Add more products as needed
];

const OurProducts = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const productVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <Box
      sx={{
        padding: "40px",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      ref={ref}
    >
      <motion.div
        variants={productVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        style={{ width: "100%" }}
      >
        <Typography variant="h2" sx={{ mb: 4 }}>
          Our Products
        </Typography>
        <Grid container spacing={4}>
          {productsData.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: 2,
                  borderRadius: 2,
                  boxShadow: 3,
                  backgroundColor: "#f5f5f5",
                }}
              >
                <Image
                  src={product.image}
                  alt={product.heading}
                  width={300} // Adjust width as needed
                  height={200} // Adjust height as needed
                  style={{ borderRadius: '8px', marginBottom: '16px' }}
                />
                <Typography variant="h4" sx={{ mb: 2 }}>
                  {product.heading}
                </Typography>
                <Typography variant="body1">
                  {product.paragraph}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Box>
  );
};

export default OurProducts;
