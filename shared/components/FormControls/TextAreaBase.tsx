import { Textarea } from "@/components/ui/textarea";
import { TextAreaController } from "@/shared/interfaces/FormController.interface";
import { Label } from "@radix-ui/react-label";
import { Controller } from "react-hook-form";

export default function TextAreaBase({
  control,
  errors,
  name,
  label,
}: TextAreaController) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div className="space-y-2">
          <Label
            className="text-muted-foreground text-sm capitalize"
            htmlFor={name}
          >
            {label}
          </Label>
          <Textarea className="resize-none h-20" id={name} {...field} />

          {errors[name] && (
            <p className="text-red-500 text-sm">{`${errors[name]?.message}`}</p>
          )}
        </div>
      )}
    />
  );
}
