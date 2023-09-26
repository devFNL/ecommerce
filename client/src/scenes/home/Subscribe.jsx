import { Box, InputBase, Divider, Typography, IconButton } from "@mui/material";
import MarkEmailReadOutlinedIcon from "@mui/icons-material/MarkEmailReadOutlined";
import { useState } from "react";
import CustomDialog from "../global/CustomDialog";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleSubscribeClick = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };
  return (
    <Box width="80%" margin="80px auto" textAlign="center">
      <IconButton>
        <MarkEmailReadOutlinedIcon fontSize="large" />
      </IconButton>
      <Typography variant="h3">Subscribe to our Newsletter</Typography>
      <Typography>
        and receive $20 coupon for your first order when you checkout
      </Typography>
      <Box
        p="2px 4px"
        m="15px auto"
        display="flex"
        alignItems="center"
        width="75%"
        backgroundColor="#F2F2F2"
      >
        <InputBase
          sx={{
            ml: 1,
            flex: 1,
          }}
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <Typography
          sx={{
            p: "10px",
            cursor: "pointer",
          }}
          onClick={handleSubscribeClick}
        >
          Subscribe
        </Typography>
      </Box>
      <CustomDialog
        open={isDialogOpen}
        onClose={handleCloseDialog}
        title="Subscription Successful"
        content="Thank you for subscribing to our newsletter. You will receive a $20 coupon in your email shortly."
      />
    </Box>
  );
};

export default Subscribe;
