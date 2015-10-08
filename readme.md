# bundle-name-cli [![Build Status](https://travis-ci.org/sindresorhus/bundle-name-cli.svg?branch=master)](https://travis-ci.org/sindresorhus/bundle-name-cli)

> Get [bundle name](https://developer.apple.com/library/Mac/documentation/General/Reference/InfoPlistKeyReference/Articles/CoreFoundationKeys.html#//apple_ref/doc/plist/info/CFBundleName) from a [bundle identifier](https://developer.apple.com/library/Mac/documentation/General/Reference/InfoPlistKeyReference/Articles/CoreFoundationKeys.html#//apple_ref/doc/plist/info/CFBundleIdentifier) (OS X): `com.apple.Safari` → `Safari`


## Install

```
$ npm install --global bundle-name-cli
```


## Usage

```
$ bundle-name --help

  Usage
    $ bundle-name <bundle-id>

  Example
    $ bundle-name com.apple.Safari
    Safari
```


## Related

- [bundle-name](https://github.com/sindresorhus/bundle-name) - API for this module


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)