import React , { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../component/Header.js'
import Footer from '../../component/Footer.js'
import './Ownership.css'
import { Container, Row, Col } from 'react-bootstrap';
import ScrollToTop from "react-scroll-up";
function Ownership() {
    document.title = "Quyền sở hữu";

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div>
            <Header />
            <section>
                <Container className="mt-5">
                    <Row>
                        <div className="column-green ml-3" />
                        <div className="column-black-qsh mb-4 d-flex justify-content-center align-items-center">
                            <label className="qsh my-0">Quyền Sở Hữu</label>
                        </div>
                    </Row>
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={12} xl={12} className="qsh-dk pt-2">
                            <div className="box-text-qsh">
                                <p className="text-qsh">- Trang Web này được sở hữu bởi công ty TheSad theo Điều 2 của Công ước WIPO (Công ước Stockholm) ngày 14 tháng 7 năm 1967 về thành lập Tổ chức sở hữu trí tuệ thế giới<br /></p>
                                <p className="text-qsh">
                                    - Mọi cá nhân hoặc tổ chức sử dụng hình ảnh, thông tin của trang Web mà chưa có sự đông ý của công ty sẽ bị khởi kiện Công ước WIPO</p>
                                <p className="text-qsh">
                                    - Nếu có gì thắc mắc người dùng có thể liên hệ đến:<br />
            + Số điện thoại CSKH: 19000091 <br />
            + Email: <a className="link-mail-qsh" href="https://mail.google.com/mail/u/0/#inbox">luongduongduc4@gmail.com</a><br />
            + FaceBook: <a className="link-fb-qsh" href="https://www.facebook.com/TOAAGG">https://www.facebook.com/TOAAGG</a></p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="para-qsh-2">
                        <div className="column-green ml-3" />
                        <div className="column-black-qsh mb-4 d-flex justify-content-center align-items-center">
                            <label className="csbm my-0">Chính sách bảo mật</label>
                        </div>
                    </Row>
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={12} xl={12} className="qsh-dk pt-2">
                            <div className="box-text-qsh">
                                <p className="text-csbm">
                                    - Bằng cách sử dụng dịch vụ của chúng tôi , bạn đồng ý với việc chúng tôi sử dụng dữ liệu của bạn theo chính sách bảo mật này <br /></p>
                                <p className="text-csbm">- Bạn có thể cung cấp cho chúng tôi thông tin nhất định trực tiếp, bao gồm:</p>
                                <p className="text-csbm">+ Thông tin tài khoản: Khi bạn tạo tài khoản cho G.O.S shop, chúng tôi yêu cầu bạn cung cấp thông tin như tên người dùng, địa chỉ email và mật khẩu để tạo tài khoản. Bạn cũng có thể thêm ảnh hồ sơ, ngày sinh và các chi tiết khác về bạn vào hồ sơ tài khoản của bạn và đặt các cài đặt tài khoản khác nhau (bao gồm kiểm soát quyền riêng tư xã hội)</p><br />
                                <p className="text-csbm">+ Thông tin thanh toán: Nếu bạn muốn mua trò chơi hoặc tín dụng cho ví tài khoản của mình hoặc thực hiện bất kỳ khoản thanh toán nào khác qua G.O.S shop bằng phương thức thanh toán, chúng tôi sẽ yêu cầu bạn cung cấp một số dữ liệu nhất định như địa chỉ thanh toán và chi tiết thanh toán của bạn</p><br />
                                <p className="text-csbm">+ Nội dung người dùng: Một số sản phẩm và dịch vụ của G.O.S shop sẽ cho phép bạn tải lên máy chủ của chúng tôi: tin nhắn, nhận xét, bài đăng trên diễn đàn, cấp độ trò chơi, video, hình ảnh và thông tin khác</p><br />
                                <p className="text-csbm">+ Dịch vụ khách hàng: Nếu bạn liên hệ với chúng tôi để được hỗ trợ, chúng tôi có thể yêu cầu bạn cung cấp thông tin về bạn (chẳng hạn như tên và chi tiết liên hệ của bạn) và bản chất của truy vấn của bạn và bạn có thể chọn gửi thêm thông tin về truy vấn của mình<br />
            * Khác: Chúng tôi có thể yêu cầu bạn cung cấp thông tin nếu bạn tham gia khảo sát nghiên cứu thị trường, yêu cầu phản hồi, beta và nghiên cứu thử nghiệm người dùng khác, các cuộc thi , khuyến mãi hoặc sự kiện hoặc đồng ý nhận thông tin tiếp thị từ chúng tôi</p><br />
                                <p className="text-csbm">+ Vui lòng đảm bảo rằng mọi chi tiết cá nhân bạn cung cấp đều chính xác và hiện hành vì chúng tôi sẽ gửi thông tin quan trọng liên quan đến tài khoản của bạn bằng thông tin liên hệ bạn cung cấp (bao gồm thông báo bảo mật tài khoản và bảo vệ dữ liệu). Hãy cho chúng tôi biết nếu có bất kỳ thay đổi. Bạn có thể kiểm tra và cập nhật thông tin bạn đã cung cấp cho chúng tôi bất cứ lúc nào thông qua Cài đặt thông tin người dùng của G.O.S shop. Luôn luôn có được sự đồng ý trước khi cung cấp cho chúng tôi thông tin cá nhân của bất kỳ ai khác (ví dụ: đối với các chương trình khuyến mãi giới thiệu bạn bè).</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="para-qsh-3">
                        <div className="column-green ml-3" />
                        <div className="column-black-qsh mb-4 d-flex justify-content-center align-items-center">
                            <label className="csc my-0">Chính sách Cookie</label>
                        </div>
                    </Row>
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={12} xl={12} className="qsh-dk pt-2">
                            <div className="box-text-qsh">
                                <p className="text-csc">- Hầu hết các trình duyệt cho phép bạn kiểm soát cookie thông qua các tùy chọn cài đặt của chúng. Tuy nhiên, nếu bạn giới hạn khả năng của các trang web để đặt cookie, bạn có thể làm xấu đi trải nghiệm người dùng tổng thể của mình, vì nó sẽ không còn được cá nhân hóa cho bạn nữa. Nó cũng có thể ngăn bạn lưu các cài đặt tùy chỉnh như thông tin đăng nhập.</p><br />
                                <p className="text-csc">- Chúng tôi đang sử dụng mô hình chọn tham gia mềm cho cookie của mình. Điều này có nghĩa là, khi bạn truy cập trang web hoặc ứng dụng của chúng tôi lần đầu tiên, chúng tôi sẽ không đặt bất kỳ cookie nào ngoại trừ những cookie cần thiết cho trang web của chúng tôi để chạy. Tuy nhiên, nếu bạn quyết định tiếp tục sử dụng trang web hoặc ứng dụng của chúng tôi bằng cách tương tác (nhấp chuột) với các tính năng khác nhau, chúng tôi sẽ cho rằng bạn rất vui khi nhận được tất cả cookie trên trang web hoặc ứng dụng G.O.S shop.</p><br />
                                <p className="text-csc">- Tại bất kỳ thời điểm nào, bạn có thể thay đổi cài đặt cookie của mình thông qua Trung tâm ưu tiên cookie của chúng tôi. Xin lưu ý rằng, để chúng tôi nhận ra rằng bạn đã từ chối cookie, chúng tôi phải đặt cookie từ chối G.O.S shop của chúng tôi trên thiết bị của bạn để chúng tôi có thể biết không đặt các cookie G.O.S shop khác vào lần tới khi bạn truy cập .</p><br />
                                <p className="text-csc">- Bạn cũng có thể sử dụng chức năng mà hầu hết các trình duyệt cung cấp cho bạn, cho phép bạn xem lại và xóa cookie, bao gồm cookie G.O.S shop. Tuy nhiên, xin lưu ý rằng trang web G.O.S shop sẽ không hoạt động đúng nếu không có cookie..</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="para-qsh-4">
                        <div className="column-green ml-3" />
                        <div className="column-black-qsh mb-4 d-flex justify-content-center align-items-center">
                            <label className="csht my-0">Chính sách Hoàn tiền</label>
                        </div>
                    </Row>
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={12} xl={12} className="qsh-dk pt-2">
                            <div className="box-text-qsh">
                                <p className="text-csht"> - Một số hạn chế áp dụng cho việc bán Sản phẩm được bán thông qua Dịch vụ có thể không áp dụng cho hàng hóa vật lý. Hoàn lại tiền sẽ không được cấp do bạn không hài lòng với sản phẩm hoặc nếu máy tính của bạn không đáp ứng các yêu cầu Sản phẩm tối thiểu.</p>
                                <p className="text-csht">- Các giao dịch mua được thực hiện với việc sử dụng máy chủ proxy, VPN hoặc công nghệ tương tự có thể không hoạt động và sẽ không đủ điều kiện để được hoàn tiền.</p>
                                <p className="text-csht"> - Hoàn lại tiền hoặc tín dụng lưu trữ chỉ có thể được cấp theo quyết định của G.O.S shop và mọi yêu cầu hoàn trả đều được xử lý theo từng trường hợp, có tính đến các điều kiện sau:<br />
            + Thời gian yêu cầu hoàn tiền / tín dụng của bạn không quá 7 ngày kể từ thời điểm mua.<br />
            + Trò chơi chưa được kích hoạt hoặc tải xuống (bao gồm cả đổi quà không cần chìa khóa).<br />
            + Khóa kích hoạt trò chơi (bao gồm mọi khóa thưởng hoặc khóa beta) chưa được tiết lộ cho bạn qua email hoặc trang web.<br />
            + Chúng tôi không thể xử lý hoàn tiền trong 48 giờ trước khi trò chơi được phát hành hoặc bắt đầu tải trước.<br />
            + Do hạn chế của Paypal, việc hoàn tiền Paypal không thể được xử lý sau 120 ngày kể từ khi mua.</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="para-qsh-4">
                        <div className="column-green ml-3" />
                        <div className="column-black-qsh mb-4 d-flex justify-content-center align-items-center">
                            <label className="csdt my-0">Chính sách Đổi trả </label>
                        </div>
                    </Row>
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={12} xl={12} className="qsh-dk pt-2">
                            <div className="box-text-qsh">
                                <p className="text-csdt">- Với bất kì lí do gì đối với sản phẩm, quý khách có quyền được yêu cầu đổi trả hàng hóa.</p>
                                <p className="text-csdt">- Đổi trả hoặc hoàn tiền chỉ có thể được cấp theo quyết định của G.O.S shop và mọi yêu cầu hoàn trả đều được xử lý theo từng trường hợp, có tính đến các điều kiện sau:</p>
                                <p className="text-csdt">+ Thời gian yêu cầu đổi trả của bạn không quá 7 ngày kể từ thời điểm mua.<br />
            + Trò chơi chưa được kích hoạt hoặc tải xuống (bao gồm cả đổi quà không cần chìa khóa).<br />
            + Khóa kích hoạt trò chơi (bao gồm mọi khóa thưởng hoặc khóa beta) chưa được tiết lộ cho bạn qua email hoặc trang web.<br />
            + Chúng tôi không thể xử lý đổi trả trong 48 giờ trước khi trò chơi được phát hành hoặc bắt đầu tải trước.
          </p></div>
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
export default Ownership;



