import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../component/Header.js'
import Footer from '../../component/Footer.js'
import './ArticleDetail.css'
import { Container, Row, Col } from 'react-bootstrap';
import ScrollToTop from "react-scroll-up";
function ArticleDetailFf7() {
    document.title = "Chi tiết bài viết - Final Fantasy 7 REMAKE";
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
                                    <span className="text-search-bvct-2 mr-1"> Final Fantasy 7 REMAKE</span>
                                </div>
                                <div className="line-green mb-4" />
                            </Col>
                            <div className="title-content">
                                <h4>Final Fantasy 7 REMAKE liệu cốt truyện có bị thay đổi ?</h4>
                            </div>
                            <div className="mt-3 ">
                                <i className="fa fa-calendar" aria-hidden="true" />
                                <span className="date ml-1">26/6/2020</span>
                                <i className="fa fa-id-card" aria-hidden="true" />
                                <span className="name ml-1 pb-2">Choke</span>
                            </div>
                            <div className="content-1 mt-3">
                                <img src="https://dragon295.github.io/project-web-sale-game/img/ff7-4.jpg" alt="" className="img-fluid mb-3" />
                                <p className="text-content">Có thể khẳng định rằng, Square Enix đã đầu tư rất kỹ lưỡng cho cốt truyện của FF7 Remake để vừa giữ được cái hồn của tựa game gốc, vừa mang tới những trải nghiệm mới cho game thủ.<br /></p>
                                <p className="text-content">Lưu ý, trong bài chứa rất nhiều spoiler, nên nếu bạn vẫn chưa hoàn thành Final Fantasy 7 Remake thì không nên đọc tiếp để tránh bị ảnh hưởng tới trải nghiệm khi chơi.<br /></p>
                                <p className="text-content">Có thể nói rằng, kể từ Avenger Endgame, khái niệm đa vũ trụ và dòng thời gian song song đã trở nên quen thuộc hơn rất nhiều đối với khán giả đại chúng. Lần này, Final Fantasy 7 Remake cũng sử dụng khái niệm này để tạo ra những khía cạnh mới mẻ hơn so với tác phẩm gốc. Tạm không nói đến sự thay đổi này liệu có làm hài lòng các fan gạo cội, hay chỉ khiến họ thất vọng hơn. Trong bài phân tích này, tất cả đều tập trung vào mặt cốt truyện của game mới.<br /></p>
                            </div>
                            <div className="content-1 mt-3">
                                <div className="mb-3"><span className="text-header">Dòng thời gian song song</span></div>
                                <img src="https://dragon295.github.io/project-web-sale-game/img/bai-viet-ff7-1.jpg" alt="" className="img-fluid mb-3" />
                                <p className="text-content">Đầu tiên, cần nhắc lại về khái niệm của dòng thời gian song song. Một dòng thời gian song song sẽ xuất hiện khi có một người trở lại và thay đổi các sự kiện trong quá khứ, từ đó dòng thời sẽ tách thành một dòng thời gian mới, tồn tại song song với dòng thời gian cũ. Có tổng cộng 3 dòng thời gian song song được đề cập đến trong Final Fantasy 7 Remake, đó là dòng thời gian của tác phẩm gốc (trong bài gọi là Dòng thời gian gốc), dòng thời gian của FF7 Remake (Dòng thời gian Remake) và Dòng thời gian của Zack. Game cũng tạo ra một khái niệm mới, đó là các Whisper, những “sinh vật” tồn tại với nhiệm vụ khiến mọi dòng thời gian đều phát triển dựa theo dòng thời gian gốc, nguyên nhân sẽ được đề cập tới ở phần sau.<br /></p>
                            </div>
                            <div className="content-1 mt-3">
                                <div className="mb-3"><span className="text-header">Dòng thời gian song song</span></div>
                                <img src="https://dragon295.github.io/project-web-sale-game/img/bai-viet-ff7-5.jpg" alt="" className="img-fluid mb-3" />
                                <p className="text-content">Như vậy, Dòng thời gian Remake xuất hiện như thế nào? Hết thảy bắt đầu thay đổi khi Sephiroth sử dụng ảo giác để tiếp xúc với Cloud trong Chương 2 của FF7 Remake và tạo ra dòng thời gian này. Vì tiếp xúc với Sephiroth, hành trình của Cloud đã chậm hơn và chút nữa bỏ lỡ cuộc gặp mặt “tình cờ” với Aerith. Lúc này, các Whisper xuất hiện để cầm chân cô nàng và đảm bảo cả 2 sẽ gặp nhau. Trong dòng thời gian này, Sephiroth cũng thành công trong việc cướp “mẹ” của mình là Jenova khỏi tay Shinra, đồng thời cũng giết chết chủ tịch của Shinra và đâm Barret gần chết. Cuối game, nhóm của Cloud đánh bại thủ lĩnh của các Whisper, rời khỏi Midgard và dẫn câu chuyện theo một hướng đi hoàn toàn mới (tách hoàn toàn khỏi Dòng thời gian gốc).<br /></p>
                            </div>
                            <div className="content-1 mt-3">
                                <div className="mb-3"><span className="text-header">Nhân vật quan trọng</span></div>
                                <div className="mb-3"><span className="text-header">1 – Whisper:</span></div>
                                <img src="https://dragon295.github.io/project-web-sale-game/img/bai-viet-ff7-4.jpg" alt="" className="img-fluid mb-3" />
                                <p className="text-content">Như đã nói ở trên, Whisper là những sinh vật tồn tại để đảm bảo mọi dòng thời gian đều phát triển giống như Dòng thời gian gốc. Tại sao? Và ai tạo ra chúng? Câu trả lời chính là Ý thức của hành tinh Gaia (Gaia). Gaia có thể xem là một dạng tồn tại vô cùng hùng mạnh, có thể thông qua lifestream (dòng sinh mệnh) để cảm giác được toàn bộ ký ức của mọi sinh vật từng tồn tại trên hành tinh này, dù là ở bất kỳ dòng thời gian nào. Hãy nhớ, mọi sinh vật sinh sống trên Gaia, khi chết đi linh hồn đều sẽ hòa vào lifestream. Gaia có ý thức tự bảo vệ mình rất mạnh mẽ, ví dụ như trong FF7 gốc, chính Gaia đã tạo ra các Weapon để chống lại Jenova. Còn ở trong FF7 Remake, ý thức tự bảo vệ ấy đã tạo ra các Whisper để đảm bảo mọi chuyện sẽ diễn ra theo Dòng thời gian gốc? Vì sao? Vì trong Dòng thời gian gốc, dù các nhân vật chính đã phải trải qua đủ loại bi kịch (bao gồm cái chết của Aerith), nhưng cuối cùng, Gaia vẫn tồn tại. Với Gaia, đây là kết thúc tốt nhất, nên Gaia muốn đảm bảo cái kết này sẽ diễn ra. Ngoài ra, nên chú ý rằng Gaia là trung lập, mục đích của Gaia chỉ là tồn tại mà thôi. Vì thế, Whisper cũng là trung lập (nên trong game có lúc Whisper giúp đỡ nhân vật chính, có lúc ngăn cản nhân vật chính, tất cả đều là để sửa chữa các dòng thời gian mới về với Dòng thời gian gốc).<br /></p>
                            </div>
                            <div className="content-1 mt-3">
                                <div className="mb-3"><span className="text-header">2 – Sephiroth</span></div>
                                <img src="https://dragon295.github.io/project-web-sale-game/img/bai-viet-ff7-2.jpg" alt="" className="img-fluid mb-3" />
                                <p className="text-content">Sephiroth thực sự là người đứng sau mọi chuyện trong FF7 Remake. Chúng ta vẫn chưa biết bằng cách nào, nhưng hiện hắn đang sở hữu khả năng xuyên qua thời không, để từ đó tạo ra các dòng thời gian mới. Rất có thể khả năng này xuất hiện sau khi hắn bị đánh bại vào cuối game gốc. Không cam tâm chết đi, lại thu được khả năng xuyên qua thời không, hắn muốn thay đổi vận mệnh.<br /></p>
                                <p className="text-content">Để thay đổi vận mệnh, đối thủ trực tiếp nhất của Sephiroth chính là các Whisper. Tuy nhiên, xuyên suốt cả game, hắn và Whisper gần như không hề tương tác với nhau. Nguyên nhân, có thể là do sau khi có được năng lực xuyên qua thời không, hắn đã tách mình khỏi Gaia nên các sinh vật do Gaia tạo ra không thể tương tác được với hắn và ngược lại. Bằng chứng là lời của Aerith vào trước cuộc chiến cuối game: “Chúng nó (Whisper)... lời của chúng... chúng không chạm được vào hắn (Sephiroth)”. Vì thế, cả 2 chỉ có thể gián tiếp “phá đám” lẫn nhau. Ví dụ như lúc Whisper cứu sống Barret. Chúng không thể trực tiếp ngăn cản Sephiroth ám sát Barret, nhưng trong Dòng thời gian gốc, Barret không chết, nên chúng phải cứu sống anh ta để đảm bảo mọi chuyện vẫn diễn ra theo nguyên gốc. Ngược lại, Sephiroth cũng không thể trực tiếp tiêu diệt Whisper, vì thế, hắn nghĩ ra âm mưu “mượn đao giết người”. Đao ở đây, còn ai khác ngoài Cloud và nhóm bạn.<br /></p>
                            </div>
                            <div className="content-1 mt-3">
                                <div className="mb-3"><span className="text-header">3 – Aerith</span></div>
                                <img src="https://dragon295.github.io/project-web-sale-game/img/bai-viet-ff7-3.jpg" alt="" className="img-fluid mb-3" />
                                <p className="text-content">Từ biểu hiện của Aerith trong FF7 Remake, có thể thấy rằng cô cũng thấy được phần nào kết cục của mình trong Dòng thời gian gốc. Đây có thể là do khả năng có thể cảm giác được với lifestream nằm trong dòng máu Cetra của cô. Cũng nhờ thế, Aerith hiểu được vai trò của các Whisper và mối quan hệ giữa chúng cùng Sephiroth (cuối game cô đã giải thích điều này với Cloud và nhóm bạn).<br /></p>
                                <p className="text-content">Động cơ của Aerith có sự thay đổi theo tiến trình của game, với cột mốc là thời điểm cô nhận ra Sephiroth có thể tạo ra dòng thời gian mới. Trước thời điểm ấy, Aerith chỉ muốn tuân theo “định mệnh” đã được định sẵn: bán hoa, gặp Cloud, tử vong. Bởi vì Aerith biết rõ định mệnh ấy của mình sẽ đi kèm với kết cục Gaia được cứu vớt, thế giới yên bình, vô số sinh mạng được bảo vệ, chính nghĩa chiến thắng gian tà. Thân là người mang dòng máu Ancient, hy sinh bản thân để cứu vớt Gaia có vẻ là một định mệnh không tồi, nên nàng vẫn luôn muốn dòng thời gian chảy đúng theo tiến trình của tựa game gốc. Cũng vì thế, cô đã kéo Cloud lại trước khi anh bước vào Ngã Tư Vận Mệnh ở cuối game. Tuy nhiên, lúc này, cô cũng dần nhận ra “định mệnh” của Dòng thời gian gốc đã không đủ sức để đánh bại một Sephiroth có khả năng “xuyên không”. Sau một khoảng thời gian do dự, Aerith cuối cùng cũng quyết định đứng lên để chống lại “định mệnh” để viết lên một kết cục mới. Lúc này, Whisper chính thức trở thành kẻ cản đường cả Sephiroth và nhóm của Cloud (đều muốn thay đổi vận mệnh). Và tất nhiên, chống lại cả nhân vật chính lẫn phản diện chính thì “ăn hành” là điều không thể tránh.<br /></p>
                            </div>
                            <div className="content-1 mt-3">
                                <p className="text-content">Trên đây là 1 số chia sẻ của bọn mình về Final Fantasy 7 REMAKE, các bạn có thể xem thêm những bài viết khác ở phía dưới. Các bạn cũng có thể đặt mua game <Link className="link-page" to="/product-detail/0">ở đây.</Link><br /></p>
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
                                        <img src="https://dragon295.github.io/project-web-sale-game/img/ori.jpg" alt="" className="img-fluid img-bai-viet-ct" />

                                        <div className="review-noi-dung-khac py-3 px-3">
                                            <span className="title-review-khac">Ori and the Will of the Wisps được đánh giá như thế nào ?</span>
                                            <div className="article mt-2  ">
                                                <i className="fa fa-calendar" aria-hidden="true" />
                                                <span className="date ml-1 mr-3">26/6/2020</span>
                                                <i className="fa fa-id-card" aria-hidden="true" />
                                                <span className="date ml-1 pb-2">BLYAT</span>
                                            </div>
                                            <div className="some-text-bvlq mt-2">
                                                <p className="some-text-bvlq">Là phần tiếp theo của một tựa game tuyệt vời cũng như cực kỳ được mong chờ, Ori and the Will of the Wisps là định nghĩa của nghệ thuật trong cách làm game hiện đại là như thế nào. Không hề có những màn cháy nổ rầm trời hay các cốt truyện vĩ đại phía sau...</p>
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
export default ArticleDetailFf7;
