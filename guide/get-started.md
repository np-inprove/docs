# Get started

iNProve provides 2 deployment modes:

* Cloud-hosted
* Self-hosted

## Cloud-hosted

The cloud-hosted version is available at [https://np-inprove.qinguan.me](https://np-inprove.qinguan.me).

## Self-hosted

In a self-hosted deployment, an two services need to be deployed:

* API server - single Go binary
* Frontend server - Nuxt3 web application

Please see [Deployment](/guide/deployment) for more information.

## Development

### Prerequisites

Toolchains required:

* NodeJS (18+) + PNPM (latest)
* Go (latest)
* Supported database
* GCC (optional)

The chosen database must be supported by [Ent](https://entgo.io/), the ORM package used.

If you are using SQLite __and__ Windows, you must have GCC or a variant installed.

::: info

Consider using <https://jmeubank.github.io/tdm-gcc/> for less headaches

:::

### Setup

Clone the repositories:

* <https://github.com/np-inprove/app>
* <https://github.com/np-inprove/server>

#### App

1. Install dependencies

    ```shell
    pnpm install
    ```

2. Start the development server

    ```shell
    pnpm dev
    ```

#### Server

1. Copy configuration

    ```shell
    cp config.yaml.example config.yaml
    ```

2. Start server

    ```shell
    go run cmd/main.go
    ```

::: tip

The example config file runs SQLite __in memory__. All changes will be lost after server restart.

:::
