const properties = [
    'background',
    'background-color',
    'border',
    'border-color',
    'border-bottom',
    'border-bottom-color',
    'border-left',
    'border-left-color',
    'border-right',
    'border-right-color',
    'border-top',
    'border-top-color',
    'box-shadow',
    'color',
    'text-shadow'
]

function isCssColorProperty(property) {
    return properties.includes(property);
}

module.exports = isCssColorProperty;