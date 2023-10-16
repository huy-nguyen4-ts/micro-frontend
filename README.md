# MICRO FRONT END

## Start Header (package using)

```sh
cd header
yarn
yarn watch # Listen change
```

**Install package into host**
```sh
cd header
yarn link
cd host
yarn link header
```

## Start Footer (CDN using)

```sh
cd footer
yarn
yarn watch # Listen change
```

**Run package as CDN url**
```sh
cd header
yarn serve
```

## Start Host

```sh
cd ./host
yarn
yarn start
```
