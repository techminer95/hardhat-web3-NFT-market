import React from "react";
import {
  AppBar,
  Container,
  IconButton,
  Toolbar,
  Typography,
  Box,
  Button,
} from "@mui/material";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <AppBar position="static" sx={{ bgcolor: "#2b2b2b" }}>
      <Container maxWidth="xl">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Logo and Title */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              size="large"
              aria-label="NFT Marketplace"
              color="inherit"
            >
              <StorefrontIcon color="secondary" />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ ml: 1 }}>
              NFT Marketplace
            </Typography>
          </Box>

          {/* Navigation Links */}
          <Box sx={{ display: "flex", gap: 4 }}>
            <Link
              to="/marketplace"
              style={{
                textDecoration: "none",
                color: "inherit",
                fontWeight: 500,
              }}
            >
              Marketplace
            </Link>
            <Link
              to="/rankings"
              style={{
                textDecoration: "none",
                color: "inherit",
                fontWeight: 500,
              }}
            >
              Rankings
            </Link>
            <Link
              to="/connect-wallet"
              style={{
                textDecoration: "none",
                color: "inherit",
                fontWeight: 500,
              }}
            >
              Connect a Wallet
            </Link>
          </Box>

          {/* Sign-Up Button */}
          <Button
            variant="contained"
            color="secondary"
            startIcon={<PersonOutlineIcon />}
          >
            Sign Up
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
