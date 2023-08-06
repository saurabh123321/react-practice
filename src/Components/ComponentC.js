import React, {Component} from "react";
import { UserConsumer } from "./userContext";
class ComponentC extends Component {
    render(){
        return(
            <UserConsumer>
                {
                    username => {
                        
                    }
                }
            </UserConsumer>
        )
    }
}

export default ComponentC;