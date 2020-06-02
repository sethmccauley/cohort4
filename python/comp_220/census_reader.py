import csv
import os
import json
from collections import defaultdict

tally = "RES_CNT"
groupBy = ["CLASS", "SECTOR"]
lines = 0

with open(os.getcwd() + '/comp_220/Census_by_Community_2019.csv','r') as csv_file:
    csv_reader = csv.reader(csv_file, delimiter=',')

    headers = next(csv_reader)
    ttlDictionary = {option: defaultdict(int) for option in groupBy}

    for line in csv_reader:
        lines += 1
        for index in ttlDictionary:
            ttlDictionary[index][line[headers.index(index)]] += int(line[headers.index(tally)])

for groupings in groupBy:
    print('Summary by ' + groupings.lower() + ':')
    for key in ttlDictionary[groupings]:
        print(f'{key}: ', ttlDictionary[groupings][key])
    print('')

print('Lines read: ', lines)

text_file = open(os.getcwd() + '/comp_220/output.txt', 'w')
text_file.write(json.dumps(ttlDictionary))
text_file.close()