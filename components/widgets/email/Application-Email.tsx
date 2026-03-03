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
  Hr,
} from "@react-email/components";
import * as React from "react";

interface ApplicationEmailProps {
  name: string;
  email: string;
  phone: string;
  coverMessage?: string;
  roleTitle: string;
  resumeUrl: string;
}

const brandColor = "#000";
const offBlack = "#000000";
const primaryGray = "#4b5563";

const ApplicationEmail = ({
  name,
  email,
  phone,
  coverMessage,
  roleTitle,
  resumeUrl,
}: ApplicationEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>New Application Alert: {roleTitle}</Preview>

      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Img
              src="https://up23onagldy9futl.public.blob.vercel-storage.com/final_black.svg"
              width="140"
              alt="Digixito"
              style={logo}
            />
          </Section>

          <Section style={card}>
            <Section style={cardHeader}>
              <Heading style={h1}>New Candidate Application</Heading>
              <Text style={subtitle}>
                A candidate has applied for the{" "}
                <strong style={{ color: "#000" }}>{roleTitle}</strong> position.
              </Text>
            </Section>

            <Section style={cardContent}>
              <Text style={sectionTitle}>Applicant Summary</Text>

              <Section style={dataTable}>
                <table
                  width="100%"
                  cellPadding="0"
                  cellSpacing="0"
                  style={{ marginBottom: "16px" }}
                >
                  <tr>
                    <td style={labelCell} width="30%">
                      Full Name
                    </td>
                    <td style={valueCell}>{name}</td>
                  </tr>
                </table>
                <table
                  width="100%"
                  cellPadding="0"
                  cellSpacing="0"
                  style={{ marginBottom: "16px" }}
                >
                  <tr>
                    <td style={labelCell} width="30%">
                      Email Address
                    </td>
                    <td style={valueCell}>
                      <Link href={`mailto:${email}`} style={valueLink}>
                        {email}
                      </Link>
                    </td>
                  </tr>
                </table>
                <table width="100%" cellPadding="0" cellSpacing="0">
                  <tr>
                    <td style={labelCell} width="30%">
                      Phone Number
                    </td>
                    <td style={valueCell}>{phone}</td>
                  </tr>
                </table>

                {coverMessage && (
                  <table
                    width="100%"
                    cellPadding="0"
                    cellSpacing="0"
                    style={{ marginTop: "24px" }}
                  >
                    <tr>
                      <td style={labelCell} width="30%">
                        Cover Message
                      </td>
                      <td style={valueCell}>
                        <div style={coverMessageBox}>{coverMessage}</div>
                      </td>
                    </tr>
                  </table>
                )}
              </Section>

              <Section style={actionSection}>
                <Text style={paragraph}>
                  The candidate's resume has been securely stored. Click below
                  to view or download the file.
                </Text>
                <div
                  style={{
                    textAlign: "center",
                    marginTop: "24px",
                    marginBottom: "8px",
                  }}
                >
                  <Link href={resumeUrl} style={button}>
                    Review Resume
                  </Link>
                </div>
              </Section>
            </Section>
          </Section>

          <Text style={footer}>
            This is an automated message from the Digixito Careers system.
            <br />© {new Date().getFullYear()} Digixito Media Pvt. Ltd.
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default ApplicationEmail;

/* ---------- Styles ---------- */

const main = {
  backgroundColor: "#111111", // Dark background for premium feel outside the card
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif",
  padding: "60px 20px",
};

const container = {
  maxWidth: "600px",
  margin: "0 auto",
};

const header = {
  marginBottom: "32px",
  textAlign: "center" as const,
};

const logo = {
  margin: "0 auto",
  filter: "invert(1)", // Makes the black logo white on the dark background
};

const card = {
  backgroundColor: "#ffffff",
  borderRadius: "16px",
  overflow: "hidden",
  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
};

const cardHeader = {
  backgroundColor: "#f8f9fa",
  padding: "32px 40px",
  borderBottom: "1px solid #edf2f7",
  textAlign: "center" as const,
};

const h1 = {
  color: offBlack,
  fontSize: "26px",
  fontWeight: "800",
  letterSpacing: "-0.5px",
  margin: "0 0 12px",
};

const subtitle = {
  color: primaryGray,
  fontSize: "16px",
  lineHeight: "24px",
  margin: "0",
};

const cardContent = {
  padding: "40px",
};

const sectionTitle = {
  fontSize: "14px",
  fontWeight: "700",
  color: "#9ca3af",
  textTransform: "uppercase" as const,
  letterSpacing: "1px",
  margin: "0 0 24px",
};

const dataTable = {
  backgroundColor: "#fafafa",
  border: "1px solid #f3f4f6",
  borderRadius: "12px",
  padding: "24px",
  marginBottom: "32px",
};

const labelCell = {
  color: "#6b7280",
  fontSize: "14px",
  fontWeight: "500",
  verticalAlign: "top" as const,
};

const valueCell = {
  color: offBlack,
  fontSize: "15px",
  fontWeight: "600",
  verticalAlign: "top" as const,
};

const valueLink = {
  color: "#000",
  textDecoration: "none",
};

const coverMessageBox = {
  backgroundColor: "#f4f4f5",
  padding: "16px",
  borderRadius: "8px",
  borderLeft: "4px solid #000",
  fontSize: "14px",
  color: "#374151",
  lineHeight: "22px",
  whiteSpace: "pre-wrap" as const,
};

const actionSection = {
  borderTop: "1px solid #edf2f7",
  paddingTop: "32px",
};

const paragraph = {
  color: primaryGray,
  fontSize: "15px",
  lineHeight: "24px",
  margin: "0",
  textAlign: "center" as const,
};

const button = {
  backgroundColor: brandColor,
  borderRadius: "8px",
  color: "#fff",
  display: "inline-block",
  fontSize: "15px",
  fontWeight: "600",
  lineHeight: "50px",
  textAlign: "center" as const,
  textDecoration: "none",
  width: "100%",
  boxSizing: "border-box" as const,
  maxWidth: "300px",
};

const footer = {
  color: "#6b7280",
  fontSize: "13px",
  lineHeight: "20px",
  textAlign: "center" as const,
  marginTop: "32px",
};
