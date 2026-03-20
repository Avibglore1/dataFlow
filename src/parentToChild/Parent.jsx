import Child from "./Child"

function Parent(){
    const message="Hello from Parent"
    return(
        <>
            <h2>Parent Component</h2>
            <Child text={message}/>
        </>        
    )
}

export default Parent