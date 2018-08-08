import * as React from 'react';
import * as PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

class Worksheet extends React.PureComponent {
  static propTypes = {
    worksheet: PropTypes.string
  }

  render() {
    return (
      <Table>
        <TableHead>
          <TableRow>
            {
              this.props.worksheet.columns.map(column => (
                <TableCell>{column}</TableCell>
              ))
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {this.props.worksheet.rows.map((row, rowIndex) => (
            <TableRow key={`row-${rowIndex}`}>
              {
                row.map((column, columnIndex) => (
                  <TableCell
                    onClick={() => this.handleCellClick(rowIndex, columnIndex)}
                    key={`cell-${rowIndex}-${columnIndex}`}
                  >
                    {column.label}
                  </TableCell>
                ))
              }
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
}

export {
  Worksheet
};
