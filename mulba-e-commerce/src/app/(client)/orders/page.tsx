import { requireUser } from "@/hooks/requireUser";
import React from "react";

const OrdersPage = async () => {
  await requireUser();
  return <div>OrdersPage</div>;
};

export default OrdersPage;
