import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../component/Header.js'
import Footer from '../../component/Footer.js'
import './ArticleDetail.css'
import { Container, Row, Col } from 'react-bootstrap';
import ScrollToTop from "react-scroll-up";
function ArticleDetailDbh() {
    document.title = "Chi tiết bài viết - Detroit Become Human";
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
                            <div className="column-green" />
                            <div className="column-black float-left mb-4 d-flex justify-content-center align-items-center">
                                <label className="bv my-0">Chi tiết bài viết</label>
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
                    <Row className="mt-3">
                        <Col xs={12} sm={12} md={8} lg={8} xl={8} className="content px-4">
                            <Col xs={12} sm={12} md={12} lg={12} xl={12} className="bvlq px-0">
                                <div className="text-bvct mb-2 mt-3">
                                    <span className="text-search-bvct ml-3">Bài viết /</span>
                                    <span className="text-search-bvct-2 mr-1"> Detroit Become Human</span>
                                </div>
                                <div className="line-green mb-4" />
                            </Col>
                            <div className="title-content">
                                <h4>Những điểm thú vị trong Detroit Become Human</h4>
                            </div>
                            <div className="mt-3 ">
                                <i className="fa fa-calendar" aria-hidden="true" />
                                <span className="date ml-1">25/6/2020</span>
                                <i className="fa fa-id-card" aria-hidden="true" />
                                <span className="name ml-1 pb-2">Lindarang</span>
                            </div>
                            <div className="content-1 mt-3">
                                <div className="video-wrapper item mb-3">
                                    <iframe width={560} height={315} src="https://www.youtube.com/embed/exCWJmn95gQ" title="video" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                                </div>
                                <p className="text-content">Detroit: Become Human là một tựa game có nhiều tình tiết y hệt như phim tâm lý xã hội, do đó nó chứa khá nhiều chi tiết ẩn vô cùng thú vị.<br /></p>
                                <p className="text-content">
                                    Nếu đã chơi Detroit: Become Human thì bạn sẽ thấy tựa game này như một bộ phim tâm lý xã hội, với rất nhiều lớp lang dài dòng và tuyến nhân vật đầy màu sắc. Một tựa game hay sẽ không thể thiếu các bí mật, tuy Detroit: Become Human chỉ thuần về cốt truyện là chủ yếu nhưng nó vẫn có những tình tiết ẩn dấu rất khéo léo trong quá trình chơi.<br /></p>
                                <p className="text-content">Trong màn chơi The Painter, nếu điều khiển Markus đi xuống sảnh về phía góc bên trái, bạn sẽ thấy một vài mẫu giấy xếp hình Origami biểu tượng của tựa game Heavy Rain (một tựa game tương tự Detroit: Become Human – cũng do Quantic Dream phát triển) trên kệ sách.<br />
                                    Cũng trong màn chơi The Painter, bạn có thể để Markus chơi đàn Piano để biểu diễn, các bản nhạc đó thực ra được lấy trực tiếp từ Soundtrack trong Detroit: Become Human, chúng hơi khác một chút tùy thuộc vào cách mà bạn sắp xếp các nốt.</p>
                            </div>

                            <div className="content-1 mt-3">
                                <div className="mb-3"><span className="text-header">Những điểm tương đồng với phim</span></div>
                                <img src="https://dragon295.github.io/project-web-sale-game/img/bai-viet-detroit-1.jpg" alt="" className="img-fluid mb-3" />
                                <p className="text-content">Một điểm khá thú vị khác là khi Connor gặp người sáng lập ra Cyberlife là Elijah Kamski để điều tra về các vụ án Android, chúng ta có thể thấy rất nhiều điểm tương đồng với bộ phim Ex Machina. Nếu như các bạn không biết thì Ex Machina ra mắt vào năm 2014, nội dung nói về một lập trình viên được CEO của công ty anh ta mời đến nhà để làm bài kiểm tra một robot thông minh mang hình dáng con người.<br /></p>
                                <p className="text-content">Có thể thấy Detroit: Become Human rất tương đồng với Ex Machina, đầu tiên là chỗ ở của Kamski rất giống với căn nhà của CEO Nathan Bateman trong Ex Machina – đều là nằm biệt lập lánh đời và những người phục vụ ở đó đều là Android. Một điều trùng hợp nữa là cả hai người máy Android đều thuộc thế hệ đầu tiên trong Detroit: Become Human, Chole là Android đầu tiên vượt qua bài kiểm tra Turing, còn Ava (Ex Machina) là người máy thông minh mang hình dáng con người đầu tiên luôn.</p>
                            </div>

                            <div className="content-1 mt-3">
                                <img src="https://dragon295.github.io/project-web-sale-game/img/bai-viet-detroit-2.jpg" alt="" className="img-fluid mb-3" />
                                <p className="text-content">Ở đoạn kết của Ex Machina, Ava đã thoát ra khỏi căn nhà và thay đổi hình dạng để sống như một con người thực sự. Còn trong Detroit: Become Human thì nếu bạn lấy được Good Ending, khi trở lại menu chính Chloe sẽ nói cô ta đã cảm nhận thứ gì đó thay đổi khi dõi theo hành trình của các Android trong game, sau đó người chơi sẽ có lựa chọn giải thoát Chloe khỏi game (bạn sẽ không còn thấy Chloe trong menu chính nữa).<br /></p>
                            </div>

                            <div className="content-1 mt-3">
                                <p className="text-content">Hy vọng rằng bây giờ bạn sẽ có thêm thông tin về điểm thú vị của Detroit Become Human :)) . Bạn có thể xem bài viết liên quan ở phía dưới.<br /></p>
                            </div>

                            <Col xs={12} sm={12} md={12} lg={12} xl={12} className="bvlq px-0">
                                <div className="text-bvct mb-2 mt-5">
                                    <span className="text-search-bvct ml-3">BÀI VIẾT LIÊN QUAN</span>
                                </div>
                                <div className="line-green mb-4" />
                            </Col>
                            <div className="d-flex flex-wrap">
                                <Col xs={12} sm={12} md={6} lg={6} xl={6} className="d-flex flex-column">
                                    <Link to="/article-detail" className="link-bv-khac">
                                        <img src="https://dragon295.github.io/project-web-sale-game/img/desperados.png" alt="" className="img-fluid img-bai-viet-ct" />
                                        <div className="review-noi-dung-khac px-3 py-3">
                                            <span className="title-review-khac">Đánh giá Desperados 3: Thứ “mai thúy” của thể loại chiến thuật</span>
                                            <div className="article mt-2 ">
                                                <i className="fa fa-calendar" aria-hidden="true" />
                                                <span className="date ml-1 mr-3">26/6/2020</span>
                                                <i className="fa fa-id-card" aria-hidden="true" />
                                                <span className="date ml-1 pb-2">Canna</span>
                                            </div>
                                            <div className="mt-2">
                                                <p className="some-text-bvlq">Lối chơi cơ bản của Desperados 3 vẫn tuân theo quy luật của dòng game RTT cổ điển, bạn sẽ được giao một hoặc nhiều nhiệm vụ khác nhau trong một màn chơi, chủ yếu là đi từ điểm A tới điểm B...</p>
                                            </div>
                                        </div>
                                    </Link>
                                </Col>
                                <Col xs={12} sm={12} md={6} lg={6} xl={6} className="d-flex flex-column">
                                    <Link to="/article-detail" className=" link-bv-khac">
                                        <img src="https://dragon295.github.io/project-web-sale-game/img/far-cry.png" alt="" className="img-fluid img-bai-viet-ct" />

                                        <div className="review-noi-dung-khac py-3 px-3">
                                            <span className="title-review-khac">Đánh giá Far cry 5 </span>
                                            <div className="article mt-2  ">
                                                <i className="fa fa-calendar" aria-hidden="true" />
                                                <span className="date ml-1 mr-3">22/6/2020</span>
                                                <i className="fa fa-id-card" aria-hidden="true" />
                                                <span className="date ml-1 pb-2">PT</span>
                                            </div>
                                            <div className="some-text-bvlq mt-2">
                                                <p className="some-text-bvlq">Far Cry 5 là một game bắn súng góc nhìn thứ nhất được phát triển bởi Ubisoft Montreal và Ubisoft Toronto và Ubisoft phát hành vào năm 2018...</p>
                                            </div>
                                        </div>
                                    </Link>
                                </Col>
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
export default ArticleDetailDbh;
