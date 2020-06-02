import re

syntax_file = open('E:/Work/cohort4/01-getting-started/src/scripts/syntax.js', 'r')
lines = 0
elses = 0
chars = 0
try:
    for line in syntax_file:
        lines += 1
        chars += len(line)
        if re.search(r'}\s*else', line):
            elses += 1
finally:
    syntax_file.close()

print('Total lines in Syntax.js file: ', lines)
print('Total elses in Syntax.js file: ', elses)
print('Total characters in Syntax.js: ', chars)