"use client";

import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import {pCargoElevator1, pEscalator1, pGenerator1, pHospitalElevator1, pObservatiorElevator1, pPassengerElevator1, pSolarEquipment1} from "@/constant/images"

// Example category data
const categoriesData = [
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

const ProductCategories = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '20px', // Adds spacing between slides
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '20px',
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '20px',
        },
      },
    ],
  };

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
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
      ref={ref}
    >
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        style={{ width: "100%" }}
      >
        <Typography variant="h2" sx={{ mb: 4 }}>
          Product Categories
        </Typography>
        <Slider {...sliderSettings}>
          {categoriesData.map((category, index) => (
            <div key={index}>
              <CategoryCard 
                title={category.title}
                description={category.description}
                image={category.image}
              />
            </div>
          ))}
        </Slider>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 4 }}
          onClick={() => alert('CTA Button Clicked')}
        >
          Explore All Categories
        </Button>
      </motion.div>
    </Box>
  );
};

const CategoryCard = ({ title, description, image }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "350px",
        padding: 2,
        borderRadius: 2,
        boxShadow: 3,
        backgroundColor: "#fff",
        textAlign: "center",
        margin: '0 10px', // Add margin to create space between slides
      }}
    >
      <Image
        src={image}
        alt={title}
        width={300}
        height={200}
        style={{ borderRadius: '8px', marginBottom: '16px',  height: "200px", }}
      />
      <Typography variant="h5" sx={{ mb: 2 }}>
        {title}
      </Typography>
      <Typography variant="body1">
        {description}
      </Typography>
    </Box>
  );
};

export default ProductCategories;
