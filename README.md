# Zustand Demo in Next.js

## What is Zustand?

Zustand is a tool to manage states on a global level in a react applications. Zustand is lightweight and easy to use, allowing any component to fetch a state, without prop drilling or wrapping providers using useContext.

## How to use Zustand?

Simply create a "store" file. For example, if the store should keep state data about a counter you would typically name the file "useCounterStore". In this store you can define states and setter functions that can modify this state.

## How do I use a Zustand store in my components?

See src/app/page.tsx and src/app/buttonPage/page.tsx to see how it is being used. Simply import the store. Select the state or setter function from the store and save it to a variable so it can be used. Changing the state in the button page will also update the state when navigating back to the default route.

## What are the benefits of using Zustand?

It is easy to use. It does not require much boilerplate code to set up. Very scaleable, it lets developers create their functional components with state logic and the developer can be sure the component is able to access the state easily from the zustand store, even if the developer does not know where the component will be used in the project later. No need to wrap providers around specific part of the app to make it work. Zustand stores are global across the whole project by default.
