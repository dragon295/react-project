import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../component/Header.js'
import Footer from '../../component/Footer.js'
import './ArticleDetail.css'
import { Container, Row, Col } from 'react-bootstrap';
import ScrollToTop from "react-scroll-up";
function ArticleDetailDt1() {
    document.title = "Chi tiết bài viết - DeathStranding";
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
                                    <span className="text-search-bvct-2 mr-1"> DeathStranding</span>
                                </div>
                                <div className="line-green mb-4" />
                            </Col>
                            <div className="title-content">
                                <h4>Những điểm thú vị trong cốt truyện Death Stranding</h4>
                            </div>
                            <div className="mt-3 ">
                                <i className="fa fa-calendar" aria-hidden="true" />
                                <span className="date ml-1">26/6/2020</span>
                                <i className="fa fa-id-card" aria-hidden="true" />
                                <span className="name ml-1 pb-2">Lindarang</span>
                            </div>
                            <div className="content-1 mt-3">
                                <div className="video-wrapper item mb-3">
                                    <iframe title="video-youtube" width={560} height={315} src="https://www.youtube.com/embed/tCI396HyhbQ" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                                </div>
                                <p className="text-content">Để có thể tạo ra những trải nghiệm độc nhất vô nhị, Kojima cực kỳ giữ bí mật về Death Stranding. Thậm chí các thông tin hay đoạn trailer được tung ra đều khiến cộng đồng game thủ cảm thấy bối rối…vì không hiểu chuyện gì đang xảy ra. Tuy nhiên, chính điều đó lại càng khiến anh em game thủ háo hức chờ đợi ngày phát hành trò chơi này hơn. Dưới đây là 1 vài sự thật thú vị có thể các game thủ chưa biết hết về Death Stranding, siêu phẩm của Kojima sẽ được phát hành ngày 19 tháng 12 trên PlayStation 4.<br /></p>
                                <p className="text-content">Death Stranding thiên nhiều về việc xây dựng, di chuyển và kết nối, một cách chơi còn khá lạ lẫm với đa phần game thủ trên thế giới.</p>
                            </div>
                            <div className="content-1 mt-3">
                                <div className="mb-3"><span className="text-header">Hideo Kojima từng đặt tên cho búp bê ở hậu trường Death Stranding</span></div>
                                <img src="https://dragon295.github.io/project-web-sale-game/img/bai-viet-dt-6.jpg" alt="" className="img-fluid mb-3" />
                                <p className="text-content">Chúng ta đều biết đứa bé đóng một vai trò rất quan trọng trong Death Strading. Và hình ảnh những đứa bé sơ sinh nằm trong hộp thực sự gây ấn tượng cũng như có chút gì đó ám ảnh với người hâm mộ. Tuy nhiên, đằng sau hậu trường của Death Stranding thậm chí còn gây ám ảnh hơn nhiều với một loạt búp bê, vật được sử dụng làm CGI cho đứa bé trong game.<br /></p>
                                <p className="text-content">Và bạn có tin không? Kojima đã đặt tên riêng cho từng con búp bê. Như con búp bê sử dụng làm CGI đứa bé mà Norman Reedus ôm ở đoạn trailer đầu tiên được đặt tên Lu #2, sống tại San Diego. Còn búp bê đóng CGI đứa bé nằm trong hộp mà Guillermo del Toro bế ở đoạn trailer thứ 2 có tên Lu #1, tuy nhiên nơi ở của con búp bê này không được tiết lộ. Cả 2 con búp bê này đều mang hình dáng thực sự ám ảnh, đặc biệt là Lu #1. Nó đã dọa hầu hết những người trong team phát triển của Death Stranding.</p>
                            </div>
                            <div className="content-1 mt-3">
                                <div className="mb-3"><span className="text-header">Ngay cả những nhân vật chính của Death Stranding cũng không hiểu cốt truyện</span></div>
                                <img src="https://dragon295.github.io/project-web-sale-game/img/bai-viet-dt-7.jpg" alt="" className="img-fluid mb-3" />
                                <p className="text-content">Hideo Kojima là một trong những bậc thầy trong việc hack não game thủ bằng cốt truyện đầy ắp sự ngoằn ngoèo. Và tất nhiên Death Stranding cũng không phải ngoại lệ. Thậm chí cốt truyện của trò chơi này còn xoắn não hơn nhiều, ngay cả những ngôi sao chính như Norman Reedus hay Mads Mikkelsen đều không thực sự hiểu. Tuy nhiên, ngay cả vậy, họ vẫn rất hào hứng khi tham gia dự án này.
            Reedus kể lại rằng khi Kojima đưa ra hợp đồng của Death Stranding, anh đã ký ngay lập tức, dù cho có chút bối rối. “Anh ấy [Hideo Kojima] đã cho tôi xem một vài thứ trên chiếc iPad,” – Reedus nhớ lại. “Tôi lúc đó như kiểu, ‘thôi được rồi anh muốn làm gì thì tôi theo đó. Tôi thậm chí còn chẳng hiểu anh ta đang nói về cái gì nữa”..<br /></p>
                            </div>
                            <div className="content-1 mt-3">
                                <div className="mb-3"><span className="text-header">Hideo Kojima tuyển dụng nhiều nhân viên từ nhóm phát triển P.T. sang làm việc với Death Stranding</span></div>
                                <img src="https://dragon295.github.io/project-web-sale-game/img/bai-viet-dt-8.jpg" alt="" className="img-fluid mb-3" />
                                <p className="text-content">Năm 2014, bản demo P.T. cùng dự án Silent Hills của Hideo Kojima khiến toàn bộ cộng đồng game thủ cảm thấy phấn khích. Bên cạnh đó, dự án này còn có sự tham gia của diễn viên Norman Reedus, cũng như đạo diễn phim kinh dị nổi tiếng Guillermo del Toro. Nhưng rồi mâu thuẫn với Konami đã lên tới đỉnh điểm, Kojima rời công ty, toàn bộ dự án bị hủy bỏ khiến mọi hi vọng của game thủ tiêu tan.<br /></p>
                            </div>
                            <div className="content-1 mt-3">
                                <p className="text-content">Tuy nhiên, Hideo Kojima có vẻ như không hài lòng khi để những con người đầy tài năng trong team phát triển Silent Hills ở lại Konami. Ông đã lập ra Kojima Productions và mời rất nhiều con người ở team phát triển cũ về làm việc. Trong đó có cả Norman Reedus cũng như Guillermo del Toro mà chúng ta đã biết. Do đó, dù Death Stranding không phải thể loại game kinh dị, nhưng ít nhất, người hâm mộ cũng có thể được thấy một số ý tưởng của Silent Hills cũ trong trò chơi này.<br /></p>
                            </div>
                            <div className="content-1 mt-3">
                                <div className="mb-3"><span className="text-header">Yêu cầu cung cấp - hỗ trợ</span></div>
                                <p className="text-content">Hy vọng rằng bây giờ bạn sẽ có thêm thông tin về nhiệm vụ của Death Stranding, vì vậy bạn sẽ không lãng phí thời gian để xây dựng cầu nối giữa bạn và những người khác. Death Stranding ra mắt trên PC vào ngày 27 tháng 6, và bạn có thể mua nó <Link className="link-page" to="/product-detail/3">ở đây.</Link><br /></p>
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 bvlq px-0">
                                <div className="text-bvct mb-2 mt-5">
                                    <span className="text-search-bvct ml-3">BÀI VIẾT LIÊN QUAN</span>
                                </div>
                                <div className="line-green mb-4" />
                            </div>
                            <div className="d-flex flex-wrap">
                                <Col xs={12} sm={12} md={6} lg={6} xl={6} className="d-flex flex-column">
                                    <Link to="article-detail" className="link-bv-khac">
                                        <img src="https://dragon295.github.io/project-web-sale-game/img/death-stranding-2.jpg" alt="" className="img-fluid img-bai-viet-ct" />
                                        <div className="review-noi-dung-khac px-3 py-3">
                                            <span className="title-review-khac">Death Stranding - Cách thức hoạt động của chế độ nhiều người chơi</span>
                                            <div className="article mt-2 ">
                                                <i className="fa fa-calendar" aria-hidden="true" />
                                                <span className="date ml-1 mr-3">23/6/2020</span>
                                                <i className="fa fa-id-card" aria-hidden="true" />
                                                <span className="date ml-1 pb-2">RV-Game</span>
                                            </div>
                                            <div className="mt-2">
                                                <p className="some-text-bvlq">Ba lô của bạn đã được đeo, bạn đang lê bước trên địa hình đồi núi, bạn đã không thấy linh hồn trong nhiều tháng. Thế giới của DeathStranding...</p>
                                            </div>
                                        </div>
                                    </Link>
                                </Col>
                                <Col xs={12} sm={12} md={6} lg={6} xl={6} className="d-flex flex-column">
                                    <Link to="article-detail" className=" link-bv-khac">
                                        <img src="https://dragon295.github.io/project-web-sale-game/img/death-stranding-6.jpg" alt="" className="img-fluid img-bai-viet-ct" />

                                        <div className="review-noi-dung-khac py-3 px-3">
                                            <span className="title-review-khac">Bí ẩn thú vị trong nhiệm vụ của Death Stranding ? </span>
                                            <div className="article mt-2  ">
                                                <i className="fa fa-calendar" aria-hidden="true" />
                                                <span className="date ml-1 mr-3">22/6/2020</span>
                                                <i className="fa fa-id-card" aria-hidden="true" />
                                                <span className="date ml-1 pb-2">Preside</span>
                                            </div>
                                            <div className="some-text-bvlq mt-2">
                                                <p className="some-text-bvlq">Thứ nguy hiểm nhất mà Chiral mang lại trong cốt truyện DeathStranding đó chính là Time Fall – những con mưa thời gian có khả năng điều...</p>
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
export default ArticleDetailDt1;
