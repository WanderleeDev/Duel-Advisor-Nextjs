import { useToast } from "@/hooks/use-toast";

export function useCopyToClipboard(textToCopy: string) {
  const { toast } = useToast();

  const copyToClipBoard = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      toast({
        title: "Copied to clipboard",
        description: "The text has been copied to your clipboard",
        variant: "default",
      });
    } catch (error) {
      toast({
        title: "Failed to copy to clipboard",
        description: "Please try again",
        variant: "destructive",
      });
    }
  };

  return {
    copyToClipBoard,
  };
}
