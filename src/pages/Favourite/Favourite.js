import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../component/Header.js'
import Footer from '../../component/Footer.js'
import './Favourite.css'
import { Container, Row, Col, } from 'react-bootstrap';
import ScrollToTop from "react-scroll-up";
function Favourite() {
    document.title = "Yêu thích";
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const [arrStorage, setArrStorage] = useState([]);
    useEffect(() => {
        const myCart = localStorage.getItem("productsHeart");
        if (myCart) {
            setArrStorage(JSON.parse(myCart));
        }
    }, [arrStorage.length])
    const addAll = () => {

        setArrStorage([]);
        const myFavorite = JSON.parse(localStorage.getItem("productsHeart"));
        for (let i = 0; i < myFavorite.length; i++) {
            // console.log(myFavorite[i])
            let arrStorage2 = JSON.parse(localStorage.getItem("productsId"));
            if (!arrStorage2) {
                localStorage.setItem("productsId", JSON.stringify([{
                    ...myFavorite[i],
                    "total": 1
                }]));
            }
            else {
                const match = arrStorage2.findIndex(item => item.id === myFavorite[i].id);
                (match === -1)
                    ? localStorage.setItem("productsId", JSON.stringify([
                        ...arrStorage2,
                        {
                            ...myFavorite[i],
                            "total": 1
                        }
                    ]))
                    : localStorage.setItem("productsId", JSON.stringify([
                        ...arrStorage2.slice(0, match),
                        {
                            ...arrStorage2[match],
                            "total": arrStorage2[match]["total"] + 1
                        },
                        ...arrStorage2.slice(match + 1)
                    ]))
            }
        }
        localStorage.setItem("productsHeart", JSON.stringify([]));
    }

    const handDelete = (index) => {
        const newCart = [
          ...arrStorage.slice(0, index),
          ...arrStorage.slice(index + 1)
        ];
    
        setArrStorage(newCart);
        localStorage.setItem("productsHeart", JSON.stringify(newCart));
      }

    return (
        <div>
            <Header />
            <section>
                <Container className="mt-5">
                    <div className="row">
                        <div className="column-green ml-3" />
                        <div className="column-black d-flex justify-content-center align-items-center">
                            <label className="yt my-0">Yêu thích</label>
                        </div>
                    </div>
                    {arrStorage.length === 0
                        ? <div className="text-center w-100"><p className="text-white mt-4">Không có sản phẩm trong Yêu thích</p></div>
                        : arrStorage.map((product, index) => <Row key={index} className="mx-0 mt-4">
                            <Col xs={12} sm={12} md={12} lg={12} xl={12} className="sp-yt-1 pl-0 d-flex align-items-center">
                                <Link to={`/product-detail/${product.id}`} className="img-yts"><img src={product.imgIndex} alt="" className="img-fluid w-100" /></Link>
                                <div className="d-flex justify-content-between align-items-center w-100 box-all-yt">
                                    <Link to={`/product-detail/${product.id}`} className="tag-name-yt"><div className="w-100 ml-2 mr-2">
                                        <span>{product.name}</span>
                                    </div></Link>
                                    <div className="d-flex justify-content-around align-items-center w-75 infor-yt">
                                        <div className="sl-yt d-flex ">
                                            <div className="date-yt mt-1">{product.date}</div>
                                        </div>
                                        <div className="gia-sp-yt mx-4 float-right ">
                                            <label className="giam-gia-yt d-flex justify-content-center align-items-center mt-2">{product.discountBig}</label>
                                            <span className="gia-yt-1 d-flex flex-column my-0">{Intl.NumberFormat().format(product.priceBig1)}đ</span>
                                            <span className="gia-yt-2 d-flex flex-column my-0">{Intl.NumberFormat().format(product.priceBig2)}đ</span>
                                        </div>
                                        <div className="trash-icon-yt">
                                            <button type="button" className="btn-remove-yt" id="remove-yt" onClick={() => handDelete(index)}>
                                                <i className="fa fa-trash" aria-hidden="true" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>)}

                    <Row>
                        <Col xs={12} sm={12} md={12} lg={12} xl={12} className="d-flex justify-content-end">
                            <button type="button" className="btn btn-success btn-add-all" onClick={() => { addAll() }}>Thêm tất cả vào giỏ hàng</button>
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
export default Favourite;
