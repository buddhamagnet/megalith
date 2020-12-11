CREATE USER community WITH PASSWORD 'community' CREATEDB;
CREATE DATABASE community_dev;
GRANT ALL PRIVILEGES ON DATABASE community_dev TO community;