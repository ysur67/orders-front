import React from "react";
import { useOrdersQuery } from "../../api/orders/GetAllOrders";
import OrdersChart from "./components/OrdersChart";
import OrdersTable from "./components/OrdersTable";

const IndexPage: React.FC<{}> = () => {
  const { isLoading, data, error: hasErrors } = useOrdersQuery();
  if (isLoading) {
    return <IndexPageShimmer />;
  }
  if (hasErrors) {
    return <span>An error occurred...</span>;
  }
  return (
    <div>
      <OrdersChart></OrdersChart>
      <OrdersTable orders={data}></OrdersTable>
    </div>
  );
};

export const IndexPageShimmer: React.FC<{}> = () => {
  return <div></div>;
};

export default IndexPage;
