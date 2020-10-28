import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../component/Header.js'
import Footer from '../../component/Footer.js'
import './Cart.css'
import { Container, Row, Col } from 'react-bootstrap';
import ScrollToTop from "react-scroll-up";
function Cart() {
  document.title = "Giỏ hàng";
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);



  const [arrStorage, setArrStorage] = useState([]);
  useEffect(() => {
    const myCart = localStorage.getItem("productsId");
    if (myCart) {
      setArrStorage(JSON.parse(myCart));
    }
  }, [arrStorage.length])


  const handleUpQuantity = (index) => {
    const newCart = [
      ...arrStorage.slice(0, index),
      {
        ...arrStorage[index],
        total: arrStorage[index].total + 1
      },
      ...arrStorage.slice(index + 1)
    ];
    setArrStorage(newCart);
    localStorage.setItem("productsId", JSON.stringify(newCart));
  }

  const handleDownQuantity = (index) => {
    let newCart;
    if (arrStorage[index].total === 1) {
      newCart = [
        ...arrStorage.slice(0, index),
        ...arrStorage.slice(index + 1)
      ]
    } else {
      newCart = [
        ...arrStorage.slice(0, index),
        {
          ...arrStorage[index],
          total: arrStorage[index].total - 1
        },
        ...arrStorage.slice(index + 1)
      ];
    }
    setArrStorage(newCart);
    localStorage.setItem("productsId", JSON.stringify(newCart));
  }


  const caculator = (arr) => {
    let sum = 0;
    for (var i = 0; i < arr.length; i++) {
      sum += arr[i].priceBig2 * arr[i].total;
    }
    return sum;
  }

  const [promoCode, setStatePromoCode] = React.useState({
    sale: 0,
  });

  let code = '';

  const getPromoCodeHandler = e => {
    code = e.target.value;
    return code;
  };

  const activePromoCodeHandler = () => {
    if (code === 'Nochance') {
      setStatePromoCode({ sale: 0.7, percent: "70%" });
    } else {
      setStatePromoCode({ sale: 1 });
      alert('Mã giảm giá sai ');
    }
  };

  const discount = promoCode.sale * caculator(arrStorage);

  const handDelete = (index) => {
    const newCart = [
      ...arrStorage.slice(0, index),
      ...arrStorage.slice(index + 1)
    ];

    setArrStorage(newCart);
    localStorage.setItem("productsId", JSON.stringify(newCart));
  }


  return (
    <div>
      <Header />
      <section>
        <Container className="mt-5">
          <Row>
            <div className="column-green ml-3 " />
            <div className="column-black d-flex justify-content-center align-items-center">
              <label className="gh my-0">Giỏ hàng</label>
            </div>
          </Row>
          {
            arrStorage.length === 0
              ? <div className="text-center w-100"><p className="text-white mt-4">Không có sản phẩm trong Giỏ hàng</p></div>
              :
              arrStorage.map((product, index) => <Row key={index} className="mx-0 box-gh-1 my-3 mt-4">
                <Col xs={12} sm={12} md={12} lg={12} xl={12} className="sp-gh-1 pl-0 d-flex align-items-center">
                  <Link to={`/product-detail/${product.id}`} className="img-gh"><img src={product.imgIndex} className="img-fluid w-100" alt="" /></Link>
                  <div className="d-flex justify-content-between align-items-center w-100 box-all-gh">
                    <Link to={`/product-detail/${product.id}`} className="tag-name-gh">
                      <span>{product.name}</span>
                    </Link>
                    <div className="d-flex justify-content-around align-items-center w-75 infor-gh">
                      <span className="product-price-f">780.000</span>
                      <span className="product-price">195.000</span>
                      <div className="d-flex sl-gh product-quantity">
                        <button type="button" className="button-minus px-0" onClick={() => handleDownQuantity(index)}>
                          <i className="fa fa-minus-circle" aria-hidden="true" />
                        </button>
                        <input type="text" name="quantity" value={product.total} className="num-gh" maxLength={2} />
                        <button type="button" className="button-plus px-0" onClick={() => handleUpQuantity(index)}>
                          <i className="fa fa-plus-circle" aria-hidden="true" />
                        </button>
                      </div>
                      <div className="gia-sp-giohang mx-4">
                        <label className="giam-gia-gh d-flex justify-content-center align-items-center mt-2">{product.discountBig}</label>
                        <span className="gia-giohang-1 d-flex flex-column my-0 product-subtotal-f">{Intl.NumberFormat().format(product.priceBig1)}</span>
                        <span className="gia-giohang-2 d-flex flex-column my-0 product-subtotal">{Intl.NumberFormat().format(product.priceBig2)}</span>
                      </div>
                    </div>
                  </div>
                  <button type="button" className="btn-remove-gh" id="remove-2" onClick={() => handDelete(index)} >
                    <i className="fa fa-trash" aria-hidden="true" />
                  </button>
                </Col>
              </Row>)}
          <Row className="mx-0 cart-checkout">
            <Col xs={12} sm={6} md={6} lg={6} xl={6} className="d-flex justify-content-center sert pit-1">
              <div className="cart-coupon">
                <h5 className="title-coupon pl-2">Mã giảm giá</h5>
                <input className=" d-block input-sell" type="text" placeholder="Nhập mã giảm giá" onChange={getPromoCodeHandler} />
                <button className="apply-coupon link-to mt-3" onClick={activePromoCodeHandler}>Áp dụng mã giảm giá</button>
              </div>
            </Col>
            <Col xs={12} sm={6} md={6} lg={6} xl={6} className="d-flex justify-content-center sert pit-2 ">
              <div className="cart-total w-75">
                <h5 className="title-coupon pl-2">Tổng tiền</h5>
                <table className="h-75 w-100">
                  <tbody className="w-100">
                    <tr className="cart-subtotal">
                      <th>Tạm tính : </th>
                      <td>{Intl.NumberFormat().format(caculator(arrStorage))}</td>
                    </tr>
                    <tr className="cart-discount">
                      <th>Giảm giá :<span className="discount-rate ml-1" />{promoCode.percent}</th>
                      <td className="fix-320">{Intl.NumberFormat().format(discount)}</td>
                    </tr>
                    <tr className="order-total">
                      <th>Tổng tiền :</th>
                      <td className="amount">{Intl.NumberFormat().format(caculator(arrStorage) - discount)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={12} md={12} lg={12} xl={12} className="d-flex justify-content-end">
              <Link className="move-to-pay" to="pay"><button type="button" className="btn btn-success btn-move-to-pay">Tiến hành đặt hàng</button></Link>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />

      <ScrollToTop showUnder={100} duration={1500}>
        <button className="btn-top" title="Go to top">
          <i className="fa fa-arrow-up" aria-hidden="true"></i>
        </button>
      </ScrollToTop>
    </div>
  )
}
export default Cart;

