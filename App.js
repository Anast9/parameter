// logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
import Car from './Car/Car';
class App extends Component {

  state = {
    cars: [
      {name: 'Моя девушка - инопланетянка', year: 2022},
       {name: 'Глоток молодости', year: 2018},
       {name: 'Невеста на замену', year: 2019}

      
    ],

    pageTitle: 'Дорамы смотреть онлайн'
  }

  changeTitleHandler = (newTitle) =>{

    this.setState({
      pageTitle: newTitle
    })
  }

  
  render() {

    console.log('Render')

    const divStyle = {
      textAlign: 'center'
    }

    const cars = this.state.cars

    return (
      <div style={divStyle}>
        <h1>{this.state.pageTitle}</h1>
<button onClick={this.changeTitleHandler.bind(this, 'tecm !')}>Показать больше Дорам</button>

        <Car 
        name={cars[0].name}
         year={cars[0].year}
         onChageTile={this.changeTitleHandler.bind(this, cars[0].name)}
         />
        <Car 
        name={cars[1].name}
         year={cars[1].year}
         />
        <Car 
        name={cars[2].name}
         year={cars[2].year}/>
      </div>
    );
  }
}

export default App;
