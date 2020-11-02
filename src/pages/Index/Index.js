import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../component/Header.js'
import Footer from '../../component/Footer.js'
import './Index.css'
import { Carousel, Container, Row, Col, Nav, Tab, Modal } from 'react-bootstrap';
import ScrollToTop from "react-scroll-up";
import { useForm } from "react-hook-form";
function Index() {
  document.title = "Trang chủ";
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  const { register, handleSubmit, getValues , errors } = useForm();
  
  const signIn = (data) => {
    if (data !== "") {
      window.location.reload()
    }
  } 

  const signUp = (data2) => {
    if (data2 !== "") {
      window.location.reload()
    }
  } 
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show2, setShow2] = useState(false);
  const [index, setIndex] = useState([]);
  const [indexproduct, setIndexProduct] = useState([]);
  const [slideindex, setSlideIndex] = useState([]);
  const [relativeindex, setRelativeIndex] = useState([]);
  const [sock, setSock] = useState([]);
  const [sock2, setSock2] = useState([]);
  const [sell, setSell] = useState([]);
  const [sell2, setSell2] = useState([]);
  useEffect(() => {
    async function getProductsIndex() {
      const products = await fetch("https://tda295.herokuapp.com/products?").then(res => res.json());
      const slide = await fetch("https://tda295.herokuapp.com/products?slide=true").then(res => res.json());
      const onhome = await fetch("https://tda295.herokuapp.com/products?onhome=true").then(res => res.json());
      const lq = await fetch("https://tda295.herokuapp.com/products?relative=true").then(res => res.json());
      const shock = await fetch("https://tda295.herokuapp.com/products?shockDiscounts=true").then(res => res.json());
      const shock2 = await fetch("https://tda295.herokuapp.com/products?shockDiscounts2=true").then(res => res.json());
      const sellall = await fetch("https://tda295.herokuapp.com/products?sell=true").then(res => res.json());
      const sellall2 = await fetch("https://tda295.herokuapp.com/products?sell2=true").then(res => res.json());
      const index = products.filter(product => product.id === 1);
      // Luu vao state
      setIndex(index);
      setIndexProduct(onhome);
      setSlideIndex(slide)
      setRelativeIndex(lq);
      setSock(shock);
      setSock2(shock2);
      setSell(sellall);
      setSell2(sellall2);
    }
    // Goi API
    getProductsIndex();
  }, []);


  const handleShow2 = (productInput) => {
    setShow2(true);
    getCountTimeout();

    let arrStorage = JSON.parse(localStorage.getItem("productsId"));
    if (!arrStorage) {
      // console.log(2);
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
      <section>
        <Container>

          <div className="d-flex justify-content-center container-banner">
            <div className="background-1" />
            <div className="background-2" />
            <Row>
              <Carousel>
                {slideindex.map((product, index) => <Carousel.Item key={index}>
                  <Link to={`/product-detail/${product.id}`}>
                    <img
                      className="d-block w-100"
                      src={product.imgIndex}
                      alt="Third slide"
                    /></Link>
                  <Container fluid className="infor-sp-banner-1">
                    <Row>
                      <Col xs={6} sm={6} md={6} lg={6} xl={6} className="col-6 box-2 pl-4">
                        <div className="name-sp-banner">
                          <span>{product.name}</span>
                        </div>
                        <div className="nentang">
                          <div className="pc pt-1">PC</div>
                          <div className="console pt-1">Console</div>
                        </div>
                      </Col>
                      <Col xs={6} sm={6} md={6} lg={6} xl={6} className=" d-flex align-items-center box-2 ">
                        <div className="gia-banner ml-2">
                          <label className="sale-banner float-left d-flex justify-content-center
									align-items-center">{product.discountBig}</label>
                          <span className="gia-banner-1 d-flex flex-column">{Intl.NumberFormat().format(product.priceBig1)}đ</span>
                          <span className="gia-banner-2 d-flex flex-column">{Intl.NumberFormat().format(product.priceBig2)}đ</span>
                        </div>
                        <div className="button-add-banner">
                          <button type="button" className="btn btn-success btn-banner" onClick={() => handleShow2(product)} >
                            <span className="add-name">THÊM VÀO GIỎ HÀNG</span>
                            <i className="fa fa-cart-plus shop-cart" aria-hidden="true" />
                          </button>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </Carousel.Item>)}
              </Carousel>
            </Row>
          </div>
          {/*----------------------------------------------- TITLE----------------------------------------------*/}
          <Row className="mt-5">
            <div className="column-green ml-3" />
            <div className="column-black d-flex justify-content-center align-items-center">
              <label className="sp-noi-bat my-0">Sản phẩm nổi bật</label>
            </div>
          </Row>
          {/*----------------------------------------------- SP----------------------------------------------*/}
          <Row className="row-1">
            {/*----------------------------------------------- SP-1 ----------------------------------------------*/}
            {indexproduct.map((product, index) => <div key={index} className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mt-4">
              <div className="sp-1">
                <Link to={`/product-detail/${product.id}`}><img className="img-fluid banner-sp-1 " src={product.imgIndex} alt="" /></Link>
                <div className="infor-sp-1">
                  <div className="group-1-nb w-100 d d-flex justify-content-between">
                    <div className="gia">
                      <label className="giam-gia float-left px-1 py-2 my-1">{product.discountBig}</label>
                      <span className="gia-1 d-flex flex-column  ">{Intl.NumberFormat().format(product.priceBig1)}đ</span>
                      <span className="gia-2 d-flex flex-column">{Intl.NumberFormat().format(product.priceBig2)}đ</span>
                    </div>
                    <div className="img-nsx">
                      <img className="label-nsx img-fluid" src="https://dragon295.github.io/project-web-sale-game/img/steam.png" alt="" />
                    </div>
                  </div>
                  <div className="group-2 d-flex justify-content-between">
                    <button className="gio-hang px-4 btn btn-success" onClick={() => handleShow2(product)}>
                      <span className="add-nb">THÊM VÀO GIỎ HÀNG</span>
                      <i className="fa fa-cart-plus icon-pay-nb" aria-hidden="true" />
                    </button>
                    <button className="tym btn btn-success" onClick={() => showHeart(product)} >
                      <div className="icon-c">
                        <i className="fa af fa-heart button-heart" aria-hidden="true" />
                        <i className="fa af fa-check" aria-hidden="true" />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>)}
          </Row>
          {/*-----------------------------------------------TITLE-------------------------------------------*/}
          <Row className="mt-5">
            <div className="column-green ml-3" />
            <div className="column-black d-flex justify-content-center align-items-center">
              <label className="sp-theo-bo my-0">Sản phẩm theo bộ</label>
            </div>
          </Row>
          {/*------------------------------------------ SP----------------------------------------------*/}
          <Row>
            {relativeindex.map((product, index) => <div key={index} className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 px-0 mt-4" > <div className="px-3">
              <div className="sp-theobo-1">
                <Link to={`/product-detail/${product.id}`}><img className="img-fluid banner-sp-1" src={product.imgIndex} alt="" /></Link>
                <div className="infor-sp-1">
                  <div className="group-1-gia w-100 d d-flex justify-content-between">
                    <div className="gia-tb">
                      <label className="giam-gia-box float-left d-flex justify-content-center align-items-center my-1">{product.discountBig}</label>
                      <span className="gia-sp-1 d-flex flex-column">{Intl.NumberFormat().format(product.priceBig1)}đ</span>
                      <span className="gia-sp-2 d-flex flex-column">{Intl.NumberFormat().format(product.priceBig2)}đ</span>
                    </div>
                    <div className="img-nsx">
                      <img className="label-nsx img-fluid" src="https://dragon295.github.io/project-web-sale-game/img/steam.png" alt="" />
                    </div>
                  </div>
                  <div className="group-2-btn d-flex justify-content-between">
                    <button className="gio-hang-theobo btn btn-success" onClick={() => handleShow2(product)}>
                      <span className="add-tb">THÊM VÀO GIỎ HÀNG</span>
                      <i className="fa fa-cart-plus icon-cart" aria-hidden="true" />
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

              <div className="line-white mt-4"></div>
            </div>
            </div>
            )}
          </Row>
          {/*----------------------------------------------- TITLE----------------------------------------------*/}
          <Row className="mt-3">
            <div className="column-green ml-3" />
            <div className="column-black mb-4 d-flex justify-content-center align-items-center">
              <label className="sp-gia-soc my-0">Giảm giá sốc</label>
            </div>
          </Row>
          {/*------------------------------------------------------ sp-------------------------------------*/}
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Nav variant="pills" className="d-flex justify-content-center">
              <Nav.Item className="mb-3 nav-item nav-item-ts">
                <Nav.Link eventKey="first" className="nav-link nav-link-gs mr-1">Từ Steam</Nav.Link>
              </Nav.Item>
              <Nav.Item className="mb-3 nav-item nav-item-gs">
                <Nav.Link eventKey="second" className="nav-link nav-link-gs">Từ EpicStore</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                {sock.map((product, index) => <Row key={index}>
                  <Col xs={12} sm={12} md={12} lg={12} xl={12} className="mb-3">
                    <div className="gia-soc-1 d-flex">
                      <Link to={`/product-detail/${product.id}`} className="link-gs"><img className="img-fluid" src={product.imgIndex} alt="" /></Link>
                      <div className="infor-1 d-flex justify-content-around ">
                        <div className="infor-sp-1-1-gs d-flex justify-content-between ">
                          <div className="name-sp-giasoc ml-3 d-flex align-items-center"><Link to={`/product-detail/${product.id}`} className="gs-name">
                            <span>{product.name}</span>
                          </Link>
                          </div>
                        </div>
                        <div className="gia-soc w-100 d-flex align-items-center ">
                          <div className="sale">
                            <label className="giam-gia-gs-2 d-flex justify-content-center align-items-center ">{product.discountBig}</label>
                          </div>
                          <div className="gia-tien-1 w-100">
                            <span className="gia-first d-flex flex-column my-0 w-75 my-1">{Intl.NumberFormat().format(product.priceBig1)}đ</span>
                            <span className="gia-second d-flex flex-column my-0 w-75">{Intl.NumberFormat().format(product.priceBig2)}đ</span>
                          </div>
                          <div className="button w-100">
                            <button className="gio-hang-giasoc px-4 btn btn-success" onClick={() => handleShow2(product)}>
                              <span className="add-giasoc">THÊM VÀO GIỎ HÀNG</span>
                              <i className="fa fa-cart-plus" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>)}
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                {sock2.map((product, index) => <Row key={index}>
                  <Col xs={12} sm={12} md={12} lg={12} xl={12} className="mb-3">
                    <div className="gia-soc-1 d-flex">
                      <Link to={`/product-detail/${product.id}`} className="link-gs"><img className="img-fluid" src={product.imgIndex} alt="" /></Link>
                      <div className="infor-1 d-flex justify-content-around ">
                        <div className="infor-sp-1-1-gs d-flex justify-content-between ">
                          <div className="name-sp-giasoc ml-3 d-flex align-items-center"><Link to={`/product-detail/${product.id}`} className="gs-name">
                            <span>{product.name}</span>
                          </Link>
                          </div>
                        </div>
                        <div className="gia-soc w-100 d-flex align-items-center ">
                          <div className="sale">
                            <label className="giam-gia-gs-2 d-flex justify-content-center align-items-center ">{product.discountBig}</label>
                          </div>
                          <div className="gia-tien-1 w-100">
                            <span className="gia-first d-flex flex-column my-0 w-75 my-1">{Intl.NumberFormat().format(product.priceBig1)}đ</span>
                            <span className="gia-second d-flex flex-column my-0 w-75">{Intl.NumberFormat().format(product.priceBig2)}đ</span>
                          </div>
                          <div className="button w-100">
                            <button className="gio-hang-giasoc px-4 btn btn-success" onClick={() => handleShow2(product)}>
                              <span className="add-giasoc">THÊM VÀO GIỎ HÀNG</span>
                              <i className="fa fa-cart-plus" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>)}
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Container>
        <Container fluid className="mt-5">
          <Row>
            <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 px-0">
              <img src="https://dragon295.github.io/project-web-sale-game/img/monster.jpg" className="img-fluid img-dk-1" alt="" />
            </div>
            <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 px-0">
              <img src="https://dragon295.github.io/project-web-sale-game/img/night-2.jpg" className="img-fluid img-dk-2" alt="" />
              <div className="text-dk d-flex justify-content-center align-items-center">
                <div className="text">
                  <span className="d-flex justify-content-center mb-2 ban">Bạn là người mới ?</span>
                  <span className="d-flex justify-content-center dk-ngay">Đăng kí ngay để nhận nhiều ưu đãi</span>
                </div>
                <div className="btn-dk d-flex justify-content-center">
                  <button type="button" className="btn btn-success btn-sign-up d-flex justify-content-center align-items-center w-35 h-30" onClick={handleShow}>Đăng kí</button>
                </div>
                <Modal show={show} onHide={handleClose} animation={true} aria-labelledby="contained-modal-title-center" centered className="modal-fix active-modal-header">
                  <div className="modal-header-icon">
                    <button onClick={handleClose} type="button" className="close close-hd">
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <Modal.Body>
                    <Tab.Container id="controlled-tab-example2" defaultActiveKey="second">
                      <Nav variant="pills" className="d-flex justify-content-center">
                        <Nav.Item className="nav-item w-50 mb-3">
                          <Nav.Link eventKey="first" className="nav-link link-sign d-flex justify-content-center">Đăng nhập</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="nav-item w-50">
                          <Nav.Link eventKey="second" className="nav-link link-sign d-flex justify-content-center">Đăng kí</Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <Tab.Content>
                        <Tab.Pane eventKey="first">
                          <Container>
                            <div className="text-1">
                              <span>Đăng nhập với ...</span>
                            </div>
                            <div className="icon-group d-flex justify-content-around my-2">
                              <Link to="https://store.steampowered.com/"><img className="icon-sign" src="https://dragon295.github.io/project-web-sale-game/img/steam-img.jpg" alt="" /></Link>
                              <Link to="https://www.facebook.com/"><img className="icon-sign" src="https://dragon295.github.io/project-web-sale-game/img/fb.png" alt="" /></Link>
                              <Link to="https://twitter.com/explore"><img className="icon-sign" src="https://dragon295.github.io/project-web-sale-game/img/twitter-icon.png" alt="" /></Link>
                              <Link to="https://www.twitch.tv/"><img className="icon-sign" src="https://dragon295.github.io/project-web-sale-game/img/twitch.png" alt="" /></Link>
                            </div>
                            <div className="or d-flex justify-content-center">
                              <div className="line-1 " />
                              <span className="or-1 px-2">Hoặc</span>
                              <div className="line-2 " />
                            </div>
                            <div className="text-2">
                              <span>Đăng nhập với Tài khoản</span>
                            </div>
                            <form onSubmit={handleSubmit(signIn)}>
                              <div className="sign-name d-flex flex-column mt-2">
                                <span className="text-name">Tài khoản</span>
                                <input type="text" name="SignInAccount" placeholder="Tên tài khoản" className="sign-input" ref={register({ required: true })} />
                                {errors.SignInAccount && <span className="error mt-1">Vui lòng điền Tài khoản</span>}
                              </div>
                              <div className="sign-pass d-flex flex-column mt-2">
                                <span className="text-pass">Mật khẩu</span>
                                <input type="password" name="SignInPassword" placeholder="Mật khẩu" className="sign-input" ref={register({ required: true })} />
                                {errors.SignInPassword && <span className="error mt-1">Vui lòng điền Mật khẩu</span>}
                              </div>
                              <div className="quen-pass mt-1">
                                <Link to="#"><span className="forgot">Quên mật khẩu ?</span></Link>
                              </div>
                              <div className="modal-footer px-0 pb-2">
                                <input type="submit" value="Đăng nhập" className="btn btn-success btn-sign-in" />
                              </div>
                            </form>
                            <div className="remember d-flex">
                              <input type="checkbox" name="ghi nhớ" className="check" />
                              <span className="text-remember ml-2">Ghi nhớ tôi</span>
                            </div>
                          </Container>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          <Container>
                            <div className="text-1">
                              <span>Đăng kí với ...</span>
                            </div>
                            <div className="icon-group d-flex justify-content-around my-2">
                              <Link to="#"><img className="icon-sign" src="https://dragon295.github.io/project-web-sale-game/img/steam-img.jpg" alt="" /></Link>
                              <Link to="#"><img className="icon-sign" src="https://dragon295.github.io/project-web-sale-game/img/fb.png" alt="" /></Link>
                              <Link to="#"><img className="icon-sign" src="https://dragon295.github.io/project-web-sale-game/img/twitter-icon.png" alt="" /></Link>
                              <Link to="#"><img className="icon-sign" src="https://dragon295.github.io/project-web-sale-game/img/twitch.png" alt="" /></Link>
                            </div>
                            <div className="or d-flex justify-content-center">
                              <div className="line-1 " />
                              <span className="or-1 px-2">Hoặc</span>
                              <div className="line-2 " />
                            </div>
                            <form onSubmit={handleSubmit(signUp)} >
                              <div className="text-2">
                                <span>Đăng kí với Tài khoản</span>
                              </div>
                              <div className="sign-name d-flex flex-column mt-2">
                                <span className="text-name">Tài khoản</span>
                                <input type="text" name="SignUpAccount" placeholder="Tên tài khoản" className="sign-input" ref={register({ required: true })} />
                                {errors.SignUpAccount && <span className="error mt-1">Vui lòng điền Tài khoản</span>}
                              </div>
                              <div className="sign-pass d-flex flex-column mt-2">
                                <span className="text-pass">Mật khẩu</span>
                                <input type="password" name="SignUpPassword" placeholder="Mật khẩu" className="sign-input" ref={register({ required: true })} />
                                {errors.SignUpPassword && <span className="error mt-1">Vui lòng điền Mật khẩu</span>}
                              </div>
                              <div className="sign-repass d-flex flex-column mt-2">
                                <span className="text-pass">Nhập lại mật khẩu</span>
                                <input type="password" name="RePassword" placeholder="Mật khẩu" className="sign-input" ref={register({
                                  required: true,
                                  validate: {
                                    matchesPreviousPassword: value => {
                                      const { SignUpPassword } = getValues();
                                      return value === SignUpPassword || "Nhập lại Mật khẩu chưa đúng hoặc chưa nhập";
                                    }
                                  }
                                })} />
                                {errors.RePassword && <span className="error mt-1">Nhập lại Mật khẩu chưa đúng hoặc chưa nhập</span>}
                              </div>
                              <div className="accept mt-2">
                                <input type="radio" name="Accept" className="radio-check my-2 py-2" />
                                <div className="pl-4">
                                  <span className="text-accept-1 mt-0 mr-1">Tôi chấp nhận các</span>
                                  <Link to="ownership" className="text-accept-2 mt-3">Quyền - Điều khoản , chính sách Cookie </Link>
                                  <span className="text-accept-3">và</span>
                                  <Link to="ownership" className="text-accept-4 ml-1">chính sách bảo mật</Link>
                                </div>
                              </div>
                              <div className="modal-footer px-0 pb-2">
                                <input type="submit" value="Đăng kí" className="btn btn-success btn-sign-in" action="/" />
                              </div>
                            </form>
                          </Container>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </Modal.Body>
                </Modal>
              </div>
            </div>
            <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 px-0">
              <img src="https://dragon295.github.io/project-web-sale-game/img/sea-thieves.jpg" className="img-fluid img-dk-3" alt="" />
            </div>
          </Row>
        </Container>
        <Container>
          {/*--------------------------------------- TITLE----------------------------------------------*/}
          <Row className="mt-5">
            <div className="column-green ml-3" />
            <div className="column-black mb-4 d-flex justify-content-center align-items-center">
              <label className="sp-ban-chay my-0">Sản phẩm bán chạy</label>
            </div>
          </Row>

          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Nav variant="pills" className="d-flex justify-content-center">
              <Nav.Item className="mb-3 nav-item nav-item-ts">
                <Nav.Link eventKey="first" className="nav-link nav-link-ts mr-1">TOP 1-4</Nav.Link>
              </Nav.Item>
              <Nav.Item className=" mb-3 nav-item nav-item-ts">
                <Nav.Link eventKey="second" className="nav-link nav-link-ts">TOP 5-8</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                {sell.map((product, index) => <Row key={index} >
                  <Col xs={12} sm={12} md={12} lg={12} xl={12} className="mb-3">
                    <div className="ban-chay-1 d-flex">
                      <div className="top-sp-1">{product.number}</div>
                      <div className="column-green-tb" />
                      <Link to={`/product-detail/${product.id}`} className="link-top-sp"><img className="img-fluid " src={product.imgIndex} alt="" /></Link>
                      <div className="infor-1 d-flex justify-content-around ">
                        <div className="infor-sp-1-1-bc d-flex justify-content-between ">
                          <div className="name-sp-banchay ml-3 d-flex align-items-center"><Link to={`/product-detail/${product.id}`} className="gs-name">
                            <span>{product.name}</span>
                          </Link></div>
                        </div>
                        <div className="gia-soc w-100 d-flex align-items-center ">
                          <div className="sale-bc">
                            <label className="giam-gia-bc-2 d-flex justify-content-center align-items-center ">{product.discountBig}</label>
                          </div>
                          <div className="gia-tien-1 w-100">
                            <span className="gia-first d-flex flex-column my-0 w-75 my-1">{Intl.NumberFormat().format(product.priceBig1)}đ</span>
                            <span className="gia-second d-flex flex-column my-0 w-75">{Intl.NumberFormat().format(product.priceBig2)}đ</span>
                          </div>
                          <div className="button w-100">
                            <button className="gio-hang-banchay hl px-4 btn btn-success" onClick={() => handleShow2(product)}>
                              <span className="add-banchay">THÊM VÀO GIỎ HÀNG</span>
                              <i className="fa fa-cart-plus" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>)}
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                {sell2.map((product, index) => <Row key={index}>
                  <Col xs={12} sm={12} md={12} lg={12} xl={12} className="mb-3">
                    <div className="ban-chay-1 d-flex">
                      <div className="top-sp-1">{product.number}</div>
                      <div className="column-green-tb" />
                      <Link to={`/product-detail/${product.id}`} className="link-top-sp"><img className="img-fluid " src={product.imgIndex} alt="" /></Link>
                      <div className="infor-1 d-flex justify-content-around ">
                        <div className="infor-sp-1-1-bc d-flex justify-content-between ">
                          <div className="name-sp-banchay ml-3 d-flex align-items-center"><Link to={`/product-detail/${product.id}`} className="gs-name">
                            <span>{product.name}</span>
                          </Link></div>
                        </div>
                        <div className="gia-soc w-100 d-flex align-items-center ">
                          <div className="sale-bc">
                            <label className="giam-gia-bc-2 d-flex justify-content-center align-items-center ">{product.discountBig}</label>
                          </div>
                          <div className="gia-tien-1 w-100">
                            <span className="gia-first d-flex flex-column my-0 w-75 my-1">{Intl.NumberFormat().format(product.priceBig1)}đ</span>
                            <span className="gia-second d-flex flex-column my-0 w-75">{Intl.NumberFormat().format(product.priceBig2)}đ</span>
                          </div>
                          <div className="button w-100">
                            <button className="gio-hang-banchay hl px-4 btn btn-success" onClick={() => handleShow2(product)}>
                              <span className="add-banchay">THÊM VÀO GIỎ HÀNG</span>
                              <i className="fa fa-cart-plus" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>)}
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>

          <Row className="mt-5">
            <div className="column-green ml-3" />
            <div className="column-black mb-4 d-flex justify-content-center align-items-center">
              <label className="cam-ket my-0">Cam kết</label>
            </div>
          </Row>
          <Row>
            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
              <div className="cam-ket-1 mb-4 d-flex justify-content-between align-items-center">
                <span className=" text-ck-1 ml-3">Bảo hành nhanh chóng, thuận tiện cho khách hàng</span>
                <img className="img-fluid img-1 float-right" src="https://dragon295.github.io/project-web-sale-game/img/man.jpg" alt="" />
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
              <div className="cam-ket-2 mb-4 d-flex justify-content-between align-items-center">
                <span className=" text-ck-2 ml-3">Hỗ trợ nhanh chóng, nhiệt tình cho khách hàng</span>
                <img className="img-fluid img-2 float-right" src="https://dragon295.github.io/project-web-sale-game/img/bao-hanh.jpg" alt="" />
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
              <div className="cam-ket-3 mb-4 d-flex justify-content-between align-items-center">
                <span className=" text-ck-3 ml-3">Giao hàng siêu tốc cho quý khách hàng</span>
                <img className="img-fluid img-3 float-right" src="https://dragon295.github.io/project-web-sale-game/img/fast-delivery.jpg" alt="" />
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
              <div className="cam-ket-4 mb-4 d-flex justify-content-between align-items-center">
                <span className=" text-ck-4 ml-3">Uy tín theo đánh giá của cộng đồng</span>
                <img className="img-fluid img-4 float-right" src="https://dragon295.github.io/project-web-sale-game/img/danh-gia.jpg" alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />

      <Modal className="modal d-flex justify-content-center" show={show2} animation={true}>
        <div className="modal-content-alert mr-3">
          <div className="d-flex justify-content-center my-3">
            <img src="https://dragon295.github.io/project-web-sale-game/img/check.png" className="img-tick" alt="" />
          </div>
          <p className="text-center">Sản phẩm đã được thêm vào Giỏ hàng</p>
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
export default Index;
