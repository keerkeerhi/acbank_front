/**
 * Created by Administrator on 2017/12/20.
 */
import Root from './Root';
import Home from './containers/Home'
import Detail from './containers/Detail'
import Login from './containers/Login'

const routes = [
  { component: Root,
    routes: [
      { path: '/',
        exact: true,
        component: Home
      },
      { path: '/Detail',
        component: Detail,
        // routes: [
        //   { path: '/child/:id/grand-child',
        //     component: GrandChild
        //   }
        // ]
      },
      { path: '/Login',
          component: Login,
      }
    ]
  }
];

export default routes;