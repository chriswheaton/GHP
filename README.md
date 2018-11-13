# Ionic/Angular Progressive Web App

[Ionic](https://ionicframework.com/) is the open-source mobile app development framework that makes it easy to
build top quality native and progressive web apps with web technologies.

Ionic is based on [Web Components](https://www.webcomponents.org/introduction) and comes with many significant performance, usability, and feature improvements over the past versions.


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

####Node.js
[Download the installer](https://nodejs.org/) for Node.js 6 or greater.
####Ionic CLI
Install the ionic CLI globally in a terminal:
```bash
npm install -g ionic
``` 
####Node Sass
###### On Windows
```bash
npm install -g node-gyp
```
Install all the required tools and configurations using Microsoft's [windows-build-tools](https://github.com/felixrieseberg/windows-build-tools) using `npm install --global --production windows-build-tools` from an elevated PowerShell or CMD.exe (run as Administrator).
```bash
npm install -g node-sass
```
###### On Mac
```bash
npm install -g node-sass
```

### Installing

Navigate to the projects root folder in a terminal and install the local npm dependencies.

```bash
npm install
```

### Launching Application

Build and launch the application.
```bash
ionic serve
```

## Ionic CLI Commands

Documentation on all available Ionic CLI commands https://ionicframework.com/docs/cli/commands.html

#####Serve

Start a local dev server for app dev/testing.

```bash
ionic serve
```

More detailed information on [serve](https://ionicframework.com/docs/cli/serve/)


#####Generate

Generate pipes, components, pages, directives and providers (services).

```bash
ionic generate [<type>] [<name>]
```

More detailed information on [generate](https://ionicframework.com/docs/cli/generate/)


#####Build

Build web assets and prepare your app for any platform targets

```bash
ionic build
```

More detailed information on [build](https://ionicframework.com/docs/cli/build/)


