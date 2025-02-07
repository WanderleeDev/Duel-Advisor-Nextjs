"use client";
import { Button } from "@/components/ui/button";
import { useModalContext } from "@/shared/components/Modal/useModal";

export default function ProfileControls() {
  const { openModal } = useModalContext();

  return (
    <div className="flex gap-3">
      <Button onClick={openModal}>Edit Profile</Button>
      <Button variant="outline">Share Profile</Button>
    </div>
  );
}
