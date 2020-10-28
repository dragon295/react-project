import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../../component/Header.js'
import Footer from '../../component/Footer.js'
import './ProductDetail.css';
import Slide from '../../component/Smurf.js'
import { Container, Row, Col, Modal } from 'react-bootstrap';
import ScrollToTop from "react-scroll-up";
// import {useParams} from "react-router-dom";
function ProductDetail() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    document.title = "Chi tiết sản phẩm";
    const params = useParams();
    const { id } = params;

    const [products, setProducts] = useState([])
    useEffect(() => {
        async function getProducts() {
            const products = await fetch(`http://localhost:4000/products?id=${id}`).then(res => res.json());
            //   const products = await response.json();
            // Luu vao state
            setProducts(products);
            // console.log(products)
        }
        // Goi API
        getProducts();
    }, []);



    const [show2, setShow2] = useState(false);
    const handleShow2 = (productInput) => {
        setShow2(true);
        getCountTimeout()

        let arrStorage = JSON.parse(localStorage.getItem("productsId"));
        if (!arrStorage) {
            console.log(2);
            localStorage.setItem("productsId", JSON.stringify([{
                ...productInput,
                "total": 1
            }]));
        }
        else {
            const match = arrStorage.findIndex(item => item.id === productInput.id);
            (match === -1)
                ? localStorage.setItem("productsId", JSON.stringify([
                    ...arrStorage,
                    {
                        ...productInput,
                        "total": 1
                    }
                ]))
                : localStorage.setItem("productsId", JSON.stringify([
                    ...arrStorage.slice(0, match),
                    {
                        ...arrStorage[match],
                        "total": arrStorage[match]["total"] + 1
                    },
                    ...arrStorage.slice(match + 1)
                ]))
        }
    };


    const getCountTimeout = () => {
        setTimeout(() => {
            setShow2(false);
        }, 1050);
    };

    const [heart, setHeart] = useState(false);

    const getHeart = () => {
        setTimeout(() => {
            setHeart(false);
        }, 1050);
    };



    const showHeart = (productInput) => {
        setHeart(true);
        getHeart()
        let arrStorage = JSON.parse(localStorage.getItem("productsHeart"))
        if (!arrStorage) {
            localStorage.setItem("productsHeart", JSON.stringify([productInput]));
        }
        else {
            const match = arrStorage.findIndex(item => item.id === productInput.id);
            if (match === -1) {
                localStorage.setItem("productsHeart", JSON.stringify([
                    ...arrStorage,
                    {
                        ...productInput
                    }
                ]))
            }
        }
    }



    return (
        <div>
            <Header />
            {products.map((product, index) => <section key={index}>
                <Container className="mt-5">
                    <Row >
                        <div className="column-green" />
                        <div className="column-black mb-4 d-flex justify-content-center align-items-center">
                            <label className="bv my-0">Chi tiết sản phẩm</label>
                        </div>
                    </Row>
                    <Row className="mt-3 result-search">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12  pr-0 pl-0">
                            <div className="text-tim-kiem-sp-box mb-2 ml-4">
                                <span className="text-tim-kiem-sp mr-1">{product.name}</span>
                            </div>
                            <div className="line-green mb-3" />
                        </div>
                    </Row>
                    <Row>
                        <Col xs={12} sm={12} md={8} lg={8} xl={8} className="img-banner-sp d-flex justify-content-center pl-0" >
                            <Slide product={product} />
                        </Col>
                        <Col xs={12} sm={12} md={4} lg={4} xl={4} className="all-product-infor-1 mr-0  ml-0 px-0 ">
                            <div className="category d-flex align-items-center justify-content-center">
                                <h6 className=" mt-2 px-2">Thể loại: Hành động, Nhập vai</h6>
                            </div>
                            <div className="product-infor d-flex justify-content-between ">
                                <div className="d-flex flex-column part-1 w-50">
                                    <div className="d-flex justify-content-center mt-2">
                                        <span className="text-white">Nền tảng</span>
                                    </div>
                                    <div className="d-flex justify-content-center mt-2">
                                        <img src="https://dragon295.github.io/project-web-sale-game/img/ps.png" alt="" className="img-fluid img-ps mr-4  pb-2 " />
                                        <img src="https://dragon295.github.io/project-web-sale-game/img/win.png" alt="" className="img-fluid img-win pb-2 " />
                                    </div>
                                </div>
                                <div className="d-flex flex-column part-2 w-50">
                                    <div className="d-flex justify-content-center mt-2">
                                        <span className="text-white">Ngày ra mắt</span>
                                    </div>
                                    <div className="d-flex justify-content-center mt-2">
                                        <span className="date-sp d-flex justify-content-center text-green ">{product.date}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="product-infor d-flex justify-content-between ">
                                <div className="d-flex flex-column part-3 w-50">
                                    <div className="d-flex justify-content-center mt-2">
                                        <span className="text-white">Nhà sản xuất</span>
                                    </div>
                                    <div className="d-flex justify-content-center mt-2">
                                        <img src={product.imgNsx} alt="" className="img-fluid img-nsx-sp d-flex justify-content-center pb-2 " />
                                    </div>
                                </div>
                                <div className="d-flex flex-column part-4 w-50">
                                    <div className="d-flex justify-content-center mt-2">
                                        <span className="text-white">Nhà phát hành</span>
                                    </div>
                                    <div className="d-flex justify-content-center mt-2">
                                        <img src="https://dragon295.github.io/project-web-sale-game/img/steam.jpg" alt="" className="img-fluid img-nsx-sp d-flex justify-content-center pb-2 " />
                                    </div>
                                </div>
                            </div>
                            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                <div className="product-infor h-25">
                                    <div className="w-100 d d-flex justify-content-between mt-2">
                                        <div className="gia-sp">
                                            <label className="giam-gia-sp float-left px-1 py-2 my-1">{product.discountBig}</label>
                                            <span className="gia-1-sp d-flex flex-column  ">{Intl.NumberFormat().format(product.priceBig1)}đ</span>
                                            <span className="gia-2-sp d-flex flex-column">{Intl.NumberFormat().format(product.priceBig2)}đ</span>
                                        </div>
                                    </div>
                                    <div className="group-2-sp d-flex flex-column">
                                        <button className="gio-hang-sp px-4 btn btn-success mx-2 mt-4" onClick={() => handleShow2(product)}>
                                            <span className="add">THÊM VÀO GIỎ HÀNG</span>
                                            <i className="fa fa-cart-plus icon-pay" aria-hidden="true" />
                                        </button>
                                    </div>
                                </div>
                            </Col>
                        </Col>
                    </Row>
                    <Row>
                        <Container className="mt-5 result-search">
                            <Row>
                                <Col xs={12} sm={12} md={12} lg={12} xl={12} className=" pl-0 pr-0">
                                    <div className="text-tim-kiem-sp-box mb-2 ml-4">
                                        <span className="text-tim-kiem-sp mr-1">Nội dung sơ lược </span>
                                    </div>
                                    <div className="line-green mb-3" />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} sm={12} md={12} lg={12} xl={12} className="noi-dung-so-luoc">
                                    <p className="py-2 text-noi-dung">{product.textInfor1}</p>
                                    <p className="text-noi-dung">{product.textInfor2}<br />
                                    </p>
                                    <p className="text-noi-dung">
                                        {product.textInfor3}
                                    </p>
                                </Col>
                            </Row>
                            <Row>
                                <Container className="mt-5 result-search">
                                    <Row>
                                        <Col xs={12} sm={12} md={12} lg={12} xl={12} className=" pl-0 pr-0">
                                            <div className="text-tim-kiem-sp-box mb-2 ml-4">
                                                <span className="text-tim-kiem-sp mr-1">Cấu hình trên PC</span>
                                            </div>
                                            <div className="line-green mb-3" />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={12} sm={12} md={6} lg={6} xl={6} className="cau-hinh py-2">
                                            <span className="title-cau-hinh">TỐI THIỂU</span>
                                            <p className="text-noi-dung mt-2">
                                                - Yêu cầu vi xử lý và hệ điều hành đều chạy 64-bit<br />
                                                - HĐH: WINDOWS® 7, 8.1, 10 (64-BIT Required)<br />
                                                - Bộ xử lý: Intel® Core™ i5-4460 or AMD FX™-6300 or better<br />
                                                - Bộ nhớ: 8 GB RAM<br />
                                                - Đồ họa: NVIDIA® GeForce® GTX 760 or AMD Radeon™ R7 260x with 2GB Video RAM<br />
                                                - DirectX: Phiên bản 11<br />
                                                - Lưu trữ: 26 GB chỗ trống khả dụng.
                                            </p>
                                        </Col>
                                        <Col xs={12} sm={12} md={6} lg={6} xl={6} className="cau-hinh py-2">
                                            <span className="title-cau-hinh">KHUYẾN NGHỊ</span>
                                            <p className="text-noi-dung mb-1 mt-2">
                                                - Yêu cầu vi xử lý và hệ điều hành đều chạy 64-bit <br />
                                                - HĐH: WINDOWS® 7, 8, 8.1, 10 (64-BIT Required) <br />
                                                - Bộ xử lý: Intel® Core™ i7 3770 3.4GHz or AMD equivalent or better <br />
                                                - Bộ nhớ: 8 GB RAM <br />
                                                - Đồ họa: NVIDIA® GeForce® GTX 1060 with 3GB VRAM <br />
                                                - DirectX: Phiên bản 11 <br />
                                                - Lưu trữ: 26 GB chỗ trống khả dụng.
                                            </p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Container className="mt-5 result-search">
                                            <Row>
                                                <Col xs={12} sm={12} md={12} lg={12} xl={12} className=" pl-0 pr-0">
                                                    <div className="text-tim-kiem-sp-box mb-2 ml-4">
                                                        <span className="text-tim-kiem-sp mr-1">Cấu hình trên Console</span>
                                                    </div>
                                                    <div className="line-green mb-3" />
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col xs={12} sm={12} md={12} lg={12} xl={12} className="px-0">
                                                    <div className="cau-hinh">
                                                        <p className="text-white py-2 pl-3"> - Từ PS4 trở lên</p>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row className="mt-5">
                                                <div className="column-green" />
                                                <div className="column-black mb-4 d-flex justify-content-center align-items-center">
                                                    <label className="bv my-0">Sản phẩm khác</label>
                                                </div>
                                            </Row>
                                        </Container>
                                        <Container className="sp-khac mt-3">
                                            <Row>
                                                <Col xs={12} sm={12} md={4} lg={4} xl={4}>
                                                    <div className="sp-1">
                                                        <Link to={`/product-detail/${id}`}><img className="img-fluid banner-sp-khac " src={product.imgSmall1} alt="" />
                                                        </Link><div className="product-infor-1">
                                                            <div className="group-1-nb w-100 d d-flex justify-content-between">
                                                                <div className="gia-khac">
                                                                    <label className="giam-gia-khac float-left px-1 py-2 my-1">{product.discountSmall1}</label>
                                                                    <span className="gia-1 d-flex flex-column  ">{Intl.NumberFormat().format(product.priceSmall11)}đ</span>
                                                                    <span className="gia-2 d-flex flex-column">{Intl.NumberFormat().format(product.priceSmall12)}đ</span>
                                                                </div>
                                                                <div className="img-nsx">
                                                                    <img className="label-nsx img-fluid" src="https://dragon295.github.io/project-web-sale-game/img/steam.png" alt="" />
                                                                </div>
                                                            </div>
                                                            <div className="group-2 d-flex justify-content-between">
                                                                <button className="gio-hang px-4 btn btn-success" onClick={() => handleShow2(product)}>
                                                                    <span className="name-gh-1">THÊM VÀO GIỎ HÀNG</span>
                                                                    <i className="fa fa-cart-plus icon-pay-1" aria-hidden="true" />
                                                                </button>
                                                                <button className="tym btn btn-success" onClick={() => showHeart(product)}>
                                                                    <div className="icon-c">
                                                                        <i className="fa af fa-heart button-heart" aria-hidden="true" />
                                                                        <i className="fa af fa-check" aria-hidden="true" />
                                                                    </div>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                {/*---------------------------------------------- SP-2 -----------------------------------------------*/}
                                                <Col xs={12} sm={12} md={4} lg={4} xl={4}>
                                                    <div className="sp-2">
                                                        <Link to={`/product-detail/${id}`}><img className="img-fluid banner-sp-khac " src={product.imgSmall2} alt="" /></Link>
                                                        <div className="product-infor-2">
                                                            <div className="group-1-nb w-100 d d-flex justify-content-between">
                                                                <div className="gia-khac">
                                                                    <label className="giam-gia-khac float-left px-1 py-2 my-1">{product.discountSmall2}</label>
                                                                    <span className="gia-khac-1 d-flex flex-column  ">{Intl.NumberFormat().format(product.priceSmall21)}đ</span>
                                                                    <span className="gia-khac-2 d-flex flex-column">{Intl.NumberFormat().format(product.priceSmall22)}đ</span>
                                                                </div>
                                                                <div className="img-nsx">
                                                                    <img className="label-nsx img-fluid" src="https://dragon295.github.io/project-web-sale-game/img/steam.png" alt="" />
                                                                </div>
                                                            </div>
                                                            <div className="group-2 d-flex justify-content-between">
                                                                <button className="gio-hang px-4 btn btn-success" onClick={() => handleShow2(product)}>
                                                                    <span className="name-gh-2">THÊM VÀO GIỎ HÀNG</span>
                                                                    <i className="fa fa-cart-plus icon-pay-2" aria-hidden="true" />
                                                                </button>
                                                                <button className="tym btn btn-success" onClick={() => showHeart(product)}>
                                                                    <div className="icon-c">
                                                                        <i className="fa af fa-heart button-heart" aria-hidden="true" />
                                                                        <i className="fa af fa-check" aria-hidden="true" />
                                                                    </div>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                {/*----------------------------------------------- SP-3 ----------------------------------------------*/}
                                                <Col xs={12} sm={12} md={4} lg={4} xl={4}>
                                                    <div className="sp-3">
                                                        <Link to={`/product-detail/${id}`}><img className="img-fluid banner-sp-khac " src={product.imgSmall3} alt="" /></Link>
                                                        <div className="product-infor-3">
                                                            <div className="group-1-nb w-100 d d-flex justify-content-between">
                                                                <div className="gia-khac">
                                                                    <label className="giam-gia-khac float-left px-1 py-2 my-1">{product.discountSmall3}</label>
                                                                    <span className="gia-khac-1 d-flex flex-column  ">{Intl.NumberFormat().format(product.priceSmall31)}đ</span>
                                                                    <span className="gia-khac-2 d-flex flex-column">{Intl.NumberFormat().format(product.priceSmall32)}đ</span>
                                                                </div>
                                                                <div className="img-nsx">
                                                                    <img className="label-nsx img-fluid" src="https://dragon295.github.io/project-web-sale-game/img/steam.png" alt="" />
                                                                </div>
                                                            </div>
                                                            <div className="group-2 d-flex justify-content-between">
                                                                <button className="gio-hang px-4 btn btn-success" onClick={() => handleShow2(product)}>
                                                                    <span className="name-gh-3">THÊM VÀO GIỎ HÀNG</span>
                                                                    <i className="fa fa-cart-plus icon-pay-3" aria-hidden="true" />
                                                                </button>
                                                                <button className="tym btn btn-success" onClick={() => showHeart(product)}>
                                                                    <div className="icon-c">
                                                                        <i className="fa af fa-heart button-heart" aria-hidden="true" />
                                                                        <i className="fa af fa-check" aria-hidden="true" />
                                                                    </div>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Row>
                                </Container>
                            </Row>
                        </Container>
                    </Row>
                </Container>
            </section>)}
            <Footer />

            <Modal className="modal d-flex justify-content-center" show={show2} animation={true}>
                <div className="modal-content-alert mr-3">
                    <div className="d-flex justify-content-center my-3">
                        <img src="https://dragon295.github.io/project-web-sale-game/img/check.png" className="img-tick" alt="" />
                    </div>
                    <p className="text-center">Sản phẩm đã được thêm vào giỏ hàng</p>
                </div>
            </Modal>

            <Modal className="modal d-flex justify-content-center" show={heart} animation={true}>
                <div className="modal-content-alert mr-3">
                    <div className="d-flex justify-content-center my-3">
                        <img src="https://dragon295.github.io/project-web-sale-game/img/heart-big.png" className="img-tick" alt="" />
                    </div>
                    <p className="text-center">Sản phẩm đã được thêm vào Yêu thích</p>
                </div>
            </Modal>

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
export default ProductDetail;






