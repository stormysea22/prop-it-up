import React , { Component } from 'react';

class PersonCard extends Component {
    render(){
        return (
            <div className="d-flex flex-wrap justify-content-center align-items-center align-content-center">
                <div class="card w-25">
                    <div class="card border-info mb-3">
                        <h1 class="card-title, text-left"> {this.props.lastName} {this.props.firstName} </h1>
                        <p class="card-text, text-left"> Age: {this.props.age} </p>
                        <p class="card-text, text-left"> Hair Color: {this.props.hairColor} </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default PersonCard;