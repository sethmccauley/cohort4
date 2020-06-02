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

def test_hitOrStand():
    assert syntax.hitOrStand(17) == 'Stand'
    assert syntax.hitOrStand(1) == 'Hit'
    assert syntax.hitOrStand(22) == 'Play Again?'

def test_stringTogether():
    assert syntax.stringTogether('a','b','c') == 'abc'

def test_getDefaultAnswer():
    assert syntax.getDefaultAnswer(answer='A') == 'A'
    assert syntax.getDefaultAnswer() == 'C'

def test_email():
    assert syntax.email('seth','mccauley') == 'seth.mccauley@evolveu.ca'
    assert syntax.email('hi',3) == 'Type Error.'
    assert syntax.email(' ',' ') == 'Missing Arguments.'
    assert syntax.email('senor',' ') == 'Missing Arguments.'

def test_calculateTax():
    assert syntax.calculateTax(48535) == 7280
    assert syntax.calculateTax(2) == .3
    assert syntax.calculateTax(250000) == 61403.56