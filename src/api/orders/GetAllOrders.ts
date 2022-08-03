import { Order } from "../../models/order";
import { useQuery, QueryKey } from "@tanstack/react-query";
import http from "../utils/http";
import { API_ENDPOINTS } from "../utils/endpoints";

const fetchOrders = async () => {
  const { data } = await http.get<Array<Order>>(API_ENDPOINTS.ORDERS);
  return data;
};

const useOrdersQuery = () => {
  return useQuery<Array<Order>, Error>([], fetchOrders);
};

export { useOrdersQuery, fetchOrders };
