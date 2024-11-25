import { Box, Container, IconButton, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import StorefrontIcon from "@mui/icons-material/Storefront";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";
import XIcon from "@mui/icons-material/X";
import RedditIcon from "@mui/icons-material/Reddit";

import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import DirectionsIcon from "@mui/icons-material/Directions";

export default function Footer() {
  return (
    <div className="bg-zinc-700">
      <Container maxWidth="xl" sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} pl={5} pr={5} pt={5}>
          <Grid size={4}>
            <Box className="flex items-center">
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                style={{ marginLeft: "-12px" }}
              >
                <StorefrontIcon color="secondary" />
              </IconButton>
              <Typography variant="h6" component="div" className="text-white">
                NFT marketplace
              </Typography>
            </Box>
            <Typography variant="body2" mt={2} className="text-white">
              NFT marketplace UI created <br /> with Anima for Figma
            </Typography>
            <Typography variant="body2" mt={2} className="text-white">
              Join Our Community
            </Typography>
            <Box className="flex items-center gap-2" mt={2}>
              <FacebookOutlinedIcon />
              <YouTubeIcon />
              <XIcon />
              <RedditIcon /> 
            </Box>
          </Grid>
          <Grid size={4}>
            <Typography variant="h6" className="text-white">
              {" "}
              Explore
            </Typography>
            <Typography variant="body2" className="text-white" mt={2}>
              {" "}
              MarketPlace
            </Typography>
            <Typography variant="body2" className="text-white" mt={2}>
              {" "}
              Rankings{" "}
            </Typography>
            <Typography variant="body2" className="text-white" mt={2}>
              {" "}
              Connect a Wallet
            </Typography>
          </Grid>
          <Grid size={4}>
            <Typography variant="h6" className="text-white">
              {" "}
              Join Our Weekly Digest
            </Typography>
            <Typography variant="body2" className="text-white" mt={2}>
              {" "}
              Get exclusive promotion & updates
              <br /> straight to your{" "}
            </Typography>
            <Paper
              component="form"
              sx={{
                mt:"20px",
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 400,
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Plase you gmail accoutn"
                inputProps={{ "aria-label": "search google maps" }}
              />
              <IconButton
                color="primary"
                sx={{ p: "10px" }}
                aria-label="directions"
              >
                <DirectionsIcon />
              </IconButton>
            </Paper>
          </Grid>
        </Grid>
        <Divider sx={{mt:"20px",backgroundColor:"#aaa"}}  />
        <Typography  variant="body2" className="text-white" mt={2} pb={2}>@NFT Market, Use the template freely</Typography>
      </Container>
      
    </div>
  );
}
