## react parcel cli
Create React apps with no build configuration with parcel

<img src="assets/example.gif" width="350">

### Quick Overview
```bash
$ react-parcel-cli new
$ cd my-app
$ npm start
```
```bash
$ react-parcel-cli create my-app
$ cd my-app
$ npm start
```

### Installation

```
$ npm install -g react-parcel-cli
```

### Requirement
![nodejs](https://img.shields.io/badge/nodejs-%3E%3D%208.x-red.svg)


### Usage

#### new
```
  Usage: new

  Examples:

    $ react-parcel-cli new
```

#### create
```
  Usage: create <name> [options]

  Options:

    -t, --type [type]  "basic" or "redux" (default: basic)
    -p, --path [path]  path to be created. (default: ./)
    -h, --help         output usage information

  Examples:

    $ react-parcel-cli create my-app
    $ react-parcel-cli create my-app -p ./workspace -t redux
```
