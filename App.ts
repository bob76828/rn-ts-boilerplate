import Config from 'react-native-config'
import StorybookUI from './storybook';
import App from './src/app';

const { STORYBOOK } = Config;

export default STORYBOOK === 'true' ? StorybookUI : App;