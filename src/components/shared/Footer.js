// Footer.js
import React from 'react'
import {
  Grid,
  Typography,
  Button,
  Link,
  Container,
  Box,
  IconButton,
} from '@mui/material'
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material'
import { COLORS } from '@/constant/constant'


const Footer = () => {
  return (
    <>
      {/* Footer Section */}
      <Box sx={{ backgroundColor: '#333', color: 'white', py: 15 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {/* Social Handles Section */}
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                Follow Us
              </Typography>
              <IconButton
                color="inherit"
                href="https://facebook.com"
                target="_blank"
              >
                <Facebook />
              </IconButton>
              <IconButton
                color="inherit"
                href="https://twitter.com"
                target="_blank"
              >
                <Twitter />
              </IconButton>
              <IconButton
                color="inherit"
                href="https://instagram.com"
                target="_blank"
              >
                <Instagram />
              </IconButton>
              <IconButton
                color="inherit"
                href="https://linkedin.com"
                target="_blank"
              >
                <LinkedIn />
              </IconButton>
            </Grid>

            {/* CTA Section */}
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                Stay Updated
              </Typography>
              <Typography variant="body2" gutterBottom>
                Join our newsletter to stay up to date with our latest news and
                offers.
              </Typography>
              <Button
                variant="contained"
                href="#subscribe"
                sx={{ mt: 2, background: COLORS.main }}
              >
                Subscribe
              </Button>
            </Grid>

            {/* Sitemap Section */}
            <Grid item xs={12}  md={4}>
              <Typography variant="h6" gutterBottom>
                Sitemap
              </Typography>
              <Grid container direction="column" sx={{display: "flex", flexDirection: "column", gap: "10px"}}>
                <Link href="/" color="inherit" underline="hover">
                  Home
                </Link>
                <Link href="/about" color="inherit" underline="hover">
                  About Us
                </Link>
                <Link href="/services" color="inherit" underline="hover">
                  Services
                </Link>
                <Link href="/contact" color="inherit" underline="hover">
                  Contact
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Bottom Bar Section */}
      <Box
        sx={{
          backgroundColor: '#222',
          color: 'white',
          py: 2,
          textAlign: 'center',
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="body2">
            © {new Date().getFullYear()} All rights reserved. |
            <Link href="/terms" color="inherit" underline="hover">
              Terms & Conditions
            </Link>{' '}
            |
            <Link href="/privacy" color="inherit" underline="hover">
              Privacy Policy
            </Link>
          </Typography>
        </Container>
      </Box>
    </>
  )
}

export default Footer
