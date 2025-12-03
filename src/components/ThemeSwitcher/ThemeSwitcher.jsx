import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";



function ThemeSwitcher(){
    const {theme,toggleTheme} = useContext(ThemeContext)
    return(
        <div>
             <button onClick={toggleTheme}>Переключить тему(сейчас: {theme} )</button>
        </div>
    )
}
export default ThemeSwitcher;