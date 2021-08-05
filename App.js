import logo from './logo.svg';
import './App.css';

import React from 'react';



class App extends React.Component {
  
  state = {

    Person: {

      fullName: "Oueslati Ahmed",

      bio: "I just love the life",

      imgSrc: "Ahmed.jpg",

      profession: "I am a Front Office & Back Office Administrator"

    },
    

    show: true

  };

 

  handleShowPerson = () => {

    this.setState({

      ...this.state,

      show: !this.state.show

    });

  };



  render() {

    return (

      <>

        {this.state.show && (

          <>

            <h1>{this.state.Person.fullName}</h1>

            <h1>{this.state.Person.bio}</h1>

            <img src={this.state.Person.imgSrc} alt="Moi"></img>

            <h1>{this.state.Person.profession}</h1>
           
       
            <h1>
            componentWillMount(){
    setInterval(()=> {
      this.setState({count: this.state.count + 1})
    }, 1000 )
  }
              </h1>
           
            
            <br></br>

          </>

        )}

 

        <button onClick={this.handleShowPerson}>click here</button>

      </>

    );

  }

}

export default App;
