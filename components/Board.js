import React from 'react';
import Field from './Field';

export default class Board extends React.Component {
  render () {
    const { board, onClick } = this.props;
    return (
<<<<<<< HEAD
      <div className='board'>
        {
          board.map((player, i) =>
            <Field key={i} player={player} onClick={onClick.bind(null, i)} />
          )
        }
=======
      <div>
        <Field /><Field /><Field />
        <Field /><Field /><Field />
        <Field /><Field /><Field />
>>>>>>> 0e46456bbd3c3c95b8ee6551db1315f53c5385df
      </div>
    );
  }
}
