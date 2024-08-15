import { Test } from "./ts/test"
import * as $ from "jquery";

const testClass = new Test();
testClass.print("Hello World from TS file!")

$(function(){
    const el = $("body")
    console.log("jQuery works", { el });
});
