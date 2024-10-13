import React, { useState, useEffect } from "react";
import FreeSoloCreateOptionDialog from "./FreeSoloCreateOptionDialog";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { red } from "@mui/material/colors";

import RecipeReviewCard from "./Card";
import axios from "axios";
import { bgcolor, height, width, paddingRight } from "@mui/system";

const BASE_URL =
  // "https://www.thesportsdb.com/api/v1/json/3/all_leagues.php?s=Soccer";
  "https://www.thesportsdb.com/api/v1/json/3/search_all_leagues.php?c=England&s=Soccer";

export default function HomePage({ onLike, likedAppCards }) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    axios
      .get(BASE_URL)
      .then(function (response) {;
        // const soccerLeagues = response.data.leagues.filter( // ===> https://www.thesportsdb.com/api/v1/json/3/all_leagues.php?s=Soccer
        //   (league) => league.strSport === "Soccer"
        // );

        const soccerLeagues = response.data.countries;
        setData(soccerLeagues);
      })
      .catch(function (error) {
        setError(error);
      });
  }, []);

  const handleDelete = () => {
    console.log("ya ydalilsya");
  };

  return (
    <>
      <div className="titleSection">
        <h1>find what you want</h1>
        <FreeSoloCreateOptionDialog
          data={data}
          setSearchValue={setSearchValue}
        />
      </div>
      <div className="lastChoiseSection">
        <Stack direction="row" spacing={3}>
          <Chip
            label="deletable"
            variant="outlined"
            onDelete={handleDelete}
            sx={{ height: 40, bgcolor: red[100], minWidth: 160 }}
          />
        </Stack>
      </div>
      <div className="content">
        {error ? (
          <p>Error loading data: {error.message}</p>
        ) : (
          data
            .filter((card) =>
              card.strLeague.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((card) => (
              <RecipeReviewCard
                key={card.idLeague}
                card={card}
                onLike={onLike}
                isLiked={likedAppCards.some(
                  (likedCard) => likedCard.idLeague === card.idLeague
                )}
              />
            ))
        )}
      </div>
    </>
  );
}
