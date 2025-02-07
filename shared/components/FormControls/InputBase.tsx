import { Input } from "@/components/ui/input";
import { InputController } from "@/shared/interfaces/FormController.interface";
import { Label } from "@radix-ui/react-label";
import { Controller } from "react-hook-form";

export default function InputBase({
  control,
  errors,
  name,
  label,
  type = "text",
}: InputController) {
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
          <Input id={name} type={type} {...field} />

          {errors[name] && (
            <p className="text-red-500 text-sm">{`${errors[name]?.message}`}</p>
          )}
        </div>
      )}
    />
  );
}
