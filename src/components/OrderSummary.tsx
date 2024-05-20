import { CartItem } from "@/pages/RestaurantDetailPage";
import { Restaurant } from "@/types";
import { CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { Trash } from "lucide-react";

type Props = {
  restaurantData: Restaurant;
  cartItems: CartItem[];
  removeFromCart: (cartItem: CartItem) => void;
};

const OrderSummary = ({ restaurantData, cartItems, removeFromCart }: Props) => {
  const getTotalOrderCost = () => {
    const totalInCents = cartItems.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0
    );

    const totalWithDelivery = totalInCents + restaurantData.deliveryPrice;

    return (totalWithDelivery / 100).toFixed(2);
  };
  return (
    <>
      <CardHeader>
        <CardTitle className="text-2xl font-bold tracking-tight flex justify-between">
          <span>Your Order</span>
          <span>${getTotalOrderCost()}</span>
        </CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col gap-5">
        {cartItems.map((currentCartItem) => (
          <div className="flex justify-between">
            <span>
              <Badge variant="outline" className="mr-2">
                {currentCartItem.quantity}
              </Badge>
              {currentCartItem.name}
            </span>
            <span className="flex items-center gap-1">
              <Trash
                className="cursor-pointer"
                color="red"
                size={20}
                onClick={() => removeFromCart(currentCartItem)}
              />
              $
              {(
                (currentCartItem.price * currentCartItem.quantity) /
                100
              ).toFixed(2)}
            </span>
          </div>
        ))}

        <Separator />
        <div className="flex justify-between">
          <span>Delivery Price</span>
          <span>${(restaurantData.deliveryPrice / 100).toFixed(2)}</span>
        </div>

        <Separator />
      </CardContent>
    </>
  );
};

export default OrderSummary;
