"use client";

import { Box, Typography, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {pCargoElevator1, pEscalator1, pGenerator1, pHospitalElevator1, pObservatiorElevator1, pPassengerElevator1, pSolarEquipment1} from "@/constant/images"

// Example category data
const categoryData = [
  {
    image: pCargoElevator1, // Replace with your image paths
    title: "Category One",
    description: "Explore our first category of products.",
  },
  {
    image: pEscalator1,
    title: "Category Two",
    description: "Discover the second category with exciting offers.",
  },
  {
    image: pGenerator1,
    title: "Category Four",
    description: "Check out our third category of innovative products.",
  },
  {
    image: pHospitalElevator1, // Replace with your image paths
    title: "Category Five",
    description: "Explore our first category of products.",
  },
  {
    image: pPassengerElevator1,
    title: "Category Six",
    description: "Discover the second category with exciting offers.",
  },
  {
    image: pSolarEquipment1, // Replace with your image paths
    title: "Category Five",
    description: "Explore our first category of products.",
  },
  {
    image: pObservatiorElevator1,
    title: "Category Six",
    description: "Discover the second category with exciting offers.",
  },

];

const CategoryCard = ({ image, title, description }) => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger animation only once
    threshold: 0.1, // Trigger when 10% of the element is in view
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundImage: `url(${image.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
          textAlign: "center",
          height: "300px",
          borderRadius: "8px",
          overflow: "hidden",
          position: "relative",
          boxShadow: 3,
          backgroundColor: "#ccc", // Fallback background color
        }}
      >
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
          <CardContent
            sx={{
              zIndex: 1,
              textAlign: "center",
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
              {title}
            </Typography>
            <Typography variant="body2">{description}</Typography>
          </CardContent>
        </Box>
      </Card>
    </motion.div>
  );
};

const ProductCategories = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

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
        Product Categories
      </Typography>
      <Slider {...settings} style={{ width: "100%" }}>
        {categoryData.map((category, index) => (
          <CategoryCard
            key={index}
            image={category.image}
            title={category.title}
            description={category.description}
          />
        ))}
      </Slider>
    </Box>
  );
};

export default ProductCategories;
