import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Article from './pages/Article/Article';
import ArticleDetailDt1 from './pages/ArticleDetail/ArticleDetailDt1';
import ArticleDetailDt2 from './pages/ArticleDetail/ArticleDetailDt2';
import ArticleDetailDt3 from './pages/ArticleDetail/ArticleDetailDt3';
import ArticleDetailDt4 from './pages/ArticleDetail/ArticleDetailDt4';
import ArticleDetailDpd from './pages/ArticleDetail/ArticleDetailDpd';
import ArticleDetailSg from './pages/ArticleDetail/ArticleDetailSg';
import ArticleDetailFf7 from './pages/ArticleDetail/ArticleDetailFf7';
import ArticleDetailDbh from './pages/ArticleDetail/ArticleDetailDbh';
import ArticleDetailFc from './pages/ArticleDetail/ArticleDetailFc';
import ArticleDetailOri from './pages/ArticleDetail/ArticleDetailOri';
import Cart from './pages/Cart/Cart';
import Index from './pages/Index/Index';
import Favourite from './pages/Favourite/Favourite';
import Ownership from './pages/Ownership/Ownership';
import PayComplete from './pages/PayComplete/PayComplete';
import PayTutorial from './pages/PayTutorial/PayTutorial';
import Pay from './pages/Pay/Pay';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import SearchArticle from './pages/SearchArticle/SearchArticle';
import SearchProduct from './pages/SearchProduct/SearchProduct';
import TagDeathStranding from './pages/Tag/TagDeathStranding';
import TagFF7 from './pages/Tag/TagFF7';
import TagDesperados from './pages/Tag/TagDesperados';
import TagFarcry from './pages/Tag/TagFarcry';
import TagGathering from './pages/Tag/TagGathering';
import TagDetroit from './pages/Tag/TagDetroit';
import TagOri from './pages/Tag/TagOri';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {

  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/article-detail1">
            <ArticleDetailDt1 />
          </Route>
          <Route path="/article-detail2">
            <ArticleDetailDpd />
          </Route>
          <Route path="/article-detail3">
            <ArticleDetailOri />
          </Route>
          <Route path="/article-detail4">
            <ArticleDetailSg />
          </Route>
          <Route path="/article-detail5">
            <ArticleDetailFf7 />
          </Route>
          <Route path="/article-detail6">
            <ArticleDetailDbh />
          </Route>
          <Route path="/article-detail7">
            <ArticleDetailDt2 />
          </Route>
          <Route path="/article-detail8">
            <ArticleDetailFc />
          </Route>
          <Route path="/article-detail9">
            <ArticleDetailDt3 />
          </Route>
          <Route path="/article-detail10">
            <ArticleDetailDt4 />
          </Route>
          <Route path="/article" exact>
            <Article />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/favourite">
            <Favourite />
          </Route>
          <Route path="/ownership">
            <Ownership />
          </Route>
          <Route path="/pay-complete">
            <PayComplete />
          </Route>
          <Route path="/pay-tutorial">
            <PayTutorial />
          </Route>
          <Route path="/pay">
            <Pay />
          </Route>
          <Route path="/product-detail/:id" exact>
            <ProductDetail />
          </Route>
          <Route path="/search-article">
            <SearchArticle />
          </Route>
          <Route path="/search-product">
            <SearchProduct />
          </Route>
          <Route path="/tagori" exact>
            <TagOri />
          </Route>
          <Route path="/tagdt" exact>
            <TagDeathStranding />
          </Route>
          <Route path="/tagff7" exact>
            <TagFF7 />
          </Route>
          <Route path="/tagdpd" exact>
            <TagDesperados />
          </Route>
          <Route path="/tagfc" exact>
            <TagFarcry />
          </Route>
          <Route path="/tagsg" exact>
            <TagGathering />
          </Route>
          <Route path="/tagdbh" exact>
            <TagDetroit />
          </Route>
          <Route path="/">
            <Index />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

