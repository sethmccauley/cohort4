# pytest -s -k <phrase/word for name of test>
# test_ turns the function into a test
import syntax

def test_isnum():
    assert syntax.is_num(8) == True
    assert syntax.is_num('Eight') == False

def test_isString():
    assert syntax.is_string('wat') == True
    assert syntax.is_string(34) == False

def test_isBool():
    assert syntax.is_bool(False) == True
    assert syntax.is_bool('No') == False



