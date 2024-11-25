import React from "react";
import {
  Box,
  Divider,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Container,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import SearchIcon from "@mui/icons-material/Search";

const Market: React.FC = () => {
  return (
    <Container maxWidth="xl">
      <Box pt={15} pl={12} pr={12} pb={6}>
        <Typography variant="h4" className="text-white">
          Browse Marketplace
        </Typography>
        <Typography variant="body2" className="text-white" gutterBottom mb={5}>
          Browse through more than 50k NFTs on the NFT Marketplace.
        </Typography>
        <FormControl
          sx={{
            width: "100%",
            borderRadius: "20%",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#aaa", // Border color
              },
              "&:hover fieldset": {
                borderColor: "#aaa", // Border color on hover
              },
              "&.Mui-focused fieldset": {
                borderColor: "#aaa", // Border color when focused
              },
            },
          }}
          variant="outlined"
        >
          <InputLabel
            htmlFor="search-nft"
            sx={{
              color: "#aaa",
              "&.Mui-focused": {
                color: "#aaa", // Label color when focused
              },
            }}
          >
            Search NFTs
          </InputLabel>
          <OutlinedInput
            sx={{ color: "#aaa" }}
            id="search-nft"
            type="text"
            endAdornment={
              <InputAdornment position="end">
                <IconButton aria-label="search NFTs" sx={{ color: "#aaa" }}>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            }
            label="Search NFTs"
          />
        </FormControl>
      </Box>
      <Divider sx={{ backgroundColor: "#aaa", marginBottom: "2rem" }} />
      <Box pt={10} pl={12} pr={12} pb={5} sx={{ backgroundColor: "#41403f" }}>
        <Grid container rowSpacing={6} sx={{width:"100%"}} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid display="flex" justifyContent="center" size={4}>
            <Card
              sx={{ maxWidth: 345, borderRadius: "7%", background: "#2b2b2b" }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/assets/NFT/1.png"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" className="text-white">
                    Magic Mushroom 0325
                  </Typography>
                  <Typography gutterBottom variant="body2" component="div" className="text-white">
                    Owner : <b>Pedro</b>
                  </Typography>
                  <Typography variant="body2" className="text-white">
                    <p className="text-zinc-500">Price :</p> 
                    1.37 ETH
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid display="flex" justifyContent="center" size={4}>
            <Card
              sx={{ maxWidth: 345, borderRadius: "7%", background: "#2b2b2b" }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/assets/NFT/2.png"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" className="text-white">
                    Magic Mushroom 0325
                  </Typography>
                  <Typography gutterBottom variant="body2" component="div" className="text-white">
                    Owner : <b>Pedro</b>
                  </Typography>
                  <Typography variant="body2" className="text-white">
                    <p className="text-zinc-500">Price :</p> 
                    1.37 ETH
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid display="flex" justifyContent="center" size={4}>
            <Card
              sx={{ maxWidth: 345, borderRadius: "7%", background: "#2b2b2b" }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/assets/NFT/3.png"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" className="text-white">
                    Magic Mushroom 0325
                  </Typography>
                  <Typography gutterBottom variant="body2" component="div" className="text-white">
                    Owner : <b>Pedro</b>
                  </Typography>
                  <Typography variant="body2" className="text-white">
                    <p className="text-zinc-500">Price :</p> 
                    1.37 ETH
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Market;
