const Home = () => {
  return (
    <main>
      <img
        src="./assets/images/background/background.jpg"
        alt="forest background"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="text-6xl text-green-100 font-bold font-font1 leading-none lg:leading-snug">
          Hello! I'm Tommy Willen
        </h1>
      </section>
    </main>
  );
};

export default Home;
