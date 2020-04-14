import React from 'react';
import City from './city.js';
import Community from './citycommunity-pojo';
import * as cityExamples from './cityexamples.json';
import { ThemeContext } from '../../context/themecontext';

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
    }

    componentDidMount = async () => {
        const localControl = this.state.control
        await localControl.getInitialCities()
        this.setState({
            control: localControl,
        })
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

    movedIn = async (id, num) => {
        if(isNaN(num)) return alert('Please input a numerical value.');
        await this.state.control.cityList[this.state.control.cityList.findIndex(element => element.id === id)].movedIn(parseFloat(num, 10))

        this.setState({
            status: 'w/e'
        })
    }
    movedOut = async (id, num) => {
        if(isNaN(num)) return alert('Please input a numerical value.');
        await this.state.control.cityList[this.state.control.cityList.findIndex(element => element.id === id)].movedOut(parseFloat(num, 10))

        this.setState({
            status: 'w/e'
        })
    }

    handleChange = (e) => {
        this.addCity[e.target.id] = e.target.value
    }

    submitCity = async () => {
        if(this.addCity.cityName === '') return alert('Please input a city name.');
        const localCities = this.state.control
        await localCities.createCity(this.addCity.cityName, this.addCity.cityLat, this.addCity.cityLong, this.addCity.cityPop)
        this.setState({
            control: localCities
        })
        this.cityName.value = '';
        this.cityLat.value = '';
        this.cityLong.value = '';
        this.cityPop.value = '';
    }
    deleteCity = async (id) => {
        await this.state.control.deleteCity(id)

        this.setState({
            status: 'baleeted'
        })
    }
    generateRandom = async () => {
        const localCity = cityExamples.default[Math.floor(Math.random() * (10 - 0))]
        await this.state.control.createCity(localCity.name, localCity.lat, localCity.long, localCity.pop)

        this.setState({
            status: 'rando\'d!'
        })
    }

    render() {
        const cityCards = this.state.control.cityList.length > 0 ? this.state.control.cityList.map((city, i) => {
            return (
                <City 
                    key={i}
                    id={city.id}
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
            <ThemeContext.Consumer>
                {({headings}) => (
                    <div className="w3-content w3-section">
                        <h1 style={{color: headings}}>Community Manager</h1>
                        <p style={{color:  headings}}>Create a community. Start by generating a city!</p>
                        <div className="w3-row-padding">
                            <div className="w3-card-2 w3-col s3 m3 l3 w3-light-grey w3-margin" style={{fontSize: '.8em', fontFamily: 'Verdana', lineHeight: '.9em'}}>
                                <h4 style={{fontWeight: '600'}}>Create City</h4>
                                <input type="text" className="w3-input w3-border w3-rounded-small" id="cityName" placeholder="City Name" ref={el => this.cityName = el} onChange={this.handleChange} /><br />
                                <input type="number" className="w3-input w3-border w3-rounded-small" id="cityLat" placeholder="Latitude" ref={el => this.cityLat = el} onChange={this.handleChange} /><br />
                                <input type="number" className="w3-input w3-border w3-rounded-small" id="cityLong" placeholder="Longitude" ref={el => this.cityLong = el} onChange={this.handleChange} /><br />
                                <input type="number" className="w3-input w3-border w3-rounded-small" id="cityPop" placeholder="Population" ref={el => this.cityPop = el} onChange={this.handleChange} /><br />
                                <button className="w3-button w3-block w3-blue w3-ripple w3-padding" id="addCityBtn" onClick={this.submitCity}>+ Add City +</button><br />
                                <button className="w3-button w3-block w3-light-blue w3-ripple w3-padding" id="addRandom" onClick={this.generateRandom}>+ Generate Random +</button><br />
                                <div id="summary" className={showOrHide + " w3-section w3-left"} style={{lineHeight: '1.2em',fontSize: '1em'}}>
                                    <b>Most Northern: {this.getMostNorthern().name}</b><br />
                                    <b>Most Southern: {this.getMostSouthern().name}</b><br />
                                    <b>Total Pop.: {this.getPopulation()}</b>
                                </div>
                            </div>
                            {cityCards}
                        </div>
                    </div>
                )}
            </ThemeContext.Consumer>
        );
    }
}

export default CommunityComponent;