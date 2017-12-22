/**
 * Created by Administrator on 2017/12/20.
 */
import Root from './Root';
import Home from './containers/Home'
import ManagerHome from './containers/ManagerHome'
import StaffHome from './containers/StaffHome'
import Login from './containers/Login'

const routes = [
  { component: Root,
    routes: [
      { path: '/',
        exact: true,
        component: Home,
        // routes: [
        //   { path: '/child/:id/grand-child',
        //     component: GrandChild
        //   }
        // ]
      },
      { path: '/Login',
          component: Login,
      },
      { path: '/ManagerHome',
          component: ManagerHome,
      },
      { path: '/StaffHome',
          component: StaffHome,
      },
    ]
  }
];

export default routes;