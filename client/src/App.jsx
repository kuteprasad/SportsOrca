import Header from "./components/Header";
import MatchList from "./components/MatchList";

/**
 * Root component of the application
 */
function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <MatchList />
      </main>
    </div>
  );
}

export default App;
