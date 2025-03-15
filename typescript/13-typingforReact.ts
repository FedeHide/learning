//? Typing for React


//* 1. typing props
// - props are passed to components as objects

// import React from 'react';

// type Props = {
//     name: string;
//     age: number;
//     email: string;
// }

// const User = ({ name, age, email }: Props) => {
//     return (
//         <div>
//             <h1>{props.name}</h1>
//             <p>{props.age}</p>
//             <p>{props.email}</p>
//         </div>
//     )
// }



//* 2. typing children
// - children are passed to components as props


// type Props = {
//     children: React.ReactNode | React.JSX.Element; 
// }


//! difference between React.ReactNode, React.ReactElement, and React.JSX.Element
// - React.ReactNode: is a type for anything that can be rendered (e.g., strings, numbers, elements, arrays, fragments, portals, etc.)
// - React.JSX.Element: is a type for a single JSX element (e.g., <div />, <Component />, etc.)
// - React.ReactNode[] or React.JSX.Element[]: is a type for an array of JSX elements when you have multiple children



// const Card = ({ children }: Props) => {
//     return (
//         <div>
//             {children}
//         </div>
//     )
// }



//* 3. typing events
// - events are passed to components as props

// type Props = {
//     onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
// }

// const Button = ({ onClick }: Props) => {
//     return (
//         <button onClick={onClick}>Click me</button>
//     )
// }



//* 4. typing hooks
// - hooks are functions that let you use state and other React features in functional components

// import { Dispatch, SetStateAction, useState } from 'react';

// type ButtonProps = {
//     setCount: Dispatch<SetStateAction<number>>;
// }

// const Button = ({ setCount }: ButtonProps) => {
//     return (
//         <button onClick={() => setCount((prev) => prev + 1)}>Click me</button>
//     )
// }

// const App = () => {
//     const [count, setCount] = useState(0);
//
//     return (
//         <div>
//             <p>{count}</p>
//             <Button setCount={setCount} />
//         </div>
//     )