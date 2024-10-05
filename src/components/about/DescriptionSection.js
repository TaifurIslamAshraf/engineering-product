"use client";

import { Box, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from 'next/image';
import { aboutImg } from "@/constant/images";

const DescriptionSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <Box
      sx={{
        padding: "40px",
        paddingTop: "calc(40px + 60px)", // Adjust padding-top to account for the navbar height
        backgroundColor: "#fff",
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
          About Us
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, textAlign: "justify", color:'GrayText' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error fuga amet incidunt quos? Libero quis rerum provident, rem dolorum, voluptatibus saepe vero quam in adipisci aliquam soluta sequi magni laborum ut, ducimus maiores dolor veritatis fugit aut! Sequi beatae quod quasi illum, iste animi eligendi optio quis dolorem amet? Consectetur numquam itaque tenetur praesentium, exercitationem debitis asperiores excepturi, eos iure a blanditiis reiciendis magnam. Aspernatur pariatur fuga dignissimos sint laudantium!
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Image src={aboutImg} alt="Dynamic Image 1" layout="responsive" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Image src={aboutImg} alt="Dynamic Image 2" layout="responsive" />
          </Grid>
        </Grid>
      </motion.div>
    </Box>
  );
};

export default DescriptionSection;
