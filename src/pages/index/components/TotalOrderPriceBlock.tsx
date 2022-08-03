import { Order } from "../../../models/order";

interface TotalOrderPriceBlockProps {
  orders: Array<Order>;
}

const TotalOrdersPriceBlock: React.FC<TotalOrderPriceBlockProps> = ({
  orders,
}) => {
  const totalPrice = orders.reduce<number>(
    (prev, current) => prev + current.costDollars,
    0
  );
  return (
    <div className="flex flex-col w-80 border-4 border-black">
      <span className="bg-blue-800 text-white text-2xl">Total</span>
      <span className="text-6xl">{totalPrice}</span>
    </div>
  );
};

export default TotalOrdersPriceBlock;
