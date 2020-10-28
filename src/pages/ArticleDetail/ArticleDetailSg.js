import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../component/Header.js'
import Footer from '../../component/Footer.js'
import './ArticleDetail.css'
import { Container, Row, Col } from 'react-bootstrap';
import ScrollToTop from "react-scroll-up";
function ArticleDetailSg() {
    document.title = "Chi tiết bài viết - Gathering Storm";
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
                                    <span className="text-search-bvct-2 mr-1"> Gathering Storm</span>
                                </div>
                                <div className="line-green mb-4" />
                            </Col>
                            <div className="title-content">
                                <h4>Gathering Storm VI lối chơi có gì đặc biệt so với bản trước ?</h4>
                            </div>
                            <div className="mt-3 ">
                                <i className="fa fa-calendar" aria-hidden="true" />
                                <span className="date ml-1">26/6/2020</span>
                                <i className="fa fa-id-card" aria-hidden="true" />
                                <span className="name ml-1 pb-2">Coyote</span>
                            </div>
                            <div className="content-1 mt-3">
                                <div className="video-wrapper item mb-3">
                                    <iframe title="video-youtube" width={560} height={315} src="https://www.youtube.com/embed/EZ8XRJNitCE" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                                </div>
                                <p className="text-content">Civilization VI đã kể một câu chuyện thẳng thắn về hậu quả của hành động của bạn. Thất bại trong việc giữ cho người của bạn hạnh phúc và họ sẽ bỏ búa và nâng cao cây chĩa. Hãy thô lỗ với các nhà lãnh đạo khác và họ sẽ sớm từ chối giao dịch với bạn. Tuy nhiên, bên cạnh đó, bạn có thể tiến hành xây dựng đế chế của mình hầu như không quan tâm đến bất kỳ hậu quả nào đối với các quyết định của bạn. Bản mở rộng Rise and Fall năm ngoái đã thêm một số phức tạp vào câu chuyện với sự ra đời của cơ chế Loyalty. Hoạt động trong sự cô lập đã không còn có thể. Định cư ở rìa của một đế chế có thể, nếu họ thích những gì họ thấy qua biên giới, quyết định nổi loạn. Những người chơi lấy lòng trung thành của công dân của họ được cấp sẽ thấy mình không dẫn đầu ai.<br /></p>
                            </div>
                            <div className="content-1 mt-3">
                                <div className="mb-3"><span className="text-header">Những thay đổi đáng lưu ý so với những phiên bản trước</span></div>
                                <img src="https://dragon295.github.io/project-web-sale-game/img/bai-viet-gathering-storm-1.jpg" alt="" className="img-fluid mb-3" />
                                <p className="text-content">So với phiên bản tiền nhiệm Rise and Fall ra mắt cách đây 1 năm, Gathering Storm có nhiều cải tiến đáng kể, đó là (1) sự tương tác với môi trường, (2) hệ thống lưu trữ tài nguyên và sử dụng năng lượng, (3) World Congress và Diplomatic Victory, (4) Cải thiện, bổ sung và cân bằng đáng kể Leader, UU (Unique unit), UA (Unique Ability), (5) AI (!).<br /></p>
                                <p className="text-content">Trong những cải tiến kể trên, (1) (3) (4) sẽ thay đổi mức độ cảm nhận của bạn về trò chơi. Tức là ta sẽ thấy trò chơi có thêm nhiều chức năng mới, đủ để ta tò mò khám phá. (2) và (5) sẽ thay đổi tính chất của trò chơi, tức là làm trò chơi khó hơn, thử thách hơn, theo cách mà một trò chơi chiến thuật nên có. Có thể ví (1) (3) (4) là những tính năng vui vẻ mà chúng ta cần ở một trò chơi giải trí, trong đó (2) (5) là cái mà bất kì người hâm mộ thực thụ nào của dòng game 4K yêu cầu: tính chiến thuật.</p>
                                <p className="text-content">Giờ đây, ta không còn công thức 3 Horse man + 3 Archer + … win all the game nữa. Với việc Strategy Resources phải khai thác theo số lượng, việc tổ chức chiến tranh sớm với chiến thuật Rush Swordman (cần Iron) và Rush Horse Man (Cần Horse) sẽ khó khăn hơn. Ngoài ra, Strategy Resources cần được khai thác theo số lượng và hệ thống Power (các nhà máy điện) phụ thuộc vào số lượng khai thác, điều này làm cho việc tính toán vị trí xây dựng thành phố và chiếm giữ – khai thác – phân bố các mỏ tài nguyên trở nên cực kì quan trọng.<br /></p>
                            </div>
                            <div className="content-1 mt-3">
                                <div className="mb-3"><span className="text-header">Chiến thuật – chiến lược của trò chơi</span></div>
                                <img src="https://dragon295.github.io/project-web-sale-game/img/bai-viet-gathering-storm-1.jpg" alt="" className="img-fluid mb-3" />
                                <p className="text-content">Ori and the Will of the Wisps có lẽ là game đi cảnh màn hình ngang đẹp nhất từ trước tới nay, nó đúng nghĩa là một tác phẩm nghệ thuật. Các nhà phát triển đã rất khéo léo lồng ghép những gam màu tối tương phản với ánh sáng trắng phát ra từ người Ori, với bối cảnh trong game hầu hết là hang động hoặc rừng rậm tăm tối càng làm nổi bật nó lên. Mọi đồ vật trong game được áp dụng hiệu ứng đổ bóng rất ảo, khi chúng phản chiếu với nhau mỗi khí ánh sáng (Ori) đi ngang qua.<br /></p>
                            </div>
                            <div className="content-1 mt-3">
                                <div className="mb-3"><span className="text-header">Sự cứu cánh từ phần âm nhạc</span></div>
                                <img src="https://dragon295.github.io/project-web-sale-game/img/bai-viet-gathering-storm-2.jpg" alt="" className="img-fluid mb-3" />
                                <p className="text-content">Để chiến thắng trong Civilization 6: Gathering Storm chúng ta có nhiều cách khác nhau. Điều này phụ thuộc vào độ khó hay thông số ban đầu của trò chơi, tuy nhiên sẽ luôn có một cách được coi là nhanh hơn, hiệu quả hơn so với cách khác. Ví dụ lợi thế của French hay Brazil sẽ là Culture Victory, nếu độ khó là 1-2-3 thì điều này không quan trọng. Tuy nhiên nếu chơi ở độ khó 7-8 thì khác. Ở những Setup khó như: Delty – Continent – Huge – Standard thì việc tận dụng tối đa ưu thế của một đất nước là điều quan trọng.<br /></p>
                            </div>
                            <div className="content-1 mt-3">
                                <div className="mb-3"><span className="text-header">Chiến tranh là khoảng đầu tư hiệu quả nhất đầu game</span></div>
                                <img src="https://dragon295.github.io/project-web-sale-game/img/bai-viet-gathering-storm-3.jpg" alt="" className="img-fluid mb-3" />
                                <p className="text-content">Hãy coi chiến tranh như một khoản đầu tư. Nếu ở thời điểm đầu game bạn đầu tư vào Settle hay District để phát triển quy mô đất nước hay riêng một thành phố, thì hãy coi như bạn đầu tư vào Warrior, Archer, Horse Man, Ram … để đạt hiệu quả tối đa. Tại sao chúng ta nuôi Settle, để Settle đó lập thành phố rồi xây dựng District, khi mà chúng ta có thể nuôi Warrior, Archer và dùng chính Warrior, Archer đó chiếm những thành phố của AI? Tại sao phải xây District, xây Wonder, trong khi chúng ta có thể cướp được với cái giá rẻ hơn và trong một lộ trình dài hơi.<br /></p>
                            </div>
                            <div className="content-1 mt-3">
                                <img src="https://dragon295.github.io/project-web-sale-game/img/bai-viet-gathering-storm-4.jpg" alt="" className="img-fluid mb-3" />
                                <p className="text-content">Ở cấp độ 7-8, AI được nhiều lợi thế, và nếu bạn có gắng bắt kịp theo cách thông thường ( xây thành phố, tranh Wonder, phát triển khoa học-xã hội…) thì cũng rất thông thường bạn sẽ… không bắt kịp được. Hoặc giả sử bạn đuổi kịp và vượt qua một vài quốc gia xung quanh, thì cũng rất có khả năng một quốc gia xa xôi đang vượt trội bạn về mọi mặt, và thua cuộc chỉ là vấn đề thời gian. Ngoài ra, sớm hay muộn ở giữa ván đấu, các hàng xóm AI sau khi hết đất để đặt thêm thành phố sẽ xây quân đội và hỏi thăm bạn, và thường bạn sẽ tiêu tốn rất nhiều nguồn lực để phòng thủ đất nước. AI không thông minh trong warface, tuy nhiên với việc nhiều thành phố hơn, được lợi thế đầu game thì chiến thuật biển người cũng đủ để bạn khốn đốn. Lúc này chính bạn sẽ nhận ra, thời điểm AI phát triển đầu game chính là lúc thích hợp nhất để bạn làm điều gì đó. A problem can’t be a problem if they don’t exist anymore – Cách tốt nhất để giải quyết một vấn đề là khiến cho nó không tồn tại.<br /></p>
                            </div>
                            <div className="content-1 mt-3">
                                <p className="text-content">Trên đây là 1 số kinh nghiệm chiến thuật của bọn mình về Gathering Storm VI , các bạn có thể xem thêm những bài viết khác ở phía dưới. Các bạn cũng có thể đặt mua game<Link className="link-page" to="/product-detail/21"> ở đây.</Link><br /></p>
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
                                    <Link to="/article-detail2" className=" link-bv-khac">
                                        <img src="https://dragon295.github.io/project-web-sale-game/img/desperados.png" alt="" className="img-fluid img-bai-viet-ct" />

                                        <div className="review-noi-dung-khac py-3 px-3">
                                            <span className="title-review-khac">Đánh giá Desperados 3: Thứ “mai thúy” của thể loại chiến thuật</span>
                                            <div className="article mt-2  ">
                                                <i className="fa fa-calendar" aria-hidden="true" />
                                                <span className="date ml-1 mr-3">26/6/2020</span>
                                                <i className="fa fa-id-card" aria-hidden="true" />
                                                <span className="date ml-1 pb-2">Canna</span>
                                            </div>
                                            <div className="some-text-bvlq mt-2">
                                                <p className="some-text-bvlq">Lối chơi cơ bản của Desperados 3 vẫn tuân theo quy luật của dòng game RTT cổ điển, bạn sẽ được giao một hoặc nhiều nhiệm vụ khác nhau trong một màn chơi, chủ yếu là đi từ điểm A tới điểm B...</p>
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
export default ArticleDetailSg;
