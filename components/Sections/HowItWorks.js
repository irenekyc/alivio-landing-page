import Section from "../../layout/Section";

const HowItWorks = () => {
  return (
    <Section>
      <div id="how-it-works-main-container">
        <div
          id="how-it-works-heading"
          className="py-20 text-center LTS:text-left"
        >
          <p className="mb-4"> How it works</p>
          <div className="flex items-center flex-col mb-4 LTS:flex-row">
            <h2 className="flex-1 text-primary font-heading mb-4 text-5xl font-bold LTS:mr-5">
              Understand & Release the stress in 3 steps
            </h2>
            <p className="flex-1 text-lg font-medium LTS:ml-5">
              Alivio offers as many journals it takes, tackling different areas
              such as anxiety, overwhelmedness, sadness, or anger, and a variety
              of personal causes, to help you become aware of your emotions, and
              guide you in how to manage stress.
            </p>
          </div>
        </div>

        <div
          id="how-it-works-features-container"
          className="w-full flex justify-between items-start flex-col LTS:flex-row"
        >
          <div
            id="card-1"
            className="max-w-xs LTS:px-4 LTL:w-card mx-auto LTS:mx-0"
          >
            <div id="card-1-heading" className="flex items-baseline mb-10">
              <h2 className="text-cardHeading opacity-20 text-primary font-heading">
                01
              </h2>
              <p className="text-black text-xl font-bold ml-negative45 font-heading">
                Personalization
              </p>
            </div>
            <div id="card-1-content" className="mb-20">
              <p className="font-medium text-lg">
                Answer a quick survey about how you express yourself, what
                causes you stress, and what area would you like to work on. This
                way, we can fully personalize your journal!
              </p>
            </div>
            <div id="card-1-photo">
              <img
                src="assets/images/01-personalization.png"
                alt="personalization"
              />
            </div>
          </div>

          <div
            id="card-2"
            className="max-w-xs LTS:px-5 LTL:w-card mt-32 mx-auto LTS:mx-0"
          >
            <div id="card-2-heading" className="flex items-baseline mb-10">
              <h2 className="text-cardHeading opacity-20 text-primary font-heading">
                02
              </h2>
              <p className="text-black text-xl font-bold ml-negative45 font-heading">
                Write & Understand
              </p>
            </div>
            <div id="card-2-content" className="mb-20">
              <p className="font-medium text-lg">
                Write, draw, reflect, understand. Alivio will guide you through
                the prompts and will help you manage your stress!
              </p>
            </div>
            <div id="card-2-photo">
              <img
                src="assets/images/02-write-understand.png"
                alt="write and understand"
              />
            </div>
          </div>

          <div
            id="card-3"
            className="max-w-xs LTS:px-5 LTL:w-card mt-32 mx-auto LTS:mx-0 LTS:mt-0"
          >
            <div id="card-3-heading" className="flex items-baseline mb-10">
              <h2 className="text-cardHeading opacity-20 text-primary font-heading">
                03
              </h2>
              <p className="text-black text-xl font-bold ml-negative45 font-heading">
                Alivio!
              </p>
            </div>
            <div id="card-3-content" className="mb-20">
              <p className="font-medium text-lg">
                Now you are aware, and have a way to manage and overcome your
                own stress. What are you waiting for? Alivio today!
              </p>
            </div>
            <div id="card-3-photo">
              <img src="assets/images/03-alivio.png" alt="Alivio" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HowItWorks;
