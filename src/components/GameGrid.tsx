import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardCont from "./GameCardCont";

const GameGrid = () => {
  const { data, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

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
            <GameCardCont>
              <GameCardSkeleton key={skeleton} />
            </GameCardCont>
          ))}
        {data.map((game) => (
          <GameCardCont>
            <GameCard key={game.id} game={game} />
          </GameCardCont>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
