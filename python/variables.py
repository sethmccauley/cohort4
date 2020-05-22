l = ['Seth', 'McCauley'] # List
t = ('Seth', 'McCauley') # Tuple
# Keeps order

s = {'Seth', 'McCauley'} # Tuple
# Must have unique values
# Order is not guaranteed

print(l[0])
print(t[0])
l[0] = 'Sef'
print(l[0])
# Subscript notation (addresses specific index, starts at 0)
# t[0] = 'Will not Work'
# Tuples cannot be altered.

l.append('Canada')
print(l[2])
l.remove('Canada')
# List appending works as you'd expect.

s.add('Canada')
print(s)
s.remove('Canada')
print(s)
# Sets can be added to. Ordering my alter.

adjustedSet = {'Seth'}
newSet = s.difference(adjustedSet)
print(newSet)
# Difference will find the remaining items.
# s.union(set) will combine two sets
# s.intersection will find like-items

true = 1 < 2
print(true)
print(1 == 1)
print(1 != 5)
# Comparision operators will evaluate to bool
# ==, !=, >, <, >=, <=, 
# 'is' keyword checks reference equality

friend_ages = {"Sally": 88, "Sef": 38, "William": 24, "Madi": 14}
print(friend_ages["Sally"])
# Dictionaries, associated set.
# Must use subscript notation to access the value @ the key.
# Lists of dictionaries
friends = [
    {"name": "Sally","age": 88},
    {"name": "Sef","age": 38},
    {"name": "William","age": 24},
    {"name": "Madi","age": 14},
]
print(friends[3]["name"])
# for var,var2 in for dictionaries.items() will iterate through key,values
# for in on dictionaries can have values or variables to test if key exists