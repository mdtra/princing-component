var input = document.querySelector('.range-value')
var pageviews = document.querySelector('.pageviews')
var price = document.querySelector('.span-price-value')
const onOff = document.querySelector('#toggle')

onOff.addEventListener('click', function() {
    pageviews.innerHTML = getViews(input.value)
    price.innerHTML = getPrice(pageviews.innerHTML)
})

input.addEventListener('focus', function() {
    input.addEventListener('mousemove', function() {
        input.style.background = 'linear-gradient(to right, hsl(174deg, 77%, 80%) 0%, hsl(174deg, 77%, 80%) ' + input.value + '%, hsl(224deg, 65%, 95%) ' + input.value + '%, hsl(224deg, 65%, 95%) 100%)'

        pageviews.innerHTML = getViews(input.value)
        price.innerHTML = getPrice(pageviews.innerHTML)
    })
})

input.addEventListener('blur', function() {
    input.removeEventListener('mousemove', function() {
        input.style.background = 'linear-gradient(to right, hsl(174deg, 77%, 80%) 0%, hsl(174deg, 77%, 80%) ' + input.value + '%, hsl(224deg, 65%, 95%) ' + input.value + '%, hsl(224deg, 65%, 95%) 100%)'
    })
})

function getViews(viewsTxt) {
    
    var views = Number(viewsTxt)

    if(views === 0)
        views = 10 + 'k'
    else if(views === 25)
        views = 50 + 'k'
    else if(views === 50)
        views = 100 + 'k'
    else if(views === 75)
        views = 500 + 'k'
    else if(views === 100)
        views = 1 + 'm'

    return views
}

function getPrice(views) {

    var price

    if(views === '10k')
        price = 8.00
    else if(views === '50k')
        price = 12.00
    else if(views === '100k')
        price = 16.00
    else if(views === '500k')
        price = 24.00
    else if(views === '1m')
        price = 36.00

    price = getDiscount(price, onOff.checked)
    price = price.toFixed(2)

    return price
}

function getDiscount(price, button) {
    if(button) {
        price = price - ((25/100) * price)
    }

    return price
}





