import React from "react";
import { userContext } from "./context";

export default function Content2(){
    let [user, setUser] = React.useContext(userContext)

    const ContentStyle ={
        backgroundColor:'#ddd',
        textAlign:'center',
        margin:10,
        padding:10
    }

    const onClickSignin = (event) => {
        event.preventDefault()
        setUser('Tom Jerry')
    }

    return(
        <div style={ContentStyle}>
        {
            (user)
            ?<span>Hello {user}</span>
            :<span>Please <a href=" " onClick={onClickSignin}>Singin</a></span>
        }
        </div>
    )
}