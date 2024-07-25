import React, {useEffect} from 'react';
import { useParams } from "react-router";
import axios from "axios";


export default function CardTeams() {
  const { teamsLeagueId } = useParams();
  console.log(teamsLeagueId);

  const choiceApi = `https://www.thesportsdb.com/api/v1/json/3/all_leagues.php?`;
// const choiceApi = `https://www.thesportsdb.com/api/v1/json/3/searchloves.php?u=zag`;

  useEffect(() => {
    axios
      .get(choiceApi)
      .then(function (response) {
       console.log('3', response);
      })
      .catch(function (error) {
        // setError(error);
      });
  }, []);

  return (
    <>
      <div style={{ marginTop: "200px" }}>{teamsLeagueId}</div>
    </>
  );
}
