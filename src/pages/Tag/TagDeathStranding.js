import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../component/Header.js'
import Footer from '../../component/Footer.js'
import { Container, Row, Col } from 'react-bootstrap';
import ScrollToTop from "react-scroll-up";
function TagDeathStranding() {
    document.title = "Tag - DeathStranding";
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <Header />
            <section>
                <Container className="mt-5">
                    <Row className="d-flex justify-content-between">
                        <div className="title-web d-flex">
                            <div className="column-green " />
                            <div className="column-black float-left mb-4 d-flex justify-content-center align-items-center">
                                <label className="tkbv my-0">Tag</label>
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
                    <Row className="result-search">
                        <Col xs={12} sm={12} md={12} lg={12} xl={12} className="result-search-1">
                            <div className="text-tim-kiem mb-3">
                                <span className="text-tim-kiem mr-1">TAG: </span>
                                <span className="text-tim-kiem-1">DeathStranding</span>
                            </div>
                            <div className="line-green mb-3" />
                            <div className="mb-3">
                                <span className="text-tim-kiem-2">4 kết quả</span>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={12} md={8} lg={8} xl={8} className="d-flex flex-column bai-bao ">
                            <div className="box-all">
                                <Link to="/article-detail1" className="d-flex link-bv">
                                    <img src="https://dragon295.github.io/project-web-sale-game/img/death-stranding-1.jpg" alt="" className="img-fluid img-bai-viet-1" />
                                    <div className="column-green-2" />
                                    <div className="review-noi-dung px-3 py-3">
                                        <span className="title-review">Những điểm thú vị trong cốt truyện Death Stranding </span>
                                        <div className="article mt-2 ">
                                            <i className="fa fa-calendar" aria-hidden="true" />
                                            <span className="date ml-1 mr-3">26/6/2020</span>
                                            <i className="fa fa-id-card" aria-hidden="true" />
                                            <span className="date ml-1 pb-2">Lindarang</span>
                                        </div>
                                        <div className=" mt-2">
                                            <p className="some-text">Như truyền thống vốn có từ những game do Kojima sáng tác, cốt truyện Death Stranding là một thứ vô cùng rối rắm, phiền phức và ...</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>

                            <div className="box-all mt-4">
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
                                        <div className=" mt-2">
                                            <p className="some-text">Ba lô của bạn đã được đeo, bạn đang lê bước trên địa hình đồi núi, bạn đã không thấy linh hồn trong nhiều tháng. Thế giới của DeathStranding...</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>

                            <div className="box-all mt-4">
                                <Link to="/article-detail10" className="d-flex link-bv">
                                    <img src="https://dragon295.github.io/project-web-sale-game/img/death-stranding-6.jpg" alt="" className="img-fluid img-bai-viet-1" />
                                    <div className="column-green-2" />
                                    <div className="review-noi-dung px-3 py-3">
                                        <span className="title-review">Bí ẩn thú vị trong nhiệm vụ của Death Stranding</span>
                                        <div className="article mt-2 ">
                                            <i className="fa fa-calendar" aria-hidden="true" />
                                            <span className="date ml-1 mr-3">22/6/2020</span>
                                            <i className="fa fa-id-card" aria-hidden="true" />
                                            <span className="date ml-1 pb-2">Preside</span>
                                        </div>
                                        <div className=" mt-2">
                                            <p className="some-text">Thứ nguy hiểm nhất mà Chiral mang lại trong cốt truyện DeathStranding đó chính là Time Fall – những con mưa thời gian có khả năng điều...</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>


                            <div className="box-all mt-4">
                                <Link to="/article-detail9" className="d-flex link-bv">
                                    <img src="https://dragon295.github.io/project-web-sale-game/img/death-stranding-7.jpg" alt="" className="img-fluid img-bai-viet-1" />
                                    <div className="column-green-2" />
                                    <div className="review-noi-dung px-3 py-3">
                                        <span className="title-review">Tạo hình các nhân vật trong Death Stranding như thế nào ? </span>
                                        <div className="article mt-2 ">
                                            <i className="fa fa-calendar" aria-hidden="true" />
                                            <span className="date ml-1 mr-3">20/6/2020</span>
                                            <i className="fa fa-id-card" aria-hidden="true" />
                                            <span className="date ml-1 pb-2">Sam</span>
                                        </div>
                                        <div className=" mt-2">
                                            <p className="some-text">Bên cạnh cốt truyện, một điểm nhấn khác của Death Stranding chính là những nhân vật nổi tiếng xuất hiện trong game...</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>

                            <div className="d-flex justify-content-center pt-5 pb-3">
                                <nav aria-label="Page navigation example">
                                    <ul className="pagination bg-dark">
                                        <li className="page-item">
                                            <button className="page-link page-bg" aria-label="Previous" onClick={() => { window.location.href = "/tagdt" }}>
                                                <i className="fas fa-arrow-left" style={{ fontSize: 14 }} />
                                                <span className="sr-only">Previous</span>
                                            </button>
                                        </li>
                                        <li className="page-item active"><button className="page-link page-bg">1</button></li>
                                        <li className="page-item"><button className="page-link page-bg" onClick={() => { window.location.href = "/tagdt" }}>2</button></li>
                                        <li className="page-item"><button className="page-link page-bg" onClick={() => { window.location.href = "/tagdt" }}>3</button></li>
                                        <li className="page-item">
                                            <div className="page-link page-another">...</div>
                                        </li>
                                        <li className="page-item">
                                            <button className="page-link page-bg" to="#" aria-label="Next" onClick={() => { window.location.href = "/tagdt" }}>
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
                                        <div className="tag-column mr-2" />Bài viết mới nhất
                                    </li>
                                    <li className="list-group-item news d-flex">
                                        <div className="tag-circle mr-2" /><Link to="/article-detail1" className="link-news">Những điểm thú vị trong cốt truyện Death Stranding</Link>
                                    </li>
                                    <li className="list-group-item news d-flex">
                                        <div className="tag-circle mr-2" /><Link to="/article-detail2" className="link-news">Đánh giá Desperados 3: Thứ “mai thúy” của thể loại chiến thuật</Link>
                                    </li>
                                    <li className="list-group-item news d-flex">
                                        <div className="tag-circle mr-2" /><Link to="/article-detail4" className="link-news">Gathering Storm VI lối chơi có gì đặc biệt so với bản trước ?</Link>
                                    </li>
                                    <li className="list-group-item news d-flex">
                                        <div className="tag-circle mr-2" /><Link to="/article-detail3" className="link-news">Ori and the Will of the Wisps được đánh giá như thế nào ?</Link>
                                    </li>
                                    <li className="list-group-item news d-flex">
                                        <div className="tag-circle mr-2" /><Link to="/article-detail5" className="link-news">Final Fantasy 7 REMAKE liệu cốt truyện có bị thay đổi ?</Link>
                                    </li>
                                </ul>
                            </div>
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
                                <Link to="https://www.facebook.com/" className="link-bv-khac">
                                    <img src="https://dragon295.github.io/project-web-sale-game/img/walpaper-fb.jpg" alt="" className="img-fluid " />
                                    <div className="row-green" />
                                    <span className="text-ketnoi-fb">Kết nối với chúng tôi trên FaceBook để nhận ưu đãi từ shop</span>
                                </Link>
                            </div>
                            <div className="img-yt">
                                <Link to="https://www.youtube.com/" className="link-bv-khac">
                                    <img src="https://dragon295.github.io/project-web-sale-game/img/youtube-img.png" alt="" className="img-fluid " />
                                    <div className="row-green" />
                                    <span className="text-ketnoi-yt">Theo dõi chúng tôi trên Youtube để xem những giải đấu độc quyền</span>
                                </Link>
                            </div>
                            <div className="img-twitter">
                                <Link to="https://twitter.com/" className="link-bv-khac">
                                    <img src="https://dragon295.github.io/project-web-sale-game/img/twitter.jpg" alt="" className="img-fluid" />
                                    <div className="row-green" />
                                    <span className="text-ketnoi-twitter">Theo dõi chúng tôi trên Twitter nhận thông tin về game sắp ra mắt </span>
                                </Link>
                            </div>
                            <div className="img-twitch">
                                <Link to="https://www.twitch.tv/" className="link-bv-khac">
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

            <ScrollToTop showUnder={100} style={{ bottom: '110px' }} duration={1200} >
                <Link to="/cart">
                    <button className="btn-shopping" title="Go to shopping cart">
                        <i className="fa fa-shopping-cart cart-to" aria-hidden="true" />
                        <div className="circle-count-fixed">
                            <span>2</span>
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
export default TagDeathStranding;
