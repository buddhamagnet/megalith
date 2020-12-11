defmodule Mix.Tasks.MixTaskExample.Salute do
  use Mix.Task


  @shortdoc "Give a short salutation"


  def cock(_) do
    IO.puts "Hello World!"
  end
end
