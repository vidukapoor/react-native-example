// import Start from './Start';
import Login from './user/Login';
import Signup from './user/Signup';
import Home from './user/Home';
import SendPayments from './user/SendPayments';

export default {
  // Start: { screen: Start },
  Start: { screen: Login },
  Login: { screen: Login },
  Signup: { screen: Signup },
  SendPayments: { screen: SendPayments },
  Home: { screen: Home },
};
