import React from 'react';

class HeroeRow extends React.Component {
    render() {

        const {name, race, age, weapon, useRing, killed} = this.props.hero;

        const {handelClickRing, handelClickKill, index} = this.props

        return (
            
            <tr className="character-row" style={{color: (killed?'grey':'')}}>
              <td>{name}</td>
              <td>{race}</td>
              <td>{age}</td>
              <td>{weapon} ⚔</td>
              <td>
                <div className="controls">
                  <div onClick={() => handelClickKill(index)}>☠ Kill</div>
                  <div 
                    style={{display: useRing ? 'none' : ''}} 
                    onClick={() => handelClickRing(index)}>💍 Use Ring
                  </div>
                </div>
              </td>
            </tr>
        );
    }
}

export default HeroeRow;