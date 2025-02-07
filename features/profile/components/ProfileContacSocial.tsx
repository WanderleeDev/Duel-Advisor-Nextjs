"use client";

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { ProfileSocial } from "../interfaces/Profile.interface";
import { ICONS } from "../icons";
import { Button } from "@/components/ui/button";
import ProfileEmptyContent from "./ProfileEmptyContent";
import { useModalContext } from "@/shared/components/Modal/useModal";

interface Props {
  socials: ProfileSocial[];
}

export function ProfileContactSocial({ socials = [] }: Props) {
  const { openModal } = useModalContext();
  const textEmpty: string[] = [
    "No social media accounts found.",
    "Add your social media accounts to your profile.",
  ];

  if (!socials.length) {
    return (
      <ProfileEmptyContent content={textEmpty}>
        <Button onClick={openModal}>Add Social</Button>
      </ProfileEmptyContent>
    );
  }

  return (
    <Card>
      <CardHeader className="text-lg font-semibold">
        Contact & Social
      </CardHeader>
      <CardContent className="space-y-4">
        {socials.map(({ link, name }) => (
          <div key={link} className="flex items-center gap-3">
            <span className="w-5 h-5 text-muted-foreground">{ICONS[name]}</span>
            <a href={link} className="text-primary hover:underline">
              {link}
            </a>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
