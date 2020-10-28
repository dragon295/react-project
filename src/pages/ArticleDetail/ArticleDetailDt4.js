import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../component/Header.js'
import Footer from '../../component/Footer.js'
import './ArticleDetail.css'
import { Container, Row, Col } from 'react-bootstrap';
import ScrollToTop from "react-scroll-up";
function ArticleDetailDt4() {
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
                                <h4>Death Stranding - Bí ẩn thú vị trong nhiệm vụ của Death Stranding</h4>
                            </div>
                            <div className="mt-3 ">
                                <i className="fa fa-calendar" aria-hidden="true" />
                                <span className="date ml-1">20/6/2020</span>
                                <i className="fa fa-id-card" aria-hidden="true" />
                                <span className="name ml-1 pb-2">Preside</span>
                            </div>
                            <div className="content-1 mt-3">
                                <div className="video-wrapper item mb-3">
                                    <iframe width={560} height={315} src="https://www.youtube.com/embed/BCCV5UzEwvU" title="video" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                                </div>
                                <p className="text-content">Death Stranding là tựa game được đạo diễn và sản xuất bởi nhà thiết kế game nổi tiếng Hideo Kojima. Game ra mắt chính thức ngày 29/12/2019 trên PS4 và nhận rất nhiều những phản ứng trái chiều về gameplay khi nhà sản xuất không tạo ra những pha hành động đủ sức hấp dẫn.<br /></p>
                                <p className="text-content">Death Stranding thiên nhiều về việc xây dựng, di chuyển và kết nối, một cách chơi còn khá lạ lẫm với đa phần game thủ trên thế giới.</p>
                            </div>


                            <div className="content-1 mt-3">
                                <div className="mb-3"><span className="text-header">Cách mà bạn lạc vào trong cuộc chiến ở Việt Nam</span></div>
                                <img src="https://dragon295.github.io/project-web-sale-game/img/bai-viet-dt-1.jpg" alt="" className="img-fluid mb-3" />
                                <p className="text-content">Đối với trận đấu trùm cuối cùng với Cliff trong Death Stranding, bạn sẽ bị hút vào một cơn bão siêu tốc khác với BB và đáp xuống trước một chiếc trực thăng bị rơi. Bạn ở Việt Nam, và thử thách khó khăn hơn bao giờ hết. Với những cải tiến trong công nghệ quân sự, có rất nhiều điều cần chú ý ở đây. Cũng như những người lính thấp thoáng hiện đang có những chiếc trực thăng rong ruổi trên bản đồ bằng đèn rọi.<br /></p>
                                <p className="text-content">Liên tục tránh ánh mắt của họ để bạn không bị mưa khi bắn súng máy. Ngoài ra, hãy chắc chắn rằng khi bạn di chuyển, bạn tiếp tục đi vào những túp lều nhỏ dọc theo chiến trường. Bạn sẽ tìm thấy thêm thiết bị và vũ khí, nhưng đôi khi bạn cũng có thể sử dụng các túp lều làm vỏ bọc. Leo bên dưới và tạo ấn tượng Sekiro tốt nhất của bạn để vượt qua một số phần hỗn loạn hơn của bản đồ. Cảnh giác với lửa RPG và bom mìn khi bạn đi đến khu vực tiếp theo, một lưu vực rừng rậm nơi Cliff đang chờ đợi với nhóm binh lính ma quái của mình.</p>
                            </div>

                            <div className="content-1 mt-3">
                                <div className="mb-3"><span className="text-header">Cuộc chiến hỗn loạn</span></div>
                                <img src="https://dragon295.github.io/project-web-sale-game/img/bai-viet-dt-2.jpg" alt="" className="img-fluid mb-3" />
                                <p className="text-content">Thành thật mà nói, bạn sẽ thực sự đấu tranh để vượt qua khu vực này trừ khi bạn cố gắng thực hiện nó hoàn toàn trong trạng thái tàng hình. Giống như trong chương trước, hãy trang bị sợi của bạn và sử dụng cây xanh làm vỏ. Bạn sẽ biết bạn đã phá hỏng cơ hội của mình khi màn hình chuyển sang màu cam và Cliff nói rằng "Bật nó lên".<br /></p>
                            </div>

                            <div className="content-1 mt-3">
                                <div className="mb-3"><span className="text-header">Cách tiêu diệt quân của Cliff</span></div>
                                <img src="https://dragon295.github.io/project-web-sale-game/img/bai-viet-dt-3.jpg" alt="" className="img-fluid mb-3" />
                                <p className="text-content">Nếu bạn là một gamer bắn súng chuyên nghiệp, bạn vẫn có thể sống sót, nhưng nó lại dễ dàng hơn rất nhiều (và khá bổ ích) nếu bạn di chuyển xung quanh và lén lút tiêu diệt tất cả những con rối của Cliff . Nó rất đơn giản ở đây với điều kiện là bạn có cỏ cao để lội qua, và bạn sẽ giết từng bộ xương ngay lập tức với sợi của bạn. Khi bạn cô lập Cliff quấn lấy anh ta và sau đó đá anh ta khi anh ta hạ gục như bạn đã làm với Higgs.<br /></p>
                            </div>


                            <div className="content-1 mt-3">
                                <div className="mb-3"><span className="text-header">Yêu cầu cung cấp - hỗ trợ</span></div>
                                <p className="text-content">Hy vọng rằng bây giờ bạn sẽ có thêm thông tin về bí ẩn nhiệm vụ của Death Stranding, vì vậy bạn sẽ không lãng phí thời gian để xây dựng cầu nối giữa bạn và những người khác. Death Stranding ra mắt trên PC vào ngày 27 tháng 6, và bạn có thể mua nó<Link className="link-page" to="/product-detail/3">ở đây.</Link><br /></p>
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
                                        <img src="https://dragon295.github.io/project-web-sale-game/img/death-stranding-7.jpg" alt="" className="img-fluid img-bai-viet-ct" />

                                        <div className="review-noi-dung-khac py-3 px-3">
                                            <span className="title-review-khac">Tạo hình các nhân vật trong Death Stranding như thế nào ? </span>
                                            <div className="article mt-2  ">
                                                <i className="fa fa-calendar" aria-hidden="true" />
                                                <span className="date ml-1 mr-3">20/6/2020</span>
                                                <i className="fa fa-id-card" aria-hidden="true" />
                                                <span className="date ml-1 pb-2">Sam</span>
                                            </div>
                                            <div className="some-text-bvlq mt-2">
                                                <p className="some-text-bvlq">Bên cạnh cốt truyện, một điểm nhấn khác của Death Stranding chính là những nhân vật nổi tiếng xuất hiện trong game...</p>
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
export default ArticleDetailDt4;
