import { Box, Button, Container, Stack, Typography } from "@mui/material";
import MetamaskIcon from "@mui/icons-material/AccountBalanceWallet"; // Replace with an actual Metamask icon
import WalletConnectIcon from "@mui/icons-material/Link"; // Replace with an actual WalletConnect icon
import CoinbaseIcon from "@mui/icons-material/AccountBalance";
export default function Login() {
  return (
    <Container maxWidth="xl">
      <Box className="grid gap-2 grid-cols-2 gap-x-2">
        <Box>
          <img src="/assets/Image Placeholder.png" />
        </Box>
        <Box>
          <Box mt={15}>
            <Typography
              variant="h3"
              gutterBottom
              className="text-white font-bold"
              sx={{ letterSpacing: "5px" }}
            >
              Connect Wallet
            </Typography>

            {/* Description */}
            <Typography
              variant="h6"
              sx={{ marginBottom: 3 }}
              className="text-white"
            >
              Choose a wallet you want to connect. <br /> There are several
              wallet providers.
            </Typography>
          </Box>
          <Stack spacing={3} mt={4} width="50%">
            <Button
              variant="outlined"
              sx={{
                justifyContent: "flex-start",
                gap: 3,
                textTransform: "none",
                color: "#fff",
                borderColor: "#6c63ff",
                borderRadius: 3,
                fontSize: 16,
                "&:hover": {
                  borderColor: "#9f98ff",
                },
                padding: "15px",
              }}
            >
              <img
                src="/assets/metamask-icon.png"
                width="40px"
                height="40px"
                className="ml-8"
              />
              Metamask
            </Button>
            <Button
              variant="outlined"
              sx={{
                justifyContent: "flex-start",
                gap: 3,
                textTransform: "none",
                color: "#fff",
                borderColor: "#6c63ff",
                borderRadius: 3,
                fontSize: 16,
                "&:hover": {
                  borderColor: "#9f98ff",
                },
                padding: "15px",
              }}
            >
              <img
                src="/assets/google-wallet-icon.png"
                width="40px"
                height="40px"
                className="ml-8"
              />
              Wallet Connect
            </Button>
            <Button
              variant="outlined"
              sx={{
                justifyContent: "flex-start",
                gap: 3,
                textTransform: "none",
                color: "#fff",
                borderColor: "#6c63ff",
                borderRadius: 3,
                fontSize: 16,
                "&:hover": {
                  borderColor: "#9f98ff",
                },
                padding: "15px",
              }}
            >
              <img
                src="/assets/us-dollar-coin-color-icon.png"
                width="40px"
                height="40px"
                className="ml-8"
              />
              Coinbase
            </Button>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
}
