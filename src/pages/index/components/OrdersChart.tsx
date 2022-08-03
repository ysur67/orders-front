import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { Order } from "../../../models/order";

interface OrdersChartProps {
  orders: Array<Order>;
}

interface ChartData {
  date: string;
  cost: number;
}

const OrdersChart: React.FC<
  OrdersChartProps & React.HTMLAttributes<HTMLDivElement>
> = ({ orders, className }) => {
  const data: Array<ChartData> = orders.map((elem) => ({
    date: elem.deliveryDate.toString(),
    cost: elem.costDollars,
  }));

  return (
    <LineChart
      width={800}
      height={600}
      data={data}
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      className={className}
    >
      <Line type="monotone" dataKey="cost" stroke="#000" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
    </LineChart>
  );
};

export default OrdersChart;
