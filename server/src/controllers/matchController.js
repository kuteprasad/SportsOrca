import axios from "axios";

export const getMatches = async (req, res) => {
  try {
    const response = await axios.get("https://api.balldontlie.io/v1/games", {
      headers: {
        Authorization: process.env.API_KEY,
      },
    });

    const formattedMatches = response.data.data.map((game) => ({
      id: game.id,
      homeTeam: {
        name: game.home_team.full_name,
        score: game.home_team_score,
        abbreviation: game.home_team.abbreviation,
        conference: game.home_team.conference,
        division: game.home_team.division,
      },
      awayTeam: {
        name: game.visitor_team.full_name,
        score: game.visitor_team_score,
        abbreviation: game.visitor_team.abbreviation,
        conference: game.visitor_team.conference,
        division: game.visitor_team.division,
      },
      date: game.date,
      datetime: game.datetime,
      status: game.status,
      period: game.period,
      season: game.season,
      postseason: game.postseason,
    }));

    res.json({
      matches: formattedMatches,
      meta: response.data.meta,
    });
  } catch (error) {
    console.error("API Error:", error.response?.data || error.message);
    res.status(500).json({
      message: "Error fetching games data",
      error: error.response?.data || error.message,
    });
  }
};

// export const createMatch = async (req, res) => {
//   try {
//     const match = new Match(req.body);
//     const savedMatch = await match.save();
//     res.status(201).json(savedMatch);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };
