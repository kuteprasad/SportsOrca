/**
 * Header component displaying the application title and navigation
 */
const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 py-6 shadow-lg">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-white text-center">
          NBA Live Scores
        </h1>
        <p className="text-center text-blue-100 mt-2">
          Real-time basketball game updates
        </p>
      </div>
    </header>
  );
};

export default Header;
