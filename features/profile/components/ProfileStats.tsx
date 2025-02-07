import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Stats } from "../interfaces/Profile.interface";

interface Props {
  stats: Stats;
}

export function ProfileStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card>
        <CardHeader className="text-muted-foreground text-sm">
          Projects
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">48</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="text-muted-foreground text-sm">
          Following
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">259</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="text-muted-foreground text-sm">
          Followers
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">1.2k</p>
        </CardContent>
      </Card>
    </div>
  );
}
