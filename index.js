// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {

    drivers.push(name);
    return drivers;
}

function destructivelyPrependDriver(name) {

    drivers.unshift(name);
    return drivers;
}

function destructivelyRemoveFirstDriver() {

    drivers.shift();
    return drivers;
}

function destructivelyRemoveLastDriver() {

    drivers.pop();
    return drivers;
}

function appendDriver(name) {

    const new_array = [...drivers, name]
    return new_array
}

function prependDriver(name) {

    const copy_drivers = drivers.slice()
    copy_drivers.unshift(name)
    return copy_drivers
}

function removeLastDriver() {

    const new_array = drivers.slice(0, -1)
    return new_array
}

function removeFirstDriver() {

    const new_array = drivers.slice(1)
    return new_array
}