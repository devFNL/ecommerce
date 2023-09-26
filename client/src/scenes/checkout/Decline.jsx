import { Box, Alert, AlertTitle } from "@mui/material";

const Decline = () => {
  return (
    <Box m="90px auto" width="80%" height="50vh">
      <Alert severity="error">
        <AlertTitle>Failed</AlertTitle>
        Your payment was unsuccessful. Please check your payment information and
        try again.
      </Alert>
    </Box>
  );
};

export default Decline;
