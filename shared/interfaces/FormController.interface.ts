import { Control, FieldErrors, FieldValues } from "react-hook-form";

export interface InputController {
  control: Control<any>;
  errors: FieldErrors;
  name: keyof FieldValues;
  label: string;
  type?: string;
  placeholder?: string;
}

export type TextAreaController = Exclude<InputController, "type">;
