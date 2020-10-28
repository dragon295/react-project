import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../img/dragon-fix.png'
import Search_icon from '../img/search-icon.svg'
import './Header.css'
import { Container, Row, Col, Navbar, Nav, Modal, Tab } from 'react-bootstrap';
import { useForm } from "react-hook-form";
// import { useForm } from "react-hook-form";
function Header() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

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
  return (
    <header>
      <Container>
        <Row>
          {/*----------------------------------------------LOGO-------------------------------------------------*/}
          <Col xs={4} sm={6} md={6} lg={2} xl={2} className="d-flex justify-content-center align-items-center">
            <Link to="/">
              <img className="img-fluid logo" src={Banner} alt="" />
            </Link>
          </Col>
          {/*-----------------------------------------NAVBAR-INPUT----------------------------------------------*/}
          <Col xs={12} sm={12} md={12} lg={7} xl={7} className="input-navbar pl-4">
            <Navbar expand="lg" className="navbar navbar-dark dh">
              <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler button-dropdown" />
              <Navbar.Collapse id="basic-navbar-nav" className="collapse-navbar fix">
                <Nav className="nav-navbar">
                  <div className="nav-item item-nav">
                    <Link to="/" className="nav-link link-nav hvr-underline-from-center px-0">Sản phẩm</Link>
                  </div>
                  <div className="nav-item item-nav">
                    <Link to="article" className="nav-link link-nav hvr-underline-from-center px-0">Bài viết</Link>
                  </div>
                  <div className="nav-item item-nav">
                    <Link to="pay-tutorial" className="nav-link link-nav hvr-underline-from-center px-0 ">Hướng dẫn thanh toán</Link>
                  </div>
                  <div className="nav-item item-nav">
                    <Link to="ownership" className="nav-link link-nav hvr-underline-from-center px-0">Quyền sở hữu-Điều khoản</Link>
                  </div>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            <div className="input-group input-header mb-3 mx-5 my-4">
              <input type="text" className="form-control input-search" placeholder="Tìm kiếm sản phẩm" aria-label="Tìm kiếm sản phẩm" aria-describedby="basic-addon2" />
              <div className="input-group-append">
                <form action="/search-product"><button className="btn btn-success btn-search d-flex justify-content-center align-items-center" type="submit">
                  <img src={Search_icon} className="search-icon" alt="" />
                </button></form>
              </div>
            </div>
          </Col>
          {/*-----------------------------------------CÁC-BUTTON------------------------------------------------*/}
          <Col xs={8} sm={6} md={6} lg={3} xl={3} className="some-button d-flex justify-content-center flex-wrap">
            <button variant="success" type="button" className="btn btn-success btn-dnhap d-flex justify-content-center align-items-center mr-4 " onClick={handleShow} >
              Đăng nhập
            </button>
            <Modal show={show} onHide={handleClose} animation={true} aria-labelledby="contained-modal-title-center" centered className="modal-fix active-modal-header">
              <div className="modal-header-icon">
                <button onClick={handleClose} type="button" className="close close-hd">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <Modal.Body>
                <Tab.Container id="controlled-tab-example" defaultActiveKey="first">
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
                            <input type="text" name="SignInAccount" placeholder="Tên tài khoản" className="sign-input" autoComplete="off" ref={register({ required: true })} />
                            {errors.SignInAccount && <span className="error mt-1">Vui lòng điền Tài khoản</span>}
                          </div>
                          <div className="sign-pass d-flex flex-column mt-2">
                            <span className="text-pass">Mật khẩu</span>
                            <input type="password" name="SignInPassword" placeholder="Mật khẩu" className="sign-input" autoComplete="off" ref={register({ required: true })} />
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
                            <input type="text" name="SignUpAccount" placeholder="Tên tài khoản" className="sign-input" autoComplete="off" ref={register({ required: true })} />
                            {errors.SignUpAccount && <span className="error mt-1">Vui lòng điền Tài khoản</span>}
                          </div>
                          <div className="sign-pass d-flex flex-column mt-2">
                            <span className="text-pass">Mật khẩu</span>
                            <input type="password" name="SignUpPassword" placeholder="Mật khẩu" className="sign-input" autoComplete="off" ref={register({ required: true })} />
                            {errors.SignUpPassword && <span className="error mt-1">Vui lòng điền Mật khẩu</span>}
                          </div>
                          <div className="sign-repass d-flex flex-column mt-2">
                            <span className="text-pass">Nhập lại mật khẩu</span>
                            <input type="password" name="RePassword" placeholder="Mật khẩu" className="sign-input" autoComplete="off"  ref={register({
                              required: true,
                              validate: {
                                matchesPreviousPassword: value => {
                                  const { SignUpPassword } = getValues();
                                  return value === SignUpPassword || "Nhập lại Mật khẩu chưa đúng hoặc chưa nhập";
                                }
                              }
                            })}/>
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
            <button type="button" variant="success" className="btn bbtntn-success btn-dki d-flex justify-content-center align-items-center w-35 h-30" onClick={handleShow2}>Đăng kí</button>
            <Modal show={show2} onHide={handleClose2} animation={true} aria-labelledby="contained-modal-title-center" centered className="modal-fix active-modal-header">
              <div className="modal-header-icon">
                <button onClick={handleClose2} type="button" className="close close-hd">
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
                            <input type="password" name="RePassword" placeholder="Mật khẩu" className="sign-input"  ref={register({
                              required: true,
                              validate: {
                                matchesPreviousPassword: value => {
                                  const { SignUpPassword } = getValues();
                                  return value === SignUpPassword || "Nhập lại Mật khẩu chưa đúng hoặc chưa nhập";
                                }
                              }
                            })}/>
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
            <div className="w-100 box-gh-yt">
              <Link to="/cart" className=" box-hv hvr-underline-from-center"><i className="fas fa-shopping-cart" alt="" />
                <div className="circle-count-1">
                  <span>!</span>
                </div>
              </Link>
              <Link to="/favourite" className="heart-header hvr-underline-from-center">
                <i className="fas fa-heart" alt="" />
                <div className="circle-count-2">
                  <span>!</span>
                </div>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  )
}
export default Header;
