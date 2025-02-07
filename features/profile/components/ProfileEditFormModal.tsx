"use client";

import { Button } from "@/components/ui/button";
import Modal from "@/shared/components/Modal";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import InputBase from "../../../shared/components/FormControls/InputBase";
import { UserType, userSchema } from "../schemas/user.schema";
import { transformToFormData } from "@/shared/utils/transformToFormData";
import { useModalContext } from "@/shared/components/Modal/useModal";
import TextAreaBase from "@/shared/components/FormControls/TextAreaBase";

export default function ProfileEditFormModal() {
  const { closeModal } = useModalContext();
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isValid, isSubmitting },
  } = useForm<UserType>({
    resolver: zodResolver(userSchema),
    mode: "onChange",
    defaultValues: {
      firstName: "John",
      lastName: "Doe",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      location: "San Francisco, CA",
    },
  });

  const onSubmit: SubmitHandler<UserType> = (data) => {
    const parsedData = userSchema.safeParse(data);

    if (!parsedData.success) return;

    // TODO - send data to backend
    closeModal();
    reset();
  };

  return (
    <Modal>
      <form className="space-y-4" noValidate onSubmit={handleSubmit(onSubmit)}>
        <InputBase
          control={control}
          errors={errors}
          name="firstName"
          label="first name"
        />

        <InputBase
          control={control}
          errors={errors}
          name="lastName"
          label="last name"
        />

        <InputBase control={control} errors={errors} name="bio" label="bio" />

        <TextAreaBase
          control={control}
          errors={errors}
          name="bio"
          label="bio"
        />

        <Button type="submit" disabled={!isValid || isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </Modal>
  );
}
