// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Badge } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function App() {
  const data = [
    {
      productImage:
        "https://images.squarespace-cdn.com/content/v1/58fd82dbbf629ab224f81b68/1600152142395-5RJ5UR3Y9YGYL89H30OQ/Japanese-Toys.jpg?format=1000w",
      productName: "Fancy Product",
      price1: "$40.00",
      price2: "$80.00",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      productImage:
        "data:image/jpeg;base64,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",
      productName: "Special Item",
      price1: "$20.00",
      price2: "$18.00",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      productImage:
        "https://w0.peakpx.com/wallpaper/297/87/HD-wallpaper-iron-man-war-skeleton-thumbnail.jpg",
      productName: "Sale Item",
      price1: "$50.00",
      price2:"$25.00",
      rating: "⭐⭐⭐",
    },
    {
      productImage:
        "https://cdn.igp.com/f_auto,q_auto,t_pnopt9prodlp/products/p-hand-painted-personalized-artisan-wooden-dolls-set-of-2--154283-m.jpg",
      productName: "Popular Item",
      price1: "$40.00",
      rating: "⭐⭐⭐⭐",
    },
    {
      productImage:
        "https://images.squarespace-cdn.com/content/v1/53e3bb92e4b0fb49e524c1c9/1676474112448-T82QWS1807TXJ35SN2GB/JadaToysSFfeilongA.jpeg?format=1500w",
      productName: "Sale Item",
      price1: "$50.00",
      price2: "$25.00",
      rating: "⭐⭐⭐⭐",
    },
    {
      productImage:
        "https://images.squarespace-cdn.com/content/v1/629edce742efb94396179ab8/1675962563104-8HNAXX5THY87K5H8ES2E/ab4fcf06-90b4-4acb-bef1-808be169daa3.jpeg?format=1500whttps://freepngimg.com/save/33568-toy-image/690x396",
      productName: "Fancy Product",
       price1: "$120.00",
      price2: "$280.00",
      rating: "⭐⭐",
      
    },
    {
      productImage:
        "https://media.istockphoto.com/id/909772478/photo/brown-teddy-bear-isolated-in-front-of-a-white-background.jpg?s=612x612&w=0&k=20&c=F4252bOrMfRTB8kWm2oM2jlb9JXY08tKCaO5G_ms1Uw=",
      productName: "Special Item",
      price1: "$20.00",
      price2: "$18.00",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      productImage:
        "https://media.istockphoto.com/id/867830532/photo/wooden-toys-on-white-background-3d-rendering.jpg?s=612x612&w=0&k=20&c=nFp5PMl2r5_nC1jjpFRTHqZOd4XnSFHlSu147x7943I=",
      productName: "Popular Item",
      price1: "$40.00",
      rating: "⭐⭐⭐⭐⭐",
    },

  ]
  const[count, setCount] = useState(0)
  return (
    <div className="App">
        <header class="bg-dark py-2 mb-2">
            <div class="container px-4 px-lg-5 my-5">
                <div class="text-center text-white">
                    <h1 class="display-4 fw-bolder">Shop in style</h1>
                </div>
            </div>
        </header>

        <div className='cart-value'>
          <Badge bg="primary p-2">
           Cart {count}
          </Badge>
        </div>
      <div className='card-container'>
        {data.map((prodduct, idx)=>(
          <Product
          key = {idx}
          prod = {prodduct}
          count = {count}
          setCount = {setCount}
          />
          
        ))}
      
    </div>
    </div>
  );
}

export default App;

function Product({prod, count, setCount}) {
  const[show, setShow] = useState(false) 

  function addtoCart(){
    setCount(count+1);
    setShow(!show);
  }

  function removeCart(){
    setCount(count-1);
    setShow(!show);
  }
  return (
    <div>
     <Card className='containers'>
      <Card.Img className='images' variant="top" src={prod.productImage} />
      <Card.Body>
        <Card.Title>{prod.productName}</Card.Title>
        <Card.Text>{prod.rating}</Card.Text>
        <Card.Text><s>{prod.price2} </s>&nbsp; {prod.price1}</Card.Text>
        

        {!show ?
        <Button variant="primary"
        onClick={addtoCart}
        >Add to Cart</Button> : "" }
        
        {show ?
        <Button variant="danger"
        onClick={removeCart}
        >Remove Cart</Button> 
        : ""}
        
      </Card.Body>
    </Card>
    </div>
  );
}