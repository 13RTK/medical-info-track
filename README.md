# medical-info-track

## 1. Npm dependencies
This project builds via node.js, express, multer, morgan, dotenv, cors, sequelize
&nbsp;

## 2. Run project
> Please make sure you installed the node.js runtime on your PC, and modify the config in `config.env`

- For users without yarn:
```shell
npm i yarn -g
```
&nbsp;

- Run project in dev mode
```shell
cd medical-info-track
yarn install
yarn run dev
```
&nbsp;
## 3. Deploy with pm2
- For users without pm2
```shell
npm i pm2 -g
```
&nbsp;

- Deploy server
```shell
pm2 start server.js
```

- Monitor the server log
```
pm2 monit
```
