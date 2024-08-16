import API from "@/lib/api";
import { useEffect } from "react";

const PaymentSuccess = () => {
  useEffect(() => {
    API.delete("/carts/payment-success");
  }, []);

  return (
    <section>
      <h1 className="my-10 text-center">Payment successfully </h1>
    </section>
  );
};

export default PaymentSuccess;
