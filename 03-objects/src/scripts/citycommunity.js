export class City {
    constructor(name, lat, long, pop){
        this.name = name;
        this.lat = lat;
        this.long = long;
        this.pop = pop;
    }

    show(){
        return this.name + '; Latitude: ' + this.lat + '; Longitude: ' + this.long + '; Population: ' + this.pop;
    }

    movedIn(pop){
        this.pop += pop;
    }

    movedOut(pop){
        this.pop -= pop;
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
        }
        return 'No Population';
    }
}

export class Community {
    constructor(){
        this.cityList = []
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
            totalPop += value.pop;
        })
        return totalPop;
    }

    createCity(name, lat, long, pop){
        this.cityList.push(new City(name, lat, long, pop));
    }

    deleteCity(city){
        this.cityList.splice(this.cityList.findIndex(value => value == city), 1);
    }
}