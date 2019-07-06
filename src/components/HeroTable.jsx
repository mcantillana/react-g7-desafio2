import React from 'react';
import HeroeRow from './HeroeRow';
import '../assets/css/style.css';


class HeroTable extends React.Component {
      
    constructor(props) {
      super(props);

      this.state = {
        isActive: true,
        isHidden: null,
        arrayHeroes: props.heroes.map(item => {
          return {...item, useRing: false}
        })
      }
    }

    handelClickKill = index => {
      
      let current_element = this.state.arrayHeroes[index]

      const newArray = this.state.arrayHeroes.filter((item, idx) => { 
        return idx != index
      })

      newArray.push(current_element)
      

      this.setState({
        arrayHeroes: newArray
      })
    }

    handelClickRing = index => {

      const filterArray = this.state.arrayHeroes.map((item) => {
          return {...item, useRing: true}
      });

      const newArray = filterArray.filter((item, idx) => { 
        return idx != index
      })
      
      this.setState({
        arrayHeroes: newArray
      })
      console.log(index)
      console.log(newArray)
    }

    render() {
      const {arrayHeroes} = this.state;
      return (
          <table className="characters-table">
           <tbody>
            <tr class="character-row">
              <th>Name</th>
              <th>Race</th>
              <th>Age</th>
              <th>Weapon</th>
              <th></th>
            </tr>
            {
              arrayHeroes.map(
                (hero, index) => 
                  <HeroeRow 
                    key={index} 
                    hero={hero} 
                    index={index} 
                    handelClickRing={this.handelClickRing} 
                    handelClickKill={this.handelClickKill} 
                  />
              ) 
            }

           </tbody>
         </table>
      );

    }

}

export default HeroTable;