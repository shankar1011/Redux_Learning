Cake shop scenario:-

A store that holds the state of your application

An action that describes the changes in the state of the application

A reducer which actually carries out the state transition depending on the action



Cake shop scenario                      Redux                       Purpose

Shop                                    Store                       Holds the state of your application 

Intention to BUY_CAKE                   Action                      Describes what happened 

Shopkeeper                              Reducer                     Ties the store and actions together



Three Principles:->>


1st Principle:--


"The state of your whole application is stored in an object tree within a single store"

Maintain our application state in a single object which would be managed by the Redux store 

Cake Shop-

Let's assume we are tracking the number of cakes on the shelf 
{
    numberOfCakes: 10
}



2nd Principle:--


"The only way to change the state is to emit an action, an object describing what happened"

To update the store of your app, you need to let Redux know about that with an action

Not allowed to directly update state object

Cake Shop-

Let the shopkeeper know about our action - BUY_CAKE

{
    type: BUY_CAKE
}



3rd Principle:--


"To specify how the state tree is transformed by actions, you write pure reducers"

As it is pure reducer rather than updating the previous state it returns the new state 

Reducer - (previousState, action) => newState





Actions:-->

The only way your application can interact with the store 

Carry some information from your app to the redux store 

Plain javascript objects 

Have a "type" property that indicates the type of action being performed 

The "type" property is typically defined as string constants




Redux Store:--> 

One store for the entire application 

Responsibilities-

- Holds application state 

- Allow access to state via getState()

- Allows state to be updated via dispatch(action)

- Registeres listeners via subscribe(listener)

- Handles unregistering of listeners via the function returned by subscribe(listener)