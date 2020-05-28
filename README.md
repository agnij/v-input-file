# v-input-file

## Installation
```shell
> npm install v-input-file --save
> npm i v-input-file --save
```

### Then you need to import and register it:
```javascript
> import inputFile from 'v-input-file'
> Vue.use(inputFile)
```

## Usage
```html
<input-file v-model="fileList" :multiple="false"></input-file>
```

## Props

| Name | Type | Default | Description |
| :-----| ----: | :----: | :--------: |
| multiple | Boolean | false | Whether to support multi file upload? Currently, only false can be passed |
| fileList | Array | [] |


## Events

| Name | Arguments | Description |
| :-----| ----: | :----: |
| update:fileList | Array | File information array |
