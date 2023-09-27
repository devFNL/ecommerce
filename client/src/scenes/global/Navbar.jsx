import { useDispatch, useSelector } from "react-redux";
import { Badge, Box, IconButton } from "@mui/material";
import {
  PersonOutline,
  ShoppingBagOutlined,
  MenuOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { shades } from "../../theme";
import { setIsCartOpen } from "../../state";
import { useState } from "react";
import CustomDialog from "./CustomDialog";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openSearchBar = () => {
    setIsSearchOpen(true);
  };

  const closeSearchBar = () => {
    setIsSearchOpen(false);
    setSearchValue("");
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    setIsDialogOpen(true);
  };

  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      width={"100%"}
      height={"60px"}
      backgroundColor="rgba(255,255,255,0.95)"
      color={"black"}
      position={"fixed"}
      top={"0"}
      left={"0"}
      zIndex={"1"}
    >
      <Box
        width={"80%"}
        margin={"auto"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box
          onClick={() => navigate("/")}
          sx={{ "&:hover": { cursor: "pointer" }, userSelect: "none" }}
          color={shades.secondary[500]}
        >
          <a href="#" style={{ color: "inherit" }}>
            URBANIZ-E
          </a>
        </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          columnGap={"20px"}
          zIndex={"2"}
        >
          {isSearchOpen ? (
            <form onSubmit={handleSearchSubmit}>
              <div className="input-wrapper">
                <input
                  type="text"
                  placeholder="find a product..."
                  name="text"
                  className="input"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
              </div>
              <button type="submit" style={{ display: "none" }} />
            </form>
          ) : null}
          <IconButton
            sx={{ color: "black" }}
            onClick={isSearchOpen ? closeSearchBar : openSearchBar}
          >
            <a>
              <SearchOutlined />
            </a>
          </IconButton>
          <CustomDialog
            open={isDialogOpen}
            onClose={() => setIsDialogOpen(false)}
            title="Search Results: "
            content={<p>-- Results Here --</p>}
          />
          {/* <IconButton sx={{ color: "black" }}>
            <a>
              <PersonOutline />
            </a>
          </IconButton> */}
          <Badge
            badgeContent={cart.length}
            color={"secondary"}
            invisible={cart.length === 0}
            sx={{
              "& .MuiBadge-badge": {
                right: 5,
                top: 5,
                padding: "0 4px",
                height: "14px",
                minWidth: "13px",
              },
            }}
          >
            <IconButton
              onClick={() => dispatch(setIsCartOpen({}))}
              sx={{ color: "black" }}
            >
              <a>
                <ShoppingBagOutlined />
              </a>
            </IconButton>
          </Badge>
          {/* <IconButton sx={{ color: "black" }}>
            <MenuOutlined />
          </IconButton> */}
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
