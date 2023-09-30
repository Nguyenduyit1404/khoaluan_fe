import './Header.css'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useNavigate
} from "react-router-dom"
function Header(){
    return(
        <div id='header'>       
                <ul id="nav">
                    <li><Link to={"/"}><a href="">trang chủ</a></Link></li>
                    <li><Link to={"intro"}><a href="">giới thiệu</a></Link></li>
                    <li><a href="">thương hiệu</a></li>
                    <li><a href="">sản phẩm</a>
                        <ul class="subnav">
                            <li><a href="">nước hoa nam</a></li>
                            <li><a href="">nước hoa nữ</a></li>
                            <li><a href="">unisex</a></li>
                        </ul>
                    </li>
                    <li><a href="">blog</a></li>
                </ul>
            <div id="header-icons">
                <a href=""><i class="fa fa-search" aria-hidden="true"></i></a>
                <a href=""><i class="fa fa-user" aria-hidden="true"></i></a>
                <a href=""><i class="fa fa-shopping-cart" aria-hidden="true"></i></a>
            </div>
        </div>
    )
}
export default Header