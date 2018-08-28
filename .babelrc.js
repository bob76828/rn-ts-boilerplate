const presets = [
  '@babel/env',
  '@babel/preset-typescript',
  'react-native',
];

const plugins = [
  '@babel/proposal-class-properties',
  '@babel/proposal-object-rest-spread',
  [
    'module-resolver', {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      root: ['./src']
    }
  ],
];

module.exports = { presets, plugins };