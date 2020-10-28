import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom'
import Fb_footer from '../img/fb.png'
import Yt_footer from '../img/youtube-icon.png'
import Twitter_footer from '../img/twitter-icon.png'
import Twitch_footer from '../img/twitch.png'
import {Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
function Footer() {
  return (
    <footer>
      <Container fluid className="mt-5">
        <Row>
          <Col xs={12} sm={12} md={12} lg={4} xl={4} className="px-0 infor-1">
            <Navbar expand="lg" className="navbar d-flex flex-wrap navbar-footer">
              <Navbar.Brand className="navbar-brand-footer">Thông tin cửa hàng</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav">
                <div type="button" className="navbar-toggler navbar-toggler-footer" >
                  <i className="fa fa-caret-down" aria-hidden="true" />
                </div>
              </Navbar.Toggle>
              <Navbar.Collapse id="basic-navbar-nav" className="navbar-collapse-footer">
                <Nav className="fix-2">
                  <div className="nav-item nav-item-footer">
                    <Link to="ownership" className="nav-link nav-link-footer">Quyền sở hữu</Link>
                  </div>
                  <div className="nav-item nav-item-footer">
                    <Link to="ownership" className="nav-link nav-link-footer">Chính sách bảo mật</Link>
                  </div>
                  <div className="nav-item nav-item-footer">
                    <Link to="ownership" className="nav-link nav-link-footer">Chính sách cookie</Link>
                  </div>
                  <div className="nav-item nav-item-footer">
                    <Link to="ownership" className="nav-link nav-link-footer">Chính sách hoàn tiền</Link>
                  </div>
                  <div className="nav-item nav-item-footer">
                    <Navbar.Text className="nav-text py-2">Giờ mở cửa: từ 8h-22h từ thứ 2 đến thứ 6</Navbar.Text>
                  </div>
                  <div className="nav-item nav-item-footer">
                    <Navbar.Text className="nav-text py-2">Địa chỉ: 121/90 Kim Ngưu, Hai Bà Trưng, Hà Nội</Navbar.Text>
                  </div>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>
          <Col xs={12} sm={12} md={12} lg={4} xl={4} className="px-0 infor-2">
            <Navbar expand="lg" className="d-flex flex-wrap column-1 navbar-footer">
              <Navbar.Brand className="navbar-brand-footer">Liên hệ - Hỗ trợ</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav">
                <div className="navbar-toggler navbar-toggler-footer" type="button">
                  <i className="fa fa-caret-down" aria-hidden="true" />
                </div>
              </Navbar.Toggle>
              <Navbar.Collapse id="basic-navbar-nav" className="navbar-collapse-footer collapse-column-1" >
                <Nav className="fix-2">
                  <div className="nav-item nav-item-footer d-flex justify-content-center">
                    <Navbar.Text className="nav-text py-2">Số điện thoại CSKH: 19000091</Navbar.Text>
                  </div>
                  <div className="nav-item nav-item-footer d-flex justify-content-center">
                    <Navbar.Text className="nav-text py-2">Email: luongduongduc4@gmail.com</Navbar.Text>
                  </div>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            <Navbar expand="lg" className="d-flex flex-wrap column-2 navbar-footer ">
              <Navbar.Brand className="navbar-brand-footer ketnoi">Kết nối với chúng tôi</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav">
                <div className="navbar-toggler navbar-toggler-footer" type="button">
                  <i className="fa fa-caret-down" aria-hidden="true" />
                </div>
              </Navbar.Toggle>
              <Navbar.Collapse id="basic-navbar-nav" className="navbar-collapse-footer collapse-column-2" >
                <Nav className="navbar-nav-ketnoi">
                  <div className="nav-item nav-item-footer">
                    <Link className="nav-icon" to="/"><img className="icon mx-3" src={Fb_footer} alt="" /></Link>
                  </div>
                  <div className="nav-item nav-item-footer">
                    <Link className="nav-icon" to="/"><img className="icon mx-3" src={Yt_footer} alt="" /></Link>
                  </div>
                  <div className="nav-item nav-item-footer">
                    <Link className="nav-icon" to="/"><img className="icon mx-3" src={Twitter_footer} alt="" /></Link>
                  </div>
                  <div className="nav-item nav-item-footer">
                    <Link className="nav-icon" to="/"><img className="icon mx-3" src={Twitch_footer} alt="" /></Link>
                  </div>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>
          <Col xs={12} sm={12} md={12} lg={4} xl={4} className="px-0 ">
            <Navbar expand="lg" className="d-flex flex-wrap column-3 navbar-footer">
            <Navbar.Brand className="navbar-brand-footer nhan-tin">Đăng kí nhận tin</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
              <div className="navbar-toggler navbar-toggler-footer" type="button">
                <i className="fa fa-caret-down" aria-hidden="true" />
              </div>
              </Navbar.Toggle>
              <Navbar.Collapse id="basic-navbar-nav" className="navbar-collapse-footer collapse-column-3">
                <Nav className="navbar-nav-nhantin">
                  <div className="input-group input-footer mb-3">
                    <input type="email" className="form-control input-send" placeholder="Email của bạn" aria-label="Email của bạn" aria-describedby="basic-addon2" />
                    <div className="input-group-append">
                      <button className="btn btn-success btn-send d-flex justify-content-center align-items-center" id="btn-send-email" type="submit">Gửi</button>
                    </div>
                  </div>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            <Navbar expand="lg" className="d-flex flex-wrap column-4 navbar-footer">
            <Navbar.Brand className="navbar-brand-footer danh-gia mr-0">G.O.S shop được đánh giá</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
              <div className="navbar-toggler navbar-toggler-footer" type="button">
                <i className="fa fa-caret-down" aria-hidden="true" />
              </div>
              </Navbar.Toggle>
              <Navbar.Collapse id="basic-navbar-nav" className="navbar-collapse-footer collapse-column-4" >
                <Nav className="navbar-nav-danhgia ">
                  <div className="nav-item nav-item-footer ">
                    <i className="fa fa-star mx-1" aria-hidden="true" />
                  </div>
                  <div className="nav-item nav-item-footer">
                    <i className="fa fa-star mx-1" aria-hidden="true" />
                  </div>
                  <div className="nav-item nav-item-footer">
                    <i className="fa fa-star mx-1" aria-hidden="true" />
                  </div>
                  <div className="nav-item nav-item-footer">
                    <i className="fa fa-star mx-1" aria-hidden="true" />
                  </div>
                  <div className="nav-item nav-item-footer">
                    <i className="fa fa-star mx-1" aria-hidden="true" />
                  </div>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} className="so-huu d-flex justify-content-center align-items-center">
            <span>Trang Web thuộc quyền sở hữu của công ty TheSad</span>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
export default Footer;