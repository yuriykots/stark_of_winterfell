import React from "react";
//this is the same folder
import Header from "./Header";
//this is one folder up / inside folder test
//import Test from "../test/Test";
//this is two folders up
//import Test2 from "../../Test2";
//this is two folders up / inside folder data
//import Test3 from "../../data/Test3";
//import characters from "../../data/characters";


export default class Layout extends React.Component{
  render() {
    console.log("hello")

    return (
    <div>
    <h1> Layout is rendering </h1>
    </div>
    );
  }
}
