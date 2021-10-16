# digital-contracts

COMP5703 CS12-2 Digital Contracts

## Setup

1. Clone this repository:
   `git clone git@github.sydney.edu.au:ppan4750/cs12-2-digital-contracts.git`
2. Install yarn: `brew install yarn`
3. Navigate to `/app/` and `/services/` and install dependencies: `yarn install`
4. Setup database and env variables:

- Copy the .env.example and edit it.
- Navigate to `/services/` and setup Docker:

```bash
docker run \
 -p 0.0.0.0:4999:3306 \
 --name digital-contracts-mysql-main \
 -e MYSQL_ROOT_PASSWORD=password \
 -e MYSQL_DATABASE=digital-contracts-main \
 -d mysql:5.7.20
```

```bash
docker run \
 -p 0.0.0.0:4899:3306 \
 --name digital-contracts-mysql-main-test \
 -e MYSQL_ROOT_PASSWORD=password \
 -e MYSQL_DATABASE=digital-contracts-main-test \
 -d mysql:5.7.20
```

```bash
docker run \
 -p 0.0.0.0:4570:9000 \
 --name digital-contracts-minio \
 -e "MINIO_ACCESS_KEY=USERNAME" \
 -e "MINIO_SECRET_KEY=PASSWORD" \
 -d minio/minio server /data
```

```bash
docker network create digital-contracts-mysql-net
docker network connect digital-contracts-mysql-net digital-contracts-mysql-main
docker network connect digital-contracts-mysql-net digital-contracts-mysql-main-test
docker run \
  --name digital-contracts-phpmyadmin \
  -p 4599:80 \
  -v $(pwd)/phpmyadmin/config.user.inc.php:/etc/phpmyadmin/config.user.inc.php \
  -v $(pwd)/phpmyadmin/config.user.extra.php:/etc/phpmyadmin/config.user.extra.php \
  --network digital-contracts-mysql-net \
  -d phpmyadmin/phpmyadmin
```

- Run command `yarn docker:start` to start Docker containers
- Go to `localhost:4599` to setup database
- Import data file into the database
- Run command `yarn watch` in services
- Navigate to `/app/` and run command `yarn watch`
- Go to `localhost:8080` to visit the app
