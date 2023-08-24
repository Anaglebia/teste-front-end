import React,{Component } from "react";
import api from "./api";
import Navbar from "./Navbar";


class App extends Component {
  state = {
    products:[],
  }

    async componentDidMount(){
      const response = await api.get('')
      console.log(response.data)
      this.setState({products: response.data.products})
    }

  render(){
   const {products} = this.state;
  
  return (
    
    <div>
      <Navbar/>
      <ul>
        {products.map((p) => (
          <li>
            <h2>{p.productName}</h2>
            <p>{p.descriptionShort}</p>
            <img src={p.photo} alt={p.productName} />
            <p>Price: {p.price}</p>
          </li>
        ))}
      </ul>
    </div>
      )
  }    
}

export default App;