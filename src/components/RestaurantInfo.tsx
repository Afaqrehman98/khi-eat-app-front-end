import { Restaurant } from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Dot } from "lucide-react";

type Props = {
  restaurantData: Restaurant;
};

const RestaurantInfo = ({ restaurantData }: Props) => {
  return (
    <Card className="border-sla">
      <CardHeader>
        <CardTitle className="text-3xl font-bold tracking-tight">
          {restaurantData.restaurantName}
        </CardTitle>
        <CardDescription>
          {restaurantData.city}, {restaurantData.country}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex">
        {restaurantData.cuisines.map((cuisine, index) => (
          <span className="flex">
            <span>{cuisine}</span>
            {index < restaurantData.cuisines.length - 1 && <Dot />}
          </span>
        ))}
      </CardContent>
    </Card>
  );
};

export default RestaurantInfo;
