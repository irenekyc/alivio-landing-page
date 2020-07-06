const Section = ({ children }) => {
  return (
    <section className="w-screen py-32">
      <div className="wrapper flex items-center">{children}</div>
    </section>
  );
};

export default Section;
