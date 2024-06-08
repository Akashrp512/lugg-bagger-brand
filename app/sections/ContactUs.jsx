import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <section
      id="contact-us"
      className="max-container flex flex-col justify-center items-center gap-10"
    >
      <h3 className="text-4xl leading-[60px] font-palanquin font-bold">
        Contact Us
        <span className="text-primary"> for Any Queries </span>
      </h3>
      <ContactForm />
    </section>
  );
}
