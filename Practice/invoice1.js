angular.module('invoice1', ['finance2'])
.controller('InvoiceController', ['currencyConvertor', function InvoiceController(currencyConvertor) {
    this.qty = 1;
    this.cost = 2;
    this.inCurr = 'EUR';
    this.currencies = currencyConvertor.currencies;

    this.total = function total(outCurr) {
        return currencyConvertor.convert(this.qty * this.cost, this.inCurr, outCurr);
    };

    this.pay = function pay() {
        window.alert("Thanks");
    };
}]);
