import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useOrdersQuery } from "../../api/orders/GetAllOrders";
import { Order } from "../../models/order";
import OrdersChart from "./components/OrdersChart";
import OrdersTable from "./components/OrdersTable";

const IndexPage: React.FC = () => {
  const { isLoading, data, error: hasErrors } = useOrdersQuery();
  if (isLoading) {
    return <IndexPageShimmer />;
  }
  if (hasErrors) {
    return <span>An error occurred...</span>;
  }

  return (
    <div className="flex flex-row w-full justify-between p-10">
      <OrdersChart orders={data!} />
      <div className="w-full p-2 flex flex-col items-center">
        <TotalOrdersPriceBlock orders={data!} />
        <OrdersTable orders={data!} />
      </div>
    </div>
  );
};

export const IndexPageShimmer: React.FC = () => {
  return (
    <div className="flex flex-row w-full justify-between p-10">
      <Skeleton height={600} width={800} />
      <div className="w-full p-2">
        <Skeleton height={100} width={350} className="mb-4" />
        <Skeleton height={600} />
      </div>
    </div>
  );
};

interface TotalOrderPriceBlockProps {
  orders: Array<Order>;
}

export const TotalOrdersPriceBlock: React.FC<TotalOrderPriceBlockProps> = ({
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

export default IndexPage;
