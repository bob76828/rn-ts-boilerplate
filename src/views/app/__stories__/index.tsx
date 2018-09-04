import React from 'react';
import { storiesOf } from '@storybook/react-native';


import App from './../';

storiesOf('Boilerplate', module)
  .add('hello world', () => (
    <App />
  ));