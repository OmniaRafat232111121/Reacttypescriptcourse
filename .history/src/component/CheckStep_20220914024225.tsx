import { useState } from "react";
export default function CheckStep(){
    type CheckStep="Shopping"|"Details"|"Payement"
    const [check,setCheck]=useState<CheckStep>("Shopping");
    return(
      {check==="Details" &&(
        <button type="button" onClick={() => setCheck("Shipping")}>
        Next
        </button>
      )}
    );
}