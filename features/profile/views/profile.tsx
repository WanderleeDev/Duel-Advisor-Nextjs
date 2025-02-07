import { Separator } from "@/components/ui/separator";
import { ProfileHeader } from "../components/ProfileHeader";
import { ProfileStats } from "../components/ProfileStats";
import { ProfileContactSocial } from "../components/ProfileContacSocial";
import ProfileControls from "../components/ProfileControls";
import ProfileEditFormModal from "../components/ProfileEditFormModal";
import { ProfileSocial } from "../interfaces/Profile.interface";
import { Social } from "../interfaces/Social.enum";

export default function ProfileView() {
  const socials: ProfileSocial[] = [
    { name: Social.Twitter, link: "https://twitter.com" },
    { name: Social.LinkedIn, link: "https://linkedin.com" },
    { name: Social.GitHub, link: "https://github.com" },
    { name: Social.Email, link: "mailto:example@example.com" },
    { name: Social.Other, link: "https://other.com" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted p-28">
      <div className="max-w-4xl mx-auto space-y-8">
        <ProfileHeader>
          <ProfileControls />
          <ProfileEditFormModal />
        </ProfileHeader>
        <Separator />
        <ProfileStats />
        <ProfileContactSocial socials={socials} />
      </div>
    </div>
  );
}
