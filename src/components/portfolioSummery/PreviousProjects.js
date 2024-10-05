"use client";

import { Box, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from 'next/image';
import {pCargoElevator1, pEscalator1, pGenerator1, pHospitalElevator1, pObservatiorElevator1} from "@/constant/images"


// Example project data
const projects = [
  { id: 1, image: pCargoElevator1, link: '/projects/1' },
  { id: 2, image: pEscalator1, link: '/projects/2' },
  { id: 3, image: pGenerator1, link: '/projects/3' },
  { id: 4, image: pHospitalElevator1, link: '/projects/4' },
  { id: 5, image: pObservatiorElevator1, link: '/projects/5' },
];

const PreviousProjects = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const imageVariants = {
    hidden: { opacity: 0, scale: 1 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hover: { scale: 1.1, transition: { duration: 0.3 } },
  };

  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Typography
        align="center"
        variant="h2" sx={{ mb: 4 }}
      >
        Previous Projects
      </Typography>
      
      <Box
        ref={ref}
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
          gap: 4,
        }}
      >
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.link}
            style={{ display: 'block', overflow: 'hidden', borderRadius: '12px' }}
          >
            <motion.div
              variants={imageVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              whileHover="hover"
              style={{
                display: 'block',
                overflow: 'hidden',
                borderRadius: '12px',
                position: 'relative',
                width: '100%',
                height: '200px', // Consistent container height
              }}
            >
              <motion.div
                style={{
                  width: '100%',
                  height: '100%',
                }}
                whileHover={{ scale: 1.1 }} // Only the image zooms in
              >
                <Image
                  src={project.image}
                  alt={`Project ${project.id}`}
                  layout="fill" // Ensures the image fills the container
                  objectFit="cover"
                  style={{
                    borderRadius: '12px',
                    transition: 'transform 0.3s ease',
                    width:'100%',
                    height:'100%'
                  }}
                />
              </motion.div>
            </motion.div>
          </a>
        ))}
      </Box>
    </Container>
  );
};

export default PreviousProjects;
