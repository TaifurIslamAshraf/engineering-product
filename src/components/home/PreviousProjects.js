"use client";

import { Box, Grid, Typography, Card, CardMedia } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

import {pCargoElevator1, pEscalator1, pGenerator4} from "@/constant/images" // Ensure this path is correct

// Example project data
const projectData = [
  {
    image: pCargoElevator1, // Ensure the image path is correct
    link: 'https://example.com/project1',
    title: 'Project 1', // Ensure title is provided
  },
  {
    image: pEscalator1,
    link: 'https://example.com/project2',
    title: 'Project 2',
  },
  {
    image: pGenerator4,
    link: 'https://example.com/project3',
    title: 'Project 3',
  },
  // Add more projects as needed
];

const ProjectCard = ({ image, title, link }) => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger animation only once
    threshold: 0.1, // Trigger when 10% of the element is in view
  });

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <Card
        sx={{
          position: "relative",
          overflow: "hidden",
          borderRadius: "8px",
          boxShadow: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#fff", // Ensure the card has a background color
        }}
      >
        <Link href={link} passHref>
          <CardMedia
            component="img"
            image={image.src}
            alt={title}
            sx={{
              height: "200px",
              width: "100%", 
              objectFit: "cover",
              transition: "transform 0.3s ease",
              '&:hover': {
                transform: "scale(1.05)",
              },
            }}
          />
        </Link>
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            background: "rgba(0, 0, 0, 0.5)",
            color: "#fff",
            textAlign: "center",
            padding: "10px",
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            {title}
          </Typography>
        </Box>
      </Card>
    </motion.div>
  );
};

const PreviousProjects = () => {
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
        Previous Projects
      </Typography>
      <Grid container spacing={4}>
        {projectData.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ProjectCard
              image={project.image}
              title={project.title} // Ensure title is passed correctly
              link={project.link}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PreviousProjects;
