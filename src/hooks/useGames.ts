
import { GameQuery } from "../App";
import useData from "./useData";
import { Genres } from "./useGenres";

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
  }
  
export interface Platform {
    id: number;
    name: string;
    slug: string;
}


const useGames = (gamequery: GameQuery) => useData<Game>("/games", {params: {genres: gamequery.genre?.id, platforms: gamequery.platform?.id, ordering: gamequery.sortOrder}}, [gamequery]);

export default useGames;