"use client";

import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from 'next/image';
import {whyUs} from "@/constant/images" // Ensure this path is correct

const OurProductsBanner = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const bannerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };


  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "60vh", // Adjust height as needed
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        backgroundColor: "#f5f5f5",
      }}
      ref={ref}
    >
      <motion.div
        variants={bannerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <Image
          src={whyUs}
          alt="Product Banner"
          layout="fill"
          objectFit="cover"
          priority
        />
      </motion.div>
      <Box
        sx={{
          zIndex: 1,
          textAlign: "center",
          color: "#fff",
          padding: 2,
          background: "rgba(0, 0, 0, 0.7)",
          borderRadius: 1,
        }}
      >
        <Typography variant="h2">
          Our Products
        </Typography>
      </Box>
    </Box>
  );
};

export default OurProductsBanner;
