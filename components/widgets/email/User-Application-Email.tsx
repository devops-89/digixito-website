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
} from "@react-email/components";
import * as React from "react";

interface UserApplicationEmailProps {
  name: string;
  roleTitle: string;
}

const brandColor = "#000";
const offBlack = "#000000";

const UserApplicationEmail = ({
  name,
  roleTitle,
}: UserApplicationEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Thank you for applying to Digixito!</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={card}>
            <Section style={header}>
              <Img
                src="https://up23onagldy9futl.public.blob.vercel-storage.com/final_black.svg"
                width="120"
                height="40"
                alt="Digixito"
                style={logo}
              />
            </Section>

            <Section style={cardContent}>
              <Heading style={h1}>Application Received</Heading>

              <Text style={paragraph}>Hi {name},</Text>
              <Text style={paragraph}>
                Thank you for applying for the <strong>{roleTitle}</strong>{" "}
                position at Digixito Media Pvt. Ltd. We have successfully
                received your application and resume.
              </Text>

              <Section style={highlightBox}>
                <Text style={highlightText}>
                  Our talent acquisition team will review your profile to see
                  how your skills and experience align with our needs. If your
                  qualifications are a match, we will reach out to you with the
                  next steps.
                </Text>
              </Section>

              <Text style={paragraph}>
                We appreciate your interest in joining our team and wish you the
                best of luck!
              </Text>

              <Section style={footer}>
                <Text style={footerText}>
                  Best Regards,
                  <br />
                  <span style={{ color: brandColor, fontWeight: "bold" }}>
                    The Digixito Team
                  </span>
                </Text>
              </Section>
            </Section>
          </Section>
        </Container>
        <Text style={copyright}>© 2026 Digixito | All Rights Reserved.</Text>
      </Body>
    </Html>
  );
};

export default UserApplicationEmail;

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
