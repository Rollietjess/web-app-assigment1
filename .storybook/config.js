import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/index.js');
  require('../stories/movies.js');
}

configure(loadStories, module);