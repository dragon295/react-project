import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../component/Header'
import Footer from '../../component/Footer'
import './Article.css'
import { Container, Row, Col } from 'react-bootstrap';
import ScrollToTop from "react-scroll-up";
function Article() {
    document.title = "Bài viết";
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <div>
            <Header />
            <section>
                <Container>
                    <Row className="d-flex justify-content-between mt-5">
                        <div className="title-web d-flex">
                            <div className="column-green" />
                            <div className="column-black float-left mb-4 d-flex justify-content-center align-items-center">
                                <label className="bv my-0">Bài viết</label>
                            </div>
                        </div>
                        <div className="input-group input-group-tim-kiem mb-3">
                            <input type="text" className="form-control input-search-bv" placeholder="Tìm kiếm bài viết" aria-label="Tìm kiếm bài viết" aria-describedby="basic-addon2" />
                            <div className="input-group-append">
                                <form action="search-article">
                                    <button className="btn btn-success btn-tim-kiem" type="submit">
                                        <i className="fa fa-search" aria-hidden="true" />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </Row>
                    {/*----------------------------------------------- CONTENT------------------------------------------*/}
                    <Row className="result-search mt-3">
                        <Col xs={12} sm={12} md={12} lg={12} xl={12} className="result-search-1 pl-0">
                            <div className="text-tim-kiem mb-3">
                                <span className="text-tim-kiem mr-1">BÀI VIẾT MỚI NHẤT</span>
                            </div>
                            <div className="line-green mb-4" />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={12} md={6} lg={6} xl={6} className="banner-big  px-0">
                            <Link to="/article-detail1" className="d-flex justify-content-center"><img src="https://dragon295.github.io/project-web-sale-game/img/death-stranding-1.jpg" className="img-fluid " alt="" />
                                <div className="infor-bai-viet-big-banner">
                                    <div><span className="text-banner-big">Những điểm thú vị trong cốt truyện Death Stranding</span></div>
                                    <div className="mt-1">
                                        <i className="fa fa-id-card" aria-hidden="true" />
                                        <span className="date-new ml-1 pb-2">Lindarang</span>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                        <Col xs={12} sm={12} md={3} lg={3} xl={3} className="px-0">
                            <div className="banner-small banner-small-1 px-0">
                                <Link to="/article-detail2" className="d-flex justify-content-center"><img src="https://dragon295.github.io/project-web-sale-game/img/desperados.png" alt="" className="img-fluid img-small" />
                                    <div className="infor-bai-viet-small-banner">
                                        <div className="px-3"><span className="text-banner-small ">Đánh giá Desperados 3: Thứ “mai thúy” của thể loại chiến thuật</span></div>
                                        <div className="mt-1">
                                            <i className="fa fa-id-card" aria-hidden="true" />
                                            <span className="date-new ml-1 pb-2">Canna</span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <Link to="article-detail" className="d-flex justify-content-center"></Link>
                            <div className="banner-small banner-small-1 px-0"><Link to="article-detail" className="d-flex justify-content-center"></Link>
                                <Link to="/article-detail3" className="d-flex justify-content-center"><img src="https://dragon295.github.io/project-web-sale-game/img/ori.jpg" alt="" className="img-fluid img-small" />
                                    <div className="infor-bai-viet-small-banner">
                                        <div className="px-3"><span className="text-banner-small">Ori and the Will of the Wisps được đánh giá như thế nào?</span></div>
                                        <div className="mt-1">
                                            <i className="fa fa-id-card" aria-hidden="true" />
                                            <span className="date-new ml-1 pb-2">BLYAT</span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </Col>
                        <div className="column-green-small" />
                        <Col xs={12} sm={12} md={3} lg={3} xl={3} className="px-0">
                            <div className="banner-small px-0">
                                <Link to="/article-detail4" className="d-flex justify-content-center"><img src="https://dragon295.github.io/project-web-sale-game/img/Gathering_Storm-2.jpg" alt="" className="img-fluid img-small" />
                                    <div className="infor-bai-viet-small-banner">
                                        <div className="px-3"><span className="text-banner-small">Gathering Storm VI lối chơi có gì đặc biệt so với bản trước ?</span></div>
                                        <div className="mt-1">
                                            <i className="fa fa-id-card" aria-hidden="true" />
                                            <span className="date-new ml-1 pb-2">Coyote</span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="banner-small px-0">
                                <Link to="/article-detail5" className="d-flex justify-content-center"><img src="https://dragon295.github.io/project-web-sale-game/img/ff7-4.jpg" alt="" className="img-fluid img-small" />
                                    <div className="infor-bai-viet-small-banner">
                                        <div className="px-3"><span className="text-banner-small">Final Fantasy 7 REMAKE liệu cốt truyện có bị thay đổi ?</span></div>
                                        <div className="mt-1">
                                            <i className="fa fa-id-card" aria-hidden="true" />
                                            <span className="date-new ml-1 pb-2">Choke</span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </Col>
                    </Row>
                    {/*----------------------------------------------- CONTENT------------------------------------------*/}
                    <Row className="result-search mt-5">
                        <Col xs={12} sm={12} md={12} lg={12} xl={12} className="result-search-1 pl-0 ">
                            <div className="text-tim-kiem mb-3">
                                <span className="text-tim-kiem mr-1">BÀI VIẾT CŨ HƠN</span>
                            </div>
                            <div className="line-green mb-4" />
                        </Col>
                    </Row>
                    <Row className="d-flex">
                        <Col xs={12} sm={12} md={8} lg={8} xl={8} className="h-25 d-flex flex-column pl-0 bvch">
                            <div>
                                <Link to="/article-detail6" className="d-flex link-bv">
                                    <img src="https://dragon295.github.io/project-web-sale-game/img/detroit.jpg" alt="" className="img-fluid img-bai-viet-1" />
                                    <div className="column-green-2" />
                                    <div className="review-noi-dung px-3 py-3">
                                        <span className="title-review">Những điểm thú vị trong Detroit Become Human </span>
                                        <div className="article mt-2">
                                            <i className="fa fa-calendar" aria-hidden="true" />
                                            <span className="date ml-1 mr-3">25/6/2020</span>
                                            <i className="fa fa-id-card" aria-hidden="true" />
                                            <span className="date ml-1 pb-2">Lindarang</span>
                                        </div>
                                        <div className=" mt-2">
                                            <p className="some-text">Cốt truyện Detroit: Become Human có thể là buồn tới nẫu ruột, hoặc có kết thúc tuyệt vời khi tất cả mọi người đều sống sót và hạnh phúc suốt đời ...</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="mt-4">
                                <Link to="/article-detail7" className="d-flex link-bv">
                                    <img src="https://dragon295.github.io/project-web-sale-game/img/death-stranding-2.jpg" alt="" className="img-fluid img-bai-viet-1" />
                                    <div className="column-green-2" />
                                    <div className="review-noi-dung px-3 py-3">
                                        <span className="title-review">Death Stranding - Cách thức hoạt động của chế độ nhiều người chơi</span>
                                        <div className="article mt-2 ">
                                            <i className="fa fa-calendar" aria-hidden="true" />
                                            <span className="date ml-1 mr-3">23/6/2020</span>
                                            <i className="fa fa-id-card" aria-hidden="true" />
                                            <span className="date ml-1 pb-2">RV-game</span>
                                        </div>
                                        <div className="mt-2">
                                            <p className="some-text">Ba lô của bạn đã được đeo, bạn đang lê bước trên địa hình đồi núi, bạn đã không thấy linh hồn trong nhiều tháng. Thế giới của DeathStranding...</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="mt-4">
                                <Link to="/article-detail8" className="d-flex link-bv">
                                    <img src="https://dragon295.github.io/project-web-sale-game/img/far-cry.jpg" alt="" className="img-fluid img-bai-viet-1 " />
                                    <div className="column-green-2" />
                                    <div className="review-noi-dung px-3 py-3">
                                        <span className="title-review">Đánh giá Far cry 5</span>
                                        <div className="article mt-2 ">
                                            <i className="fa fa-calendar" aria-hidden="true" />
                                            <span className="date ml-1 mr-3">22/6/2020</span>
                                            <i className="fa fa-id-card" aria-hidden="true" />
                                            <span className="date ml-1 pb-2">PT</span>
                                        </div>
                                        <div className="mt-2">
                                            <p className="some-text">Far Cry 5 là một game bắn súng góc nhìn thứ nhất được phát triển bởi Ubisoft Montreal và Ubisoft Toronto và Ubisoft phát hành vào năm 2018...</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="mt-4">
                                <Link to="/article-detail9" className="d-flex link-bv">
                                    <img src="https://dragon295.github.io/project-web-sale-game/img/death-stranding-7.jpg" alt="" className="img-fluid img-bai-viet-1" />
                                    <div className="column-green-2" />
                                    <div className="review-noi-dung py-3 px-3">
                                        <span className="title-review">Tạo hình các nhân vật trong Death Stranding như thế nào ?</span>
                                        <div className="article mt-2 ">
                                            <i className="fa fa-calendar" aria-hidden="true" />
                                            <span className="date ml-1 mr-3">20/6/2020</span>
                                            <i className="fa fa-id-card" aria-hidden="true" />
                                            <span className="date ml-1 pb-2">Sam</span>
                                        </div>
                                        <div className="some-text mt-2">
                                            <p className="some-text">Bên cạnh cốt truyện, một điểm nhấn khác của Death Stranding chính là những nhân vật nổi tiếng xuất hiện trong game...</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="d-flex justify-content-center pt-5 pb-3">
                                <nav aria-label="Page navigation example">
                                    <ul className="pagination bg-dark">
                                        <li className="page-item">
                                            <button className="page-link page-bg" aria-label="Previous" onClick={() => { window.location.href = "/article" }}>
                                                <i className="fas fa-arrow-left" style={{ fontSize: 14 }} />
                                                <span className="sr-only">Previous</span>
                                            </button>
                                        </li>
                                        <li className="page-item active"><button className="page-link page-bg">1</button></li>
                                        <li className="page-item"><button className="page-link page-bg" onClick={() => { window.location.href = "/article" }}>2</button></li>
                                        <li className="page-item"><button className="page-link page-bg" onClick={() => { window.location.href = "/article" }}>3</button></li>
                                        <li className="page-item">
                                            <div className="page-link page-another">...</div>
                                        </li>
                                        <li className="page-item">
                                            <button className="page-link page-bg" to="#" aria-label="Next" onClick={() => { window.location.href = "/article" }}>
                                                <i className="fas fa-arrow-right" style={{ fontSize: 14 }} />
                                                <span className="sr-only">Next</span>
                                            </button>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={4} lg={4} xl={4} className="float-right group-img-ketnoi h-100">
                            <div className="mb-3">
                                <ul className="list-group">
                                    <li className="list-group-item d-flex tag-head">
                                        <div className="tag-column mr-2" />Tag nổi bật
                                    </li>
                                    <li className="list-group-item">
                                        <Link to="tagdt"><button className="px-2 py-1 btn-tag-0">Death-Stranding</button></Link>
                                        <Link to="tagff7"><button className="px-2 py-1 btn-tag-1 ml-2">FF7</button></Link>
                                        <Link to="tagdpd"><button className="px-2 py-1 btn-tag-2 ml-2">Desperados</button></Link>
                                    </li>
                                    <li className="list-group-item pt-2">
                                        <Link to="tagfc"><button className="px-2 py-1 btn-tag-3">FarCry</button></Link>
                                        <Link to="tagsg"><button className="px-2 py-1 btn-tag-4 ml-2">Gathering</button></Link>
                                        <Link to="tagdbh"><button className="px-2 py-1 btn-tag-5 ml-2">Detroit</button></Link>
                                        <Link to="tagori"><button className="px-2 py-1 btn-tag-6 ml-2">Ori</button></Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="img-fb">
                                <Link to="https://www.facebook.com/" className="link-bv">
                                    <img src="https://dragon295.github.io/project-web-sale-game/img/walpaper-fb.jpg" alt="" className="img-fluid " />
                                    <div className="row-green" />
                                    <span className="text-ketnoi-fb">Kết nối với chúng tôi trên FaceBook để nhận ưu đãi từ shop</span>
                                </Link>
                            </div>
                            <div className="img-yt">
                                <Link to="https://www.youtube.com/" className="link-bv">
                                    <img src="https://dragon295.github.io/project-web-sale-game/img/youtube-img.png" alt="" className="img-fluid " />
                                    <div className="row-green" />
                                    <span className="text-ketnoi-yt">Theo dõi chúng tôi trên Youtube để xem những giải đấu độc quyền</span>
                                </Link>
                            </div>
                            <div className="img-twitter">
                                <Link to="https://twitter.com/" className="link-bv">
                                    <img src="https://dragon295.github.io/project-web-sale-game/img/twitter.jpg" alt="" className="img-fluid" />
                                    <div className="row-green" />
                                    <span className="text-ketnoi-twitter">Theo dõi chúng tôi trên Twitter nhận thông tin về game sắp ra mắt </span>
                                </Link>
                            </div>
                            <div className="img-twitch">
                                <Link to="https://www.twitch.tv/" className="link-bv">
                                    <img src="https://dragon295.github.io/project-web-sale-game/img/twitch-2.jpg" alt="" className="img-fluid" />
                                    <div className="row-green" />
                                    <span className="text-ketnoi-twitch">Kết nối với chúng tôi trên Twitch để theo dõi những buổi livestream game mới nhất </span>
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer />

            <ScrollToTop showUnder={100} style={{ bottom: '110px' }} duration={1200}>
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
export default Article;

