import { useEffect, useState } from "react";
import MatchItem from "./MatchItem";
import FilterBar from "./FilterBar";
import { getMatches } from "../services/api";
import LoadingSpinner from "./LoadingSpinner";
import Error from "./Error";

/**
 * Displays a list of NBA matches with filtering capabilities
 * Handles data fetching, filtering, loading states, and error handling
 */
const MatchList = () => {
  const [matches, setMatches] = useState([]);
  const [filteredMatches, setFilteredMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    conference: "",
    status: "",
    postseason: "",
  });

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const { data } = await getMatches();
        if (!data || !data.matches) {
          throw new Error("No matches found");
        }
        setMatches(data.matches);
        setFilteredMatches(data.matches);
      } catch (error) {
        console.error("Error fetching matches:", error);
        setError("Failed to load matches");
      } finally {
        setLoading(false);
      }
    };

    fetchMatches();
  }, []);

  /**
   * Handles filter changes and updates the filtered matches
   */
  useEffect(() => {
    const filterMatches = () => {
      let result = [...matches];

      if (filters.conference) {
        result = result.filter(
          (match) =>
            match.homeTeam.conference === filters.conference ||
            match.awayTeam.conference === filters.conference
        );
      }

      if (filters.status) {
        result = result.filter((match) => match.status === filters.status);
      }

      if (filters.postseason !== "") {
        result = result.filter(
          (match) => match.postseason === (filters.postseason === "true")
        );
      }

      setFilteredMatches(result);
    };

    filterMatches();
  }, [filters, matches]);

  const handleFilterChange = (filterName, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterName]: value,
    }));
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <Error error={error} />;

  return (
    <div className="space-y-6">
      <FilterBar filters={filters} onFilterChange={handleFilterChange} />
      
      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1">
        {filteredMatches.map((match) => (
          <MatchItem key={match.id} match={match} />
        ))}
      </div>
      
      {filteredMatches.length === 0 && (
        <div className="rounded-lg bg-white p-8 text-center shadow-md">
          <p className="text-gray-500">
            {matches.length === 0
              ? "No games scheduled"
              : "No games match your filters"}
          </p>
        </div>
      )}
    </div>
  );
};

export default MatchList;
