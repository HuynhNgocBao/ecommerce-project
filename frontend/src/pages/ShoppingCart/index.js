import classnames from 'classnames/bind';
import styles from './ShoppingCart.module.scss';
import SizeList from 'src/components/UserSidebar/SizeList';
import ColorList from 'src/components/UserSidebar/ColorList';
import Quantity from '../ProductInfo/Quantity';
import Button from 'src/components/Button';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import { addShoppingCart } from 'src/features/shoppingCart/shoppingCartSlice';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
const cx = classnames.bind(styles);

function ShoppingCart() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user.id);
  const shoppingCarts = useSelector((state) => state.shoppingCart.value).filter((a) => a.user === user);
  const cld = new Cloudinary({
    cloud: {
      cloudName: process.env.REACT_APP_CLOUD_NAME_CLOUDINARY,
    },
  });

  return (
    <div className={cx('wrapper')}>
      <div className={cx('container', 'grid', 'wide')}>
        <div className={cx('title')}>MY BAG</div>
        <div className={cx('row')}>
          <div className={cx('info', 'col', 'col-9')}>
            <div className={cx('info-row')}>
              <div className={cx('row')}>
                <div className={cx('info-title', 'col', 'col-4')}>Product</div>
                <div className={cx('info-title', 'col', 'col-2')}>Color</div>
                <div className={cx('info-title', 'col', 'col-2')}>Size</div>
                <div className={cx('info-title', 'col', 'col-2')}>Quantity</div>
                <div className={cx('info-title', 'col', 'col-2')}>Amount</div>
              </div>
            </div>
            {shoppingCarts.map((shoppingCart, index) => {
              return (
                <div key={index} className={cx('info-row')}>
                  <div className={cx('row')}>
                    <div className={cx('info-product', 'info-item', 'col', 'col-4')}>
                      <div className={cx('row', "info-item-row")}>
                        <div className={cx('col', 'col-4')}>
                          <AdvancedImage
                            className={cx('info-photo')}
                            cldImg={cld.image(shoppingCart.productPhoto)}
                            alt="product"
                          />
                        </div>
                        <div className={cx('col', 'col-4', 'info-name-wrapper')}>
                          <div className={cx('info-name')}>{shoppingCart.productName}</div>
                          <div className={cx('info-action')}>
                            <Link to={`/productinfo/${shoppingCart.product}?mode=update`}><Button className={cx('info-action-btn')}>Change</Button></Link>
                            <Button className={cx('info-action-btn')}>Remove</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={cx('info-color', 'info-item', 'col', 'col-2')}>
                      <ColorList values={[shoppingCart.color]} />
                    </div>
                    <div className={cx('info-size', 'info-item', 'col', 'col-2')}>
                      <SizeList values={[shoppingCart.size]} />
                    </div>
                    <div className={cx('info-quantity', 'info-item', 'col', 'col-2')}>
                      <Quantity quantityDefault={shoppingCart.quantity} quantityMax={shoppingCart.productQuantity} />
                    </div>
                    <div className={cx('info-amount', 'info-item', 'col', 'col-2')}>
                      ${shoppingCart.productPrice * shoppingCart.quantity}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={cx('total', 'col', 'col-3')}>
            <div className={cx('total-title')}>Total</div>
            <div className={cx('total-body')}>
              <div className={cx('total-item')}>
                <div className={cx('total-item-name')}>Shipping & Handling:</div>
                <div className={cx('total-item-price')}>Free</div>
              </div>
              <div className={cx('total-item')}>
                <div className={cx('total-item-name')}>Shipping & Handling:</div>
                <div className={cx('total-item-price')}>Free</div>
              </div>
              <div className={cx('total-item', 'subtotal')}>
                <div className={cx('total-item-name')}>Subtotal:</div>
                <div className={cx('total-item-price')}>Free</div>
              </div>
            </div>
            <Button fourth className={cx('submit-btn')}>
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
