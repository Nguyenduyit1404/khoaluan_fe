import './Footer.css'
function Footer(){
    return(
        <div id='footer'>
            <div class="sign-in">
                <h1>Đăng ký thành viên để nhận khuyến mại</h1>
                <h4>Theo dõi chúng tôi để nhận thêm nhiều ưu đãi</h4>
                <form action="">
                    <input></input>
                    <button>Đăng ký</button>
                </form>
            </div>
            <div class="icon">
            <i class="fa fa-instagram" aria-hidden="true"></i>
            <i class="fa fa-facebook-official" aria-hidden="true"></i>
            <i class="fa fa-youtube-play" aria-hidden="true"></i>
            <i class="fa fa-map-marker" aria-hidden="true"></i>
            </div>
            <div class="container"> 
                <div class="row">
                    <div class="col-sm">
                        <h1>xxiv store</h1>
                        <div class="col-sm"><a href="">ưu đãi thành viên</a></div>
                        <div class="col-sm"><a href="">tài khoản</a></div>
                        <div class="col-sm"><a href="">tuyển dụng</a></div>
                    </div>
                    <div class="col-sm">
                            <h1>chính sách bán hàng</h1>
                        <div className="col-sm"><a href="">phương thức vận chuyển</a></div>
                        <div className="col-sm"><a href="">câu hỏi thường gặp</a></div>
                        <div className="col-sm"><a href="">điều khoản và điện kiện sử dụng</a></div>
                        <div className="col-sm"><a href="">điều khoản và điều kiện bán hàng</a></div>
                        <div className="col-sm"><a href="">thông báo pháp lý</a></div>
                    </div>
                    <div class="col-sm">
                            <h1>thông tin chung</h1>
                        <div className="col-sm"><a href="">giới thiệu</a></div>
                        <div className="col-sm"><a href="">blog</a></div>
                        <div className="col-sm"><a href="">liên hệ</a></div>
                        <div className="col-sm"><a href="">sản phẩm</a></div>
                    </div>
                </div>
            </div>
            <div class="sponsor">
                <h4>© xxiv 2021 | all right reserved</h4>
            </div>
        </div>
    )
}
export default Footer