defmodule Tax do
  def calculate(salary) when salary <= 2000, do: 0
  def calculate(salary) when salary <= 3000, do: salary * 0.05
  def calculate(salary) when salary <= 6000, do: salary * 0.1
  def calculate(salary) when salary > 6000, do: salary * 0.15

  def calculate_cond(salary) do
    cond do
      salary <= 2000 -> 0
      salary <= 3000 -> salary * 0.5
      salary <= 6000 -> salary * 0.1
      salary > 6000 -> salary * 0.15
    end
  end
end
