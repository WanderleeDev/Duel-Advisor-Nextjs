import Box from "@/shared/Containers/Box";
import Title from "@/shared/Typography/Title";
import React from "react";
import { CardPrice } from "../domain/models/Card.model";
import { formatCurrency } from "@/shared/utils/formatCurrency";

interface Props {
  data: CardPrice[];
}

export default function CardPrices({ data }: Props) {
  return (
    <section className="flex flex-col gap-4">
      <Title
        className="font-semibold mb-3 text-2xl tracking-wider text-gray-100"
        level={2}
      >
        Prices
      </Title>

      <Box bgVariant="secondary">
        <div className="flex flex-col xs:flex-row gap-4 flex-wrap">
          {Object.entries(data[0]).map(([key, value]) => (
            <div
              key={key}
              className="bg-gray-700/50 rounded-lg p-4 flex-grow flex-shrink flex flex-col items-center justify-center hover:bg-gray-700/70"
            >
              <h4 className="text-white capitalize font-semibold mb-2">
                {key.replaceAll("_", " ")}
              </h4>
              <span className="text-lg font-bold text-green-400 first-letter:mr-1">
                {formatCurrency(Number(value))}
              </span>
            </div>
          ))}
        </div>
      </Box>
    </section>
  );
}
