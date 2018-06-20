import React, { Component } from 'react';


export default class Form extends Component {
    
    render(props) {
        props = this.props
    
        
        return (
            <li>
            
              <form id={props.id} onSubmit={props.handleSubmit}>
                  <h3>{props.name}</h3>
                  <div> edit </div>
                <label htmlFor="name">
                  <strong>Name</strong>
                </label>
                <input
                  id={props.id}
                  field="name"
                  name="name"
                  placeholder="Name"
                  defaultValue={props.name}
                  onChange={props.handleChange}
                />
        
                <label htmlFor="description">
                  <strong>Description</strong>
                </label>
                <textarea
                  id={props.id}
                  field="description"
                  name="description"
                  placeholder="description"
                  defaultValue={props.description}
                  onChange={props.handleChange}
                />
        
                <label htmlFor="tagline">
                  <strong>Line:</strong>
                </label>
                <input
                  id={props.id}
                  field="tagline"
                  name="tagline"
                  defaultValue={props.tagline}
                  onChange={props.handleChange}
                />
        
                <label htmlFor="first_brewed">
                  <strong>First brewed:</strong>
                </label>
                <input
                  id={props.id}
                  field="first_brewed"
                  name="first_brewed"
                  defaultValue={props.first_brewed}
                  onChange={props.handleChange}
                />
        
                <label htmlFor="yeast">
                  <strong>Yeast:</strong>
                </label>
                <input
                  id={props.id}
                  field="yeast"
                  name="yeast"
                  defaultValue={props.ingredients.yeast}
                  onChange={props.handleChange}
                />
                <button className="btn btn-warning" type="submit">
                  Submit
                </button>
                <button onClick={props.closeForm} className="btn btn-primary">
                  Close
                </button>

        

              </form>
              
            </li>
            
          );
    
    }

}
