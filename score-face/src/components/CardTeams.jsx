import React, { useEffect, useId, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import RecipeReviewCard from "./Card";


export default function CardTeams() {
  const { teamsLeagueId } = useParams();
  const [seasons, setSeasons] = useState([]);

  //   const choiceApi = `https://www.thesportsdb.com/api/v1/json/3/all_leagues.php?`;
  const choiceApi = `https://www.thesportsdb.com/api/v1/json/3/search_all_seasons.php?id=${teamsLeagueId}`;

  useEffect(() => {
    axios
      .get(choiceApi)
      .then(function (response) {
        setSeasons(response.data.seasons);
      })
      .catch(function (error) {
        // setError(error);
      });
  }, []);

  return (
    <div style={{ marginTop: "100px" }}>
      {seasons?.map((season) => (
        <div key={season.strSeason}>{season.strSeason}</div>
    //    <RecipeReviewCard id={teamsLeagueId} season={season} />
      ))}
    </div>
  );
}
