"use client";

import { Box, Typography, TextField, Button, Grid, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { styled } from "@mui/system";

// Custom Styled Components
const StyledButton = styled(Button)({
  borderRadius: "30px",
  textTransform: "none",
  padding: "10px 20px",
  fontSize: "16px",
  fontWeight: "bold",
  backgroundColor: "#4A90E2",
  "&:hover": {
    backgroundColor: "#357ABD",
  },
});

const StyledTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    borderRadius: "12px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "transparent",
  },
  "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "#4A90E2",
  },
});

const ContactForm = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const formVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 1 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1,delay: 1 } },
  };

  return (
    <Box
    
      sx={{
        py: 8,
        px: { xs: 2, sm: 5 },
        maxWidth: "lg",
        margin: "auto",
        backgroundColor: "#f0f2f5",
      }}
    >
      <Grid container spacing={6} ref={ref}>
        {/* Form Section */}
        <Grid item xs={12} md={7}>
          <motion.div
            variants={formVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <Typography
              variant="h3"
              sx={{ mb: 3, fontWeight: "bold", color: "#333" }}
            >
              Contact Us
            </Typography>
            <Typography
              variant="body1"
              sx={{ mb: 4, color: "#666", lineHeight: 1.6 }}
            >
              We're here to help! Fill out the form below to reach out to us, and
              our team will get back to you promptly.
            </Typography>
            <Box component="form" noValidate autoComplete="off">
              <StyledTextField
                fullWidth
                label="Your Name"
                variant="outlined"
                sx={{ mb: 3 }}
              />
              <StyledTextField
                fullWidth
                label="Your Email"
                variant="outlined"
                sx={{ mb: 3 }}
              />
              <StyledTextField
                fullWidth
                label="Your Message"
                multiline
                rows={4}
                variant="outlined"
                sx={{ mb: 3 }}
              />
              <StyledButton
                variant="contained"
                color="primary"
                type="submit"
                sx={{ mt: 2 }}
              >
                Send Message
              </StyledButton>
            </Box>
          </motion.div>
        </Grid>

        {/* Rectangle Card Section */}
        <Grid item xs={12} md={5}>
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                backgroundColor: "#ffffff",
                p: 4,
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                borderRadius: "16px",
              }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{ mb: 2, fontWeight: "bold", color: "#4A90E2" }}
                >
                  Our Office
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ mb: 2, color: "#333", lineHeight: 1.5 }}
                >
                  1234 Example Street,
                  <br />
                  City, Country
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ mb: 2, color: "#333", lineHeight: 1.5 }}
                >
                  Phone: +123 456 7890
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ mb: 2, color: "#333", lineHeight: 1.5 }}
                >
                  Email: info@company.com
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Office Hours: Mon-Fri, 9am-5pm
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactForm;
