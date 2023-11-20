import { Stack, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import { Box } from "@mui/system";
import Header from "../Components/Header/Header";
import Picture from "../Images/About.jpeg";
import "../Styles/About.css";

export default function ButtonMUI() {
  return (
    <>
      <Header />
      <Stack p={{ xs: "15px", sm: "25px", md: "40px", lg: "60px " }}>
        <h2 className="template-header-title">Resume Builder</h2>
        <Stack
          className="midContainer"
          direction={{
            xs: "column-reverse",
            sm: "column-reverse",
            md: "column-reverse",
            lg: "row",
          }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          mt="20px"
        >
          <Typography
            sx={{
              fontSize: {
                xs: "13px",
                sm: "15px",
                md: "17px",
                lg: "19px",
              },
              paddingRight: {
                xs: "15px",
                sm: "18px",
                lg: "25px",
              },
              textAlign: "justify",
            }}
          >
          Crafting a compelling resume can set you apart from the competition, and our platform streamlines the process. We provide four distinct resume templates designed to help users convey maximum impactful information while keeping their resumes concise. Users also have the option to create an account, allowing them to save their progress, work on multiple versions, and effortlessly download their resumes as PDFs.

Each of our resume templates is segmented into four key sections: Personal Information, Work Experience, Education, and Key Skills. This organized structure ensures that recruiters can quickly access comprehensive user profiles. Our website consists of four primary pages: Home, Resume Templates, My Resume, and About Us, all accessible via the header navigation.

To enhance the user experience, we've incorporated dynamic features, including options to delete, download, and edit content. Users can seamlessly navigate between sections within each template using back and next buttons. Furthermore, we've rigorously tested our components through both unit and integration testing to guarantee a seamless and user-friendly experience.






          </Typography>
          <Stack>
            <img className="Image" src={Picture} alt="My Resumes" />
          </Stack>
        </Stack>
        <Box mt="25px">
          <Typography
            sx={{
              fontSize: {
                xs: "22px",
                sm: "25px",
                md: "27px",
                lg: "30px",
              },
              fontWeight: "400",
              color: "dark",
            }}
          >
            Share with your friends
          </Typography>
          <Box className="icons">
            <LinkedInIcon
              sx={{ fontSize: "40px", paddingLeft: "15px" }}
              color="primary"
            />
            <FacebookOutlinedIcon
              sx={{ fontSize: "40px", paddingLeft: "15px" }}
              color="primary"
            />
            <WhatsAppIcon
              sx={{ fontSize: "40px", paddingLeft: "15px" }}
              color="success"
            />
            <TwitterIcon
              sx={{ fontSize: "40px", paddingLeft: "15px" }}
              color="info"
            />
            <EmailIcon
              sx={{ fontSize: "40px", paddingLeft: "15px" }}
              color="error"
            />
          </Box>
        </Box>
      </Stack>
    </>
  );
}
