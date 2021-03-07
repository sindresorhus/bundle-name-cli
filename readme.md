# bundle-name-cli

> Get [bundle name](https://developer.apple.com/library/Mac/documentation/General/Reference/InfoPlistKeyReference/Articles/CoreFoundationKeys.html#//apple_ref/doc/plist/info/CFBundleName) from a [bundle identifier](https://developer.apple.com/library/Mac/documentation/General/Reference/InfoPlistKeyReference/Articles/CoreFoundationKeys.html#//apple_ref/doc/plist/info/CFBundleIdentifier) (macOS): `com.apple.Safari` → `Safari`

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

- [bundle-name](https://github.com/sindresorhus/bundle-name) - API for this package
