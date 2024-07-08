import React, { useState, useEffect } from "react";
import FreeSoloCreateOptionDialog from "./FreeSoloCreateOptionDialog";
import RecipeReviewCard from "./Card";
import axios from "axios";

const BASE_URL =
  "https://www.thesportsdb.com/api/v1/json/3/search_all_leagues.php?c=England&s=Soccer";

export default function HomePage() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(BASE_URL)
      .then(function (response) {
        // console.log(response.data.countries);
        setData(response.data.countries);
      })
      .catch(function (error) {
        setError(error);
      });
  }, []);

  return (
    <>
      <h1>HomePage</h1>
      <FreeSoloCreateOptionDialog />
      <div className="container">
        {error ? (
          <p>Error loading data: {error.message}</p>
        ) : (
          data?.map((card) => (
            <RecipeReviewCard key={card.idLeague} card={card} />
          ))
        )}
      </div>
    </>
  );
}

// import React, { useState, useEffect } from "react";
// import FreeSoloCreateOptionDialog from "./FreeSoloCreateOptionDialog";
// import RecipeReviewCard from "./Card";
// import axios from "axios";

// const BASE_URL = "https://www.thesportsdb.com/api/v1/json/3/all_leagues.php";
// const IMAGE_URL = "https://www.thesportsdb.com/api/v1/json/3/search_all_leagues.php?c=England&s=Soccer";

// export default function HomePage() {
//   const [data, setData] = useState([]);
//   const [images, setImages] = useState({});
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const [leaguesResponse, imagesResponse] = await Promise.all([
//           axios.get(BASE_URL),
//           axios.get(IMAGE_URL)
//         ]);

//         const leagues = leaguesResponse.data.leagues;
//         const images = imagesResponse.data.countries.reduce((acc, item) => {
//           acc[item.strLeague] = item.strBadge;
//           console.log(acc);
//           return acc;
//         }, {});

//         setData(leagues);
//         setImages(images);
//       } catch (error) {
//         setError(error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <>
//       <h1>HomePage</h1>
//       <FreeSoloCreateOptionDialog />
//       <div className="container">
//         {error ? (
//           <p>Error loading data: {error.message}</p>
//         ) : (
//           data.map((card) => (
//             <RecipeReviewCard
//               key={card.idLeague}
//               card={card}
//               image={images[card.strLeague]}
//             />
//           ))
//         )}
//       </div>
//     </>
//   );
// }
