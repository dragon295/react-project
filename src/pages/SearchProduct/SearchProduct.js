import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../component/Header.js'
import Footer from '../../component/Footer.js'
// import Search_icon from '../../img/search-icon.svg'
import './SearchProduct.css'
import { Container, Row, Col, Collapse, Dropdown, Modal } from 'react-bootstrap';
import ScrollToTop from "react-scroll-up";
const checked = {
    typed: false,
    typed1: false,
    typed2: false,
    typed3: false,
    typed4: false,
    typed5: false,
    typed6: false,
    typed7: false,
    typed8: false,
    typed9: false,
    typed10: false,
    typed11: false,
    typed12: false,
    typed13: false,
    typed14: false,
    typed15: false,
    typed16: false,
}
function SearchProduct() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    document.title = "Tìm kiếm sản phẩm";
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);

    const [show2, setShow2] = useState(false);

    const handleShow2 = (productInput) => {
        setShow2(true);
        getCountTimeout();
        let arrStorage = JSON.parse(localStorage.getItem("productsId"));
        if (!arrStorage) {
            // console.log(2);
            localStorage.setItem("productsId", JSON.stringify([{
                ...productInput,
                "total": 1
            }]));
        }
        else {
            const match = arrStorage.findIndex(item => item.id === productInput.id);
            (match === -1)
                ? localStorage.setItem("productsId", JSON.stringify([
                    ...arrStorage,
                    {
                        ...productInput,
                        "total": 1
                    }
                ]))
                : localStorage.setItem("productsId", JSON.stringify([
                    ...arrStorage.slice(0, match),
                    {
                        ...arrStorage[match],
                        "total": arrStorage[match]["total"] + 1
                    },
                    ...arrStorage.slice(match + 1)
                ]))
        }
    };

    const getCountTimeout = () => {
        setTimeout(() => {
            setShow2(false);
        }, 1050);
    };

    const [check, setCheck] = useState(checked);

    const handleCheck = (event) => {
        setCheck({ ...check, [event.target.name]: !check[event.target.name] })
    }

    const removeAllCheck = () => {
        setCheck(checked)
    }

    const [sp, setSp] = useState([]);
    useEffect(() => {
        async function getProducts() {
            const sanpham = await fetch("https://tda295.herokuapp.com/products?assasin=true").then(res => res.json());
            // Luu vao state
            setSp(sanpham);
        }
        // Goi API
        getProducts();
    }, []);

    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [sort1, setSort1] = useState("id");
    const [order, setOrder] = useState("asc");
    const [pageLimit, setPageLimit] = useState(6);
    const [allProducts, setAllProduct] = useState([]);
    const url = `https://tda295.herokuapp.com/search-product?_page=1&_limit=${pageLimit}&&q=${search}&&_order=${order}&&_sort=${sort1}`;

    const sortGiam = (event) => {
        let thuocTinh = (event.target.id).slice(0, -1);
        setSort1(thuocTinh);
        setOrder("asc");
    }
    const sortTang = (event) => {
        let thuocTinh = (event.target.id).slice(0, -1);
        setSort1(thuocTinh);
        setOrder("desc");
    }

    const [hideSeeMore, setHideSeeMore] = useState("flex")
    const seeMore = () => {
        let newPagelimit = pageLimit + 6;
        setPageLimit(newPagelimit);
        if (pageLimit >= 12) {
            setHideSeeMore("none")
        }
    }

    useEffect(() => {
        async function getProducts() {
            const products = await fetch(url).then(res => res.json());
            const allProducts = await fetch(`https://tda295.herokuapp.com/search-product?&&q=${search}`).then(res => res.json());
            // const products = await response.json();
            // Luu vao state
            setProducts(products);
            setAllProduct(allProducts);
        }
        // Goi API
        getProducts();
    }, [pageLimit, sort1, order, search]);


    const searchProduct = (event) => {
        setSearch(event.target.value);
        if (allProducts.length <= 6) {
            setHideSeeMore("none")
        } else {
            setHideSeeMore("flex")
        }
        // console.log(event.target.value)
    }

    const [heart, setHeart] = useState(false);

    const getHeart = () => {
        setTimeout(() => {
            setHeart(false);
        }, 1050);
    };


    const showHeart = (productInput) => {
        setHeart(true);
        getHeart()
        let arrStorage = JSON.parse(localStorage.getItem("productsHeart"))
        if (!arrStorage) {
            localStorage.setItem("productsHeart", JSON.stringify([productInput]));
        }
        else {
            const match = arrStorage.findIndex(item => item.id === productInput.id);
            if (match === -1) {
                localStorage.setItem("productsHeart", JSON.stringify([
                    ...arrStorage,
                    {
                        ...productInput
                    }
                ]))
            }
        }
    }


    return (
        <div>
            <Header />
            <section>
                <Container className="mt-5">
                    <Row>
                        <div className="column-green" />
                        <div className="column-black mb-4 d-flex justify-content-center align-items-center">
                            <label className="kqtk my-0">Kết quả tìm kiếm</label>
                        </div>
                    </Row>
                    <Row className="px-0 fix-row mt-3">
                        <Row>
                            {sp.map((product, index) => <Col key={index} xs={12} sm={12} md={4} lg={4} xl={4}>
                                <div className="sp-1">
                                    <Link to={`/product-detail/${product.id}`}><img className="img-fluid banner-sp-tk-1-1" src={product.imgIndex} alt="" /></Link>
                                    <div className="infor-sp-1">
                                        <div className="group-1-search w-100 d d-flex justify-content-between">
                                            <div className="gia-search">
                                                <label className="giam-gia-search float-left px-1 py-2 my-1">{product.discountBig}</label>
                                                <span className="gia-search-1 d-flex flex-column  ">{Intl.NumberFormat().format(product.priceBig1)}đ</span>
                                                <span className="gia-search-2 d-flex flex-column">{Intl.NumberFormat().format(product.priceBig2)}đ</span>
                                            </div>
                                            <div className="img-nsx">
                                                <img className="label-nsx img-fluid" src="https://dragon295.github.io/project-web-sale-game/img/steam.png" alt="" />
                                            </div>
                                        </div>

                                        <div className="group-2 d-flex justify-content-between">
                                            <button className="cart-search px-4 btn btn-success" onClick={() => handleShow2(product)}>
                                                <span className="name-gh-1">THÊM VÀO GIỎ HÀNG</span>
                                                <i className="fa fa-cart-plus icon-pay-1" aria-hidden="true" />
                                            </button>
                                            <button className="tym btn btn-success" onClick={() => showHeart(product)}>
                                                <div className="icon-c">
                                                    <i className="fa af fa-heart button-heart" aria-hidden="true" />
                                                    <i className="fa af fa-check" aria-hidden="true" />
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Col>)}
                        </Row>
                    </Row>
                    <Row className="mt-5 d-flex justify-content-between">
                        <div className="d-flex justify-content-center">
                            <div className="column-green" />
                            <div className="column-black d-flex justify-content-center align-items-center">
                                <label className="kqtk my-0">Tìm kiếm chi tiết</label>
                            </div>
                        </div>
                        <Dropdown className="sx-theo">
                            <Dropdown.Toggle id="dropdown-basic" className="px-3 py-1 mt-1 btn-drop">
                                Sắp xếp theo
                                <i className="fas fa-angle-down mt-1 ml-2"></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="drop-menu-search">
                                <Dropdown.Item onClick={(event) => sortTang(event)} id="priceNew1" >Gía cao nhất</Dropdown.Item>
                                <Dropdown.Item onClick={(event) => sortGiam(event)} id="priceNew2">Gía thấp nhất</Dropdown.Item>
                                <Dropdown.Item onClick={(event) => sortGiam(event)} id="name1">Từ A-Z</Dropdown.Item>
                                <Dropdown.Item onClick={(event) => sortTang(event)} id="name2">Từ Z-A</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Row>
                    <Row>
                        <Col xs={12} sm={12} md={4} lg={4} xl={4} className="px-0 thanh-search mt-4">
                            <div className="area-search p-1">
                                <div>
                                    <div className="area-1 px-3">
                                        <div className="input-search-chi-tiet my-4">
                                            <input type="text" className="form-control input-search-chi-tiet-1" placeholder="Tìm kiếm sản phẩm" aria-label="Tìm kiếm sản phẩm" aria-describedby="basic-addon2" onChange={(event) => searchProduct(event)} />
                                        </div>
                                    </div>
                                </div>
                                <div className="line-black px-0 w-100" />
                                <div className="area-2 px-3">
                                    <button className="btn btn-dark btn-dark-collapse w-100 d-flex justify-content-between align-items-center" onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open} >Thể loại
                                        <i className="fa fa-caret-down fa-caret-down-search" aria-hidden="true" />
                                    </button>
                                    <Row>
                                        <div className="col">
                                            <Collapse in={open}>
                                                <div className="card card-body px-0 py-0" id="example-collapse-text">
                                                    <div className="the-loai d-flex">
                                                        <input type="checkbox" name="typed" className="input-check-tk" id="checkbox" onChange={(event) => { handleCheck(event) }} checked={check.typed} />
                                                        <label htmlFor="checkbox" />
                                                        <span className=" ml-3 text-tl">Hành động</span>
                                                    </div>
                                                    <div className="the-loai  mt-3 d-flex">
                                                        <input type="checkbox" name="typed1" className="input-check-tk" id="checkbox" onChange={(event) => { handleCheck(event) }} checked={check.typed1} />
                                                        <label htmlFor="checkbox" />
                                                        <span className=" ml-3 text-tl">Chiến thuật</span>
                                                    </div>
                                                    <div className="the-loai  mt-3 d-flex">
                                                        <input type="checkbox" name="typed2" className="input-check-tk" id="checkbox" onChange={(event) => { handleCheck(event) }} checked={check.typed2} />
                                                        <label htmlFor="checkbox" />
                                                        <span className=" ml-3 text-tl">Nhập vai</span>
                                                    </div>
                                                    <div className="the-loai  mt-3 d-flex">
                                                        <input type="checkbox" name="typed3" className="input-check-tk" id="checkbox" onChange={(event) => { handleCheck(event) }} checked={check.typed3} />
                                                        <label htmlFor="checkbox" />
                                                        <span className=" ml-3 text-tl">Đua xe</span>
                                                    </div>
                                                    <div className="the-loai  mt-3 d-flex">
                                                        <input type="checkbox" name="typed4" className="input-check-tk" id="checkbox" onChange={(event) => { handleCheck(event) }} checked={check.typed4} />
                                                        <label htmlFor="checkbox" />
                                                        <span className=" ml-3 text-tl">Bắn súng</span>
                                                    </div>
                                                    <div className="the-loai my-3 d-flex">
                                                        <input type="checkbox" name="typed5" className="input-check-tk" id="checkbox" onChange={(event) => { handleCheck(event) }} checked={check.typed5} />
                                                        <label htmlFor="checkbox" />
                                                        <span className=" ml-3 text-tl">Indie</span>
                                                    </div>
                                                </div>
                                            </Collapse>
                                        </div>
                                    </Row>
                                </div>
                                <div className="line-black px-0 w-100" />
                                <div className="area-2 px-3">
                                    <button className="btn btn-dark btn-dark-collapse w-100 d-flex justify-content-between align-items-center" onClick={() => setOpen2(!open2)} aria-controls="example-collapse-text-2" aria-expanded={open2} >Nhà sản xuất
                                        <i className="fa fa-caret-down fa-caret-down-search" aria-hidden="true" />
                                    </button>
                                    <Row>
                                        <div className="col">
                                            <Collapse in={open2}>
                                                <div className="card card-body px-0 py-0" id="example-collapse-text-2">
                                                    <div className="the-loai d-flex">
                                                        <input type="checkbox" name="typed6" className="input-check-tk" id="checkbox" onChange={(event) => { handleCheck(event) }} checked={check.typed6} />
                                                        <label htmlFor="checkbox" />
                                                        <span className=" ml-3 text-tl">Square Enix</span>
                                                    </div>
                                                    <div className="the-loai mt-3 d-flex">
                                                        <input type="checkbox" name="typed7" className="input-check-tk" id="checkbox" onChange={(event) => { handleCheck(event) }} checked={check.typed7} />
                                                        <label htmlFor="checkbox" />
                                                        <span className=" ml-3 text-tl">CapCom</span>
                                                    </div>
                                                    <div className="the-loai  mt-3 d-flex">
                                                        <input type="checkbox" name="typed8" className="input-check-tk" id="checkbox" onChange={(event) => { handleCheck(event) }} checked={check.typed8} />
                                                        <label htmlFor="checkbox" />
                                                        <span className=" ml-3 text-tl">Sony Entertaiment</span>
                                                    </div>
                                                    <div className="the-loai  mt-3 d-flex">
                                                        <input type="checkbox" name="typed9" className="input-check-tk" id="checkbox" onChange={(event) => { handleCheck(event) }} checked={check.typed9} />
                                                        <label htmlFor="checkbox" />
                                                        <span className=" ml-3 text-tl">Ubisoft</span>
                                                    </div>
                                                    <div className="the-loai  mt-3 d-flex">
                                                        <input type="checkbox" name="typed10" className="input-check-tk" id="checkbox" onChange={(event) => { handleCheck(event) }} checked={check.typed10} />
                                                        <label htmlFor="checkbox" />
                                                        <span className=" ml-3 text-tl">Konami</span>
                                                    </div>
                                                    <div className="the-loai mt-3 d-flex">
                                                        <input type="checkbox" name="typed11" className="input-check-tk" id="checkbox" onChange={(event) => { handleCheck(event) }} checked={check.typed11} />
                                                        <label htmlFor="checkbox" />
                                                        <span className=" ml-3 text-tl">Microsoft Studios</span>
                                                    </div>
                                                    <div className="the-loai my-3 d-flex">
                                                        <input type="checkbox" name="typed12" className="input-check-tk" id="checkbox" onChange={(event) => { handleCheck(event) }} checked={check.typed12} />
                                                        <label htmlFor="checkbox" />
                                                        <span className=" ml-3 text-tl">Electronic Arts(EA)</span>
                                                    </div>
                                                </div>
                                            </Collapse>
                                        </div>
                                    </Row>
                                </div>
                                <div className="line-black px-0 w-100" />
                                <div className="area-2 px-3">
                                    <button className="btn btn-dark btn-dark-collapse d-flex justify-content-between align-items-center w-100" onClick={() => setOpen3(!open3)} aria-controls="example-collapse-text-3" aria-expanded={open3} >Theo giá
                                        <i className="fa fa-caret-down fa-caret-down-search" aria-hidden="true" />
                                    </button>
                                    <Row>
                                        <div className="col">
                                            <Collapse in={open3} >
                                                <div className="card card-body px-0 py-0" id="example-collapse-text-3">
                                                    <div className="the-loai d-flex">
                                                        <input type="checkbox" name="typed13" className="input-check-tk" id="checkbox" onChange={(event) => { handleCheck(event) }} checked={check.typed13} />
                                                        <label htmlFor="checkbox" />
                                                        <span className=" ml-3 text-tl">Dưới 200.000đ</span>
                                                    </div>
                                                    <div className="the-loai  mt-3 d-flex">
                                                        <input type="checkbox" name="typed14" className="input-check-tk" id="checkbox" onChange={(event) => { handleCheck(event) }} checked={check.typed14} />
                                                        <label htmlFor="checkbox" />
                                                        <span className=" ml-3 text-tl">Dưới 400.000đ</span>
                                                    </div>
                                                    <div className="the-loai  mt-3 d-flex">
                                                        <input type="checkbox" name="typed15" className="input-check-tk" id="checkbox" onChange={(event) => { handleCheck(event) }} checked={check.typed15} />
                                                        <label htmlFor="checkbox" />
                                                        <span className=" ml-3 text-tl">Dưới 600.000đ</span>
                                                    </div>
                                                    <div className="the-loai  my-3 d-flex">
                                                        <input type="checkbox" name="typed16" className="input-check-tk" id="checkbox" onChange={(event) => { handleCheck(event) }} checked={check.typed16} />
                                                        <label htmlFor="checkbox" />
                                                        <span className=" ml-3 text-tl ">Dưới 800.000đ</span>
                                                    </div>
                                                </div>
                                            </Collapse>
                                        </div>
                                    </Row>
                                </div>
                                <div className="line-black px-0 w-100" />
                                <div className="area-3 px-3 my-3">
                                    <div className="input-search-chi-tiet">
                                        <form action="search-product">
                                            <button className="btn btn-success btn-ap-dung w-100 d-flex justify-content-center align-items-center" type="submit">ÁP DỤNG
                                            </button>
                                        </form>
                                    </div>
                                </div>
                                <div className="line-black px-0 w-100" />
                                <div className="area-3 px-3 my-3">
                                    <div className="input-search-chi-tiet">
                                        <button className="btn btn-dark btn-xoa-bo-loc w-100 d-flex justify-content-center align-items-center" type="submit" onClick={removeAllCheck} >XÓA BỘ LỌC
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={8} lg={8} xl={8} className="pr-0 d-flex justify-content-between flex-wrap h-100 img-group-tim-kiem">
                            {products.map((product, index) => <Col key={index} xs={12} sm={12} md={4} lg={4} xl={4} className="pr-0 sp-line-1 mt-4">
                                <div className="sp-3">
                                    <Link to={`/product-detail/${product.id}`}><img className="img-fluid banner-sp-tk-1-2 " src={product.imgIndex} alt="" /></Link>
                                    <div className="infor-sp-3">
                                        <div className="group-1-search w-100 d d-flex justify-content-center">
                                            <div className="gia-search">
                                                <label className="giam-gia-tkct float-left px-1 py-2 my-1">{product.discountBig}</label>
                                                <span className="gia-tkct-1 d-flex flex-column ">{Intl.NumberFormat().format(product.priceBig1)}đ</span>
                                                <span className="gia-tkct-2 d-flex flex-column">{Intl.NumberFormat().format(product.priceBig2)}đ</span>
                                            </div>
                                        </div>
                                        <div className="group-2 d-flex justify-content-between">
                                            <button className="cart-search px-4 btn btn-success" onClick={() => handleShow2(product)}>
                                                <i className="fa fa-cart-plus" aria-hidden="true" />
                                            </button>
                                            <button className="tym btn btn-success" onClick={() => showHeart(product)}>
                                                <div className="icon-c">
                                                    <i className="fa af fa-heart button-heart" aria-hidden="true" />
                                                    <i className="fa af fa-check" aria-hidden="true" />
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Col>)}
                            <Col xs={12} sm={12} md={12} lg={12} xl={12} className="d-flex justify-content-center">
                                <div className="load-more">
                                    <button type="button" className="btn btn-load-more-2 flex-column align-items-center" onClick={() => seeMore()} style={{ display: hideSeeMore }}>
                                        <i className="fa fa-plus-circle icon-plus-2" aria-hidden="true" />
                                        <span className="text-plus-2 mt-2">Xem thêm</span>
                                    </button>
                                </div>
                            </Col>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer />

            <Modal className="modal d-flex justify-content-center" show={show2} animation={true}>
                <div className="modal-content-alert mr-3">
                    <div className="d-flex justify-content-center my-3">
                        <img src="https://dragon295.github.io/project-web-sale-game/img/check.png" className="img-tick" alt="" />
                    </div>
                    <p className="text-center">Sản phẩm đã được thêm vào giỏ hàng</p>
                </div>
            </Modal>

            <Modal className="modal d-flex justify-content-center" show={heart} animation={true}>
                <div className="modal-content-alert mr-3">
                    <div className="d-flex justify-content-center my-3">
                        <img src="https://dragon295.github.io/project-web-sale-game/img/heart-big.png" className="img-tick" alt="" />
                    </div>
                    <p className="text-center">Sản phẩm đã được thêm vào Yêu thích</p>
                </div>
            </Modal>

            <ScrollToTop showUnder={100} style={{ bottom: '110px' }} duration={1200} >
                <Link to="/cart">
                    <button className="btn-shopping" title="Go to shopping cart">
                        <i className="fa fa-shopping-cart cart-to" aria-hidden="true" />
                        <div className="circle-count-fixed">
                            <span>1</span>
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
export default SearchProduct;





