import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../component/Header.js'
import Footer from '../../component/Footer.js'
import './ArticleDetail.css'
import { Container, Row, Col } from 'react-bootstrap';
import ScrollToTop from "react-scroll-up";
function ArticleDetailFc() {
    document.title = "Chi tiết bài viết - Far cry 5";
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
                                    <span className="text-search-bvct-2 mr-1"> Far cry 5</span>
                                </div>
                                <div className="line-green mb-4" />
                            </Col>
                            <div className="title-content">
                                <h4>Đánh giá Far cry 5</h4>
                            </div>
                            <div className="mt-3 ">
                                <i className="fa fa-calendar" aria-hidden="true" />
                                <span className="date ml-1">22/6/2020</span>
                                <i className="fa fa-id-card" aria-hidden="true" />
                                <span className="name ml-1 pb-2">PT</span>
                            </div>
                            <div className="content-1 mt-3">
                                <div className="video-wrapper item mb-3">
                                    <iframe width={560} height={315} src="https://www.youtube.com/embed/wVbwQ_I5QA0" title="video" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                                </div>
                                <p className="text-content">Được rất nhiều game thủ mong chờ, Far Cry 5 là phần thứ năm trong loạt series game Far Cry bắn súng góc nhìn thứ nhất của hãng Ubisoft được ra mắt vào ngày 27/3/2018. Ngay khi ra mắt, nhiều người dự đoán rằng tựa game sẽ thất bại khi Ubisoft liên tục “xào nấu” các thành phần cũ xây dựng nên series Far Cry của mình. Nhưng ngược lại, Far Cry 5 đã đem lại ấn tượng rất tốt, rất hấp dẫn và nhận được nhiều đánh giá tích cực khiến chúng ta phải gật đầu thán phục rằng chỉ với một vài thay đổi nhỏ mà Ubisoft đã thổi vào một luồng sức sống mới cho tựa game này.<br /></p>
                            </div>

                            <div className="content-1 mt-3">
                                <div className="mb-3"><span className="text-header">Hệ thống đồng đội ấn tượng cùng các mối hiểm họa khó lường</span></div>
                                <img src="https://dragon295.github.io/project-web-sale-game/img/bai-viet-farcry-1.jpg" alt="" className="img-fluid mb-3" />
                                <p className="text-content">Không thể không kể đến hệ thống đồng đội (companion) gồm các đồng đội thường (những tay súng với kĩ năng di chuyển, tấn công cơ bản) và các Specialist (những đồng minh hạng nhất có kĩ năng đặc biệt). Ở trong game, những đồng đội thường sẽ xuất hiện ngẫu nhiên, đôi khi họ là những tù nhân được bạn giải cứu hoặc đôi khi chỉ là một dân làng lang thang cảm kích trước việc bạn làm. Còn về những đồng đội đặc biệt sẽ là 7 nhân vật được mở khóa khi hoàn thành nhiệm vụ. Bạn có thể mang theo cho mình 1 đồng đội thường và 1 đồng đồng đội đặc biệt (hoặc 1 thường và một người bạn của bạn nếu chơi ở chế độ CO-OP). Bản thân mình thích nhất chú chó Boomer, khá đáng yêu, luôn cho bạn vuốt ve (mặc dù nhìn vẻ ngoài không được sạch sẽ cho lắm) và là một trợ thủ cực kì hung tợn sẵn sàng lao vào cắn chết kẻ địch khi được chỉ thị.<br /></p>
                                <p className="text-content">Còn về mối hiểm họa trong game, khi bạn đã đạt được một lượng RP nhất định thì bạn sẽ bị truy nã, đồng nghĩa với việc đôi khi bỗng dưng trên đầu bạn là một chiếc trực thăng, máy bay hoặc cả một tiểu đội xe tải trang bị vũ khí hạng nặng tuần tra để tìm kiếm bạn.</p>
                            </div>

                            <div className="content-1 mt-3">
                                <div className="mb-3"><span className="text-header">Hình ảnh và âm thanh xuất sắc, tuyệt vời</span></div>
                                <img src="https://dragon295.github.io/project-web-sale-game/img/bai-viet-farcry-2.jpg" alt="" className="img-fluid mb-3" />
                                <p className="text-content">Đặc biệt hơn, để có thể trải nghiệm tựa game này bạn sẽ chẳng cần phải có một cấu hình cực kì khủng. Thay vì vắt kiệt sức mạnh máy tính của bạn để tạo đồ họa tương đương như Grand Theft Auto V, The Witcher 3,… thì Far Cry 5 chỉ cần khoảng 2/3 hiệu năng của máy để có thể chơi được mà thôi. Cấu hình khi trải nghiệm tựa game của mình trên laptop với chip i5-7300HQ cùng với card đồ họa GTX 1050 vẫn cho trải nghiệm 40-50 fps ở mức thiết lập low nhưng hình ảnh vẫn đủ sức làm bạn cảm thấy mãn nhãn. Tất nhiên thì nếu bạn chơi Ultra thì độ tuyệt vời hơn low cũng như về trải nghiệm rồi, không có gì để bàn cãi cả.<br /></p>
                            </div>
                            <div className="content-1 mt-3">
                                <div className="mb-3"><span className="text-header">Rất hấp dẫn, ấn tượng nhưng….thực sự chưa “đã”</span></div>
                                <img src="https://dragon295.github.io/project-web-sale-game/img/bai-viet-farcry-3.jpg" alt="" className="img-fluid mb-3" />
                                <p className="text-content">Mặc dù cho phép bạn tạo nhân vật chính theo giới tính, ngoại hình như bạn thích thì nhân vật này thực sự rất “vô hồn”. Hầu như suốt cả trò chơi, nhân vật của bạn chẳng hề nói một chữ, thậm chí cả khi bị thương nhân vật chỉ kêu nhẹ, khó nghe thấy đến nỗi đôi khi mình lầm tưởng rằng mình tạo nhầm nhân vật nam. Có thể mục đích nhắm tới cho việc tạo hình nhân vật chính của Ubisoft là để phân biệt khi chơi CO-OP hoặc chơi mạng, nhưng đối với phần chơi theo cốt truyện – là linh hồn của game thì thực sự nhân vật chính quá “vô hồn”.<br /></p>
                            </div>

                            <div className="content-1 mt-3">
                                <img src="https://dragon295.github.io/project-web-sale-game/img/bai-viet-farcry-4.jpg" alt="" className="img-fluid mb-3" />
                                <p className="text-content">Đối thủ của bạn cũng chẳng khác mấy, chỉ khá hơn ở việc nói nhiều hơn bạn mà thôi. Để các tựa game như Far Cry 5 tạo ấn tượng sâu sắc đến người chơi, nói đúng hơn là cảm giác “đã” khi chơi game một phần nằm ở nhân vật phản diện. Nhân vật phản diện trong Far Cry 5 có các câu thoại ngoại trừ các đoạn diễn thuyết về tôn giáo của chúng, còn lại thì lời thoại cá nhân mình cảm thấy “hơi diễn xuất”.<br /></p>
                            </div>

                            <div className="content-1 mt-3">
                                <p className="text-content">Trên đây là 1 số đánh giá của bọn mình về Far cry 5, các bạn có thể xem thêm những bài viết khác ở phía dưới. Các bạn cũng có thể đặt mua game<Link className="link-page" to="/product-detail/29">ở đây.</Link><br /></p>
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
                                        <img src="https://dragon295.github.io/project-web-sale-game/img/Gathering-Storm.jpg" alt="" className="img-fluid img-bai-viet-ct" />
                                        <div className="review-noi-dung-khac px-3 py-3">
                                            <span className="title-review-khac">Gathering Storm lối chơi có gì đặc biệt so với bản trước ?</span>
                                            <div className="article mt-2 ">
                                                <i className="fa fa-calendar" aria-hidden="true" />
                                                <span className="date ml-1 mr-3">26/6/2020</span>
                                                <i className="fa fa-id-card" aria-hidden="true" />
                                                <span className="date ml-1 pb-2">Coyote</span>
                                            </div>
                                            <div className="mt-2">
                                                <p className="some-text-bvlq">Mục tiêu của bài hướng dẫn là chiến thắng ở cấp độ cao nhất (Deity), ở map rộng nhất (Huge – 12 empires), thiết lập phổ thông (Standard). Các từ trong trò chơi được giữ nguyên không phiên dịch...</p>
                                            </div>
                                        </div>
                                    </Link>
                                </Col>
                                <Col xs={12} sm={12} md={6} lg={6} xl={6} className="d-flex flex-column">
                                    <Link to="/article-detail" className=" link-bv-khac">
                                        <img src="https://dragon295.github.io/project-web-sale-game/img/ff7-4.jpg" alt="" className="img-fluid img-bai-viet-ct" />

                                        <div className="review-noi-dung-khac py-3 px-3">
                                            <span className="title-review-khac">Final Fantasy 7 REMAKE liệu cốt truyện có bị thay đổi ?</span>
                                            <div className="article mt-2  ">
                                                <i className="fa fa-calendar" aria-hidden="true" />
                                                <span className="date ml-1 mr-3">26/6/2020</span>
                                                <i className="fa fa-id-card" aria-hidden="true" />
                                                <span className="date ml-1 pb-2">Choke</span>
                                            </div>
                                            <div className="some-text-bvlq mt-2">
                                                <p className="some-text-bvlq">Câu chuyện bắt đầu với hình ảnh hoành tráng của thành phố công nghiệp Midgar với các lò phản ứng Mako. Vào ban đêm trong một con hẻm nhỏ tối tăm, cô gái bán hoa Aerith Gainsborough đang ngồi...</p>
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
export default ArticleDetailFc;
