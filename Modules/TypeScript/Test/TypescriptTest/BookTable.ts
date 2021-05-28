import { ITable } from "./ITable";
import { BookedTable } from "./BookedTable";
import { ITableBook } from "./ITableBook";
import { Tables } from "./Tables";

export class BookTable implements ITableBook {
    tableId: number;
    CustomerId: number;
    BDate: Date;
    AvailableTable(BookedTable, TableId: number, VDate: string) {
        for (var item of BookedTable) {
            if (item.tableId == TableId && item.BDate == new Date(VDate)) {
                return true;
            }
        }
        return false;
    }
    BookTable(TableId: number, CustomerId: number, VDate: string) {
        if (this.AvailableTable(BookedTable, TableId, VDate)) {
            BookedTable.push({ tableId: TableId, CustomerId: CustomerId, BDate: new Date(VDate) });
            return `Table is booked..`;
        }
        else {
            return `Table is already booked...`;
        }
    }
    AvailableTables(BookedTable, VDate: string) {
        var avTables: Array<ITable> = [{ TableId: 0, TableSize: 0 }];

        for (var tb of Tables) {
           if(!this.AvailableTable(BookedTable, tb.TableId, VDate))
           {
                avTables.push(tb);
           }
        }
        return avTables;
    }
}

// var tb = new BookTable();
// console.log(tb.AvailableTable(BookedTable,5,'2019-05-07'));

// console.log(tb.BookTable(1,1,'2019-05-07'));
