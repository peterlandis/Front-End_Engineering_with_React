const vehicle = {
    type: 'car',
    color: 'blue',
    wheels: 4,
};

const { color, ...rest } = vehicle;

const updatedVehicle = { ...rest, color: 'red'}

document.getElementById('vehicle-info').textContent = `Updated Car: ${updatedVehicle.color}, Wheels: ${updatedVehicle.wheels}`;

const flyer = {
    type: 'drone',
    propellers: 2,
    maxSpeed: '60km/h'
}

const {maxSpeed, ...remainingSpecs } = flyer

const updatedFlyer = {...remainingSpecs, maxSpeed: '120km/h'}

document.getElementById('flyer-info').textContent = `Updated Drone: Speed:${updatedFlyer.maxSpeed}, Propellers: ${updatedFlyer.propellers}`;