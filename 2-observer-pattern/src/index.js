"use strict";
console.log('---------- Observer Pattern --------------');
var WeatherData = /** @class */ (function () {
    function WeatherData(temperature, humidity, pressure) {
        this._observers = [];
        this._temperature = temperature;
        this._humidity = humidity;
        this._pressure = pressure;
    }
    WeatherData.prototype.subscribe = function (observer) {
        this._observers.push(observer);
    };
    WeatherData.prototype.unsubscribe = function (observer) {
        this._observers = this._observers.filter(function (o) { return o !== observer; });
    };
    WeatherData.prototype.notifyObservers = function () {
        var _this = this;
        this._observers.map(function (observer) {
            _this._temperature &&
                _this._humidity &&
                _this._pressure &&
                observer.update(_this._temperature, _this._humidity, _this._pressure);
        });
    };
    WeatherData.prototype.measureChanged = function () {
        this.notifyObservers();
    };
    WeatherData.prototype.setMeasurements = function (temperature, humidity, pressure) {
        this._temperature = temperature;
        this._humidity = humidity;
        this._pressure = pressure;
        this.measureChanged();
    };
    return WeatherData;
}());
var w = new WeatherData(12, 3, 0);
console.log('-------------------------------------------');
