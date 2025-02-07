import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@radix-ui/react-accordion";
import { CardSet } from "../domain/models/Card.model";
import Title from "@/shared/Typography/Title";

interface Props {
  data: CardSet[];
}

export default function CardSetInfo({ data = [] }: Props) {
  if (data.length === 0) return null;

  return (
    <section className="flex flex-col gap-4">
      <Title
        className="font-semibold mb-3 text-2xl tracking-wider text-gray-100"
        level={2}
      >
        Card Set Info
      </Title>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {data.map(({ set_name, ...restCard }) => (
          <Accordion
            key={`${set_name}-${restCard.set_rarity_code}-${restCard.set_code}`}
            type="single"
            collapsible
            className="bg-gray-800/80 rounded-lg border border-indigo-500/30 h-fit py-2"
          >
            <AccordionItem value="details" className="border-b-0">
              <AccordionTrigger className="px-4 py-2 text-indigo-500 hover:text-indigo-400 font-semibold">
                {set_name}
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                <div className="space-y-3 text-white">
                  {Object.entries(restCard).map(([key, value]) => (
                    <div
                      key={key}
                      className="flex justify-between items-center"
                    >
                      <span className="text-indigo-400 capitalize">
                        {key.replace("set_", "").replaceAll("_", " ")}
                      </span>
                      <span>{value}</span>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </section>
  );
}
