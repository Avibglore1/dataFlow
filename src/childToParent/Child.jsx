function Child({sendData}){
    const handleClick = () =>{
        sendData("Hello from Child")
    }
    return(
        <>
            <div>Child</div>
            <button  onClick={handleClick}>Click</button>
        </>
    )
}

export default Child