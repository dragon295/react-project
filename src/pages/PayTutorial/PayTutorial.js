import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../component/Header.js'
import Footer from '../../component/Footer.js'
import './PayTutorial.css'
import { Container, Row, Col } from 'react-bootstrap';
import ScrollToTop from "react-scroll-up";
function PayTutorial() {
    document.title = "Hướng dẫn thanh toán";
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <Header />
            <section>
                <Container className="mt-5">
                    <Row>
                        <div className="column-green ml-3" />
                        <div className="column-black-hdtt mb-4 d-flex justify-content-center align-items-center">
                            <label className="hdtt my-0">Hướng dẫn thanh toán</label>
                        </div>
                    </Row>
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={12} xl={12} className="all-hdtt">
                            <img src="https://dragon295.github.io/project-web-sale-game/img/silver.jpg" className="w-100 banner-hdtt" alt="" />
                            <span className="text-banner-hdtt w-100">HƯỚNG DẪN THANH TOÁN</span>
                            <div className="box-hdtt">
                                <p className="title-hdtt">1. Thanh toán tiền mặt tại nhà khi nhận hàng thông qua hình thức giao hàng trực tiếp, chuyển phát nhanh hoặc COD:</p>
                                <p className="content-hdtt"> - Khi nhân viên giao hàng giao phát, khách hàng kiểm tra sản phẩm về hình thức đảm bảo, khách hàng nhận hàng và thanh toán trực tiếp cho nhân viên giao hàng theo giá trị tiền trên hóa đơn. Ngoài ra khách hàng không phải thanh toán bất kỳ 1 chi phí nào khác.</p>
                                <p className="title-hdtt">2. Thanh toán tiền mặt tại cửa hàng:</p>
                                <p className="content-hdtt"> - Khách hàng đến cửa hàng tham quan, mua sản phẩm sẽ thanh toán trực tiếp bằng tiền mặt hoặc quẹt thẻ tín dụng Visa hoặc MasterCards.</p>
                                <p className="title-hdtt">3. Thanh toán qua thẻ tín dụng:</p>
                                <p className="content-hdtt">- Nếu địa điểm giao hàng là ngoại thành, ngoại tỉnh nhưng khác với địa điểm thanh toán (trong trường hợp Quý khách gửi quà, gửi hàng cho bạn bè, đối tác …) chúng tôi sẽ thu tiền trước 100% giá trị hàng bằng phương thức chuyển khoản trước khi giao hàng. Khách hàng được miễn phí vận chuyển, quý khách hàng có thể chọn 1 trong 2 đơn vị vận chuyển là Giao hàng nhanh (GHN) hoặc JT Express.</p>
                            </div>
                            <div className="d-flex justify-content-center align-items-center bttn flex-column">
                                <Link className="back-hdtt" to="/"><button type="button" className="btn btn-success btn-back-hdtt d-flex align-items-center justify-content-center 
      ">Trở về trang chủ</button></Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer />

            <ScrollToTop showUnder={100} style={{ bottom: '110px' }} duration={1200} >
                <Link to="/cart">
                    <button className="btn-shopping" title="Go to shopping cart">
                        <i className="fa fa-shopping-cart cart-to" aria-hidden="true" />
                        <div className="circle-count-fixed">
                            <span>!</span>
                        </div>
                    </button>
                </Link>
            </ScrollToTop>

            <ScrollToTop showUnder={100} duration={1500}>
                <button className="btn-top" title="Go to top">
                    <i className="fa fa-arrow-up" aria-hidden="true"></i>
                </button>
            </ScrollToTop>
        </div>
    )
}
export default PayTutorial;
