#!/usr/bin/env node

import { translateRomanian } from './romanian';

if (process.argv[2]) {
  console.log(translateRomanian(process.argv[2]));
} else {
  console.log("Please provide some romanian characters as CLI argument");
}
