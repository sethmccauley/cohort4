import React from 'react';

class City extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            popAdj: 0,
        }
    }

    handleChange = (e) => {
        this.setState({
            popAdj: parseInt(e.target.value)
        })
    }

    render() {
        const { city } = this.props;
        return (
            <div key={this.props.i} className="w3-card w3-col s3 m3 l3 w3-light-grey w3-margin" style={{fontSize: '.8em', fontFamily: 'verdana', lineHeight: '1em'}}>
                <h3 style={{fontWeight: '600', textDecoration: 'underline'}}>{city.name}</h3><br />
                <span style={{fontSize: '1em'}}>Lat: {city.lat} </span><br />
                <span style={{fontSize: '1em'}}>Long: {city.long} </span>
                <p style={{fontSize: '1em'}}>{this.props.sphere}</p>
                <p style={{fontSize: '1em'}}>Population: {city.pop}</p>
                <p style={{fontSize: '1em'}}>Delineation: {city.howBig()}</p>
                <input className="w3-input w3-border w3-round-small" type="number" placeholder="Pop. Change" onChange={(e) => this.handleChange(e)}></input>
                <button className="w3-btn w3-small w3-light-green w3-inline w3-round-small w3-ripple" style={{margin: '4px 2px'}} onClick={() => this.props.moveIn(city.id, this.state.popAdj)}> Moved In </button>
                <button className="w3-btn w3-small w3-pink w3-inline w3-round-small w3-ripple" style={{margin: '4px 2px'}} onClick={() => this.props.moveOut(city.id, this.state.popAdj)}> Moved Out </button>
                <button className="w3-btn w3-small w3-dark-grey w3-round-small w3-ripple w3-block w3-padding" style={{margin: '4px 2px'}} onClick={() => this.props.delete(city.id)}>- Delete City -</button>
            </div>
        )
    }
}

export default City;