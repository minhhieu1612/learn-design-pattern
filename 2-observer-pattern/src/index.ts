console.log('---------- Observer Pattern --------------');

interface Observer {
    update: (temp: number, humidity: number, pressure: number) => void
}

interface Subject {
    subscribe: (observer: Observer) => void
    unsubscribe: (observer: Observer) => void
    notifyObservers: () => void
}

interface Display {
    display: () => void
}


class WeatherData implements Subject {
    private _observers: Observer[] = []
    private _temperature: number;
    private _humidity: number;
    private _pressure: number;

    constructor(temperature: number, humidity: number, pressure: number) {
        this._temperature = temperature
        this._humidity = humidity
        this._pressure = pressure
    }

    subscribe(observer: Observer) {
        this._observers.push(observer)
    }

    unsubscribe(observer: Observer) {
        this._observers = this._observers.filter(o => o !== observer)
    }

    notifyObservers() {
        this._observers.map((observer) => {
            this._temperature &&
            this._humidity &&
            this._pressure &&
            observer.update(this._temperature, this._humidity, this._pressure);
        })
    }

    measureChanged() {
        this.notifyObservers()
    }

    setMeasurements(temperature: number, humidity: number, pressure: number) {
        this._temperature = temperature
        this._humidity = humidity
        this._pressure = pressure
        this.measureChanged()
    }
}

var w = new WeatherData(12, 3, 0);

console.log('-------------------------------------------')
