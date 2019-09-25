import React from "react"

function Loading (props) {
    return (
        <h1>{props.isLoading ? "I am loading the content" : null}</h1>
    )
}


export default Loading