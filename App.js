import { createStackNavigator, createAppContainer } from "react-navigation";
import LoginScreen from "./components/LoginScreen";
import UserDetails from "./components/UserDetails";
import CreateUser from "./components/CreateUser";

const AppNavigator = createStackNavigator({
  Home: { screen: LoginScreen },
  Profile: { screen: UserDetails },
  CreateUser: { screen: CreateUser }
});
const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
