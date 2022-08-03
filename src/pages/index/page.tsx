import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useOrdersQuery } from "../../api/orders/GetAllOrders";
import OrdersChart from "./components/OrdersChart";
import OrdersTable from "./components/OrdersTable";
import TotalOrdersPriceBlock from "./components/TotalOrderPriceBlock";

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
      <OrdersChart orders={data} />
      <div className="w-full p-2 flex flex-col items-center">
        <TotalOrdersPriceBlock orders={data} />
        <OrdersTable orders={data} />
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

export default IndexPage;
