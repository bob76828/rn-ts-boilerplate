import { AppRegistry } from 'react-native';
import App from './App';
import config from './app.json';

AppRegistry.registerComponent(config.name, () => App);