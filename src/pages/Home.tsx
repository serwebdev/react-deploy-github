const Home = () => {
  console.log('BASE_URL:', import.meta.env.BASE_URL);

  return (
    <div>
      <div className="container">
        <h2>Home</h2>
        <p>Hello!</p>
      </div>
    </div>
  );
};

export default Home;
