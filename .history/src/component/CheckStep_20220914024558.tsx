import { useState } from "react";

// Details
// Shipping
// Payment

type Check = "Details" | "Shipping" | "Payment";

export default function App() {
  const [check, setCheck] = useState<Check>("Details");

  return (
    <>
      {check === "Details" && (
        <>
          <h1>Details</h1>
          <button type="button" onClick={() => setCheck("Shipping")}>
            Next
          </button>
        </>
      )}

      {check === "Shipping" && (
        <>
          <h1>Shipping</h1>
          <button type="button" onClick={() => setCheck("Payment")}>
            Next
          </button>
        </>
      )}

      {check === "Payment" && (
        <>
          <h1>Payment</h1>
        </>
      )}
    </>
  );
