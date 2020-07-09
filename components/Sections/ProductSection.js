import Section from "../../layout/Section";

const ProductSection = () => {
  return (
    <Section>
      <div
        id="product-section-main-container"
        className="w-full flex items-start flex-col-reverse text-center LTS:flex-row LTS:text-left"
      >
        <div id="product-section-photo" className="flex-1 pr-10">
          <img src="assets/images/Product-section.png" alt="product section" />
        </div>
        <div
          id="product-section-text"
          className="flex-1 pl-10 pr-4 mb-10 LTS:mb-0"
        >
          <p className="font-semiBold text-lg mb-4">Our product</p>
          <h2 className="font-heading text-primary font-bold text-3xl LTL:text-5xl mb-4">
            You tell us your stress, We make your diary
          </h2>
          <p className="text-lg LTL:text-xl mb-4">
            Everyone experiences it, and in different ways. Let Alivio guide
            you, in a personalized journal experience, to overcome your stress.
          </p>
          <button className="btn-primary">Find Your Way</button>
        </div>
      </div>
    </Section>
  );
};

export default ProductSection;
