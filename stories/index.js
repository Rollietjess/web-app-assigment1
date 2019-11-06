import React from 'react';
import { storiesOf } from '@storybook/react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';


import Header from '../src/components/header/'

storiesOf("Movies list app/Header", module).add("default", () => (
    <Header noContacts={33} />
  ));     