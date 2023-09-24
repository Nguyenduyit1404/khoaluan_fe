import './Header.css'
function Header(){
    return(
        <div id='header'>
                <ul id="nav">
                    <li><a href="">trang chủ</a></li>
                    <li><a href="">giới thiệu</a></li>
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