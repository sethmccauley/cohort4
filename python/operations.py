day_of_week = input('What day is today? ').lower()

if day_of_week == 'friday':
    print('Gotta get down on Friday.')
else:
    print('Do w/e you want then.')
# If's will test your boolean and operate on the indentation. REMEMBER indentation.
# elif <comparision>: will generate a chained if statement with a separate branch.

foods = ['Apple','Banana','Orange']
print('Banana' in foods)
movies = {'The Matrix','Her','Spaceballs'}
user_movie = input("Enter something you've seen recently: ")
if user_movie in movies:
    print("Oh wow, I've seen {user_movie} too.")
else:
    print("You have some interesting tastes... can't say I've seen that one.")
# 'in' checks for membership.