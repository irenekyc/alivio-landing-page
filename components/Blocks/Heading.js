const Heading = () => {
  return (
    <div
      className="w-full h-full bg-no-repeat bg-center bg-cover text-center LTS:text-left"
      style={{ backgroundImage: `url("assets/images/BG.png")` }}
    >
      <div className="wrapper flex items-center">
        <div
          id="heading-text-container"
          className="max-w-sm mx-auto pb-40 LTS:mx-0"
        >
          <h1 className="font-heading text-primary font-bold text-headingText mb-8">
            Be aware, Manage well.
          </h1>
          <p className="text-lg mb-8">
            Everyone experiences stress in different ways. Let Alivio guide you,
            in a personalized journal experience, to overcome your stress.
          </p>
          <button className="btn-primary">Find Your Way</button>
        </div>
      </div>
    </div>
  );
};

export default Heading;
