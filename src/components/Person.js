import React, { Component } from 'react';
import classes from './Person.Module.css';

class PersonComponent extends Component{

    haveBday = (e) => {
        this.props.age = this.props.age += 1;
    }

    render(){
        return(
            <div className={classes.card}>
                <div className={classes.content}>
                    <h1>{this.props.lastName}, {this.props.firstName}</h1>
                    <p>Age: {this.props.age}</p>
                    <p>Hair Color: {this.props.hairColor}</p>
                </div>
                <button onClick={this.haveBday}>Birthday for {this.props.firstName} {this.props.lastName}</button>
            </div>
        );

    }
}

export default PersonComponent;