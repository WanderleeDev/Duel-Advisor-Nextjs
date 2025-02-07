import Modal from "@/shared/components/Modal";
import { useModalContext } from "@/shared/components/Modal/useModal";
import { SubmitHandler, useForm } from "react-hook-form";

export default function ProfileEditSocialModa() {
  const { closeModal } = useModalContext();
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isValid, isSubmitting },
  } = useForm();

  const onSubmit: SubmitHandler<any> = (data) => {
    closeModal();
    reset();
  };

  return (
    <Modal>
      <form className="space-y-4" noValidate onSubmit={handleSubmit(onSubmit)}>
        hola
      </form>
    </Modal>
  );
}
