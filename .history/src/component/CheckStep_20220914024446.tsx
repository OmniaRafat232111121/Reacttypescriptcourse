import { useState } from "react";
export default function CheckStep(){
    type CheckStep="Shipping"|"Details"|"Payement"
    const [check,setCheck]=useState<CheckStep>("Shipping");
    return(
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
}