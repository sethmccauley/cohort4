import React from 'react';

class City extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            popAdj: 0,
        }
    }

    show() {
        return this.name + '; Lat: ' + this.lat + '; Long: ' + this.long + '; Pop.: ' + this.pop;
    }

    whichSphere(lat){
        if(lat > 0) {
            return 'Northern Hemisphere';
        } else if (lat < 0 ) {
            return 'Southern Hemisphere';
        } else {
            return 'Lies on Equator';
        }
    }

    howBig(pop) {
        switch(true) {
            case (pop > 100000):
                return 'City';
            case (pop > 20000):
                return 'Large Town';
            case (pop > 1000):
                return 'Town';
            case (pop > 100):
                return 'Village';
            case (pop > 0):
                return 'Hamlet';
            default:
                return 'No Population';
        }
    }

    handleChange = (e) => {
        this.setState({
            popAdj: parseInt(e.target.value)
        })
    }

    onSubmit = () => {
        this.props.moveIn(this.props.id, this.state.popAdj);
    }

    
    render() {
        return (
            <div key={this.props.id} className="w3-card w3-col s3 m3 l3 w3-light-grey w3-margin" style={{fontSize: '.8em', fontFamily: 'verdana', lineHeight: '1em'}}>
                <h3 style={{fontWeight: '600', textDecoration: 'underline'}}>{this.props.name}</h3><br />
                <span style={{fontSize: '1em'}}>Lat: {this.props.lat} </span><br />
                <span style={{fontSize: '1em'}}>Long: {this.props.long} </span>
                <p style={{fontSize: '1em'}}>{this.whichSphere(this.props.lat)}</p>
                <p style={{fontSize: '1em'}}>Population: {this.props.pop}</p>
                <p style={{fontSize: '1em'}}>Delineation: {this.howBig(this.props.pop)}</p>
                <input className="w3-input w3-border w3-round-small" type="number" placeholder="Pop. Change" onChange={(e) => this.handleChange(e)}></input>
                <button className="w3-btn w3-small w3-light-green w3-inline w3-round-small w3-ripple" style={{margin: '4px 2px'}} onClick={this.onSubmit}> Moved In </button>
                <button className="w3-btn w3-small w3-pink w3-inline w3-round-small w3-ripple" style={{margin: '4px 2px'}}> Moved Out </button>
                <button className="w3-btn w3-small w3-dark-grey w3-round-small w3-ripple w3-block w3-padding" style={{margin: '4px 2px'}}>- Delete City -</button>
            </div>
        )
    }
}

export default City;