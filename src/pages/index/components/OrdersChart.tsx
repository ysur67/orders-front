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
  cost: Number;
}

const OrdersChart: React.FC<OrdersChartProps> = ({ orders }) => {
  const data: Array<ChartData> = orders.map((elem) => ({
    date: elem.deliveryDate.toString(),
    cost: elem.costDollars,
  }));

  return (
    <LineChart
      width={600}
      height={300}
      data={data}
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
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
