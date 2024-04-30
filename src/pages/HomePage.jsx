import {
  Nav,
  About,
  Projects,
  Certifications,
  Contact,
  Testimonials,
  Blogs,
  Skills,
  Footer,
} from "../sections";
import Timeline from "../sections/Timeline";

function HomePage() {
  return (
    <main className="relative ">
      <Nav />
      <section id="about" className="padding">
        <About />
      </section>
      <section id="skills" className="padding ">
        <Skills />
      </section>
      <section id="projects" className="padding ">
        <Projects />
      </section>
      <section id="certifications" className="padding">
        <Certifications />
      </section>
      <section id="timeline" className=" padding">
        <Timeline />
      </section>
      <section id="testimonials" className="padding ">
        <Testimonials />
      </section>
      <sectionsection id="contact" className="relative padding">
        <Contact />
      </sectionsection>
      <section className="bg-gray-200 ">
        <Footer />
      </section>
    </main>
  );
}

export default HomePage;
// {/* <section className=" padding ">{/* <CustomerVideoReviews /> */}</section>
// <section className="padding-x py-10">{/* <Services /> */}</section>
// <section className="padding ">{/* <Testimonials /> */}</section>
// <section className="padding ">{/* <FAQPage /> */}</section>
// <section className="padding-xsm:py-32 py-16 w-full">
//   {/* <Subscribe /> */}
// </section> */}
