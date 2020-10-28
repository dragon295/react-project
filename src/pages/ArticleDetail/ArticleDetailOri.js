import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../component/Header.js'
import Footer from '../../component/Footer.js'
import './ArticleDetail.css'
import { Container, Row, Col } from 'react-bootstrap';
import ScrollToTop from "react-scroll-up";
function ArticleDetailOri() {
    document.title = "Chi tiết bài viết - Ori and the Will of the Wisps";
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
                                    <span className="text-search-bvct-2 mr-1"> Ori and the Will of the Wisps</span>
                                </div>
                                <div className="line-green mb-4" />
                            </Col>
                            <div className="title-content">
                                <h4>Ori and the Will of the Wisps được đánh giá như thế nào ?</h4>
                            </div>
                            <div className="mt-3 ">
                                <i className="fa fa-calendar" aria-hidden="true" />
                                <span className="date ml-1">26/6/2020</span>
                                <i className="fa fa-id-card" aria-hidden="true" />
                                <span className="name ml-1 pb-2">BLYAT</span>
                            </div>
                            <div className="content-1 mt-3">
                                <img src="https://dragon295.github.io/project-web-sale-game/img/ori.jpg" alt="" className="img-fluid mb-3" />
                                <p className="text-content">Ori and the Will of the Wisps có thể sẽ là game đi cảnh xuất sắc nhất năm 2019, trừ khi phần tiếp theo của Hollow Knight làm được điều bất ngờ.<br /></p>
                                <p className="text-content">Là phần tiếp theo của một tựa game tuyệt vời cũng như cực kỳ được mong chờ, Ori and the Will of the Wisps là định nghĩa của nghệ thuật trong cách làm game hiện đại là như thế nào. Không hề có những màn cháy nổ rầm trời hay các cốt truyện vĩ đại phía sau, Ori and the Will of the Wisps chỉ đơn giản đem tới cho người một siêu phẩm đích thực – thứ sẽ chắc chắn thay đổi thế giới quan của bạn về game.<br /></p>
                            </div>
                            <div className="content-1 mt-3">
                                <div className="mb-3"><span className="text-header">Cốt truyện và lối chơi cực kỳ có chiều sâu</span></div>
                                <img src="https://dragon295.github.io/project-web-sale-game/img/bai-viet-ori-1.jpg" alt="" className="img-fluid mb-3" />
                                <p className="text-content">Trên lý thuyết thì Ori and the Will of the Wisps là câu chuyện tiếp nối của phần một, nhưng nội dung của nó thì hoàn toàn độc lập cho nên kể cả là ai chưa từng trải nghiệm cũng có thể tiếp cận dễ dàng. Sau những biến cố tại phần một thì giờ đây Ori đã trở về sống với gia đình nhỏ của mình và chú cú tội nghiệp trở thành em trai của Ori, sống như một phần của gia đình kì lạ này. Nhưng mọi việc không phải lúc nào cũng bằng phẳng, khi em trai cú trong một lần chở Ori ra ngoài đã gặp tai nạn và mất tích trong khu rừng bí ẩn. Từ đây cuộc phiêu lưu mới của Ori lại tiếp tục, vừa là để tìm lại người thân cũng như giải đáp bí ẩn thân thế của mình.<br /></p>
                                <p className="text-content">Có một thứ mà Ori and the Will of the Wisps này đã xây dựng rất tốt kể từ phần một, đó là cách nó dẫn truyện và không khí trong game. Các nhân vật đều không nói tiếng người mà sử dụng một loại ngôn ngữ kì lạ, đây là thủ thuật quen thuộc mà rất nhiều game phiêu lưu sử dụng, đem lại cho cái thế giới đó đặc điểm riêng của nó. Có vài người sẽ thấy nó khá giống với Hollow Knight, khi nó diễn ra trong một thế giới bị lãng quên với các sinh vật kì lạ, những bí mật được chôn giấu… nhưng khác với không khí có phần rùng rợn và đơn độc của Hollow Knight, thì Ori and the Will of the Wisps lại nhẹ nhàng cũng như tươi sáng hơn nhiều.</p>
                            </div>
                            <div className="content-1 mt-3">
                                <div className="mb-3"><span className="text-header">Một Ori tuyệt đẹp cùng âm nhạc mê hồn</span></div>
                                <div className="video-wrapper item mb-3">
                                    <iframe title="video-youtube" width={560} height={315} src="https://www.youtube.com/embed/sE6JXUghfgk" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                                </div>
                                <p className="text-content">Ori and the Will of the Wisps có lẽ là game đi cảnh màn hình ngang đẹp nhất từ trước tới nay, nó đúng nghĩa là một tác phẩm nghệ thuật. Các nhà phát triển đã rất khéo léo lồng ghép những gam màu tối tương phản với ánh sáng trắng phát ra từ người Ori, với bối cảnh trong game hầu hết là hang động hoặc rừng rậm tăm tối càng làm nổi bật nó lên. Mọi đồ vật trong game được áp dụng hiệu ứng đổ bóng rất ảo, khi chúng phản chiếu với nhau mỗi khí ánh sáng (Ori) đi ngang qua.<br /></p>
                            </div>
                            <div className="content-1 mt-3">
                                <div className="mb-3"><span className="text-header">Sự cứu cánh từ phần âm nhạc</span></div>
                                <img src="https://dragon295.github.io/project-web-sale-game/img/bai-viet-ori-3.jpg" alt="" className="img-fluid mb-3" />
                                <p className="text-content">Âm nhạc trong game cũng thực sự tuyệt vời, nó là các bản nhạc không tên nhẹ nhàng theo kiểu hát ru mỗi khi Ori chỉ có một mình, nhưng sẽ dồn dập và hùng tráng hơn khi gặp kẻ thù. Tất cả các nhân vật đều sử dụng một loại ngôn ngữ đặc biệt, nó khiến game trở nên ma mị hơn đặc biệt khi vào phần sau bạn bắt gặp các bí mật về số phận của Ori. Nói không ngoa thì Ori and the Will of the Wisps gần như là xuất sắc từ đầu tới cuối, chỉ trừ việc có vài lỗi về âm thanh bị trục trặc không đáng kể.<br /></p>
                                <p className="text-content">Và cuối cùng tựa game này đáp ứng đầy đủ mong muốn của cả những ai yêu thích thể loại phiêu lưu giải đố, cũng như những hardcore gamer đang tìm kiếm thử thách. Các con trùm có kích thước khổng lồ đi kèm những đòn đánh đa dạng, bạn sẽ phải thực sự nhớ và học thuộc lòng từng move set của chúng nếu muốn chiến thắng, nhất là khi ở độ khó cao nhất game khó không thua gì Dark Souls đâu – lính thường tợp một phát là nửa máu nhé.<br /></p>
                            </div>
                            <div className="content-1 mt-3">
                                <p className="text-content">Trên đây là 1 số đánh giá của bọn mình về Ori and the Will of the Wisps , các bạn có thể xem thêm những bài viết khác ở phía dưới. Các bạn cũng có thể đặt mua game<Link className="link-page" to="/product-detail/18"> ở đây.</Link><br /></p>
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 bvlq px-0">
                                <div className="text-bvct mb-2 mt-5">
                                    <span className="text-search-bvct ml-3">BÀI VIẾT LIÊN QUAN</span>
                                </div>
                                <div className="line-green mb-4" />
                            </div>
                            <div className="d-flex flex-wrap">
                                <Col xs={12} sm={12} md={6} lg={6} xl={6} className="d-flex flex-column">
                                    <Link to="/article-detail" className="link-bv-khac">
                                        <img src="https://dragon295.github.io/project-web-sale-game/img/ff7-4.jpg" alt="" className="img-fluid img-bai-viet-ct" />
                                        <div className="review-noi-dung-khac px-3 py-3">
                                            <span className="title-review-khac">Final Fantasy 7 REMAKE liệu cốt truyện có bị thay đổi ?</span>
                                            <div className="article mt-2 ">
                                                <i className="fa fa-calendar" aria-hidden="true" />
                                                <span className="date ml-1 mr-3">26/6/2020</span>
                                                <i className="fa fa-id-card" aria-hidden="true" />
                                                <span className="date ml-1 pb-2">Choke</span>
                                            </div>
                                            <div className="mt-2">
                                                <p className="some-text-bvlq">Câu chuyện bắt đầu với hình ảnh hoành tráng của thành phố công nghiệp Midgar với các lò phản ứng Mako. Vào ban đêm trong một con hẻm nhỏ tối tăm, cô gái bán hoa Aerith Gainsborough đang ngồi...</p>
                                            </div>
                                        </div>
                                    </Link>
                                </Col>
                                <Col xs={12} sm={12} md={6} lg={6} xl={6} className="d-flex flex-column">
                                    <Link to="/article-detail" className=" link-bv-khac">
                                        <img src="https://dragon295.github.io/project-web-sale-game/img/Gathering-Storm.jpg" alt="" className="img-fluid img-bai-viet-ct" />

                                        <div className="review-noi-dung-khac py-3 px-3">
                                            <span className="title-review-khac">Gathering Storm VI lối chơi có gì đặc biệt so với bản trước ? </span>
                                            <div className="article mt-2  ">
                                                <i className="fa fa-calendar" aria-hidden="true" />
                                                <span className="date ml-1 mr-3">26/6/2020</span>
                                                <i className="fa fa-id-card" aria-hidden="true" />
                                                <span className="date ml-1 pb-2">Coyote</span>
                                            </div>
                                            <div className="some-text-bvlq mt-2">
                                                <p className="some-text-bvlq">Mục tiêu của bài hướng dẫn là chiến thắng ở cấp độ cao nhất (Deity), ở map rộng nhất (Huge – 12 empires), thiết lập phổ thông (Standard). Các từ trong trò chơi được giữ nguyên không phiên dịch...</p>
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
export default ArticleDetailOri;
