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
import TelephoneDirectory from './containers/commerce/TelephoneDirectory';
import LoansDetail from './containers/commerce/ProductionLoans/LoansDetail';
import LoansHome from './containers/commerce/ProductionLoans/LoansHome';
import DepositDetail from './containers/commerce/ProductionDeposit/DepositDetail'
import DepositHome from './containers/commerce/ProductionDeposit/DepositHome'

const routes = [
    {
        component: Root,
        redirect: '/home',
        routes: [
            {
                path: '/home',
                // exact: true,
                component: Home,
                routes: [
                    {
                        path: '/home/ManagerHome',
                        component: ManagerHome,
                    },
                    {
                        path: '/home/StaffHome/:id',
                        component: StaffHome,
                    },
                ]
            },
            {
                path: '/Login',
                component: Login,
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
                routes: [
                    {
                        path: '/ProductionDeposit/DepositDetail/:id',
                        component: DepositDetail
                    },
                    {
                        path: '/ProductionDeposit/DepositHome',
                        component: DepositHome
                    }
                ]
            },
            {
                path: '/ProductionLoans',
                component: ProductionLoans,
                routes: [
                    {
                        path: '/ProductionLoans/LoansDetail/:id',
                        component: LoansDetail
                    },
                    {
                        path: '/ProductionLoans/LoansHome',
                        component: LoansHome
                    }
                ]
            },
            {
                path: '/RateDeposit',
                component: RateDeposit,
            },
            {
                path: '/TelephoneDirectory',
                component: TelephoneDirectory,
            },
        ]
    }
];

export default routes;