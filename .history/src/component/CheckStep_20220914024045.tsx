import { useState } from "react";
export default function CheckStep(){
    type CheckStep="Shopping"|"Details"|"Payemem"
    const [check,setCheck]=useState<CheckStep>("shopping")
    return(

    );
}