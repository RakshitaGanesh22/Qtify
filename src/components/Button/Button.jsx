import {Button} from "@mui/material";
import Styles from './Button.module.css'; 
export default function SearchButton (props){
    return (
        
            <button  className={Styles.btn}>{props.name}</button>
        
    )
}