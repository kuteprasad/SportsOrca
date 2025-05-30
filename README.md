# NBA Live Scores App

A real-time NBA game tracker built with React and Express that shows live scores, game statuses, and team information using the Ball Don't Lie API.

## Features

- Live game scores and status updates
- Filter games by conference, status, and season type
- Team information including conference and division
- Responsive design
- Real-time data from Ball Don't Lie API

## Illustrations
- Check the illustration.png file for getting an idea how the homepage looks like after proper setup.

## Tech Stack

- **Frontend**: React + Vite, TailwindCSS
- **Backend**: Node.js, Express
- **API**: Ball Don't Lie API

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Git

### Installation

1. Clone the repository
```bash
git clone https://github.com/kuteprasad/SportsOrca.git
cd SportsOrca
```

2. Install dependencies
```bash
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

3. Set up environment variables
```bash
cd ../server
cp .env.example .env
```

4. Configure API Key
- Visit [Ball Don't Lie API](https://www.balldontlie.io/#getting-started)
- Sign up for a free API key
- Copy your API key
- Update the `.env` file:
```bash
PORT=5000
API_KEY="your_api_key_from_balldontlie"
```

### Running the Application

1. Start the server
```bash
cd server
npm run dev
```

2. Start the client (in a new terminal)
```bash
cd client
npm run dev
```

The application will be available at:
- Frontend: http://localhost:5173
- Backend: http://localhost:5000

## Project Structure

```
SportsOrca/
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx
│   │   │   ├── MatchList.jsx
│   │   │   ├── MatchItem.jsx
│   │   │   └── FilterBar.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   └── App.jsx
│   └── package.json
├── server/
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   └── server.js
│   ├── .env
│   └── package.json
└── README.md
```

## API Configuration

The Ball Don't Lie API requires authentication for accessing NBA game data. Here's how to get and use your API key:

1. Go to [Ball Don't Lie](https://www.balldontlie.io/#getting-started)
2. Click on "Get API Access"
3. Fill out the registration form
4. You'll find your API key on the home page.
5. Add the API key to your `.env` file

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Ball Don't Lie API](https://www.balldontlie.io/) for providing NBA data
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [React](https://reactjs.org/) for the frontend framework
