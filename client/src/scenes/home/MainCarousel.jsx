import { Box, Typography, IconButton, useMediaQuery } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { shades } from "../../theme";
import img1 from "../../assets/mike-von-wINYGcOk-Ps-unsplash.jpg";
import img2 from "../../assets/bmx22c-VZdnHy9XpJ4-unsplash.jpg";
import img3 from "../../assets/joshua-rawson-harris-Qaj-UT2FH4Q-unsplash.jpg";
import img4 from "../../assets/daniel-adesina-kDyhmfvXFqE-unsplash.jpg";
import img5 from "../../assets/marita-kavelashvili-Mvj8fv4URek-unsplash.jpg";

// import img bundle with regex
// const importAll = (r) =>
//   r.keys().reduce((acc, item) => {
//     acc[item.replace("./", "")] = r(item);
//     return acc;
//   }, {});

// const heroTextureImports = importAll(
//   require.context("../../assets", false, /\.(png|jpe?g|svg)$/)
// );

export const heroTextureImports = {
  "mike-von-wINYGcOk-Ps-unsplash.jpg": img1,
  "bmx22c-VZdnHy9XpJ4-unsplash.jpg": img2,
  "joshua-rawson-harris-Qaj-UT2FH4Q-unsplash.jpg": img3,
  "daniel-adesina-kDyhmfvXFqE-unsplash.jpg": img4,
  "marita-kavelashvili-Mvj8fv4URek-unsplash.jpg": img5,
};

const MainCarousel = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  return (
    <Carousel
      infiniteLoop={true}
      showThumbs={false}
      showIndicators={false}
      showStatus={false}
      autoPlay={true}
      interval={3000}
      renderArrowPrev={(onClickHandler, hasPrev, label) => (
        <IconButton
          onClick={onClickHandler}
          sx={{
            position: "absolute",
            top: "50%",
            left: "0",
            color: "white",
            padding: "5px",
            zIndex: "10",
          }}
        >
          <NavigateBeforeIcon sx={{ fontSize: 40 }} />
        </IconButton>
      )}
      renderArrowNext={(onClickHandler, hasNext, label) => (
        <IconButton
          onClick={onClickHandler}
          sx={{
            position: "absolute",
            top: "50%",
            right: "0",
            color: "white",
            padding: "5px",
            zIndex: "10",
          }}
        >
          <NavigateNextIcon sx={{ fontSize: 40 }} />
        </IconButton>
      )}
    >
      {Object.values(heroTextureImports).map((texture, index) => (
        <Box key={`carousel-image-${index}`}>
          <img
            src={texture}
            alt={`carousel-${index}`}
            style={{
              width: "100%",
              height: "700px",
              objectFit: "cover",
              backgroundAttachment: "fixed",
            }}
          />
          <Box
            color="white"
            padding="20px"
            borderRadius="1px"
            textAlign="left"
            backgroundColor="rgb(0, 0, 0, 0.4)"
            position="absolute"
            top="46%"
            left={isNonMobile ? "10%" : "0"}
            right={isNonMobile ? undefined : "0"}
            margin={isNonMobile ? undefined : "0 auto"}
            maxWidth={isNonMobile ? undefined : "240px"}
          >
            <Typography
              color={shades.secondary[200]}
              sx={{ userSelect: "none" }}
            >
              -- NEW ITEMS
            </Typography>
            <Typography variant="h1" sx={{ userSelect: "none" }}>
              Summer Sale
            </Typography>
            <Typography
              fontWeight="bold"
              color={shades.secondary[300]}
              sx={{ textDecoration: "underline" }}
            >
              <a href="#featured">Discover More</a>
            </Typography>
          </Box>
        </Box>
      ))}
    </Carousel>
  );
};

export default MainCarousel;
