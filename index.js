import { AppRegistry } from 'react-native';
import App from './src/.storybook';
import config from './app.json';

AppRegistry.registerComponent(config.name, () => App);