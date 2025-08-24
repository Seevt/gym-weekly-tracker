import { createFileRoute } from "@tanstack/react-router";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

export const Route = createFileRoute("/days/$dayId")({
  component: Day,
});

export function Day() {
  return (
    <div>
      <Card className="">
        <CardHeader>
          <CardTitle>card title</CardTitle>
        </CardHeader>
        <CardContent>
          <div>card routine</div>
        </CardContent>
      </Card>
    </div>
  );
}
