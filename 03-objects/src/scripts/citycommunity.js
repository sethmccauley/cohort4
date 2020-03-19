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

    deleteCity(cityName){
        this.cityList.splice(this.cityList.findIndex(value => value.name == cityName), 1);
    }

    createCard(city){
        let tempDiv = document.createElement('div');
        tempDiv.setAttribute('class', 'w3-card w3-col s3 m3 l3 w3-light-grey w3-padding w3-margin')
        tempDiv.setAttribute('style', 'font-size: .8em; font-family: verdana; line-height: 1em');
    
        let textBit = document.createElement('h5');
        textBit.setAttribute('style', 'font-weight: 600;text-decoration: underline');
        textBit.textContent = city.name;
    
        let latLabel = document.createElement('span');
        latLabel.textContent = 'Lat: ' + city.lat + ' ; ';
    
        let longLabel = document.createElement('span');
        longLabel.textContent = 'Long: ' + city.long;
    
        let hemisphereLabel = document.createElement('p');
        hemisphereLabel.textContent = this.whichSphere(city);

        let populationLabel = document.createElement('p');
        populationLabel.textContent = 'Population: ' + city.pop;

        let delineation = document.createElement('p');
        delineation.textContent = 'Delineation: ' + city.howBig();

        let populationInput = document.createElement('input');
        populationInput.setAttribute('class', 'w3-input w3-border w3-round-small');
        populationInput.setAttribute('placeholder', 'Pop. Change');

        tempDiv.appendChild(textBit)
        tempDiv.appendChild(delineation)
        tempDiv.appendChild(latLabel)
        tempDiv.appendChild(longLabel)
        tempDiv.appendChild(hemisphereLabel)
        tempDiv.appendChild(populationLabel)
        tempDiv.appendChild(populationInput)

        return tempDiv;
    }
}