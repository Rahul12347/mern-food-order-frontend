

import type { MenuItem } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

type Props = {
  menuItem: MenuItem;
  addToCart: () => void;
};

const MenuItem = ({ menuItem, addToCart }: Props) => {
  const exchangeRateGBPtoINR = 1;
  return (
    <Card className="cursor-pointer" onClick={addToCart}>
      <CardHeader>
        <CardTitle>{menuItem.name}</CardTitle>
      </CardHeader>
      <CardContent className="font-bold">
       ₹{(menuItem.price / 100 * exchangeRateGBPtoINR).toFixed(2)}
      </CardContent>
    </Card>
  );
};

export default MenuItem;
