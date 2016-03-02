Country State Select
=======

A directive that adds a huge list of countries to a select box and all the states of those countries to another select 
box. When you select a country the state select box updates with the states in that country.  It's fed by the json 
file in the directory.  

You pass it a model that has/will have `{state: '', country: ''}` on it.

Example usage:

```
.component(country-state-select, model="user")
```