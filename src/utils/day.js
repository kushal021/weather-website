const date = new Date();

const optionDate = {
    day: 'numeric',
    month: 'short'
}

const dt = date.toLocaleDateString('en-IN', optionDate)

const day = new Date();

const optionDay = {
    weekday: 'long'
}

const dy = day.toLocaleDateString('en-IN', optionDay)

module.exports = {
    dt: dt,
    dy: dy
}