---
title: "Rolling your own Laravel Sail"
description: "Laravel Sail is an amazing tool that simplifies Laravel development by providing a lightweight Docker environment out of the box but sometimes you need more control over services."
readTime: "3 mins"
date: "May 9 2023 10:00:00 AM"
article: 3
ogImage: "https://og.heyjordn.com/Rolling%20Your%20Own%20Laravel%20Sail%20%E2%9B%B5.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fheyjordn.com%2Ffavicon-light.png"
---

Laravel Sail is an amazing tool that simplifies Laravel development by providing a lightweight Docker environment out of the box, which can save us some time. However, in some cases you need more control over the services that Laravel Sail provides. For example, you may want to use a different version of PHP, or you may need to add a service that's not included by default, such as PostgreSQL or Memcached.

In reality Laravel Sail is essentially a pre-configured Docker Compose file that provides a set of common services needed for Laravel development. Under the hood, Laravel Sail uses Docker Compose to manage the different services that make up the development environment, such as the web server, database, and caching services.

![Laravel Sail Source](https://res.cloudinary.com/dnqsgeyp7/image/upload/v1683661742/heyjordn/Screenshot_2023-05-09_at_2.38.34_PM.png)

This screenshot is from the official repo, as we can see the  different services are just stubs that make up 
a broader docker compose.

Digging into the `mailpit.stub` we can see it's just yaml

![Mailpit Stub](https://res.cloudinary.com/dnqsgeyp7/image/upload/v1683662049/heyjordn/Screenshot_2023-05-09_at_2.53.54_PM.png)

### Rolling your Own

Dont get me wrong Laravel Sail is great to get going but eventually you're going to need more control over services and configuration, while Sail does allow some customizations I feel more comfortable when functionality isn't hidden from me. 

``` bash
# Within your Laravel Project
λ mkdir docker
λ cd docker
λ touch Dockerfile.dev
λ touch docker-compose.yml
```

Now we can paste the followinng in `Dockerfile.dev`

```docker
# Dockefile.dev
FROM php:8.1-fpm

# Arguments defined in docker-compose.yml
ARG user
ARG uid

# Install system dependencies
RUN apt-get update && apt-get install -y \
    git \
    curl \
    zip \
    unzip \
    libzip-dev \
    mariadb-client \
    iputils-ping  \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# Install PHP extensions
RUN docker-php-ext-install pdo_mysql

# Get latest Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Create system user to run Composer and Artisan Commands
RUN useradd -G www-data,root -u $uid -d /home/$user $user
RUN mkdir -p /home/$user/.composer && \
    chown -R $user:$user /home/$user

RUN chown -R $user:$user /var/www

# Set working directory
WORKDIR /var/www

USER $user
```

And then finally our `docker-compose.yml`

```yaml
version: "3"

services:
    app:
        build:
            args:
                user: volt-user
                uid: 1000
            context: ./
            dockerfile: Dockerfile.dev
        image: volt-php
        restart: unless-stopped
        working_dir: /var/www/
        volumes:
            - ../:/var/www
        networks:
            - volt

    db:
        image: mariadb
        restart: always
        volumes:
            - ./compose/db/data:/var/lib/mysql:rw,delegated
        environment:
            MYSQL_USER: volt
            MYSQL_PASSWORD: volt
            MYSQL_DATABASE: volt
            MYSQL_ROOT_PASSWORD: volt
        ports:
            - "3306:3306"
        networks:
            - volt

    redis:
        image: 'redis:6.2-alpine'
        restart: always
        ports:
            - '6379:6379'
        command: >-
            redis-server --save 20 1 --loglevel warning
        networks:
            - volt

    nginx:
        image: nginx:1.21.6-alpine
        restart: unless-stopped
        ports:
            - 80:80
        volumes:
            - ../:/var/www
            - ./compose/nginx:/etc/nginx/conf.d/
        networks:
            - volt

networks:
    volt:
        driver: bridge
```

And there we go, now we have the following 

A Docker container with PHP and any other extensions that we might need
Control over all services with the easy option of adding any in the future
and a nicely contained (fully accesible) dev environment under `docker` folder

The best part is you can  actually see this in action, I use  this setup  for another project
called [Volt](https://github.com/VoltAuto/cms/blob/master/docker/docker-compose.yml).