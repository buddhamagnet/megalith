defmodule TicTest do
  use ExUnit.Case
  doctest Tic

  test "greets the world" do
    assert Tic.hello() == :world
  end
end
