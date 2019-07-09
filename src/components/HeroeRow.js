import React, { Component } from 'react';

class HeroeRow extends Component {
  render() {
    const { name, race, age, weapon, useRing } = this.props.hero;

    const { handelClickRing, handelClickKill, index } = this.props;

    return (
      <tr className="character-row">
        <td>{name}</td>
        <td>{race}</td>
        <td>{age}</td>
        <td>{weapon} ⚔</td>
        <td>
          <div className="controls">
            <div onClick={() => handelClickKill(index)}>☠ Kill</div>
            <div
              style={{ display: useRing ? 'none' : '' }}
              onClick={() => handelClickRing(index)}
            >
              <span role="img" aria-label="Ring">
                💍
              </span>{' '}
              Use Ring
            </div>
          </div>
        </td>
      </tr>
    );
  }
}

export default HeroeRow;
