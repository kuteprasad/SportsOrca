/**
 * Displays team statistics including name, abbreviation, conference, and score
 * @param {Object} team - Team data object
 */
const TeamStats = ({ team }) => (
  <div className="flex flex-col items-center space-y-3 p-4 hover:bg-gray-50 transition-colors rounded-lg">
    <span className="rounded-full bg-gradient-to-r from-blue-500 to-blue-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm">
      {team.abbreviation}
    </span>
    <h3 className="text-xl font-bold text-gray-800">{team.name}</h3>
    <div className="text-center">
      <p className="text-sm text-gray-600">{team.conference} Conference</p>
      <p className="text-sm text-gray-600">{team.division} Division</p>
    </div>
    {team.score !== null && (
      <p className="mt-2 text-4xl font-bold text-blue-600">{team.score}</p>
    )}
  </div>
);

/**
 * Displays individual match information including teams and game status
 * @param {Object} match - Match data object
 */
const MatchItem = ({ match }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getStatusStyle = (status) => {
    return status === "Final"
      ? "bg-green-500 hover:bg-green-600"
      : "bg-blue-500 hover:bg-blue-600";
  };

  return (
    <div className="transform rounded-xl border bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg">
      <div className="grid grid-cols-3 items-center gap-6">
        <TeamStats team={match.homeTeam} />

        <div className="flex flex-col items-center space-y-4">
          <span
            className={`${getStatusStyle(
              match.status
            )} rounded-full px-4 py-2 text-sm font-semibold text-white transition-colors`}
          >
            {match.status}
          </span>
          <p className="text-center text-sm font-medium text-gray-600">
            {formatDate(match.date)}
          </p>
          {match.period && (
            <p className="text-sm font-medium text-gray-600">
              Period: {match.period}
            </p>
          )}
          {match.postseason && (
            <span className="animate-pulse rounded-full bg-red-500 px-4 py-2 text-sm font-semibold text-white shadow-sm">
              Playoff Game
            </span>
          )}
        </div>

        <TeamStats team={match.awayTeam} />
      </div>
    </div>
  );
};

export default MatchItem;
