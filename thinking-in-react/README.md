`This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).`

# Project specifics

- We want to make sure that whenever the user changes the form, we update the state to reflect the user input. Since components should only update their own state, FilterableProductTable will pass callbacks to SearchBar that will fire whenever the state should be updated. We can use the onChange event on the inputs to be notified of it. The callbacks passed by FilterableProductTable will call setState(), and the app will be updated.


- Composition over Inheritance
	- a subcomponent reads input
	- passes data to a common parent (common parent of members whose state depend on this input)
	- This parent then becomes the single source of truth, and distributes this data in top down manner, to all component who need it.
	- The components then respond to this calling and all setState to change and re renders itself.
	- what happens is -> components are given an illusion that they are in control of the state change, whereas the actual change occurs in parent.
