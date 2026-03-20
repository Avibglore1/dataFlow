import { useState } from "react";
import Child from "./Child";

function Parent(){
    const [childData,setChildData] = useState("");

    const handleDataFromChild = (data) =>{
        setChildData(data);
    }

    return(
        <div>
            <h2>Parent Component</h2>
            <p>Data from child: {childData}</p>
            <Child sendData={handleDataFromChild} />
        </div>
    )
}

export default Parent