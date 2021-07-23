import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(<p>Hello</p>, document.getElementById('sandy'));
 //Go to "index.htm" to see the "sandy" container rfhfg rjke
 //Тамыр түйүнү
 //Тамыр түйүнү - натыйжаны көрсөтүүнү каалаган HTML элементи.
 
 //Бул React тарабынан башкарылуучу контент үчүн идишке окшош .
 
 //Бул <div>элемент болушу керек эмес жана ал төмөнкүлөргө ээ эмес id='root':
 
// Мисал
 //Тамыр түйүнүн сиз каалаган нерсе деп атаса болот:
 
 <body>
 
   <header id="sandy"></header>
 
 </body>
// Натыйжаны <header id="sandy">элементте көрсөтүү:

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
//Теперь часы обновляются каждую секунду.