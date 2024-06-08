import FloatingLogos from "./components/FloatingLogos";
import Navbar from "./components/Navbar";
import {
  Hero,
  PopularProducts,
  Subscribe,
  Services,
  SpecialOffers,
  SuperQuality,
  CustomerReviews,
  Footer,
} from "./sections";
import Contact from "./sections/ContactUs";
export default function Home() {
  return (
    <>
      <Navbar />
      <section className="xl:padding-l wide:padding-r padding-b ">
        <Hero />
      </section>
      <section className=" xl:padding-l wide:padding-r padding-b">
        <FloatingLogos />
      </section>
      <section className="padding-x py-8">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffers />
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Contact />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </>
  );
}
