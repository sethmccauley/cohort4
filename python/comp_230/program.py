import helpers
import os
from openpyxl import Workbook, load_workbook

localFile = os.getcwd() + '/store_db.xlsx'

def requestInvoice():
    invoiceNumber = int(input('Which invoice would you like to output? '))

    try: # Attempt Loading Xlsx
        storeDb = helpers.breakIntoDict(localFile)
    except:
        print(f'Issue loading file {localFile}')

    try: # Find Invoice ID First
        for rows in storeDb['invoices'].values():
            if rows['invoice_id'] == invoiceNumber:
                exists = True
                break
            else:
                exists = False
        if not exists:
            raise ValueError
    except ValueError:
        print(f'Invoice {invoiceNumber} not found.')
        return

    try: # Attempt Joins
        firstMerge = helpers.innerJoin(storeDb['invoices'], storeDb['customers'], 'customer_id')
        secondMerge = helpers.innerJoin(firstMerge, storeDb['invoice_items'], 'invoice_id', invoiceNumber)
        thirdMerge = helpers.innerJoin(secondMerge, storeDb['products'], 'product_id')
        print(f'Found invoice {invoiceNumber} with {len(secondMerge)} items.')
    except:
        print('Merging database pages failed.')

    try: # Write to File
        writeToFile(thirdMerge)
    except:
        print('Writing invoice to file failed.')
    return

def writeToFile(invoiceDictionary):
    workbook = Workbook()
    sheet = workbook.active
    # Header Items
    inv = invoiceDictionary[1]['invoice_id']
    sheet['A1'] = 'Invoice No.'
    sheet['A2'] = 'Date'
    sheet['A3'] = 'Client'
    sheet['A4'] = 'Address'
    sheet['B1'] = inv
    sheet['B2'] = invoiceDictionary[1]['invoice_date']
    sheet['B3'] = invoiceDictionary[1]['first_name'] + ' ' + invoiceDictionary[1]['last_name']
    sheet['B4'] = invoiceDictionary[1]['address']
    sheet['B6'] = 'Product Desc.'
    sheet['C6'] = 'Qty'
    sheet['D6'] = 'Unit Price'
    sheet['F6'] = 'Total'

    # Line Items
    row = 7
    subTotal = {}
    for key, data in invoiceDictionary.items():
        sheet[f'B{key+row}'] = data["description"]
        sheet[f'C{key+row}'] = data["qty"]
        sheet[f'D{key+row}'] = data["price"]
        sheet[f'F{key+row}'] = data["qty"]*data["price"]
        subTotal[key] = data["qty"]*data["price"]

    # Subtotal
    row = row + len(invoiceDictionary) + 2
    sheet[f'E{row}'] = 'GST'
    sheet[f'F{row}'] = sum(subTotal.values())*0.05
    sheet[f'E{row+1}'] = 'SubTotal'
    sheet[f'F{row+1}'] = sum(subTotal.values())*0.05 + sum(subTotal.values())

    writeTo = os.getcwd() + f'/invoice_{inv}.xlsx'
    workbook.save(writeTo)


if __name__ == '__main__':
    print('Welcome to the invoice construction system.')
    requestInvoice()