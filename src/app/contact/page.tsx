import { Metadata } from "next";
import Container from "@/components/layout/Container";
import ContactForm from "@/components/blocks/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch for freelance projects, collaborations, or just to say hello.",
};

export default function ContactPage() {
  return (
    <section className="py-20">
      <Container>
        <div className="mb-12 text-center">
          <h1 className="text-text-primary text-4xl font-bold tracking-tight sm:text-5xl">
            Get in Touch
          </h1>
          <p className="text-text-secondary mx-auto mt-4 max-w-xl text-lg">
            Have a project in mind or just want to chat? I&apos;d love to hear from you. Fill out
            the form below or reach out directly.
          </p>
        </div>

        <ContactForm />
      </Container>
    </section>
  );
}
