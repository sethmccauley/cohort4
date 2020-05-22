number = 3

while True:
    user_input = input('Play the Game...? (Y/n). ').lower()

    if user_input == 'n':
        break

    user_number = int(input("Guess a numba."))
    if user_number == number:
        print('You figured it out~!')
    elif abs(number - user_number) == 1:
        print('Ohh... so close. Just 1 off.')
    else:
        print('Dang, not even close.')
# while loop operates as you'd expect. Be sure to include a way to break out.

foods = ['Apple', 'Banana', 'Orange']

for food in foods:
    print(f"{food} is a tasty food!")
# for in allows you to iterate through a list/tuple/set forEach element

for variable in range(4):
    print(variable)
# range() will generate an iterable
print(len(foods))
# len() return a counted length
# sum() returns a sum'd value
