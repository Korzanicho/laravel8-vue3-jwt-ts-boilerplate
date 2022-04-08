# laravel8 + vue3 (ts, vite, pinia, router) boilerplate # 

## Installation ##

### Build Containers ###

`docker-compose build`

### Install laravel dependencies: ###

`docker-compose run --rm composer install`

### generate app key ###
`docker-compose run --rm artisan key:generate`

### Install modules ###

`cd platform`
`npm install` / `yarn install`

## Start development ##

### Up api ###

`docker-compose up nginx`

### Up platform ###

`cd platform`
`npm run dev` / `yarn dev`



## What is inside? ##

* __Laravel__^8.65 (api directory)  <br>
<br>

* __Vue__^3.2.31 with typescript <br>
* __Vue-router__^4.0.12 <br>
* __Pinia__^2.0.11 <br>
* __Vite__^2.8.4 <br>
* __vitest__^0.5.0 <br>
* __eslint__^8.5.0 <br>
* __prettier__^2.5.1 <br>

## Database connect ##

Database (mariadb) like as nginx and php is running with docker. You can connect database to any database manager with this data:

* Database: __laravel__
* User: __laravel__
* Password: __secret__
* Root password: __secret__

## Composer ##

You can use composer like this:

`docker-compose run --rm composer [command]`

e.q:

`docker-compose run --rm composer update`

## php Artisan ##

You can use artisan like this:

`docker-compose run --rm artisan [command]`

e.q:

`docker-compose run --rm artisan tinker`

<br><br>
<small> Create by Korzanicho </small>