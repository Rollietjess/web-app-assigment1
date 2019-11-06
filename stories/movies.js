import React from "react";
import { storiesOf } from "@storybook/react";

import List from "../components/movies/list";

storiesOf("Movies", module)
  .add("01 - List Movies", () => {
    return <List />;
  })

