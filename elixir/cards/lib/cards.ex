defmodule Cards do
  @moduledoc """
  Documentation for `Cards`.
  """

  @doc """
    Creates a deck, shuffles it and returns a dealed
    pack, split by `size`.
  """
  def create_hand(size) do
    create_deck() |>
    shuffle |>
    deal(size)
  end
  
  @doc """
    Returns a list of strings representing a
    deck of playing cards.
  """  
  def create_deck do
    suits = ["Hearts", "Spades", "Clubs", "Diamonds"]

    values = [
      "Ace",
      "Two",
      "Three",
      "Four",
      "Five",
      "Six",
      "Seven",
      "Eight",
      "Nine",
      "Ten",
      "Jack",
      "King",
      "Queen"
    ]

    for suit <- suits, value <- values do
      "#{value} of #{suit}"
    end
  end
  
  @doc """
    Given a `deck`, returns a shuffled deck.
  """
  def shuffle(deck) do
    Enum.shuffle(deck)
  end

  @doc """
    Given a `deck` and `card`, determines whether the card
    exists in the deck.

  ## Examples
        iex> deck = Cards.create_deck()
        iex> Cards.contains?(deck, "Ace Of Base")
        false
  """
  def contains?(deck, card) do
    Enum.member?(deck, card)
  end

  @doc """
    Given a `deck` and `size`, splits the deck by that size.
  
  ## Examples

      iex> deck = Cards.create_deck()
      iex> {hand, _rest} = Cards.deal(deck, 1)
      iex> hand
      ["Ace of Hearts"]
  """
  def deal(deck, size) do
    Enum.split(deck, size)
  end

  def save(deck, filename) do
    binary = :erlang.term_to_binary(deck)
    File.write("decks/#{filename}", binary)
  end

  def file_error(error) do
    message = case error do
      :enoent -> "file not found"
      :eacces -> "file permissions error"
    end
    "error: #{message}"
  end

  def load(filename) do
    {status, data} = File.read("decks/#{filename}")
    case status do 
      :ok -> :erlang.binary_to_term(data)
      :error -> file_error(data)
    end
  end
end
