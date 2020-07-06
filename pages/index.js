import Layout from "../layout/Layout";
import Hero from "../components/Sections/Hero";
import HowItWorks from "../components/Sections/HowItWorks";
import SuccessStory from "../components/Sections/SuccessStory";
import ProductSection from "../components/Sections/ProductSection";
import Footer from "../components/Sections/Footer";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <HowItWorks />
      <SuccessStory />
      <ProductSection />
      <Footer />
    </Layout>
  );
};

export default Index;
