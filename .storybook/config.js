import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/movies.js');
}

configure(loadStories, module);