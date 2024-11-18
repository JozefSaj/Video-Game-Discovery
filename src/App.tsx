import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genres } from "./hooks/useGenres";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  genre: Genres | null;
  platform: Platform | null;
}

function App() {
  const [GameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <Grid
      templateAreas={{
        base: `
        "nav"
        "main"
      `,
        lg: `
        "nav nav"
        "aside main"
      `, //wider than 1024px
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem gridArea="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem gridArea="aside" paddingX={5}>
          <GenreList
            onSelectedGenre={(genre) => setGameQuery({ ...GameQuery, genre })}
            selectedGenre={GameQuery.genre}
          />
        </GridItem>
      </Show>
      <GridItem gridArea="main">
        <HStack spacing={5} paddingLeft={2} marginBottom={5}>
          <PlatformSelector
            selectedPlatform={GameQuery.platform}
            onSelectedPlatform={(platform) =>
              setGameQuery({ ...GameQuery, platform })
            }
          />
          <SortSelector />
        </HStack>
        <GameGrid gameQuery={GameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
