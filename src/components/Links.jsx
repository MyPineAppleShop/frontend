import { Link } from "react-router-dom";

export default function Links(){
    return(       
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/signup">SignUp</Link>
                </li> 
                <li>
                    <Link to="/iphone">Iphone</Link>
                </li>
                <li>
                    <Link to="/mac">Mac</Link>
                </li>
                <li>
                    <Link to="/basket">Basket</Link>
                </li> 
            </ul>     
    )
}