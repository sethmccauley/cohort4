from importing import divide
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