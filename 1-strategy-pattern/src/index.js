"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log('---------- Strategy Pattern --------------');
var FlyWithWings = /** @class */ (function () {
    function FlyWithWings() {
    }
    FlyWithWings.prototype.fly = function () {
        console.log('It can fly with wings');
    };
    return FlyWithWings;
}());
var FlyNoWays = /** @class */ (function () {
    function FlyNoWays() {
    }
    FlyNoWays.prototype.fly = function () {
        console.log('It cannot fly');
    };
    return FlyNoWays;
}());
var QuackAble = /** @class */ (function () {
    function QuackAble() {
    }
    QuackAble.prototype.quack = function () { console.log('quack quack'); };
    return QuackAble;
}());
var QuackSilence = /** @class */ (function () {
    function QuackSilence() {
    }
    QuackSilence.prototype.quack = function () { };
    return QuackSilence;
}());
var QuackFake = /** @class */ (function () {
    function QuackFake() {
    }
    QuackFake.prototype.quack = function () { console.log('fake quack'); };
    return QuackFake;
}());
var SwimWithOneLeg = /** @class */ (function () {
    function SwimWithOneLeg() {
    }
    SwimWithOneLeg.prototype.swim = function () { console.log('I can swim with one leg'); };
    return SwimWithOneLeg;
}());
var SwimWithAss = /** @class */ (function () {
    function SwimWithAss() {
    }
    SwimWithAss.prototype.swim = function () { console.log('I can swim with my ass like 4 stroke engine'); };
    return SwimWithAss;
}());
var SwimWithNoWay = /** @class */ (function () {
    function SwimWithNoWay() {
    }
    SwimWithNoWay.prototype.swim = function () { console.log('I cannot swim at the current time'); };
    return SwimWithNoWay;
}());
var Duck = /** @class */ (function () {
    function Duck() {
    }
    Duck.prototype.performQuack = function () { this._quackBehavior && this._quackBehavior.quack(); };
    Duck.prototype.performSwim = function () { this._swimBehavior && this._swimBehavior.swim(); };
    Duck.prototype.performFly = function () { this._flyBehavior && this._flyBehavior.fly(); };
    Duck.prototype.setQuackBehavior = function (quackBehavior) { this._quackBehavior = quackBehavior; };
    Duck.prototype.setSwimBehavior = function (swimBehavior) { this._swimBehavior = swimBehavior; };
    Duck.prototype.setFlyBehavior = function (flyBehavior) { this._flyBehavior = flyBehavior; };
    Duck.prototype.display = function () { console.log('Look like a normal Duck'); };
    return Duck;
}());
var MallardDuck = /** @class */ (function (_super) {
    __extends(MallardDuck, _super);
    function MallardDuck() {
        var _this = _super.call(this) || this;
        _super.prototype.setQuackBehavior.call(_this, new QuackAble());
        _super.prototype.setSwimBehavior.call(_this, new SwimWithAss());
        _super.prototype.setFlyBehavior.call(_this, new FlyWithWings());
        return _this;
    }
    MallardDuck.prototype.display = function () {
        console.log('Look like a mallard');
    };
    return MallardDuck;
}(Duck));
var RubberDuck = /** @class */ (function (_super) {
    __extends(RubberDuck, _super);
    function RubberDuck() {
        var _this = _super.call(this) || this;
        _super.prototype.setQuackBehavior.call(_this, new QuackFake());
        _super.prototype.setSwimBehavior.call(_this, new SwimWithNoWay());
        _super.prototype.setFlyBehavior.call(_this, new FlyNoWays());
        return _this;
    }
    RubberDuck.prototype.display = function () {
        console.log('Look like a rubber duck');
    };
    return RubberDuck;
}(Duck));
var myDuck = new MallardDuck();
myDuck.display();
myDuck.performQuack();
myDuck.performFly();
console.log('');
var myRubberDuck = new RubberDuck();
myRubberDuck.display();
myRubberDuck.performQuack();
myRubberDuck.performFly();
myRubberDuck.performSwim();
myRubberDuck.setSwimBehavior(new SwimWithOneLeg());
myRubberDuck.performSwim();
console.log('-------------------------------------------');
