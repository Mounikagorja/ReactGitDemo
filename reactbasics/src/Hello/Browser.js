import { useEffect } from "react";
// import Header from "./Header";


const Browser = () => {
   
    // UseNowPlayingMovies();   // custom hook it will handle popular movie api
    const nowPlayingMovies = async () => {
        try {
            const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', {
                method: 'GET',
                headers: {
                  accept: 'application/json',
                  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MjdiOTViMWQ0MTViYjE3YTY0MTQzZTM4OThhZTU1MyIsInN1YiI6IjY1ZGRmODFlM2ZmMmRmMDE4NzBiODhkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.reLvL-JJ0PnXLJVKET_H38Dat4q7VotOIJzu3rLFXEI',
                }
              });
            if (!response.ok) {
                throw new Error('Failed to fetch');// here you need check
            }
            const json = await response.json();
            console.log(json.results);
           

        } catch (error) {
            console.error('Error fetching data:', error.message);
        }
    };

    useEffect(() => {
        nowPlayingMovies();
    }, []);


    return (
        <div>
            {/* <Header/> */}
           <h1>Custom Hook</h1>
        </div>
    )
}

export default Browser;
