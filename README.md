AOTC: Replicating part of the Just-Eat Mobile experience with Angular + Cordova
===============================================================================

This project is a demo project (still in progress), part of the **Attack of the Clones** series (AOTC), where I show how to replicate part of a few widely used (web/mobile) apps on the market using specific technologies (Angular + Cordova in this case)

The project is setup with Gulp and browsersync. The current iteration aims at building the landing page, 
with postcode lookup (and geolocation support) and listing the restaurants serving the area. 

Still a work-in-progress.
The current version just implements a super basic postcode form and the routing mechanic necessary to transition from the
postcode form to the restaurant search page.

### Technologies Used ###

- AngularJS 1.5.x
- Cordova + Browsersync plugin
- BabelJS (ES2015 transpiler)
- Gulp

### Screenshots ###

Postcode lookup screen.
![ScreenShot](/README/jf-postcode.png?raw=true)

### Installation ###

Install the required npm dependencies

```
npm install
```

Add the platforms you need

```
cordova platform add android
```

This will also add the required plugins

Finally, run the app in development mode

```
cordova run android -- --live-reload
```
