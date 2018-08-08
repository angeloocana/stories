import * as React from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Cell extends React.PureComponent {
  static propTypes = {
    rowIndex: PropTypes.number.isRequired,
    columnIndex: PropTypes.number.isRequired,
    clickable: PropTypes.bool.isRequired,
    label: PropTypes.string,
  }

  handleClick = () => {
    const position = {
      rowIndex: this.props.rowIndex,
      columnIndex: this.props.columnIndex,
    };
    this.props.dispatch(actions.cellClick(position));
  }

  render() {
    return (
      <TableCell
        onClick={this.handleClick}
        className={clickable ? "clickable" : ""}
      >
        {this.props.label}
      </TableCell>
    );
  }
}

function mapStateToProps(state, props) {
  const { rowIndex, columnIndex } = props;
  
  const cell = state.worksheets[state.currentWoksheet][rowIndex][columnIndex];
  
  return {
    label: cell.label,
    clickable: cell.drillTo && cell.drillTo.length > 0 
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cell);
