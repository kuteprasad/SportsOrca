const FilterBar = ({ filters, onFilterChange }) => {
  return (
    <div className="mb-6 rounded-lg bg-white p-4 shadow-md">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {/* Conference Filter */}
        <select
          className="rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
          value={filters.conference}
          onChange={(e) => onFilterChange("conference", e.target.value)}
        >
          <option value="">All Conferences</option>
          <option value="East">Eastern</option>
          <option value="West">Western</option>
        </select>

        {/* Status Filter */}
        <select
          className="rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
          value={filters.status}
          onChange={(e) => onFilterChange("status", e.target.value)}
        >
          <option value="">All Statuses</option>
          <option value="Final">Final</option>
          <option value="In Progress">In Progress</option>
          <option value="Scheduled">Scheduled</option>
        </select>

        {/* Playoff/Regular Season Filter */}
        <select
          className="rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
          value={filters.postseason}
          onChange={(e) => onFilterChange("postseason", e.target.value)}
        >
          <option value="">All Games</option>
          <option value="true">Playoff Games</option>
          <option value="false">Regular Season</option>
        </select>
      </div>
    </div>
  );
};

export default FilterBar;
