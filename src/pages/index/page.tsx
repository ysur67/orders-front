import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useOrdersQuery } from "../../api/orders/GetAllOrders";
import OrdersChart from "./components/OrdersChart";
import OrdersTable from "./components/OrdersTable";
import TotalOrdersPriceBlock from "./components/TotalOrderPriceBlock";

const IndexPage: React.FC = () => {
  const { isLoading, data, error: hasErrors } = useOrdersQuery();

  if (hasErrors) {
    return <span className="text-6xl font-bold">An error occurred...</span>;
  }

  const chartComponent = isLoading ? (
    <Skeleton height={600} width={800} />
  ) : (
    <OrdersChart orders={data!} />
  );

  const totalPriceComponent = isLoading ? (
    <Skeleton height={100} width={350} className="mb-4" />
  ) : (
    <TotalOrdersPriceBlock orders={data!} />
  );

  const ordersTableComponent = isLoading ? (
    <Skeleton height={1000} width={1000} />
  ) : (
    <OrdersTable orders={data!} />
  );

  return (
    <div className="flex flex-row w-full justify-between p-10">
      {chartComponent}
      <div className="w-full p-2 flex flex-col items-center">
        {totalPriceComponent}
        {ordersTableComponent}
      </div>
    </div>
  );
};

export default IndexPage;
