import React, { Component } from 'react'




export default class Boxes extends Component {

    printColumn = (columnCount, columnSpace) => {

        var printColumn = [];
        var width = 800 - columnCount * columnSpace;
        width = width / columnCount;

        while (columnCount > 0) {
            columnCount--;
            //Print Column Box
            var box = <svg width={width} height="100" style={{ marginRight: `${columnSpace}px` }}>
                <rect x="0" y="0" width={width} height="100"
                    fill="saddlebrown" />
                <text x="5" y="50" className="value-label">100px Height Box</text>
            </svg>
            printColumn.push(box)
        }
        return printColumn;
    }
    render() {
        const column = this.props.columnValue.split(",");
        if (column.length != this.props.rowValue) {       //will check number of column are entered for every row else will Assign last value
            while (column.length != this.props.rowValue) {
                column.push(column[column.length - 1]);
            }

        }
        //Print Row
        var grid = column.map(item => {
            return (
                <div style={{ width: "800px", marginBottom: `${this.props.rowSpace}px` }}>

                    {this.printColumn(+item, this.props.columnSpace)}

                </div>
            )
        });
        return (<div>{grid}</div>)
    }

}

