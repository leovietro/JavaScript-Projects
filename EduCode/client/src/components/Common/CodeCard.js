import React, {Component} from 'react';

class CodeCard extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div class="testa" style={{marginLeft: '15%', marginRight: '4%'}}>
                <div class="card border-secondary mb-3 cards" style={{width: '30rem'}}>
                    <div class="card-header">"{this.props.name}" ({this.props.codeLang}) code was sent by {this.props.username}</div>
                    <div class="card-body text-secondary">
                        <p class="card-text">{this.props.code}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default CodeCard;
