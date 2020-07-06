const Section = ({ bg = "bg-white", children }) => {
  return (
    <section className={`w-screen py-32 ${bg}`}>
      <div className="wrapper flex items-center">{children}</div>
    </section>
  );
};

export default Section;
