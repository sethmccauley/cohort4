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