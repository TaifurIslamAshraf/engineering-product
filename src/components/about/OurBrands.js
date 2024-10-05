"use client";

import { Box, Card, CardContent, IconButton, Typography, CardActions } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import BrandIcon1 from '@mui/icons-material/AddHomeWork';
import BrandIcon2 from '@mui/icons-material/AccountBalance';
import BrandIcon3 from '@mui/icons-material/Business';
import BrandIcon4 from '@mui/icons-material/Build';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const brandsData = [
  {
    icon: BrandIcon1,
    link: 'https://brand1.com',
    alt: 'Brand 1',
  },
  {
    icon: BrandIcon2,
    link: 'https://brand2.com',
    alt: 'Brand 2',
  },
  {
    icon: BrandIcon3,
    link: 'https://brand3.com',
    alt: 'Brand 3',
  },
  {
    icon: BrandIcon4,
    link: 'https://brand4.com',
    alt: 'Brand 4',
  },
  // Add more brands as needed
];

const OurBrands = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const brandsVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const sliderSettings = {
    dots: true,
      infinite: true,
    autoplay:true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
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
              marginTop: '10px',
        marginBottom:'10px'
      }}
      ref={ref}
    >
      <motion.div
        variants={brandsVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        style={{ width: "100%" }}
      >
        <Typography variant="h2" sx={{ mb: 4, textAlign: "center" }}>
          Our Brands
        </Typography>
        <Slider {...sliderSettings}>
          {brandsData.map((brand, index) => (
            <div key={index}>
              <Card
                sx={{
                  maxWidth: 345,
                  margin: "0 auto",
                  boxShadow: 3,
                  borderRadius: 2,
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.01)",
                    boxShadow: 6,
                  },
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: 2,
                  }}
                >
                  <Link href={brand.link} passHref>
                    <IconButton
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: 100,
                        height: 100,
                        marginBottom: 2,
                      }}
                    >
                      <brand.icon sx={{ fontSize: 60, color: "#1976d2" }} />
                    </IconButton>
                  </Link>
                  <Typography variant="subtitle1">
                    {brand.alt}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link href={brand.link} passHref>
                    <Typography variant="body2" sx={{ flexGrow: 1, textAlign: "center", color: "#1976d2" }}>
                      Visit
                    </Typography>
                  </Link>
                </CardActions>
              </Card>
            </div>
          ))}
        </Slider>
      </motion.div>
    </Box>
  );
};

export default OurBrands;
