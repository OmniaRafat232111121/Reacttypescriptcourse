import { useState } from "react";
export default function CheckStep(){
    type CheckStep="Shipping"|"Details"|"Payement"
    const [check,setCheck]=useState<CheckStep>("Shopping");
    return(
        {checko === "Details" && (
        <>
        <h1>Details</h1>
        <button type="button" onClick={() => setCheck("Shipping")}>
        Next
        </button>
        </>
      )}
    );
}