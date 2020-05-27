class ClassTest:
    def instance_method(self):
        print(f"Called instance_method of {self}")
    
    def __str__(self):
        return 'String representation.'

    def __repr__(self):
        return 'Self representation.'

    @classmethod
    def class_method(cls):
        print(f"called class_method of {cls}")

    @staticmethod
    def static_method():
        print('Called Static Method.')

# When class method is specified, then no object instantiation is necessary
ClassTest.class_method()

# Standard methods can be called when the class is instantiated
test = ClassTest()
test.instance_method()

# Static Method don't get any arguments passed by default like instanced or class methods.
# Called same way as class Method.
ClassTest.static_method()


# EX
class Book:
    TYPES = ('hardcover', 'paperback')

    def __init__(self, name, book_type, weight):
        self.name = name
        self.book_type = book_type
        self.weight = weight

    def __repr__(self):
        return f"<Book {self.name}, {self.book_type}, weighing {self.weight}g>"

    @classmethod
    def hardcover(cls, name, page_weight):
        return cls(name, cls.TYPES[0], page_weight + 100)

    @classmethod
    def paperback(cls, name, page_weight):
        return cls(name, cls.TYPES[1], page_weight)

book = Book.hardcover("Harry Potter", 1500)
light = Book.paperback("Python 101", 600)
print(book)
print(light)

# Class Inheritence operates as you'd suspect.

class Device:
    def __init__(self, name, connected_by):
        self.name = name
        self.connected_by = connected_by
        self.connected = True

    def __str__(self):
        return f"Device {self.name!r} ({self.connected_by})"

    def disconnect(self):
        self.connected = False
        print('Disconnected.')

printer = Device("Printer", "USB")

class Printer(Device):
    def __init__(self, name, connected_by, capacity):
        super().__init__(name, connected_by)
        self.capacity = capacity
        self.remaining_pages = capacity

    def __str__(self):
        return f"{super().__str__()} ({self.remaining_pages} pages remaining.)"

    def print(self, pages):
        if not self.connected: 
            print("Your printer is not connected!")
        print(f'Printing {pages} pages.')
        self.remaining_pages -= pages

real_printer = Printer("Laser Printer", "USB", 500)
print(real_printer)
real_printer.print(20)
print(real_printer)
real_printer.disconnect()