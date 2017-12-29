/**
 * Created by Administrator on 2017/12/20.
 */
import Root from './Root';
import Home from './containers/Home'
import ManagerHome from './containers/ManagerHome'
import StaffHome from './containers/StaffHome'
import Login from './containers/Login'
import Bussiness from './containers/Bussiness'
import ProductionDeposit from './containers/commerce/Production_deposit';
import ProductionLoans from './containers/commerce/Production_loans';
import RateDeposit from './containers/commerce/Rate_deposit';
import RegisterCustomer from './containers/commerce/RegisterCustomer';
import TelephoneDirector from './containers/commerce/TelephoneDirectory';

const routes = [
    {
        component: Root,
        routes: [
            {
                path: '/',
                exact: true,
                component: Home,
                // routes: [
                //   { path: '/child/:id/grand-child',
                //     component: GrandChild
                //   }
                // ]
            },
            {
                path: '/Login',
                component: Login,
            },
            {
                path: '/ManagerHome',
                component: ManagerHome,
            },
            {
                path: '/StaffHome/:id',
                component: StaffHome,
            },
            {
                path: '/Bussiness/:id',
                component: Bussiness,
            },
            {
                path: '/registerCustomer/:id',
                component: RegisterCustomer,
            },
            {
                path: '/ProductionDeposit',
                component: ProductionDeposit,
            },
            {
                path: '/ProductionLoans',
                component: ProductionLoans,
            },
            {
                path: '/RateDeposit',
                component: RateDeposit,
            },
            {
                path: '/TelephoneDirector',
                component: TelephoneDirector,
            },
        ]
    }
];

export default routes;