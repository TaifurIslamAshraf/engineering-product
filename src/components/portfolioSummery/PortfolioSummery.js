"use client";

import { Box, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from 'next/image';
import {whyUs} from "@/constant/images"

const PortfolioSummary = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const fadeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8, pt:10 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // Responsive layout
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#ffffff",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          borderRadius: "16px",
          overflow: "hidden",
        }}
        ref={ref}
      >
        {/* Dynamic Image */}
        <motion.div
          variants={fadeVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{ flex: 1 }}
        >
          <Image
            src={whyUs}
            alt="Portfolio Summary"
            layout="responsive"
            width={500}
            height={300}
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          variants={fadeVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{ flex: 1 }}
        >
          <Box
            sx={{
              padding: { xs: "24px", md: "32px" },
              textAlign: { xs: "center", md: "left" },
              backgroundColor: "#f9f9f9",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                mb: 2,
                fontWeight: "bold",
                color: "#333",
                fontSize: { xs: "1.5rem", md: "2.5rem" },
              }}
            >
              Our Portfolio
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#666",
                lineHeight: 1.7,
                  fontSize: { xs: "0.9rem", md: "1rem" },
                textAlign:'justify'
              }}
            >
              Discover our diverse portfolio, showcasing a variety of successful projects across multiple industries. From innovative designs to strategic solutions, we have consistently delivered outstanding results for our clients.
            </Typography>
          </Box>
        </motion.div>
      </Box>
    </Container>
  );
};

export default PortfolioSummary;
