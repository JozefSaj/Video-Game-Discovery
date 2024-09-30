import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
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
    >
      <GridItem gridArea="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GenreList />
      </Show>
      <GridItem gridArea="main">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
