import React, { Component } from "react";
import Form from "./Form";

class Beer extends Component {
    
  render(props) {
    const id = this.props.id
      return (
       
          <div className="card beer">
            <img
              className="card-img-top"
              src={this.props.image_url}
              alt="Card cap"
            />
            <div className="card-body">
              <h3>{this.props.name}</h3>
              <p className="card-text">{this.props.description}</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <strong>{this.props.tagline}</strong>
              </li>
              <li className="list-group-item">
                First brewed:{this.props.first_brewed}
              </li>
              <li className="list-group-item">
                {this.props.ingredients.yeast}
              </li>
              { (this.props.beerClicked === id && !this.props.clicked) 
              && <Form {...this.props} /> }

              <button type="button" className="btn btn-dark" onClick={()=>{
                  
                  this.props.showForm(id)}}>
                Edit
              </button>
              <button
                type="button"
                className="btn btn-dark"
                onClick={() => {
                  this.props.deleteBeer(this.props.id);
                }}
              >
                Delete
              </button>
            </ul>
          </div>
      
      );
    } 
  
}

export default Beer;
