import { Order } from "../../../models/order";

import DataTable, { TableColumn } from "react-data-table-component";

interface OrdersTableParam {
  orders: Array<Order>;
}

const OrdersTable: React.FC<
  OrdersTableParam & React.HTMLAttributes<HTMLDivElement>
> = ({ orders, className }) => {
  const columns: TableColumn<Order>[] = [
    {
      name: "Номер заказа",
      selector: (row) => row.orderId,
    },
    {
      name: "Стоимость $",
      selector: (row) => row.costDollars.toString(),
    },
    {
      name: "Стоимость RUB",
      selector: (row) => row.costRubles.toString(),
    },
    {
      name: "Срок поставки",
      selector: (row) => row.deliveryDate.toString(),
    },
  ];
  return <DataTable columns={columns} data={orders} className={className} />;
};

export default OrdersTable;
