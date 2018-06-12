
const MrAdvisor = Object.create({}, {
    company: {
        Value: "Fannie Mae",
        enumerable: true,
        writable: true
    },
    specialty: {
        value: "Money",
        enumerable: true,
        writable: true
    },
    name: {
        value: "John Smith",
        enumerable: true,
    },
    portfolio: {
        value: [
            {
                ticker: 'ER',
                quantity: 25,
                price: 500
            },
            {
                ticker: 'BOA',
                quantity: 85,
                price: 250
            },
            {
                ticker: 'ATN',
                quantity: 80,
                price: 1000
            }],
        writable: true,
    },
    worth: {
        value: function () {
            let multiply = 0
            this.portfolio.forEach(item => {
                multiply += item.quantity * item.price
                })
            return multiply

        },
        writable: true,
        
    },
    purchase: {
        value: function (ticker, quantity, price) {
            this.portfolio.push(
                {ticker: ticker,
                quantity: quantity,
                price: price,
                purchased: true
            }
            )
            
        },
        writable: true
    },
    sell: {
        value: function (ticker, quantity, price) {
            this.portfolio.push({
                ticker: ticker,
                quantity: quantity,
                price: price,
                sold: true
            })

        },
        writable: true
    }

})
MrAdvisor.purchase("WF", 25, 100)
MrAdvisor.sell('BOA', 25, 250)

console.log(MrAdvisor.portfolio);
console.log(MrAdvisor.worth())

