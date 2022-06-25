import Homepage from "src/pages/Homepage"
import ProductInfo from "src/pages/ProductInfo";
import ProductList from "src/pages/ProductList";
import ShoppingCart from "src/pages/ShoppingCart";
import CreateNewPassword from "src/pages/CreateNewPassword";

export const publicRoutes = [
    {path: '/', component : Homepage},
    {path: '/productlist', component: ProductList},
    {path: '/productinfo', component: ProductInfo},
    {path: '/shoppingcart', component: ShoppingCart},
    {path: '/createnewpassword', component: CreateNewPassword},
];

export const privateRoutes = [

];