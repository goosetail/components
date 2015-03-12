Positive Integer
================

A directive for use on form inputs that validates the presence of a positive, whole integer

Example usage:

    span.value
        input.quantity-input(type="number", name = "quantity", ng-model="productOrder.quantity", positive-integer)
        span.error(ng-show="submitted && orderForm.quantity.$error.positiveInteger") Please enter a valid quantity
