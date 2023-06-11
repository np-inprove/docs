# Deployment

## API server

The iNProve server can be deployed as a normal Docker image.

Alternatively, you can also host it on fly.io.

### Fly.io

Fly.io's free plan permits hosting the necessary PostgreSQL database, as well as the server. The steps below assumes you
have setup the `fly` CLI and is authenticated.

1. Setup PostgreSQL database

    ```shell
    fly postgres create
    ```

2. Setup server

   A `fly.toml` file is included in this repository. You may choose to copy the file. This will create an app with the
   name `np-inprove-server` and uses Dockerfile to build.

   Do not deploy first.

    ```shell
    fly launch --no-deploy --dockerfile build/docker/Dockerfile
    ```

3. Attach PostgreSQL database

   In the command below, `np-inprove-postgres` is the name of the PostgreSQL database created in step one, but you can
   use any name.

    ```shell
    fly postgres attach -a np-inprove-server np-inprove-postgres
    ```

4. Setup secrets

   By default, the precompiled binary supports either SQLite or PostgreSQL as the database driver.

   In the provided `fly.toml` configuration file, the driver is set to `postgres`.

   You may override this using the `INPROVE_DATABASE_DRIVERNAME` environment variable.

   ```shell
   fly secrets set INPROVE_APP_JWTALGORITHM="HS256" INPROVE_APP_JWTSIGNKEY="verysecure" INPROVE_DATABASE_DATASOURCENAME="host=<host> port=<port> user=<user> dbname=<database> password=<pass> sslmode=disable"
   ```

5. Deploy!

   Deploy the server!

   ```shell
   fly launch
   ```

## Frontend server

The frontend server can be deployed as a normal Docker image.

Alternatively, you can also host it on any of the platforms supported by Nuxt (see [here](https://nuxt.com/docs/getting-started/deployment#supported-hosting-providers)).

The preferred hosting platform is with Cloudflare Pages, as it supports all features on its free plan.

### Cloudflare Pages

Configure a new Pages project using the settings below:

| Configuration          | Value                                                          |
| ---------------------- | -------------------------------------------------------------- |
| Build command          | `npx pnpm i --store=node_modules/.pnpm-store && npm run build` |
| Build output directory | `/dist`                                                        |

Also, add the following environment variables:

| Environment variable  | Value        |
| --------------------- | ------------ |
| `NODE_VERSION`        | `16`         |
| `NPM_FLAGS`           | `--version`  |
| `NUXT_PUBLIC_API_URL` | Your API URL |
