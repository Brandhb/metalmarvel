
import * as React from "react";
import { Html, Text, Container, Head, Preview, Section } from "@react-email/components";

type ContactEmailProps = {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
};

const ContactEmail: React.FC<ContactEmailProps> = ({ name, email, phone, company, message }) => (
  <Html>
    <Head />
    <Preview>New Contact Form Submission</Preview>
    <Section>
      <Container>
        <Text>New Contact Form Submission:</Text>
        <Text>Name: {name}</Text>
        <Text>Email: {email}</Text>
        <Text>Phone: {phone}</Text>
        <Text>Company: {company}</Text>
        <Text>Message: {message}</Text>
      </Container>
    </Section>
  </Html>
);

export default ContactEmail;
