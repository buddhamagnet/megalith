defmodule CardsTest do
  use ExUnit.Case
  doctest Cards

  @expected_deck ["Ace of Hearts", "Two of Hearts", "Three of Hearts", "Four of Hearts",
  "Five of Hearts", "Six of Hearts", "Seven of Hearts", "Eight of Hearts",
  "Nine of Hearts", "Ten of Hearts", "Jack of Hearts", "King of Hearts",
  "Queen of Hearts", "Ace of Spades", "Two of Spades", "Three of Spades",
  "Four of Spades", "Five of Spades", "Six of Spades", "Seven of Spades",
  "Eight of Spades", "Nine of Spades", "Ten of Spades", "Jack of Spades",
  "King of Spades", "Queen of Spades", "Ace of Clubs", "Two of Clubs",
  "Three of Clubs", "Four of Clubs", "Five of Clubs", "Six of Clubs",
  "Seven of Clubs", "Eight of Clubs", "Nine of Clubs", "Ten of Clubs",
  "Jack of Clubs", "King of Clubs", "Queen of Clubs", "Ace of Diamonds",
  "Two of Diamonds", "Three of Diamonds", "Four of Diamonds",
  "Five of Diamonds", "Six of Diamonds", "Seven of Diamonds",
  "Eight of Diamonds", "Nine of Diamonds", "Ten of Diamonds",
  "Jack of Diamonds", "King of Diamonds", "Queen of Diamonds"]

  test "create_deck creates a deck" do
    assert Cards.create_deck == @expected_deck
  end

  test "create_deck creates 20 cards" do
    assert length(Cards.create_deck) == 52
  end

  test "shuffle randomises card order in a deck" do
    deck = Cards.create_deck
    refute Cards.shuffle(deck) == deck
  end

  test "contains? determines whether a card is part of a deck" do
    deck = Cards.create_deck
    assert Cards.contains?(deck, "Ace of Spades")
    refute Cards.contains?(deck, "Ace of Base")
  end

  test "deal deals  a hand" do
    {hand, _} = Cards.deal(Cards.create_deck, 1)
    assert hand == ["Ace of Hearts"]
  end

  test "load retrieves a deck from the filesystem" do
    Cards.save(Cards.create_deck, "test_deck_1")
    assert length(Cards.load("test_deck_1")) == 52
    File.rm("decks/test_deck_1")
  end

  test "load returns an error for a non-existent file" do
    error = Cards.load("test_deck_404")
    assert error == "error: file not found"
  end

  test "load returns an error for a file permissions issue" do
    Cards.save(Cards.create_deck, "test_deck_2")
    File.chmod("decks/test_deck_2", 0o000)
    assert Cards.load("test_deck_2") == "error: file permissions error"
    File.rm("decks/test_deck_2")
  end
end
