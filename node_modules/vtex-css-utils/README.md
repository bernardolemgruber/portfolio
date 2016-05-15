VTEX CSS Utils
=========

A small package with css utility classes and variables shared by VTEX front-end developers

## Installation

  `npm install vtex-css-utils --save`

## Usage

Import utilities in your stylesheets choosing from Sass (`.scss`) or LESS options. Please note that your text editor's linter might disagree with this notation, but it still works.

  `@import "~vtex-css-utils/sass/_css-utils";`  
  `@import "~vtex-css-utils/less/_css-utils";`

## Contributing

A CSS style-guide is in the works, but if you want to contribute just head to <https://github.com/vtex-apps/css-utils> and ask for a pull request.

## Release History

* 2.0.2 Limit `css-utils-no-outlines()` to mobile devices for accessibility reason;
* 2.0.1 Removes padding from `css-utils-clean-btn()`;
* 2.0.0 Remove old class names (BREAKING CHANGES), extends now have clean output
* 1.2.1 Add bootstrap variables
* 1.2.0 Add storefront asset path variable
* 1.1.9 Adjust syntax on animations
* 1.1.8 Fix wrong path on sass folder
* 1.1.7 Update README
* 1.1.6 Add z-index scale
* 1.1.5 Update usage instructions
* 1.1.2 Add new util class
* 1.1.0 Add Sass Correspondent files
* 1.0.0 Initial release
