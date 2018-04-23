# Demo Steps:

1) ng new mat-demo --inline-style --skip-tests --style scss  
2) Start installing libs + hammerjs https://material.angular.io/guide/getting-started  
3) BrowserAnimations  
4) ng g m material --flat . NullLoger issue with CLI version 1.7.3  
5) @import "~@angular/material/prebuilt-themes/indigo-pink.css";  
- indigo-pink  
- deeppurple-amber  
- purple-green  
- pink-bluegrey  
6) import 'hammerjs'; src/main.ts  
7) @import url("https://fonts.googleapis.com/icon?family=Material+Icons");  
8) CUSTOM_ELEMENTS_SCHEMA  
9) FormModule for ngModel  
10) Local reference #sliderRef for live data  
11) Use fa icons instead material  
https://material.io/icons  
https://fontawesome.com/icons?d=gallery  

In your AppModule add:  

import { MatIconModule, MatIconRegistry } from '@angular/material';  
Then add MatIconModule to your imports e.g.:  

imports: [...  
   MatIconModule  
...]  
Add MatIconRegistry to your providers:  

providers: [...  
    MatIconRegistry  
....]  
Then add the following to your AppModule class:  

export class AppModule {  
    constructor(  
        ...public matIconRegistry: MatIconRegistry) {  
        matIconRegistry.registerFontClassAlias('fontawesome', 'fa');  
    }  
Then you can use anywhere in your project like so:  

<mat-icon fontSet="fa" fontIcon="fa-times-circle"></mat-icon>  

You'll need to include fontawesome in your project somewhere. I use angular-cli so adding the font-awesome npm package:  

npm install font-awesome --save  
and including it in styles list in angular-cli.json file works for me:  

"styles": [  
    ...  
    "../node_modules/font-awesome/scss/font-awesome.scss",  
  ],  

15) Don’t use display: none on items you don’t need, sometimes they are meaningful (datepicker underline)  
.mat-input-underline.mat-form-field-underline{  
width: 0;  
}  
16) And sometimes you can’t (datepicker range feature)  
https://github.com/SaturnTeam/saturn-datepicker  

# Material

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
