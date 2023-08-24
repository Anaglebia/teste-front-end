import React,{Component } from "react";
import api from "./api";
import Navbar from "./Navbar";
import Banner from "./Banner";


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
      <Banner/>
      <div>
      </div>
      <ul>
        {products.map((p) => (
          <li>
            <h2>Produtos Relacionados</h2>
            <p>{p.productName}</p>
            <p>{p.descriptionShort}</p>
            <img src={p.photo} alt={p.productName} />
            <p>R$: {p.price}</p>
            <p>ou 2x de R$ 49,95 sem juros</p>
            <p>Frete grátis</p>
            <button>Comprar</button>
          </li>
        ))}
      </ul>
    </div>
      )
  }    
}

export default App;