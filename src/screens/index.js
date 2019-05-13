import { StackNavigator, DrawerNavigator, TabNavigator } from 'react-navigation';

// import Start from './Start';
import Login from './user/Login';
import Signup from './user/Signup';
import Home from './user/Home';
import SendPayments from './user/SendPayments';
import ReviewPayment from './user/ReviewPayment';
import DeRegister from './user/DeRegister';
import CreateVpa from './user/CreateVpa';
import Transactions from './user/Transactions';
import ManageVpa from './user/ManageVpa';

const navigationOptions = {
  tabBarVisible: false,
  header: null,
};

const HomeStack = StackNavigator(
  {
    HomeIndex: {
      screen: Home,
      navigationOptions: { tabBarVisible: false, header: null },
    },
    SendPayments: {
      screen: SendPayments,
      navigationOptions: { tabBarVisible: false },
    },
    ReviewPayment: {
      screen: ReviewPayment,
      navigationOptions: { tabBarVisible: false },
    },
    DeRegister: {
      screen: DeRegister,
      navigationOptions: { tabBarVisible: false },
    },
    CreateVpa: {
      screen: CreateVpa,
      navigationOptions: { tabBarVisible: false },
    },
    ManageVpa: {
      screen: ManageVpa,
      navigationOptions: { tabBarVisible: false },
    },
    Transactions: {
      screen: Transactions,
      navigationOptions: { tabBarVisible: false },
    },
  },
  {
    headerMode: 'screen',
    initialRouteName: 'HomeIndex',
  },
);

export default {
  // Start: { screen: Start },
//   Start: { screen: Login },
//   Login: { screen: Login },
//   Signup: { screen: Signup },
//   SendPayments: { screen: SendPayments },
//   Home: { screen: Home },
// };
  Start: { screen: Login, navigationOptions },
  Login: { screen: Login, navigationOptions },
  Signup: { screen: Signup, navigationOptions },
  Home: { screen: HomeStack },
  // Home: { screen: Home, navigationOptions },
};

