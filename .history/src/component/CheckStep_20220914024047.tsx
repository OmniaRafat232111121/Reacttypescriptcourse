import { useState } from "react";
export default function CheckStep(){
    type CheckStep="Shopping"|"Details"|"Payemen"
    const [check,setCheck]=useState<CheckStep>("shopping")
    return(

    );
}