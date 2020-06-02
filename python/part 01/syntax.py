from importing import divide
import math
# import importing -- and gain access to everything
# import sys -- System Functionalities
# print(divide(1,2))

def is_num(num):
    return type(num) is int

def is_string(arg):
    return type(arg) is str

def is_bool(arg):
    return type(arg) is bool

def is_list(arg):
    return type(arg) is list 

def is_dict(arg):
    return type(arg) is set

# Sample if / else

def hitOrStand(total):
    if total < 17:
        return 'Hit'
    if total < 22:
        return 'Stand'
    return 'Play Again?'

# Functions, Parameters, Returns

def stringTogether(*args):
    return ''.join(str(i) for i in args)

def getDefaultAnswer(answer='C'):
    return answer

# Write a function to return an e-mail string using fname and lname
def email(first, last):
    if is_string(first) and is_string(last):
        if not first.strip() or not last.strip():
            return 'Missing Arguments.'
        return f'{first}.{last}@evolveu.ca'
    return 'Type Error.'

# Tax Revisit

def calculateTax(income):
    totalTax = 0
    taxBrackets = [
        {"bracket": 48535, "rate": .15, "max": 7280},
        {"bracket": 48534, "rate": .205, "max": 9950},
        {"bracket": 53404, "rate": .26, "max": 13885},
        {"bracket": 63895, "rate": .29, "max": 18530},
        {"bracket": math.inf, "rate": .33, "max": 0}
    ]
    for bracket in taxBrackets:
        if income >= bracket["bracket"]:
            totalTax += bracket["max"]
        else:
            if income > 0:
                totalTax += income * bracket["rate"]
        
        income -= bracket["bracket"]
    return totalTax