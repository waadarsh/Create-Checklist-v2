import {ChecklistContainer} from './checklistContainer.js';
import {Component} from './component.js';
import {CreateJSON} from './createjson.js';

const checklistContainerObj = new ChecklistContainer();
const inputFieldComponentObj = new Component(">_Input Field");
const imageComponentObj = new Component(">_Image");
const judgementComponentObj = new Component(">_Judgement");

inputFieldComponentObj.componentObj.addEventListener("dragstart", function(Event) {
    inputFieldComponentObj.handleDragStart(Event);
});
inputFieldComponentObj.componentObj.addEventListener("dragend", function(Event) {
    inputFieldComponentObj.handleDragEnd(Event);
});
inputFieldComponentObj.componentObj.addEventListener("dragenter", function(Event) {
    inputFieldComponentObj.handleDragEnter(Event);
});

imageComponentObj.componentObj.addEventListener("dragstart", function(Event) {
    imageComponentObj.handleDragStart(Event);
});
imageComponentObj.componentObj.addEventListener("dragend", function(Event) {
    imageComponentObj.handleDragEnd(Event);
});
imageComponentObj.componentObj.addEventListener("dragenter", function(Event) {
    imageComponentObj.handleDragEnter(Event);
});

judgementComponentObj.componentObj.addEventListener("dragstart", function(Event) {
    judgementComponentObj.handleDragStart(Event);
});
judgementComponentObj.componentObj.addEventListener("dragend", function(Event) {
    judgementComponentObj.handleDragEnd(Event);
});
judgementComponentObj.componentObj.addEventListener("dragenter", function(Event) {
    judgementComponentObj.handleDragEnter(Event);
});

const addWorkInstructionButton = document.getElementById("add-work-instruction");
addWorkInstructionButton.addEventListener("click", function() {
    checklistContainerObj.addWorkInstruction();
});

//const createJSONObj = new CreateJSON(checklistContainerObj.templateName, checklistContainerObj.stationName, checklistContainerObj.totalNoOfInstruction);
//console.log(createJSONObj.jsonText);
let createJSONObj = null;

const publishButton = document.getElementById("publish-button");

publishButton.addEventListener("click", function() {
    let totalInstruction = checklistContainerObj.totalNoOfInstruction;
    createJSONObj = new CreateJSON(checklistContainerObj.templateName, checklistContainerObj.stationName, totalInstruction);
    console.log(createJSONObj.jsonText);
    let finalJSON = JSON.parse(createJSONObj.jsonText);
    console.log(finalJSON);
});

