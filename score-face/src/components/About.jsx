import axios from "axios";
import { useEffect, useState } from "react";

const leagueURL =
  // "https://www.thesportsdb.com/api/v1/json/3/all_leagues.php?s=Soccer";
  "https://www.thesportsdb.com/api/v1/json/3/all_leagues.php";

export default function About() {
  const [leagues, setLeagues] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(leagueURL)
      .then(function (response) {
        // const soccerLeagues = response.data.leagues.filter( // ===> https://www.thesportsdb.com/api/v1/json/3/all_leagues.php?s=Soccer
        //   (league) => league.strSport === "Soccer"
        // );
        setLeagues(response.data.leagues);
      })
      .catch(function (error) {
        setError(error);
      });
  }, []);

  return (
    <div>
      {leagues.map((league) => (
        <LeagueCard league={league} />
      ))}
    </div>
  );
}

function LeagueCard({ league }) {
  return (
    <div style={{marginBottom: 60}} key={league.idLeague}>
      <div> Name: {league.strLeague} </div>
      <div>Sport: {league.strSport}</div>
      <div>alt = {league.strLeagueAlternate}</div>
    </div>
  );
}
