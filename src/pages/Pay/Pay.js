import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../component/Header.js'
import Footer from '../../component/Footer.js'
import './Pay.css'
import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';
import ScrollToTop from "react-scroll-up";

function Pay() {
    document.title = "Thanh toán";
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    const [showfile, setShowFile] = useState("none");
    const [showfile2, setShowFile2] = useState("none");

    const showPay = () => {
        if (showfile === "none") {
            setShowFile("block")
        } else {
            setShowFile("none")
        }
    }

    const showPay2 = () => {
        if (showfile2 === "none") {
            setShowFile2("block")
        } else {
            setShowFile2("none")
        }
    }

    const [citys, setCity] = useState([]);
    const [dataCity, setDataCity] = useState("");
    const [dataCommune, setDataCommune] = useState("")
    const [districts, setDistrict] = useState([]);
    const [communes, setCommune] = useState([]);
    useEffect(() => {
        async function getListCity() {
            const citys = await fetch("https://tda295.herokuapp.com/listCity").then(res => res.json());
            const districts = await fetch("https://tda295.herokuapp.com/listDictrict").then(res => res.json());
            const filterDistricts = districts.filter(district => district.idProvince === dataCity);
            const communes = await fetch("https://tda295.herokuapp.com/listCommune").then(res => res.json());
            const filterCommunes = communes.filter(commune => commune.idDistrict === dataCommune);
            setDistrict(filterDistricts);
            setCommune(filterCommunes);
            setCity(citys);
            // console.log(filterCommunes);
            // console.log(filterDistricts)
        }
        // Goi API
        getListCity(citys.length);

    }, [citys.length, dataCity, dataCommune]);
    const getDistrict = (event) => {
        setDataCity(event.target.value);
        setDataCommune("")
    }
    const getCommune = (event) => {
        setDataCommune(event.target.value);
    }
    return (
        <div>
            <Header />
            <section>
                <Container className="mt-5">
                    <Row>
                        <div className="column-green ml-3" />
                        <div className="column-black mb-4 d-flex justify-content-center align-items-center">
                            <label className="tt my-0">Thanh toán</label>
                        </div>
                    </Row>
                    <Row className="infor-tt mx-0">
                        <div className="title-tt px-3 py-3">
                            <span>1. Thông tin khách hàng</span>
                        </div>
                        <div className="line-xanh-tt" /><br />
                        <Col xs={12} sm={12} md={4} lg={4} xl={4} className="d-flex justify-content-center">
                            <div className="name-kh">
                                <div className="information-kh">
                                    <span>Họ và tên: </span>
                                    <span className="sao">*</span>
                                </div>
                                <input type="text" name="Tên" placeholder="Tên khách hàng" className="input-information-kh" />
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={4} lg={4} xl={4} className="d-flex justify-content-center">
                            <div className="sdt-kh">
                                <div className="information-kh">
                                    <span>Số điện thoại: </span>
                                    <span className="sao">*</span>
                                </div>
                                <input type="number" name="Số-điện-thoại" placeholder="Số điện thoại" className="input-information-kh" />
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={4} lg={4} xl={4} className=" d-flex justify-content-center">
                            <div className="email-kh">
                                <div className="information-kh">
                                    <span>Email</span>
                                    <span className="ko-bat-buoc">(không bắt buộc)</span>
                                </div>
                                <input type="email" name="Email" placeholder="Email" className="input-information-kh" />
                            </div>
                        </Col>
                    </Row>
                    <Row className="infor-tt-2 mx-0">
                        <div className="title-tt px-3 py-3">
                            <span>2. Phương thức nhận hàng</span>
                        </div>
                        <div className="line-xanh-tt" /><br />
                        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                                <Nav variant="pills" className="nav nav-pills mb-3 w-100">
                                    <Nav.Item className="nav-item w-50 ">
                                        <Nav.Link eventKey="first" className="nav-link nav-link-tt d-flex justify-content-center w-100">Nhận hàng tại nhà</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className="nav-item w-50 ">
                                        <Nav.Link eventKey="second" className="nav-link nav-link-tt  d-flex justify-content-center w-100">Nhận hàng tại shop</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <Row >
                                            <Col xs={12} sm={12} md={6} lg={6} xl={6} className="d-flex justify-content-center">
                                                <div className="information-kh">
                                                    <div className="login-use-new" /><span>Tỉnh/Thành phố</span><span style={{ color: 'red', fontStyle: 'normal' }}> *</span><br />
                                                    <select id="input-user-city-province1" name="city-province" className="select-tt" onChange={(event) => { getDistrict(event) }}>
                                                        <option value={"0"}> Chọn Tỉnh/Thành Phố...</option>
                                                        {citys.map(city => (<option value={city.id} key={city.id}>{city.city}</option>))}
                                                    </select>
                                                </div>
                                            </Col>
                                            <Col xs={12} sm={12} md={6} lg={6} xl={6} className="d-flex justify-content-center">
                                                <div className="information-kh ">
                                                    <form>
                                                        <div className="login-use-new" />
                                                        <span>Quận/Huyện</span>
                                                        <span style={{ color: 'red', fontStyle: 'normal' }}> *</span><br />
                                                        <select id="input-user-city-province2" name="city-province" className="select-tt" onChange={(event) => { getCommune(event) }}>
                                                            <option> Chọn Quận Huyện</option>
                                                            {districts.map(district => (<option value={district.idDistrict} key={district.idDistrict}>{district.name}</option>))}
                                                        </select>
                                                    </form>
                                                </div>
                                            </Col>
                                            <Col xs={12} sm={12} md={6} lg={6} xl={6} className="d-flex justify-content-center ">
                                                <div className="information-kh address">
                                                    <form>
                                                        <div className="login-use-new" />
                                                        <span>Phường/Xã</span>
                                                        <span style={{ color: 'red', fontStyle: 'normal' }}> *</span><br />
                                                        <select id="input-user-city-province3" name="city-province" className="select-tt">
                                                            <option> Chọn Phường Xã</option>
                                                            {communes.map(commune => (<option key={commune.name}>{commune.name}</option>))}
                                                        </select>
                                                    </form>
                                                </div>
                                            </Col>
                                            <Col xs={12} sm={12} md={6} lg={6} xl={6} className="d-flex justify-content-center">
                                                <div className="information-kh address">
                                                    <div><span>Địa chỉ</span><span style={{ color: 'red', fontStyle: 'normal' }}> *</span></div>
                                                    <input name="address" className="input-information-kh-3" placeholder="Nhập số nhà / Tên đường " />
                                                </div>
                                            </Col>
                                            <Col xs={12} sm={12} md={12} lg={12} xl={12} className="d-flex justify-content-center">
                                                <div className="information-kh giao-hang">
                                                    <span className="d-flex flex-column name-sip">Đơn vị giao hàng</span>
                                                    <div className="d-flex justify-content-between box-img-giao-hang">
                                                        <div className="dv-gh mt-2">
                                                            <input type="radio" name="ghn" className="mr-2 radio-tt mt-1" />
                                                            <img src="https://dragon295.github.io/project-web-sale-game/img/ghn.png" alt="" className="img-fluid img-giao-hang" />
                                                        </div>
                                                        <div className="dv-gh mt-2">
                                                            <input type="radio" name="ghn" className="ml-3 mr-2 radio-tt mt-1" />
                                                            <img src="https://dragon295.github.io/project-web-sale-game/img/jt.png" alt="" className="img-fluid img-giao-hang " />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>

                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <Row >
                                            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                <div className="d-flex justify-content-center"><h5 className="mb-0 text-center">Địa chỉ shop: 121 Kim Ngưu , Hai Bà Trưng , Hà Nội</h5></div>
                                                <div className="d-flex justify-content-center my-3 information-kh map-responsive">
                                               <iframe title="gg-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.645160355323!2d105.85930661424489!3d21.006856393903156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abf7d314a99f%3A0x3b79ab1889b035e!2zMTIxIEtpbSBOZ8awdSwgVGhhbmggTMawxqFuZywgSGFpIELDoCBUcsawbmcsIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1603860563441!5m2!1svi!2s" width={600} height={450} frameBorder={0} style={{border: 0}} allowFullScreen aria-hidden="false" tabIndex={0} />

                                                </div>
                                            </Col>
                                        </Row>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </Col>
                    </Row>
                    <Row className="infor-tt-3 mx-0">
                        <div className="title-tt px-3 py-3">
                            <span>3. Hình thức thanh toán</span>
                        </div>
                        <div className="line-xanh-tt" /><br />
                        <Col xs={12} sm={12} md={12} lg={12} xl={12} className="d-flex">
                            <input type="radio" name="Thanh-toán" className=" mr-2 radio-tt" />
                            <span className="httt">Thanh toán bằng tiền mặt</span>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={12} xl={12} className="mt-3">
                            <div className="d-flex">
                                <input type="radio" name="Thanh-toán" className=" mr-2 radio-tt" />
                                <span className="httt-2">Thanh toán bằng thẻ tín dụng (Visa, MasterCard)</span>
                            </div>
                            <div className="d-flex">
                                <Col xs={6} sm={6} md={6} lg={6} xl={6} className="mt-3">
                                    <div className="d-flex justify-content-center">
                                        <button type="button" className="btn btn-secondary w-100 mb-3" id="btn" onClick={(event) => showPay(event)}>
                                            <img src="https://dragon295.github.io/project-web-sale-game/img/mastercard.svg" alt="" className="img-fluid img-visa" />
                                        </button>
                                    </div>
                                    <div className="infor-card mb-3" id="ic" style={{ display: showfile }}>
                                        <div className="d-flex justify-content-center my-3 pt-2">
                                            <span className="httt  add-card">Thêm thẻ tín dụng/ghi nợ mới</span>
                                        </div>
                                        <div className="d-flex justify-content-center">
                                            <input type="text" name="chủ-thẻ" placeholder="Họ và tên chủ thẻ" className="input-card" />
                                        </div>
                                        <div className="d-flex justify-content-center mt-3">
                                            <input type="number" name="chủ-thẻ" placeholder="Số thẻ tín dụng/ghi nợ" className="input-card" />
                                        </div>
                                        <div>
                                            <div className="d-flex justify-content-center my-2">
                                                <span className="httt">Ngày hết hạn</span>
                                            </div>
                                            <div className="d-flex justify-content-center">
                                                <input type="number" name="ngày-hết-hạn" placeholder="MM" className="input-card" />
                                            </div>
                                            <div className="d-flex justify-content-center mt-3">
                                                <input type="number" name="ngày-hết-hạn" placeholder="YY" className="input-card mb-3" />
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={6} sm={6} md={6} lg={6} xl={6} className="mt-3 float-lg-left">
                                    <div className="d-flex justify-content-center">
                                        <button type="button" className="btn btn-secondary w-100 mb-3" id="btn-2" onClick={(event) => showPay2(event)}>
                                            <img src="https://dragon295.github.io/project-web-sale-game/img/Visa.svg" alt="" className="img-fluid img-visa" />
                                        </button>
                                    </div>
                                    <div className="infor-card mb-3" id="ic-2" style={{ display: showfile2 }}>
                                        <div className="d-flex justify-content-center my-3 pt-2">
                                            <span className="httt add-card">Thêm thẻ tín dụng/ghi nợ mới</span>
                                        </div>
                                        <div className="d-flex justify-content-center">
                                            <input type="text" name="chủ-thẻ" placeholder="Họ và tên chủ thẻ" className="input-card" />
                                        </div>
                                        <div className="d-flex justify-content-center mt-3">
                                            <input type="number" name="chủ-thẻ" placeholder="Số thẻ tín dụng/ghi nợ" className="input-card" />
                                        </div>
                                        <div>
                                            <div className="d-flex justify-content-center my-2">
                                                <span className="httt">Ngày hết hạn</span>
                                            </div>
                                            <div className="d-flex justify-content-center">
                                                <input type="number" name="ngày-hết-hạn" placeholder="MM" className="input-card" />
                                            </div>
                                            <div className="d-flex justify-content-center mt-3">
                                                <input type="number" name="ngày-hết-hạn" placeholder="YY" className="input-card mb-3" />
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={12} xl={12} className="d-flex justify-content-end">
                            <Link className="back" to="pay-complete"><button type="button" className="btn btn-success btn-back">Đặt hàng ngay</button></Link>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer />
            <script src="./pages/ListDistrict.js"></script>

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
export default Pay;


