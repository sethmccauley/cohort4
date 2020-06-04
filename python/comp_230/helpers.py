from openpyxl import load_workbook, Workbook
import os
from collections import defaultdict

localFile = os.getcwd() + '/store_db.xlsx'

def breakIntoDict(file):
    wb = load_workbook(localFile)
    builtDict = {}
    for sheet in wb.sheetnames:
        builtDict[sheet] = {}
        rowCount = 1
        for row in wb[sheet].iter_rows(min_row=1,min_col=1):
            if row[0].value is not None:
                col = 0
                builtDict[sheet][rowCount] = {}
                for cell in row:
                    builtDict[sheet][rowCount][wb[sheet][1][col].value] = cell.value
                    col += 1
            rowCount += 1
    return builtDict

def innerJoin(dict_one, dict_two, join_on):
    return False

test = breakIntoDict(localFile)
print(test['customers'])
print('')
print(test['invoices'])
print('')
print(test['invoice_items'])
