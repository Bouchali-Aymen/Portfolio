import * as React from "react";
import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Text,
} from "@react-email/components";
import { ContactEmailProps } from "../types/interfaces";

export const EmailTemplate = ({ body }) => {
  const containerStyle = {
    margin: "0 auto",
    padding: "0 1.25rem",
    marginTop: "1.25rem",
    marginBottom: "3rem",
  };

  const hrStyle = {
    marginTop: "0.625rem",
    marginBottom: "1.875rem",
    border: "1px solid #ccc",
  };

  const textStyle = {
    base: {
      fontSize: "1rem",
      marginTop: "0",
      marginBottom: "0.625rem",
    },
  };

  return (
    <Html>
      <Head />
      <Preview>Portfolio Message</Preview>
      <Body style={{ fontFamily: "sans-serif", background: "#fff" }}>
        <Container style={containerStyle}>
          <Hr style={hrStyle} />
          <Text style={textStyle.base}>
            From: <i>{body.name}</i> (<i>{body.email}</i>)
          </Text>
          <Text style={textStyle.base}>Subject: {body.subject}</Text>
          <Text style={textStyle.base}>{body.message}</Text>
          <Text style={textStyle.base}>
            Sent via Contact Form @{" "}
            <a rel="noopener" href="https://eimaam.dev" target="_blank">
              eimaam.dev
            </a>
            <br />
          </Text>
          <Hr style={hrStyle} />
        </Container>
      </Body>
    </Html>
  );
};

export default EmailTemplate;
