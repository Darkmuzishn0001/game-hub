import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardCont from "./GameCardCont";
import { Genre } from "../hooks/useGenres";

interface Props {
  selectedGenre: Genre | null;
}

const GameGrid = ({ selectedGenre }: Props) => {
  const { data, error, isLoading } = useGames(selectedGenre);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing="10px"
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardCont key={skeleton}>
              <GameCardSkeleton />
            </GameCardCont>
          ))}
        {data.map((game) => (
          <GameCardCont key={game.id}>
            <GameCard game={game} />
          </GameCardCont>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
