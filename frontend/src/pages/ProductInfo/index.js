import styles from './ProductInfo.module.scss';
import classnames from 'classnames/bind';
import SizeList from 'src/components/UserSidebar/SizeList';
import ColorList from 'src/components/UserSidebar/ColorList';
import Button from 'src/components/Button';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import ProductImageList from './ProductImageList';
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import Quantity from './Quantity';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addShoppingCart, updateShoppingCart } from 'src/features/shoppingCart/shoppingCartSlice';
import productCategorySlice from 'src/features/productCategory/productCategorySlice';
const cx = classnames.bind(styles);

function ProductInfo() {
  const location = useLocation();
  const search = location.search;
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user.id);
  const shoppingCart = useSelector((state) => state.shoppingCart.value);
  const [moreProducts, setMoreProducts] = useState([]);
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  let mode = new URLSearchParams(search).get('mode');
  if (!mode) mode = 'add';
  console.log(shoppingCart.find((a) => a.user === user && a.product === id));
  const [filterList, setFilterList] = useState({
    sizeFilter: null,
    colorFilter: null,
    quantity: 0,
  });
  const cld = new Cloudinary({
    cloud: {
      cloudName: process.env.REACT_APP_CLOUD_NAME_CLOUDINARY,
    },
  });

  useEffect(() => {
    axios
      .post('/api/product/getproductinfo', { id })
      .then((response) => {
        setProduct((prev) => response.data);
        return response.data;
      })
      .then((data) => {
        axios
          .post('/api/product/getmoreproductswithfield', {
            field: 'brand',
            value: data.brand,
            exceptid: data._id,
          })
          .then((response) => setMoreProducts((prev) => response.data));
      });
  }, [id]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      mode === 'add' &&
      !shoppingCart.find((a) => {
        return a.user === user && a.product === id;
      })
    )
      dispatch(
        addShoppingCart({
          productPhoto: product.photos[0],
          productName: product.name,
          productQuantity: product.quantity,
          productPrice: product.price,
          color: filterList.colorFilter,
          size: filterList.sizeFilter,
          quantity: filterList.quantity,
          user,
          product: id,
        }),
      );
    else if (mode === 'update') {
      dispatch(
        updateShoppingCart({
          productPhoto: product.photos[0],
          productName: product.name,
          productQuantity: product.quantity,
          productPrice: product.price,
          color: filterList.colorFilter,
          size: filterList.sizeFilter,
          quantity: filterList.quantity,
          user,
          product: id,
        }),
      );
    }
    // axios
    //   .post('/api/shoppingcart/addshoppingcart', {
    //     color: filterList.colorFilter,
    //     size: filterList.sizeFilter,
    //     quantity: filterList.quantity,
    //     user,
    //     product: product._id,
    //   })
    //   .catch((err) => console.log(err));
  };
  if (!product) return <></>;
  return (
    <div className={cx('wrapper')}>
      <Link to={`/productlist?genderFilter=${product.gender}&typeFilter=${product.type}`} className={cx('path')}>
        {product.gender}/{product.type}
      </Link>
      <div className={cx('container')}>
        <ProductImageList photos={product.photos}></ProductImageList>
        <AdvancedImage cldImg={cld.image(product.photos[0])} alt="Product" className={cx('product-img-main')} />
        <div className={cx('product-info')}>
          <span className={cx('product-name')}>{product.name}</span>
          <span className={cx('product-price')}>${product.price}</span>
          <div className={cx('product-review')}>
            <div className={cx('product-star')}>
              <i className={cx('icon-star')} />
              <i className={cx('icon-star')} />
              <i className={cx('icon-star')} />
              <i className={cx('icon-star')} />
              <i className={cx('icon-star')} />
            </div>
            <span className={cx('product-number-review')}>0 review</span>
          </div>
          <div className={cx('filter-title')}>Size</div>
          <SizeList values={product.size} setFilterList={setFilterList} />
          <div className={cx('filter-title')}>Color</div>
          <ColorList values={product.colors} setFilterList={setFilterList} />
          <div className={cx('quantity-wrapper')}>
            <div className={cx('quantity-title')}>Quantity</div>
            <Quantity quantityMax={product.quantity} setFilterList={setFilterList} />
          </div>
          <Button
            third
            className={cx('add-to-cart')}
            disabled={filterList.colorFilter === null || filterList.sizeFilter === null || filterList.quantity === 0}
            onClick={handleSubmit}
          >
            {mode === 'add' ? 'Add to cart' : 'Update cart'}
          </Button>
          <div className={cx('product-result')}>
            <div className={cx('product-result-info')}>{product.description}</div>
          </div>
        </div>
        <div style={{ marginLeft: 'auto' }}>
          <div className={cx('more-title')}>
            <h4>More from</h4>
            <p>{product.brand}</p>
          </div>
          <ProductImageList
            photos={moreProducts.map((product, index) => {
              return product.photos[0];
            })}
            ids={moreProducts.map((product, index) => {
              return product._id;
            })}
          ></ProductImageList>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
