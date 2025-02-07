import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { cn } from "@/lib/utils";
import { VariantProps } from "class-variance-authority";

interface Props extends VariantProps<typeof Alert> {
  children?: React.ReactNode;
  message: string;
  header?: string;
}

export default function AlertMessage({
  message,
  children,
  header,
  ...props
}: Props) {
  return (
    <Alert
      className={cn(
        `max-w-lg mx-auto my-28 text-gray-100 ${
          props.variant === "destructive" &&
          "bg-destructive/70 dark:border-destructive"
        }
        ${props.variant === "default" && "bg-primary/70 dark:border-primary"}
        `
      )}
      {...props}
    >
      <AlertTitle className="font-bold text-lg">
        {!header && props.variant === "destructive" && "Erro has occurred:"}
        {!header && props.variant === "default" && "Success:"}
      </AlertTitle>
      <AlertDescription>{message}</AlertDescription>
      {children}
    </Alert>
  );
}
