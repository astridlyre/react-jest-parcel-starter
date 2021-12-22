# React & Parcel Starter

This is a simple React app starter, using [Parcel](https://parceljs.org/docs/)
as a bundler. I couldn't find the perfect starter, so I made this one. It also
features [Jest](https://jestjs.io/) and [Testing Library](https://testing-library.com/)
for testing, which was a little tricky to get working with Parcel.

## Getting started

Simply clone the repo and get to work:

```bash
# clone the repo
git clone 'https://github.com/astridlyre/react-jest-parcel-starter' .

# remove the old git repo
rm -rf .git

# initialize a new one
git init

# install packages
pnpm install
```

## Features

- React
- Jest
- `Normalize.css`, along with a minimal modern CSS reset
- Support for CSS modules
- Parcel
- Testing library

```bash
# Run Development Environment
pnpm run dev

# Build for Production
pnpm run build

# Test
pnpm run test
```

## Bugs

Note, Hot Module Reload is currently broken in Parcel when using CSS modules.
Until fixed upstream, the following lines can be changed in 'HMRServer.js':

```javascript
// line 103 in node_modules/@parcel/reporter-dev-server/src/HMRServer.js
if (assert.type !== 'js' && assert.type !== 'css') {
  //...
}

// line 104 in node_modules/@parcel/reporter-dev-server/lib/HMRServer.js
if (assert.type !== 'js' && assert.type !== 'css') {
  //...
}
```
