import style from "./LogoFixedPage.module.css";
import {Outlet} from "react-router-dom";
import {LuPizza} from "react-icons/lu";
import {CiPizza} from "react-icons/ci";
const LogoFixed = () =>{
    return (
        <>
        <div className={style.div}>
<h3 className={style.logoName}>
                        <LuPizza /> <span>Pizza </span>Divina<CiPizza className={style.iconPizza} />
                    </h3>
        </div>
    <Outlet/>
    </>
    )
}
export default LogoFixed;