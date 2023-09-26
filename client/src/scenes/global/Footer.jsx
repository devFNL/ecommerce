import { useState } from "react";
import { useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";
import { shades } from "../../theme";
import CustomDialog from "./CustomDialog";

const Footer = () => {
  const {
    palette: { neutral },
  } = useTheme();

  const [openDialog1, setOpenDialog1] = useState(false);
  const [openDialog2, setOpenDialog2] = useState(false);
  const [openDialog3, setOpenDialog3] = useState(false);
  const [openDialog4, setOpenDialog4] = useState(false);
  const [openDialog5, setOpenDialog5] = useState(false);
  const [openDialog6, setOpenDialog6] = useState(false);

  return (
    <Box mt="70px" p="40px 0" backgroundColor={neutral.light}>
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
      >
        <Box width="clamp(20%, 30%, 40%)">
          <Typography
            variant="h4"
            fontWeight="bold"
            mb="30px"
            color={shades.secondary[500]}
            sx={{ userSelect: "none" }}
          >
            URBANIZ-E
          </Typography>
          <div>
            Your Urban Fashion Destination. Immerse yourself in freshness and
            contemporary style. Discover a wide range of garments to make a
            statement in the urban jungle. From streetwear to cutting-edge
            trends, our catalog has everything you need to express your unique
            style in the city
          </div>
        </Box>
        <Box>
          <Typography
            variant="h4"
            fontWeight="bold"
            mb="30px"
            style={{ userSelect: "none" }}
          >
            About Us
          </Typography>
          <Typography
            mb="30px"
            style={{ cursor: "pointer" }}
            onClick={() => setOpenDialog1(true)}
          >
            Carreers
          </Typography>
          <CustomDialog
            open={openDialog1}
            onClose={() => setOpenDialog1(false)}
            title="Carreers"
            content={
              <>
                <p>
                  At Urbaniz-e, we believe in talent and passion. If you're
                  someone who's passionate about urban fashion, creativity, and
                  innovation, you could be the ideal candidate to join our team!
                </p>

                <p>
                  We offer a dynamic and collaborative work environment where
                  you can develop your skills and grow professionally. We value
                  diversity and inclusion, striving to create opportunities for
                  individuals from all backgrounds and experiences.
                </p>

                <p>
                  If you're interested in being a part of Urbaniz-e and
                  contributing to our success, check out our current job
                  openings and submit your application. We look forward to
                  meeting you!
                </p>
              </>
            }
          />
          <Typography mb="30px">
            <a
              href="https://www.google.com.ar/maps/@40.7616415,-73.9922102,9.75z?entry=ttu"
              target="blank_"
            >
              Our Stores
            </a>
          </Typography>
          <Typography
            mb="30px"
            style={{ cursor: "pointer" }}
            onClick={() => setOpenDialog2(true)}
          >
            Terms & Conditions
          </Typography>
          <CustomDialog
            open={openDialog2}
            onClose={() => setOpenDialog2(false)}
            title="Terms & Conditions"
            content={
              <>
                <p>
                  These are our general terms and conditions. By accessing and
                  using our website and services, you agree to comply with these
                  terms and conditions. If you do not agree with any of these
                  terms, we recommend that you do not use our services.
                  <br />
                  <br />
                  <strong>1. Use of the Site</strong>
                  <br />
                  1.1. Urbaniz-e offers urban clothing and accessory sales
                  services. The use of our website is subject to your compliance
                  with these terms and conditions.
                  <br />
                  1.2. By placing an order through our site, you confirm that
                  you are of legal age or have the consent of an adult.
                  <br />
                  <br />
                  <strong>2. Privacy and Security</strong>
                  <br />
                  2.1. We respect your privacy and protect your personal data in
                  accordance with our privacy policy. By using our services, you
                  accept our privacy policy.
                  <br />
                  2.2. You are responsible for maintaining the security of your
                  account and password.
                  <br />
                  <br />
                  <strong>3. Orders and Payment</strong>
                  <br />
                  3.1. Prices and product availability are subject to change
                  without notice.
                  <br />
                  3.2. We accept online payments through secure methods. By
                  placing an order, you agree to pay the total price, including
                  taxes and shipping costs.
                  <br />
                  <br />
                  <strong>4. Shipping and Returns</strong>
                  <br />
                  4.1. Please refer to our shipping and returns policy for
                  detailed information on delivery times and return conditions.
                  <br />
                  <br />
                  <strong>5. Intellectual Property</strong>
                  <br />
                  5.1. All content on our website, including text, images, and
                  logos, is protected by intellectual property rights and may
                  not be used without our permission.
                  <br />
                  <br />
                  <strong>6. Communications</strong>
                  <br />
                  6.1. By using our services, you agree to receive electronic
                  communications from us. You can opt out of receiving these
                  communications at any time.
                  <br />
                  <br />
                  <strong>7. Changes and Cancellations</strong>
                  <br />
                  7.1. We reserve the right to make changes to our terms and
                  conditions at any time. Changes will take effect as soon as
                  they are published on our website.
                  <br />
                  7.2. We reserve the right to cancel orders and reject services
                  at any time for legal or security reasons.
                  <br />
                  <br />
                  <strong>8. Applicable Law</strong>
                  <br />
                  8.1. These terms and conditions are governed by the laws of
                  the state of New York, United States, and any dispute will be
                  resolved in the courts of New York City.
                </p>
              </>
            }
          />
          <Typography
            mb="30px"
            style={{ cursor: "pointer" }}
            onClick={() => setOpenDialog3(true)}
          >
            Privacy Policy
          </Typography>
          <CustomDialog
            open={openDialog3}
            onClose={() => setOpenDialog3(false)}
            title="Privacy Policy"
            content={
              <>
                <p>
                  <strong>Information We Collect</strong> <br />
                  We may collect and process your personal information when you
                  use our website. This information may include:
                  <ul>
                    <li>Your name</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>Address</li>
                  </ul>
                  <strong>How We Use Your Information</strong> <br />
                  <ul>
                    <li>Provide and maintain our services</li>
                    <li>Notify you of changes to our services</li>
                    <li>Provide customer support</li>
                    <li>Improve our services</li>
                    <li>Monitor usage and detect issues</li>
                  </ul>
                  <strong>Data Transfer</strong> <br />
                  Your information may be transferred and processed outside your
                  jurisdiction. By using our services, you consent to this
                  transfer. <br />
                  <br />
                  <strong>Disclosure of Data</strong> <br />
                  We may disclose your information to comply with legal
                  obligations or protect our rights. <br />
                  <br />
                  <strong>Security</strong> <br />
                  We take steps to secure your data, but remember no online
                  method is 100% secure. <br />
                  <br />
                  <strong>Changes to This Policy</strong> <br />
                  We may update our privacy policy. Check for changes
                  periodically. <br />
                  <br />
                  <strong>Contact Us</strong> <br />
                  If you have questions about our privacy policy, please contact
                  us at support@urbanize.com
                </p>
              </>
            }
          />
        </Box>
        <Box>
          <Typography
            variant="h4"
            fontWeight="bold"
            mb="30px"
            style={{ userSelect: "none" }}
          >
            Customer Care
          </Typography>
          <Typography
            mb="30px"
            style={{ cursor: "pointer", userSelect: "none" }}
            onClick={() => setOpenDialog4(true)}
          >
            FAQ
          </Typography>
          <CustomDialog
            open={openDialog4}
            onClose={() => setOpenDialog4(false)}
            title="FAQ"
            content={
              <>
                <p>
                  <strong>How can I place an order on Urbaniz-e?</strong> <br />
                  You can easily place an order by following these steps: Browse
                  our website, select your desired products, add them to your
                  cart, and proceed to checkout.
                </p>
                <p>
                  <strong>What payment options are available?</strong> <br />
                  We accept various payment methods, including credit cards,
                  PayPal, Apple Pay, and more. We also offer financing and
                  installment options.
                </p>
                <p>
                  <strong>How long does it take to receive my order?</strong>
                  <br />
                  The delivery times may vary depending on your location. You
                  can expect your order to arrive within 48 hours.
                </p>
                <p>
                  <strong>Can I return or exchange my order?</strong> <br />
                  Yes, you can. We have a hassle-free return and exchange
                  policy. Please check our return policy for more details.
                </p>
                <p>
                  <strong>How can I contact customer support?</strong> <br />
                  If you have any questions or need assistance, you can reach
                  our customer support team at support@urbanize.com during our
                  business hours.
                </p>
              </>
            }
          />
          <Typography mb="30px">
            <a
              href="https://www.fedex.com/en-us/tracking.html?action=track"
              target="blank_"
            >
              Track Your Order
            </a>
          </Typography>
          <Typography
            mb="30px"
            style={{ cursor: "pointer" }}
            onClick={() => setOpenDialog5(true)}
          >
            Corporate & Bulk Purchasing
          </Typography>
          <CustomDialog
            open={openDialog5}
            onClose={() => setOpenDialog5(false)}
            title="Corporate & Bulk Purchasing"
            content={
              <>
                <p>
                  If you represent a business or organization interested in bulk
                  purchases, we offer specialized corporate solutions to meet
                  your needs. Whether you're looking to outfit your team or buy
                  in larger quantities, our dedicated corporate sales team is
                  here to assist you.
                </p>
                <br />
                <p>
                  <strong>Benefits of Corporate Purchasing:</strong>
                </p>
                <ul>
                  <li>Discounted pricing on bulk orders</li>
                  <li>Personalized assistance and support</li>
                  <li>Customization options available</li>
                  <li>Fast and efficient order processing</li>
                </ul>
                <br />
                <p>
                  To inquire about corporate pricing, customization options, or
                  to place a bulk order, please contact our corporate sales team
                  at sales@urbanize.com
                </p>
              </>
            }
          />
          <Typography
            mb="30px"
            style={{ cursor: "pointer" }}
            onClick={() => setOpenDialog6(true)}
          >
            Returns & Refunds
          </Typography>
          <CustomDialog
            open={openDialog6}
            onClose={() => setOpenDialog6(false)}
            title="Returns & Refunds"
            content={
              <>
                <p>
                  <strong>Returns Policy</strong> <br />
                  We accept returns within 30 days of your purchase. To be
                  eligible for a return, your item must be unused and in the
                  same condition that you received it. It must also be in the
                  original packaging.
                </p>
                <p>
                  <strong>Refunds</strong> <br />
                  Once we receive your item, we will inspect it and notify you
                  that we have received your returned item. We will immediately
                  notify you on the status of your refund after inspecting the
                  item. If your return is approved, we will initiate a refund to
                  your credit card (or original method of payment). You will
                  receive the credit within a certain amount of days, depending
                  on your card issuer's policies.
                </p>
                <p>
                  <strong>Shipping</strong> <br />
                  You will be responsible for paying for your own shipping costs
                  for returning your item. Shipping costs are non-refundable. If
                  you receive a refund, the cost of return shipping will be
                  deducted from your refund.
                </p>
                <p>
                  <strong>Contact Us</strong> <br />
                  If you have any questions about our Returns & Refunds policy,
                  please contact us at returns@urbanize.com
                </p>
              </>
            }
          />
        </Box>
        <Box width="clamp(20%, 25%, 30%)">
          <Typography
            variant="h4"
            fontWeight="bold"
            mb="30px"
            style={{ userSelect: "none" }}
          >
            Contact Us
          </Typography>
          <Typography mb="30px">
            <a href="https://maps.app.goo.gl/sXcERUYc4L6fQjvc6" target="blank_">
              129 Urban Street, New York, NY 10001
            </a>
          </Typography>
          <Typography mb="30px">
            <a href="mailto:info@urbanize.com" style={{ color: "black" }}>
              info@urbanize.com
            </a>
          </Typography>
          <Typography mb="30px">
            <a href="tel:(555)123-4567" style={{ color: "black" }}>
              (555) 123-4567
            </a>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
