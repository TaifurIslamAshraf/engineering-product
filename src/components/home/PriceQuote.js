"use client";

import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';

const quoteImages = ["./1.PNG", "./6-wyh-hl.jpg", "./capsule-lift-001.jpg", "./cargo-lift-001.jpg", "./Substation.PNG", "./escalator-001.jpg"]

const TopSection = styled(Box)(({ theme }) => ({
  backgroundImage: 'url("/construction_yellow_background.png")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '200px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(4),
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column', // Stack items vertically
    textAlign: 'center',
    height: 'auto', // Adjust height for smaller screens
    padding: theme.spacing(2), // Adjust padding for smaller devices
  },
}));

const ImageGridItem = styled(Box)(({ theme }) => ({
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '300px',
  position: 'relative',
  color: '#fff',
  padding: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  },
  '& *': {
    position: 'relative',
    zIndex: 1,
  },
}));

const PriceQuote = () => {
  return (
    <Box>
      {/* Top Section */}
      <TopSection>
        <Typography
          variant="h6"
          sx={{
            width: { xs: '100%', md: '60%' },
            color: '#fff',
            fontSize: { xs: '1.5rem', md: '1.8rem' }, // Adjust font size for mobile
            fontWeight: 200,
            marginBottom: { xs: 2, md: 0 }, // Add margin on mobile
          }}
          className="montserrat_font"
        >
          LOOKING FOR THE BEST QUALITY AND AFFORDABLE LIFT FOR YOUR{' '}
          <span style={{ fontWeight: 600, color: '#000' }}>BUILDING?</span>
        </Typography>
        <Button
          variant="contained"
          sx={{
            width: { xs: '100%', md: '25%' },
            borderRadius: 0,
            border: '2px solid #fff',
            color: '#fff',
            fontFamily: 'Montserrat, Bangla386, sans-serif',
            backgroundColor: 'transparent',
            transition: 'background-color 0.3s, color 0.3s',
            fontSize: '1rem',
            fontWeight: '700',
            paddingY: '8px',
            '&:hover': {
              backgroundColor: '#000',
              color: '#f26622',
              border: '2px solid #000',
            },
          }}
        >
          REQUEST A PRICE QUOTE
        </Button>
      </TopSection>

      {/* Bottom Section - Image Grid */}
      <Box>
        <Grid container spacing={1}>
          {quoteImages.map((image, index) => (
            <Grid item xs={12} md={4} key={index}>
              <ImageGridItem sx={{ backgroundImage: `url(${image})` }}>
                <Typography variant="h5" style={{ borderBottom: '2px solid #f26622', width: 'fit-content', paddingTop: 50, paddingBottom:20 }}>
                  Image {index + 1}
                </Typography>
                <Typography variant="body1">This is a short description for image {index + 1}.</Typography>
                <Button variant="contained" color="primary" sx={{width:'fit-content'}}>
                  Learn More
                </Button>
              </ImageGridItem>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default PriceQuote;
