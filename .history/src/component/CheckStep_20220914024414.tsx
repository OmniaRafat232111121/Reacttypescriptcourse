import { useState } from "react";
export default function CheckStep(){
    type CheckStep="Shipping"|"Details"|"Payement"
    const [check,setCheck]=useState<CheckStep>("Shopping");
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
          <button type="button" onClick={() => setCheckou("Payment")}>
            Next
          </button>
        </>
      )}

      {checkoutStep === "Payment" && (
        <>
          <h1>Payment</h1>
        </>
      )}
    </>
    );
}