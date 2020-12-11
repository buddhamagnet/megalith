# Community - example GraphQL server backed by Phoenix

Built using this helpful [guide](https://www.howtographql.com/graphql-elixir/0-introduction/).

To build and run Postgres:

* Run ```docker build -t community_dev .```
* Run ```docker run -e POSTGRES_PASSWORD=root -p 5432:5432 community_dev```

To start your Phoenix server:

  * Install dependencies with `mix deps.get`
  * Create and migrate your database with `mix ecto.setup`
  * Start Phoenix endpoint with `mix phx.server`

Now you can visit [`localhost:4000/graphql`](http://localhost:4000/graphql) from your browser.
