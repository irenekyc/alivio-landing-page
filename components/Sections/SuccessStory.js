import Section from "../../layout/Section";

const SuccessStory = () => {
  return (
    <Section bg="bg-darkGreen">
      <div
        id="success-story-main-container"
        className="w-full flex items-center text-white"
      >
        <div id="success-story-text" className="w-5/12">
          <h2 className="font-heading text-headingTextS font-bold mb-10">
            Let's hear about Kayla's success story
          </h2>
          <p className="font-semibold text-xl mb-10">
            See how well Alivio works in a real customer’s life.
          </p>
          <button className="btn-primary">Let’s get started</button>
        </div>
        <div id="success-story-video" className="w-7/12 pl-10">
          <img src="assets/images/Video.png" alt="Kayla's success story" />
        </div>
      </div>
    </Section>
  );
};

export default SuccessStory;
