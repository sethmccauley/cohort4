numbas = [30,45,60,75,90]
doubled = [num * 2 for num in numbas]
# doubled => [60, 90, 120, 150, 180]
# inline list comprehensions - keep em short~

foods = ['Apple', 'Banana', 'Orange']
starts_o = [food for food in foods if food.startswith('O')]
print(starts_o)