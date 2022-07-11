import styles from './AdminProducts.module.scss';
import classnames from 'classnames/bind';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
const cx = classnames.bind(styles);

function AdminProducts() {
  const userId = useSelector((state) => state.auth.user.id);
  const [total, setTotal] = useState(0);
  const [perPage, setPerPage] = useState(1);
  const [totalPage, setTotalPage] = useState(Math.ceil(total / perPage));
  const [filterList, setFilterList] = useState({
    page: 1,
  });
  const [shoppingCarts, setShoppingCarts] = useState([]);
  useEffect(() => {
    axios.post('/api/shoppingcart/getproduct', { user: userId, ...filterList }).then((response) => {
      setShoppingCarts((prev) => response.data.shoppingCarts);
      setTotal((prev) => response.data.total);
      setPerPage((prev) => response.data.perPage);
    });
  }, [filterList]);
  useEffect(() => {
    setTotalPage((prev) => Math.ceil(total / perPage));
  }, [total, perPage]);
  const createArrayPage = (totalPage, page) => {
    const numLeft = page > 2 ? 3 : page;
    const numRight = totalPage - page > 2 ? 2 : totalPage - page;
    const pageList = Array.from(Array.from(Array(totalPage).keys()));
    return pageList.slice(page - numLeft, page + numRight);
  };
  const nextPage = (totalPage, page) => {
    if (page + 1 <= totalPage)
      setFilterList((prev) => {
        return { ...prev, page: page + 1 };
      });
  };
  const prevPage = (page) => {
    if (page - 1 >= 1)
      setFilterList((prev) => {
        return { ...prev, page: page - 1 };
      });
  };
  const firstPage = () => {
    setFilterList((prev) => {
      return { ...prev, page: 1 };
    });
  };
  const lastPage = (totalPage) => {
    setFilterList((prev) => {
      return { ...prev, page: totalPage };
    });
  };
  const customTimestamp = (timestamp) => {
    const month = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const d = new Date(timestamp);
    return d.getDate() + ' ' + month[d.getMonth()] + ' ' + d.getFullYear();
  };
  const goToPage = (page) => {
    setFilterList((prev) => {
      return { ...prev, page };
    });
  };
  return (
    <div className={cx('wrapper')}>
      <div className={cx('grid', 'wide', 'container')}>
        <div className={cx('products-title', 'row')}>
          <div className={cx('products-title-item', 'col', 'col-4')}>Products</div>
          <div className={cx('products-title-item', 'col', 'col-2')}>Sold</div>
          <div className={cx('products-title-item', 'col', 'col-2')}>Date added</div>
          <div className={cx('products-title-item', 'col', 'col-2')}>Profit ($)</div>
          <div className={cx('products-title-item', 'col', 'col-2')}></div>
        </div>
        <div className={cx('products-body-wrapper')}>
          {shoppingCarts.map((shoppingCart, index) => {
            return (
              <div key={index} className={cx('products-body', 'row', { 'dark-theme': index % 2 === 1 })}>
                <div className={cx('products-body-item', 'col', 'col-4')}>{shoppingCart.product.name}</div>
                <div className={cx('products-body-item', 'col', 'col-2')}>
                  {shoppingCart.quantity}/{shoppingCart.product.quantity}
                </div>
                <div className={cx('products-body-item', 'col', 'col-2')}>
                  {customTimestamp(shoppingCart.product.updatedAt)}
                </div>
                <div className={cx('products-body-item', 'col', 'col-2')}>
                  {shoppingCart.quantity * shoppingCart.product.price}
                </div>
                <div className={cx('products-body-item', 'col', 'col-2')}>
                  <div className={cx('status-wrapper')}>
                    <div className={cx('status-header')}>
                      Action <i className={cx('icon-arrow', 'dropdown-icon')}></i>
                      <div className={cx('status-options')}>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className={cx('footer')}>
          <div className={cx('footer-info')}>
            Show {filterList.page} to {totalPage} of {total} entries
          </div>
          <div className={cx('page')}>
            {/* <div className={cx('page-dropdown')}>
              <div className={cx('page-dropdown-item')}>
                {totalPage}
                <i className={cx('icon-arrow', 'page-icon-dropdown')}></i>
              </div>
            </div> */}
            <div className={cx('page-list')}>
              <div onClick={(e) => firstPage()} className={cx('page-item')}>
                <i className={cx('icon-first')}></i>
              </div>
              <div onClick={(e) => prevPage(filterList.page)} className={cx('page-item')}>
                <i className={cx('icon-prev')}></i>
              </div>
              {createArrayPage(totalPage, filterList.page).map((item, index) => {
                return (
                  <div
                    key={index}
                    onClick={(e) => goToPage(item + 1)}
                    className={cx('page-item', { active: item + 1 === filterList.page })}
                  >
                    {item + 1}
                  </div>
                );
              })}
              <div onClick={(e) => nextPage(totalPage, filterList.page)} className={cx('page-item')}>
                <i className={cx('icon-next')}></i>
              </div>
              <div onClick={(e) => lastPage(totalPage)} className={cx('page-item')}>
                <i className={cx('icon-last')}></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminProducts;
