defmodule Matchbox do
  @big 50
  @medium 20
  @small 5

  defp calc(matches, size) do
    {div(matches, size), rem(matches, size)}
  end

  def boxes(matches) do
    {big, remainder} = calc(matches, @big)
    {medium, remainder} = calc(remainder, @medium)
    {small, remainder} = calc(remainder, @small)
    %{big: big, medium: medium, small: small, remainder: remainder}
  end
end
