import { MenuItem } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

type Props = {
  restaurantMenuItem: MenuItem;
  addToCart: () => void;
};

const RestaurantMenuItem = ({ restaurantMenuItem, addToCart }: Props) => {
  return (
    <Card className="cursor-pointer" onClick={addToCart}>
      <CardHeader>
        <CardTitle>{restaurantMenuItem.name}</CardTitle>
      </CardHeader>

      <CardContent className="font-bold">
        ${(restaurantMenuItem.price / 100).toFixed(2)}
      </CardContent>
    </Card>
  );
};

export default RestaurantMenuItem;
