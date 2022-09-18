import Lyra from "@lyrafinance/lyra-js";

const lyra = new Lyra();

export const nMarkets = async () => {
  // Fetch all markets
  const markets = await lyra.markets();

  console.log(
    markets.map((market) => ({
      address: market.address,
      name: market.name,
      // List all live boards (expiries)
      expiries: market.liveBoards().map((board) => ({
        id: board.id,
        expiryTimestamp: board.expiryTimestamp,
        // List all strikes
        strikes: board.strikes().map((strike) => ({
          id: strike.id,
          strikePrice: strike.strikePrice,
        })),
      })),
    }))
  );
};
