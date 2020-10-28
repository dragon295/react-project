import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../component/Header.js'
import Footer from '../../component/Footer.js'
import './PayComplete.css'
import { Container, Row, Col } from 'react-bootstrap';
import ScrollToTop from "react-scroll-up";
function PayComplete() {
    document.title = "Mua hàng thành công";
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
                        <div className="column-black-mhtc mb-4 d-flex justify-content-center align-items-center">
                            <label className="mhtc my-0">Mua hàng thành công</label>
                        </div>
                    </Row>
                    <Row className="mx-0">
                        <Col xs={12} sm={12} md={12} lg={12} xl={12} className="mhtc-1 d-flex justify-content-center align-items-center flex-column">
                            <div className="d-flex justify-content-center align-items-center">
                                <label className="congra">Chúc Mừng</label>
                                <img src="https://dragon295.github.io/project-web-sale-game/img/congratulation.png" alt="" className="img-fluid img-congra" />
                            </div>
                            <span className="success-mhtc">Bạn đã đặt hàng thành công - Dưới đây là thông tin đặt hàng của bạn</span>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={12} xl={12} className="white-bg"></Col>
                    </Row>
                    <Row className="infor-don-hang mx-0">
                        <Col xs={12} sm={12} md={4} lg={4} xl={4} className="d-flex justify-content-center align-items-center infor-tc-1">
                            <span>Mã đơn hàng: 446</span>
                        </Col>
                        <Col xs={12} sm={12} md={4} lg={4} xl={4} className="d-flex justify-content-center align-items-center infor-tc-2 ">
                            <span>Phương thức nhận hàng:<br /> NHẬN HÀNG TẠI SHOP</span>
                        </Col>
                        <Col xs={12} sm={12} md={4} lg={4} xl={4} className="d-flex justify-content-center align-items-center infor-tc-3">
                            <span>Ngày mua: 25/6/2020</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={12} xl={12} className="d-flex justify-content-center align-items-center flex-column">
                            <Link className="back-mhtc" to="/"><button type="button" className="btn btn-success btn-back-mhtc">Trở về trang chủ</button></Link>
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
                            <span>1</span>
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
export default PayComplete;




