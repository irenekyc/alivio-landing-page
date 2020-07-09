import Section from "../../layout/Section";

const SuccessStory = () => {
  return (
    <Section bg="bg-darkGreen">
      <div
        id="success-story-main-container"
        className="w-full flex items-center text-white flex-col text-center LTS:text-left LTS:flex-row"
      >
        <div id="success-story-text" className="mb-10 LTS:w-5/12 mb-0">
          <h2 className="font-heading font-bold mb-5 text-3xl LTL:text-headingTextS LTL:mb-10">
            Let's hear about Kayla's success story
          </h2>
          <p className="font-semibold text-lg  mb-5 LTL:mb-10 LTL:text-xl">
            See how well Alivio works in a real customer’s life.
          </p>
          <button className="btn-primary">Let’s get started</button>
        </div>
        <div id="success-story-video" className="LTS:w-7/12 pl-10">
          <img src="assets/images/Video.png" alt="Kayla's success story" />
        </div>
      </div>
    </Section>
  );
};

export default SuccessStory;
