import React from 'react';
import City from './city.js';
import functions from './fetch.js';
import Community from './citycommunity-v';
import * as cityExamples from './cityexamples.json';

const CommunityController = new Community()

class CommunityComponent extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            control: CommunityController,
            mostNorthern: 'None',
            mostSouthern: 'None',
            totalPop: 0,
        }
        this.addCity = {
            cityName: '',
            cityLat: 0,
            cityLong: 0,
            cityPop: 0,
        }

        this.uniqueId = 0;
        this.movedIn = this.movedIn.bind(this);
        this.movedOut = this.movedOut.bind(this);
        this.submitCity = this.submitCity.bind(this);
    }

    componentDidMount = async () => {
        let data = await functions.postData('http://localhost:5000/all')
        data.forEach(value => {
            this.state.control.createCity(value.city.name, parseFloat(value.city.lat, 10), parseFloat(value.city.long, 10), parseFloat(value.city.pop, 10), value.key);
            if(value.key >= this.uniqueId ) this.uniqueId += 1;
        })
    }

    deleteCity(id){

    }

    getMostNorthern(){
        let mostNorthernCity = this.state.control.getMostNorthern() || "None"
        return mostNorthernCity;
    }

    getMostSouthern(){
        let mostSouthernCity = this.state.control.getMostSouthern() || "None"
        return mostSouthernCity;
    }

    getPopulation(){
        let totalPop = this.state.control.getPopulation() || 0
        return totalPop;
    }

    movedIn(id, num){
        console.log(id, num)
    }
    
    movedOut = (id, num) => {
        if(!isNaN(num)) return alert('Please input a numerical value.');

    }

    handleChange = (e) => {
        this.addCity[e.target.id] = e.target.value
    }

    submitCity = () => {
        if(this.addCity.cityName === '') return alert('Please input a city name.');
        
        const localCities = this.state.control
        let determineKey = localCities.cityList.findIndex(value => value.key === this.state.uniqueId)
        determineKey === -1 ? 
            localCities.createCity(this.addCity.cityName, this.addCity.cityLat, this.addCity.cityLong, this.addCity.cityPop, this.state.uniqueId) :
            alert('UniqueID and current city list conflicting, please reload.')

        this.setState({
            control: localCities
        })

        this.cityName.value = '';
        this.cityLat.value = '';
        this.cityLong.value = '';
        this.cityPop.value = '';
    }

    render() {
        const cityCards = this.state.control.cityList.length > 0 ? this.state.control.cityList.map((city, i) => {
            return (
                <City 
                    key={i}
                    id={city.key}
                    city={city}
                    sphere={this.state.control.whichSphere(city)}
                    moveIn={(id, amt) => this.movedIn(id, amt)} 
                    moveOut={(id, amt) => this.movedOut(id, amt)} 
                    delete={(id) => this.deleteCity(id)} 
                />
            )
        }) : ''

        const showOrHide = (this.state.control.cityList.length > 0) ? 'w3-show' : 'w3-hide'

        return (
            <div className="w3-content w3-section">
                <h1 style={{color: 'white'}}>Community Controller</h1>
                <div className="w3-row-padding">
                    <div className="w3-card-2 w3-col s3 m3 l3 w3-light-grey w3-margin" style={{fontSize: '.8em', fontFamily: 'Verdana', lineHeight: '.9em'}}>
                        <h4 style={{fontWeight: '600'}}>Create City</h4>
                        <input type="text" className="w3-input w3-border w3-rounded-small" id="cityName" placeholder="City Name" ref={el => this.cityName = el} onChange={this.handleChange} /><br />
                        <input type="number" className="w3-input w3-border w3-rounded-small" id="cityLat" placeholder="Latitude" ref={el => this.cityLat = el} onChange={this.handleChange} /><br />
                        <input type="number" className="w3-input w3-border w3-rounded-small" id="cityLong" placeholder="Longitude" ref={el => this.cityLong = el} onChange={this.handleChange} /><br />
                        <input type="number" className="w3-input w3-border w3-rounded-small" id="cityPop" placeholder="Population" ref={el => this.cityPop = el} onChange={this.handleChange} /><br />
                        <button className="w3-button w3-block w3-blue w3-ripple w3-padding" id="addCityBtn" onClick={this.submitCity}>+ Add City +</button><br />
                        <button className="w3-button w3-block w3-light-blue w3-ripple w3-padding" id="addRandom" onClick={this.randomCity}>+ Generate Random +</button><br />
                        <div id="summary" className={showOrHide + " w3-section w3-left"} style={{lineHeight: '1.2em',fontSize: '1em'}}>
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

export default CommunityComponent;