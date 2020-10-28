import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../component/Header.js'
import Footer from '../../component/Footer.js'
import './ArticleDetail.css'
import { Container, Row, Col } from 'react-bootstrap';
import ScrollToTop from "react-scroll-up";
function ArticleDetailDpd() {
    document.title = "Chi tiết bài viết - Desperados";
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
                                    <span className="text-search-bvct-2 mr-1"> Desperados III</span>
                                </div>
                                <div className="line-green mb-4" />
                            </Col>
                            <div className="title-content">
                                <h4>Đánh giá Desperados 3: Thứ “mai thúy” của thể loại chiến thuật</h4>
                            </div>
                            <div className="mt-3 ">
                                <i className="fa fa-calendar" aria-hidden="true" />
                                <span className="date ml-1">22/6/2020</span>
                                <i className="fa fa-id-card" aria-hidden="true" />
                                <span className="name ml-1 pb-2">Canna</span>
                            </div>
                            <div className="content-1 mt-3">
                                <div className="video-wrapper item mb-3">
                                    <iframe title="video-youtube" width={560} height={315} src="https://www.youtube.com/embed/PeJ9G77rau4" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                                </div>
                                <p className="text-content">Là phiên bản mới nhất của dòng game chiến thuật lén lút huyền thoại, Desperados 3 còn được chú ý nhiều hơn khi nó đến từ Mimimi Games – studio đã tạo ra tựa game Shadow Tactics: Blades of the Shogun, thứ được coi là người thừa kế xuất sắc nhất cho thể loại game real-time tactics (RTT) truyền thống gần như đã bị quên lãng từ lâu. Hãy cùng tôi tìm hiểu về bản Desperados mới nhất này nhé.<br /></p>
                            </div>
                            <div className="content-1 mt-3">
                                <div className="mb-3"><span className="text-header">Lối chơi phát huy những tinh hoa truyền thống</span></div>
                                <img src="https://dragon295.github.io/project-web-sale-game/img/bai-viet-desperados-1.jpg" alt="" className="img-fluid mb-3" />
                                <p className="text-content">Cốt truyện của Desperados 3 vẫn xoay quanh tuyến nhân vật chính với tay săn tiền thưởng John Cooper, cô nàng Kate O’Hara quyến rũ và vị “bác sĩ” đánh thuê Doc McCoy, kèm theo là hai nhân vật mới là Hector Mendoza – một gã to lớn cục súc tốt bụng cùng Isabelle Moreau với khả năng phép thuật Voodoo. Bối cảnh của game diễn ra khi John đang trên đường tìm kẻ thù, anh ta tình cờ gặp được Kate khi đó cũng đang tìm cách giữ lại trang trại nơi mình sinh sống… hành trình của họ kết nối với nhau để rong ruổi dọc nước Mỹ qua các nhiệm vụ điên rồ.<br /></p>
                                <p className="text-content">Về cơ bản Desperados 3 có thể coi là một phần spin-off độc lập, mục đích để cho những game thủ chưa từng chơi qua seri này cũng có thể nắm bắt được cốt truyện dễ dàng. Chúng ta tổng cộng sẽ có 5 nhân vật với những kỹ năng cùng vũ khí khác nhau, bạn sẽ được điều khiển bọn họ qua rất nhiều nhiệm vụ lớn nhỏ. Mỗi nhiệm vụ sẽ bắt đầu với số lượng nhân vật riêng biệt, người chơi phải tự động não để nghĩ cách hoàn thành nó sao cho phù hợp nhất.</p>
                            </div>
                            <div className="content-1 mt-3">
                                <div className="mb-3"><span className="text-header">Giá trị chơi lại không cao, chưa tạo được sự đột phá</span></div>
                                <img src="https://dragon295.github.io/project-web-sale-game/img/bai-viet-desperados-2.jpg" alt="" className="img-fluid mb-3" />
                                <p className="text-content">Thú thực thì tôi không ấn tượng lắm với đồ họa của Desperados 3, mặc dù game đã rất cố gắng để tái hiện lại vùng viễn Tây nước Mỹ những năm cuối thế kỷ 19, với những hoang mạc, quán rượu và các đường ray xe lửa đang xây dở… nhưng vấn đề ở đây là chúng không có hồn, hay nói đúng hơn mọi thứ đều quá bình thường khi số lượng NPC có thể tương tác hay đảm nhận vai trò quan trọng quá ít.<br /></p>
                                <p className="text-content">Lấy ví dụ khi bạn đi vào một thị trấn, thì hầu hết những gì trong đó chỉ là đám kẻ địch đi lòng vòng canh gác, chứ không có những sự kiện phụ, hội thoại hay các tương tác ngẫu nhiên nhằm làm tăng phần thực tế. Điều này khiến cho mặc dù bản đồ vô cùng lớn nhưng Desperados 3 giống một bãi chiến trường nhiều hơn, chưa kể tông chính của nó là một màu vàng sậm của sa mạc càng làm mọi thứ trở nên ảm đạm hơn, về phần này thì Desperados 3 thua xa người anh em Shadow Tactics rồi.<br /></p>
                            </div>
                            <div className="content-1 mt-3">
                                <div className="mb-3"><span className="text-header">Sự cứu cánh từ phần âm nhạc</span></div>
                                <img src="https://dragon295.github.io/project-web-sale-game/img/bai-viet-desperados-3.jpg" alt="" className="img-fluid mb-3" />
                                <p className="text-content">Tuy vậy bù lại thì phần âm nhạc của game đặc biệt xuất sắc, bạn sẽ ngay lập tức bị chinh phục từ menu chính với các bản nhạc đậm chất lãng tử cùng những âm điệu réo rắt da diết, đi kèm các đoạn guitar đầy ngẫu hứng. Tôi chắc chắn rằng bất cứ ai chơi Desperados 3 sẽ phải giành vài phút ở menu để thưởng thức đoạn nhạc này, đó là chưa kể rất nhiều trường đoạn khác trong quá trình chơi đều xuất sắc tương tự.<br /></p>
                                <p className="text-content">Phần lồng tiếng của Desperados 3 cũng đạt điểm 10 cho chất lượng, các nhân vật thể hiện được chất giọng địa phương vô cùng hoàn hảo, đặc biệt là Hector cùng Isabelle với những chỗ lấy hơi nhấn nhá và sử dụng phương ngữ để khắc họa nguồn gốc bản thân. Chỉ có điều đáng tiếc là đồ họa lại không tương xứng với âm thanh, khi mà nhiều đoạn cắt cảnh nhân vật còn nói chuyện không khớp miệng hoặc đứng im mà tiếng vẫn vang lên.<br /></p>
                            </div>
                            <div className="content-1 mt-3">
                                <div className="video-wrapper item mb-3">
                                    <iframe title="video-youtube" width={560} height={315} src="https://www.youtube.com/embed/PRU_pdtApkc" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                                </div>
                            </div>
                            <div className="content-1 mt-3">
                                <p className="text-content">Trên đây là 1 số đánh giá của bọn mình về Desperados 3, các bạn có thể xem thêm những bài viết khác ở phía dưới. Các bạn cũng có thể đặt mua game <Link className="link-page" to="/product-detail/25"> ở đây.</Link><br /></p>
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
                                        <img src="https://dragon295.github.io/project-web-sale-game/img/ori.jpg" alt="" className="img-fluid img-bai-viet-ct" />
                                        <div className="review-noi-dung-khac px-3 py-3">
                                            <span className="title-review-khac">Ori and the Will of the Wisps được đánh giá như thế nào ?</span>
                                            <div className="article mt-2 ">
                                                <i className="fa fa-calendar" aria-hidden="true" />
                                                <span className="date ml-1 mr-3">26/6/2020</span>
                                                <i className="fa fa-id-card" aria-hidden="true" />
                                                <span className="date ml-1 pb-2">BLYAT</span>
                                            </div>
                                            <div className="mt-2">
                                                <p className="some-text-bvlq">Là phần tiếp theo của một tựa game tuyệt vời cũng như cực kỳ được mong chờ, Ori and the Will of the Wisps là định nghĩa của nghệ thuật trong cách làm game hiện đại là như thế nào. Không hề có những màn cháy nổ rầm trời hay các cốt truyện vĩ đại phía sau...</p>
                                            </div>
                                        </div>
                                    </Link>
                                </Col>
                                <Col xs={12} sm={12} md={6} lg={6} xl={6} className="d-flex flex-column">
                                    <Link to="article-detail" className=" link-bv-khac">
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
export default ArticleDetailDpd;
