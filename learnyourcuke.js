#!/usr/bin/env node

const Workshopper = require('workshopper')
    , path        = require('path')

Workshopper({
    name              : 'learnyoucuke'
  , title             : 'Learn some basic Ruby and Cucumber'
  , appDir            : __dirname
  , helpFile          : path.join(__dirname, 'help.txt')
  , prerequisitesFile : path.join(__dirname, 'prerequisites.txt')
  , creditsFile       : path.join(__dirname, 'credits.txt')
}).init()
