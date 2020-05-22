def age_in_seconds(year):
    seconds = year * 365 * 24 * 60 * 60
    print(f"You are ~{seconds} seconds old.")

user_age = int(input('Enter your Age: '))

age_in_seconds(user_age)
# Functions behav
# They have scope and will create new variables within their scope, and can see global variables outside.
# Try not to shadow a variable within the function.
# Do not use a function before it is defined.

def add(*nums):
    sum = 0
    for x in nums:
        sum += x
    return sum

print(add(5,4,3,2,1))
# Able to pass an aggregator of options (*) (**)
# named parameters can be passed also
# add(first=1, second=2)
# keywords don't care about placement in parameter window
# positional/default arguments must be first, keyword arguments later, default args also after required
# add(1, 2, 3, first=5, second=50)

# Default Parameters:
# function(x, y=1):
#   Do things
# When y is not supplied, 1 will be used by default.