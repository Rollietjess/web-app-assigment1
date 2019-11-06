import React from 'react';
import { storiesOf } from '@storybook/react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';


import Header from '../src/components/header/'
import FilterControls from '../src/components/filterControls/'

storiesOf("Movies list app/Header", module).add("default", () => (
    <Header noContacts={33} />
  ));
  
storiesOf("Movies list app/Filter Controls", module).add("default", () => (
  <FilterControls />
));   