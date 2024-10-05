"use client";

import { useState, useEffect } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/constant/images";



const navItems = [
  {item: 'Home', url:'/'},
  {item: 'About Us', url:'/about-us'},
  {item: 'Our Products', url:'/our-products'},
  {item: 'Portfolio Sumery', url:'/portfolio-summery'},
  {item: 'Contact Us', url:'/contact'},
];

const ResponsiveNavbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const router = useRouter()

  // State to manage navbar height on scroll
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileClose = () => {
    setAnchorEl(null);
  };

  const menuVariants = {
    hover: {
      scale: 1.05,
      color: "#ff4081",
      textShadow: "0px 0px 8px rgba(255, 64, 129, 0.7)",
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#1976d2",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        transition: "height 0.3s ease-in-out",
        height: scrolled ? "60px" : "80px", // Dynamic height based on scroll
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center", // Center items vertically
          minHeight: "60px !important", // Ensure the toolbar's minimum height matches the scrolled height
          height: "100%", // Make sure it takes the full height of the AppBar
        }}
      >
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: "bold" }}>
          <Link href={"/"}>
            <Image src={Logo} width={150} height={100} alt="Logo" />
          </Link>
        </Typography>

        {/* Desktop Menu */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
          {navItems.map((item, i) => (
            <motion.div whileHover="hover" variants={menuVariants} key={i}>
              <Button
                onClick={()=> router.push(item.url)}
                sx={{ color: "#fff", fontSize: "1rem", textTransform: "none", transition: "color 0.3s ease-in-out" }}
              >
                {item.item}
              </Button>
            </motion.div>
          ))}
          {/* Profile Icon and Dropdown for Desktop */}
          <IconButton onClick={handleProfileClick} sx={{ p: 0, ml: 2 }}>
            <Avatar alt="Profile" src="/images/blank-profile.png" />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleProfileClose}
            sx={{ mt: "10px" }}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleProfileClose}>Profile</MenuItem>
            <MenuItem onClick={handleProfileClose}>My Account</MenuItem>
            <MenuItem onClick={handleProfileClose}>Logout</MenuItem>
          </Menu>
        </Box>

        {/* Mobile Menu Icon and Profile */}
        <Box sx={{ display: { xs: "flex", md: "none" }, alignItems: "center" }}>
          <IconButton color="inherit" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          {/* Profile Icon and Dropdown for Mobile */}
          <IconButton onClick={handleProfileClick} sx={{ p: 0, ml: 1 }}>
            <Avatar alt="Profile" src="/images/blank-profile.png" />
          </IconButton>
        </Box>
      </Toolbar>

      {/* Mobile Drawer Menu */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250, backgroundColor: "#1976d2", height: "100%", color: "#fff", paddingTop: 2 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {navItems.map((item, i) => (
              <ListItem button key={i} onClick={()=> router.push(item.url)}>
                <ListItemText primary={item.item} sx={{ textAlign: "center" }} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default ResponsiveNavbar;
