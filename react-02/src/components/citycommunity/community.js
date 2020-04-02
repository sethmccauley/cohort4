import React from 'react';
import City from './city.js';


class Community extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            cityCollection: [
                {id: 1, name: 'Lincoln', lat: 50, long: 25, pop: 130000},
                {id: 2, name: 'Fairview', lat: 29, long: 130, pop: 5000000},
                {id: 3, name: 'Podunk', lat: -23, long: 5, pop: 3},
                {id: 4, name: 'Potos', lat: 50, long: 33, pop: 12},
                {id: 5, name: 'Guardia', lat: -78, long: 89, pop: 202},
                {id: 6, name: 'Kakariko', lat: -2, long: 121, pop: 31},
                {id: 7, name: 'Unknown', lat: 33, long: 101, pop: 5487316},
                {id: 8, name: 'Ficticious', lat: 54, long: 6, pop: 52000},
                {id: 9, name: 'Doesnt Exist', lat: 89, long: 77, pop: 5},
            ],
            cityName: '',
            cityLat: 0,
            cityLong: 0,
            cityPop: 0,
            mostNorthern: 'None',
            mostSouthern: 'None',
            totalPop: 0,
        }
        this.movedIn = this.movedIn.bind(this);
        this.movedOut = this.movedOut.bind(this);
        this.submitCity = this.submitCity.bind(this);
    }

    componentDidMount = async () => {
        //fetching city data from server (when ready)
    }

    deleteCity(id){

    }

    getMostNorthern(){
        let mostNorthernCity = this.state.cityCollection[0];
        this.state.cityCollection.forEach(value => {
            if (value.lat > mostNorthernCity.lat){
                mostNorthernCity = value;
            }
        })
        return mostNorthernCity;
    }

    getMostSouthern(){
        let mostSouthernCity = this.state.cityCollection[0];
        this.state.cityCollection.forEach(value => {
            if (value.lat < mostSouthernCity.lat){
                mostSouthernCity = value;
            }
        })
        return mostSouthernCity;
    }

    getPopulation(){
        let totalPop = 0;
        this.state.cityCollection.forEach(value => {
            totalPop += parseFloat(value.pop, 10);
        })
        return totalPop;
    }

    movedIn(id, num){
        console.log(id, num)
    }
    
    movedOut = (num) => {
        // if(!isNaN(num)) return alert('Please input a numerical value.');
        // this.setState({
        //     pop: this.state.pop - parseFloat(num, 10),
        // })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    submitCity = (e) => {
        console.log(this.state.cityName, this.state.cityLat, this.state.cityLong, this.state.cityPop)
        this.setState({
            cityName: '',
            cityLat: 0,
            cityLong: 0,
            cityPop: 0
        })
        this.cityName.value = '';
        this.cityLat.value = '';
        this.cityLong.value = '';
        this.cityPop.value = '';
    }

    render() {
        const cityCards = this.state.cityCollection.map(city => {
            return (
                <City 
                    key={city.id}
                    id={city.id}
                    name={city.name} 
                    lat={city.lat} 
                    long={city.long} 
                    pop={city.pop} 
                    moveIn={this.movedIn} 
                    moveOut={this.movedOut} 
                    delete={this.deleteCity} 
                />
            )
        })

        return (
            <div className="w3-content w3-section">
                <h1 style={{color: 'white'}}> Community Controller. </h1>
                <div className="w3-row-padding">
                    <div className="w3-card-2 w3-col s3 m3 l3 w3-light-grey w3-margin" style={{fontSize: '.8em', fontFamily: 'Verdana', lineHeight: '.9em'}}>
                        <h4 style={{fontWeight: '600'}}>Create City</h4>
                        <input type="text" className="w3-input w3-border w3-rounded-small" id="cityName" placeholder="City Name" ref={el => this.cityName = el} onChange={this.handleChange} /><br />
                        <input type="number" className="w3-input w3-border w3-rounded-small" id="cityLat" placeholder="Latitude" ref={el => this.cityLat = el} onChange={this.handleChange} /><br />
                        <input type="number" className="w3-input w3-border w3-rounded-small" id="cityLong" placeholder="Longitude" ref={el => this.cityLong = el} onChange={this.handleChange} /><br />
                        <input type="number" className="w3-input w3-border w3-rounded-small" id="cityPop" placeholder="Population" ref={el => this.cityPop = el} onChange={this.handleChange} /><br />
                        <button className="w3-button w3-block w3-blue w3-ripple w3-padding" id="addCityBtn" onClick={this.submitCity}>+ Add City +</button>
                        <div id="summary" className="w3-section w3-left" style={{lineHeight: '1.2em',fontSize: '1em'}}>
                            <b>Most Northern: {this.getMostNorthern().name}</b><br />
                            <b>Most Southern: {this.getMostSouthern().name}</b><br />
                            <b>Total Pop.: {this.getPopulation()}</b>
                        </div>
                    </div>
                    {cityCards}
                </div>
            </div>
        );
    }
}

export default Community;