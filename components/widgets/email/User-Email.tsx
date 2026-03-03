import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Section,
  Text,
  Link,
} from "@react-email/components";
import * as React from "react";

interface UserEmailProps {
  name: string;
  email: string;
}

const brandColor = "#000";
const offBlack = "#000000";

const UserEmail = ({ name, email }: UserEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Welcome to Employ Virtual!</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={card}>
            <Section style={header}>
              <Img
                src="https://up23onagldy9futl.public.blob.vercel-storage.com/final_black.svg"
                width="120"
                height="40"
                alt="Employ Virtual"
                style={logo}
              />
            </Section>

            <Section style={cardContent}>
              <Heading style={h1}>Thank You for Reaching Out!</Heading>

              <Text style={paragraph}>Hello {name},</Text>
              <Text style={paragraph}>
                We've received your inquiry and we're excited to explore how we
                can help you scale your brand with our premium virtual talent
                and AI-driven solutions.
              </Text>

              <Section style={highlightBox}>
                <Text style={highlightText}>
                  Our team is currently reviewing your details. One of our
                  experts will get in touch with you shortly to discuss your
                  requirements in detail.
                </Text>
              </Section>

              <Text style={paragraph}>
                In the meantime, feel free to browse our website to learn more
                about our comprehensive services and successful case studies.
              </Text>

              <Section style={footer}>
                <Text style={footerText}>
                  Best Regards,
                  <br />
                  <span style={{ color: brandColor, fontWeight: "bold" }}>
                    The Employ Virtual Team
                  </span>
                </Text>
              </Section>
            </Section>
          </Section>
        </Container>
        <Text style={copyright}>
          © 2026 Employ Virtual | All Rights Reserved.
        </Text>
      </Body>
    </Html>
  );
};

export default UserEmail;

const main = {
  backgroundColor: "#f4f4f5",
  fontFamily: "Arial, Helvetica, sans-serif",
  padding: "40px 20px",
};

const container = {
  maxWidth: "540px",
  margin: "0 auto",
};

const card = {
  backgroundColor: "#ffffff",
  borderRadius: "12px",
  border: "1px solid #e5e7eb",
  overflow: "hidden",
};

const header = {
  padding: "32px",
  textAlign: "center" as const,
  borderBottom: "1px solid #eeeeee",
};

const logo = {
  margin: "0 auto",
};

const cardContent = {
  padding: "40px 32px",
};

const h1 = {
  color: offBlack,
  fontSize: "24px",
  fontWeight: "bold",
  margin: "0 0 20px",
  lineHeight: "1.2",
};

const paragraph = {
  color: "#4b5563",
  fontSize: "16px",
  lineHeight: "24px",
  margin: "0 0 16px",
};

const highlightBox = {
  backgroundColor: "#f5f3ff",
  borderRadius: "8px",
  padding: "20px",
  margin: "24px 0",
  border: "1px solid #000",
};

const highlightText = {
  color: brandColor,
  fontSize: "16px",
  lineHeight: "24px",
  margin: "0",
};

const footer = {
  marginTop: "32px",
  paddingTop: "24px",
  borderTop: "1px solid #eeeeee",
};

const footerText = {
  color: "#6b7280",
  fontSize: "15px",
  margin: "0",
};

const copyright = {
  color: "#9ca3af",
  fontSize: "12px",
  textAlign: "center" as const,
  marginTop: "24px",
};
