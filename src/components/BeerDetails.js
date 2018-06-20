import React from 'react'

export default function BeerDetails(props){

    return (<div className="card beer">
    <img className="card-img-top" src={this.props.image_url} alt="Card cap" />
    <div className="card-body">
        <h3>{this.props.name}</h3>
         <p className="card-text">{this.props.description}</p>
    </div>
    <ul className="list-group list-group-flush">
        <li  className="list-group-item"><strong>{this.props.tagline}</strong></li>
        <li className="list-group-item">First brewed:{this.props.first_brewed}</li>
        <li className="list-group-item">{this.props.ingredients.yeast}</li>
        
        <button type="button" className="btn btn-dark">Edit</button>
        <button  type="button" className="btn btn-dark" onClick={() =>{this.props.deleteBeer(this.props.id)}} >Delete</button>
    </ul>
    
</div>)



}
