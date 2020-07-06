import Layout from "../layout/Layout";
import Hero from "../components/Sections/Hero";
import HowItWorks from "../components/Sections/HowItWorks";
import SuccessStory from "../components/Sections/SuccessStory";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <HowItWorks />
      <SuccessStory />
    </Layout>
  );
};

export default Index;
