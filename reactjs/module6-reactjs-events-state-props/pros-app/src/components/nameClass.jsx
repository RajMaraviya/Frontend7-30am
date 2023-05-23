import {React, Component} from "react";
class NamApp extends Component
{
    render(props)
    {
        return(
            <>
                <p>my Name is : {this.props.name} and last name is : {this.props.lname}</p>
                <a href="https://www.google.in">{this.props.link}</a>
            </>
        )
    }
}
export default NamApp;