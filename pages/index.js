import Layout from "../layout/Layout";
import Hero from "../components/Sections/Hero";
import HowItWorks from "../components/Sections/HowItWorks";
import SuccessStory from "../components/Sections/SuccessStory";
import ProductSection from "../components/Sections/ProductSection";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <HowItWorks />
      <SuccessStory />
      <ProductSection />
    </Layout>
  );
};

export default Index;
