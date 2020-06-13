export const config = {
  "dev": {
    "username": process.env.POSTGRES_USER,
    "password": process.env.POSTGRES_PASS,
    "database": process.env.POSTGRES_DATABASE,
    "host": process.env.POSTGRES_HOST,
    "dialect": "postgres",
    "aws_region": "us-east-1",
    "aws_profile": "default",
    "aws_media_bucket": "udagram-njohnson1-dev"
  },
  "prod": {
    "username": process.env.POSTGRES_USER_PROD,
    "password": process.env.POSTGRES_PASS_PROD,
    "database": process.env.POSTGRES_DATABASE_PROD,
    "host": "",
    "dialect": "postgres"
  },
  "jwt": {
    "secret": "hellowordl"
  }
}
