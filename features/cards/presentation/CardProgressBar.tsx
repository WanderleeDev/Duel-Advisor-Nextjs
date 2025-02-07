import { NumberTicker } from "@/components/ui/number-ticker";
import { Badge } from "@/components/ui/badge";

interface Props {
  currentItems: number | null;
  totalItems: number | null;
}

export default function CardProgressBar({ currentItems, totalItems }: Props) {
  if (!currentItems || !totalItems) {
    return null;
  }

  return (
    <Badge className="text-center fixed top-12 py-2 flex gap-2 text-sm z-10 left-2/4 -translate-x-2/4 bg-slate-950/30 backdrop-blur-sm shadow-amber-400 shadow">
      <NumberTicker value={currentItems} className="text-amber-400" />
      cards of
      <span className="text-amber-400 font-bold text-lg">{totalItems}</span>
    </Badge>
  );
}
