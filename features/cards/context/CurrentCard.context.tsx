import { createContext, PropsWithChildren, useContext, useState } from "react";
import { Card } from "../domain/models/Card.model";

interface CurrentCardContext {
  currentCard: Card | null;
  setCard: (card: Card) => void;
}

const CurrentCardContext = createContext<CurrentCardContext>({
  currentCard: null,
  setCard: () => {},
});

export function CurrentCardProvider({ children }: PropsWithChildren) {
  const [currentCard, setCurrentCard] = useState<Card | null>(null);

  const setCard = (card: Card) => setCurrentCard(card);

  return (
    <CurrentCardContext value={{ currentCard, setCard }}>
      {children}
    </CurrentCardContext>
  );
}

export function useCurrentCard(): CurrentCardContext {
  const context = useContext(CurrentCardContext);

  if (!context) {
    throw new Error("useCurrentCard must be used within a CurrentCardProvider");
  }

  return context;
}
