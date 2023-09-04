import React from "react"
import axios from "axios"
function shop(){
    var [products,setProducts]=React.useState([])
    React.useEffect(function(){
        axios.get("http://fakestoreapi.com/products").then((res)=>{
           setProducts([...res.data])
        })
    },[])
    return(
        <div>
            <div>
                <ul>
                    {
                        products.map((a)=>{
                            return <div className="card" style={{width:"12rem"}}></div>
                            <img className="card-img-top" src={a.image} alt="card image cap"/> 
                            <div className="card-body">{a.title}</div>
                            <div className="card-text"></div>
                        })
                    }
                </ul>
            </div>
        </div>
    )

}
export default shop;
