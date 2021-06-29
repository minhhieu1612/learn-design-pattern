console.log('---------- Strategy Pattern --------------');

interface FlyBehavior {
    fly: () => void;
}

class FlyWithWings implements FlyBehavior {
    fly() {
        console.log('It can fly with wings')
    }
}

class FlyNoWays implements FlyBehavior {
    fly() {
        console.log('It cannot fly')
    }
}

interface QuackBehavior {
    quack: () => void;
}

class QuackAble implements QuackBehavior {
    quack() { console.log('quack quack') }
}

class QuackSilence implements QuackBehavior {
    quack() { }
}

class QuackFake implements QuackBehavior {
    quack() { console.log('fake quack') }
}

interface SwimBehavior {
    swim: () => void
}

class SwimWithOneLeg implements SwimBehavior {
    swim() { console.log('I can swim with one leg')}
}

class SwimWithAss implements SwimBehavior {
    swim() { console.log('I can swim with my ass like 4 stroke engine')}
}

class SwimWithNoWay implements SwimBehavior {
    swim() { console.log('I cannot swim at the current time')}
}

class Duck {
    private _quackBehavior: QuackBehavior | undefined
    private _swimBehavior: SwimBehavior | undefined
    private _flyBehavior: FlyBehavior | undefined

    performQuack() { this._quackBehavior && this._quackBehavior.quack() }
    performSwim() { this._swimBehavior && this._swimBehavior.swim() }
    performFly() { this._flyBehavior && this._flyBehavior.fly() }

    setQuackBehavior(quackBehavior: QuackBehavior) { this._quackBehavior = quackBehavior }
    setSwimBehavior(swimBehavior: SwimBehavior) { this._swimBehavior = swimBehavior }
    setFlyBehavior(flyBehavior: FlyBehavior) { this._flyBehavior = flyBehavior }
    
    display() { console.log('Look like a normal Duck') }
}

class MallardDuck extends Duck {
    constructor () {
        super();
        super.setQuackBehavior(new QuackAble())
        super.setSwimBehavior(new SwimWithAss())
        super.setFlyBehavior(new FlyWithWings())
    }
    display() {
        console.log('Look like a mallard')
    }
}

class RubberDuck extends Duck {
    constructor () {
        super();
        super.setQuackBehavior(new QuackFake())
        super.setSwimBehavior(new SwimWithNoWay())
        super.setFlyBehavior(new FlyNoWays())
    }

    display() {
        console.log('Look like a rubber duck')
    }
}

var myDuck = new MallardDuck()
myDuck.display()
myDuck.performQuack()
myDuck.performFly()

console.log('')
var myRubberDuck = new RubberDuck()
myRubberDuck.display()
myRubberDuck.performQuack()
myRubberDuck.performFly()
myRubberDuck.performSwim()
myRubberDuck.setSwimBehavior(new SwimWithOneLeg())
myRubberDuck.performSwim()
















console.log('-------------------------------------------')