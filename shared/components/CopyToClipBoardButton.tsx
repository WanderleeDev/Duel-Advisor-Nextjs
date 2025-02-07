"use client";

import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { Share2 } from "lucide-react";
import { useCopyToClipboard } from "../hooks/useCopyToClipboard";

interface Props {
  textToCopy: string;
  useCurrentUrl: boolean;
  label: string;
}

export default function CopyToClipBoardButton({
  textToCopy,
  useCurrentUrl,
  label,
}: Props) {
  const { copyToClipBoard } = useCopyToClipboard(
    useCurrentUrl ? document?.location?.href : textToCopy
  );

  return (
    <InteractiveHoverButton
      onClick={copyToClipBoard}
      className="text-slate-800 w-fit"
      icon={<Share2 />}
    >
      {label || "Copy to clipboard"}
    </InteractiveHoverButton>
  );
}
