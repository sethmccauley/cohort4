import functions from './fetch.js'

export class City {
    constructor(name, lat, long, pop, id){
        this.name = name;
        this.lat = lat;
        this.long = long;
        this.pop = pop;
        this.id = id;
    }

    show(){
        return this.name + '; Latitude: ' + this.lat + '; Longitude: ' + this.long + '; Population: ' + this.pop;
    }

    async movedIn(amt){
        this.pop = parseFloat(this.pop, 10) + parseFloat(amt, 10)
        let confirmation = await functions.postData('http://localhost:5000/update' , {key: this.id, city: this})
        if (confirmation.status === 200){
            console.log('Update successful to remote.')
        } else {
            console.log('Failed with status: ' + confirmation.status)
        }
    }

    async movedOut(amt){
        this.pop = parseFloat(this.pop, 10) - parseFloat(amt, 10)
        let confirmation = await functions.postData('http://localhost:5000/update' , {key: this.id, city: this})
        if (confirmation.status === 200){
            console.log('Update successful to remote.')
        } else {
            console.log('Failed with status: ' + confirmation.status)
        }
    }

    howBig(){
        switch(true){
            case (this.pop > 100000):
                return 'City';
            case (this.pop > 20000):
                return 'Large Town';
            case (this.pop > 1000):
                return 'Town';
            case (this.pop > 100):
                return 'Village';
            case (this.pop > 0):
                return 'Hamlet';
            default:
                return 'No Population';
        }
    }
}

export class Community {
    constructor(){
        this.cityList = []
        this.uniqueId = 0;
    }

    whichSphere(city){
        if(city.lat > 0) {
            return "Northern Hemisphere";
        } else {
            return "Southern Hemisphere";
        }
    }

    getMostNorthern(){
        let mostNorthernCity = this.cityList[0];
        this.cityList.forEach(value => {
            if (value.lat > mostNorthernCity.lat){
                mostNorthernCity = value;
            }
        })
        return mostNorthernCity;
    }

    getMostSouthern(){
        let mostSouthernCity = this.cityList[0];
        this.cityList.forEach(value => {
            if (value.lat < mostSouthernCity.lat){
                mostSouthernCity = value;
            }
        })
        return mostSouthernCity;
    }

    getPopulation(){
        let totalPop = 0;
        this.cityList.forEach( (value) => {
            totalPop += parseFloat(value.pop, 10);
        })
        return totalPop;
    }

    async createCity(name, lat, long, pop){
        this.cityList.push(new City(name, lat, long, pop, this.uniqueId));
        let confirmation = await functions.postData('http://localhost:5000/add' , {key: this.uniqueId, city: this.cityList[this.cityList.length -1]})
        if (confirmation.status === 200){
            console.log('City successfully added to remote.')
        } else {
            console.log('Failed with status: ' + confirmation.status)
        }
        this.uniqueId++;
    }

    async getInitialCities(){
        let confirmation = await functions.postData('http://localhost:5000/all')
        if (confirmation.status === 200){
            console.log('Got Initial Cities.')
            confirmation.forEach(value => {
                if(this.cityList.findIndex(element => element.id === value.city.id) === -1) {
                    this.cityList.push(new City(value.city.name, value.city.lat, value.city.long, value.city.pop, value.city.id))
                    if(value.city.id >= this.uniqueId) this.uniqueId = value.city.id + 1;
                }
            })
        }
    }

    async deleteCity(id){
        let confirmation = await functions.postData('http://localhost:5000/delete', {key: id})
        if (confirmation.status === 200){
            this.cityList.splice(this.cityList.findIndex(value => value.id === id), 1);
            console.log('Successfully removed city from remote.')
        }
    }
}

export default Community;