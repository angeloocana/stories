import * as React from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Cell from './Cell';

class Rows extends React.PureComponent {
  static propTypes = {
    startRow: PropTypes.number.isRequired,
    endRow: PropTypes.number.isRequired,
    startColumn: PropTypes.number.isRequired,
    endColumn: PropTypes.number.isRequired,
  }

  render() {
    return this.rows.map((row, rowIndex) => (
      <TableRow key={`row-${rowIndex}`}>
        {
          row.map((column, columnIndex) => (
            <Cell rowIndex={rowIndex} columnIndex={columnIndex} />
          ))
        }
      </TableRow>
    )
    );
  }
}

export {
  Rows
};
