import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { User, MapPin, Calendar } from "lucide-react";
import { PropsWithChildren } from "react";

export function ProfileHeader({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col md:flex-row gap-6 items-start">
      <Avatar className="w-32 h-32 border-4 border-background">
        <AvatarImage src="https:images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>

      <div className="flex-1 space-y-4">
        <div>
          <h1 className="text-3xl font-bold">John Doe</h1>
          <p className="text-muted-foreground">Senior Software Engineer</p>
        </div>

        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary" className="px-3 py-1">
            <User className="w-4 h-4 mr-2" />
            @johndoe
          </Badge>
          <Badge variant="secondary" className="px-3 py-1">
            <MapPin className="w-4 h-4 mr-2" />
            San Francisco, CA
          </Badge>
          <Badge variant="secondary" className="px-3 py-1">
            <Calendar className="w-4 h-4 mr-2" />
            Joined March 2020
          </Badge>
        </div>

        <p className="text-foreground max-w-2xl">
          Passionate about building great software and solving complex problems.
          Love to contribute to open source and share knowledge with the
          community.
        </p>

        {children}
      </div>
    </div>
  );
}
