nums = 1, 2, 3
# Brackets are necessary when creating a tuple when other operators are present.
# numList = [(1, 2)]

one, two, three = nums
print(one, two, three)
# Destructuring operates a bit like Lua's ES5 variable assignments
# for var1, var2 in listObject.items() returns tuples / enumerate()
# Must have values to unpack to prevent errors.

# _ will skip the variable much like Lua
one, _, three = nums
print(one, three)