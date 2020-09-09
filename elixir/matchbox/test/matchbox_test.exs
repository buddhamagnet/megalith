defmodule MatchboxTest do
  use ExUnit.Case
  doctest Matchbox

  test "greets the world" do
    assert Matchbox.hello() == :world
  end
end
