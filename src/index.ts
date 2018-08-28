import StorybookUI from './views/.storybook';
import App from './app';

const { STORYBOOK } = process.env.NODE_ENV;

export default STORYBOOK === 'true' ? StorybookUI : App;