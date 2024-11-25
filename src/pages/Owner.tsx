import React from "react";
import {
  Box,
  Divider,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Container,
  Button
} from "@mui/material";
import Grid from "@mui/material/Grid";
interface NFTCardProps {
  image: string;
  title: string;
  owner: string;
  price: string;
}

const NFTCard: React.FC<NFTCardProps> = ({ image, title, owner, price }) => (
  <Grid display="flex" justifyContent="center" xs={12} sm={6} md={4}>
    <Card
      sx={{
        maxWidth: 345,
        borderRadius: "7%",
        backgroundColor: "#2b2b2b",
      }}
    >
      <CardActionArea>
        <CardMedia component="img" height="140" image={image} alt={title} />
        <CardContent>
          <Typography variant="h5" gutterBottom className="text-white">
            {title}
          </Typography>
          <Typography variant="body2" gutterBottom className="text-white">
            Owner: <b>{owner}</b>
          </Typography>
          <Typography variant="body2" className="text-white">
            <span className="text-zinc-500">Price:</span> {price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </Grid>
);

const Owner: React.FC = () => {
  const nftData = [
    {
      image: "/assets/NFT/1.png",
      title: "Magic Mushroom 0325",
      owner: "Pedro",
      price: "1.37 ETH",
    },
    {
      image: "/assets/NFT/2.png",
      title: "Magic Mushroom 0326",
      owner: "Pedro",
      price: "2.15 ETH",
    },
    {
      image: "/assets/NFT/3.png",
      title: "Magic Mushroom 0327",
      owner: "Pedro",
      price: "3.01 ETH",
    },
  ];

  return (
    <Container maxWidth="xl">
      {/* Header Section */}
      <Box pt={15} pl={12} pr={12} pb={6}>
        <Grid container spacing={2} alignItems="center">
          <Grid xs={12} sm={6}>
            <Typography variant="h4" className="text-white">
              AnimaKid
            </Typography>
            <Typography variant="body1" className="text-white" gutterBottom>
              NFT sold: <b>50+</b>
            </Typography>
          </Grid>
          <Grid xs={12} sm={6} display="flex" justifyContent="flex-end">
            <Button
              variant="contained"
              sx={{
                padding: "0.5rem 2rem",
                borderRadius: "5%",
                fontWeight: "bold",
              }}
            >
              0xc0E3...B79C
            </Button>
          </Grid>
        </Grid>
      </Box>

      {/* Divider */}
      <Divider sx={{ backgroundColor: "#aaa", marginBottom: "2rem" }} />

      {/* NFT Cards Section */}
      <Box pt={10} pl={12} pr={12} pb={5} sx={{ backgroundColor: "#41403f" }}>
        <Grid container spacing={3}>
          {nftData.map((nft, index) => (
            <NFTCard
              key={index}
              image={nft.image}
              title={nft.title}
              owner={nft.owner}
              price={nft.price}
            />
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Owner;
