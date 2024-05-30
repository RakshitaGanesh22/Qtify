import {Button} from "@mui/material";
import Styles from './Button.module.css'; 
export default function SearchButton (props){
    return (
        <div className={Styles.button1}>
            <form >
                <button type="submit" className={Styles.button2}>{props.name}</button>
            </form>
        </div>
    )
}