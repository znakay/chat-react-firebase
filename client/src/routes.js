import { Chat, Login, SignUp } from './components/organisms';

import { CHAT_ROUTE, LOGIN_ROUTE, SIGN_UP_ROUTE } from './util/constants';

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Login,
  },
  {
    path: SIGN_UP_ROUTE,
    Component: SignUp,
  },
];

export const privateRoutes = [
  {
    path: CHAT_ROUTE,
    Component: Chat,
  },
];
