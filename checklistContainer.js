class ChecklistContainer {
    templateName;
    stationName;
    index;
    totalNoOfInstruction;
    

    constructor() {
        this.checklistContainer = document.querySelector(".checklist-container");
        this.templateName = document.querySelector(".checklist-name-input").value;
        this.stationName = document.querySelector(".station-name-input").value;
        this.index = 0;
        this.totalNoOfInstruction = 1;
        this.createWorkInstructionContainer();
        //console.log(this.templateName);
        //console.log(this.stationName);
    }

    createWorkInstructionContainer() {
        const workInstructionContainer = document.createElement("div");
        workInstructionContainer.setAttribute("id", "workInstructionContainer" + this.index);
        workInstructionContainer.classList.add("work-instruction-container");
        this.checklistContainer.appendChild(workInstructionContainer);
        //console.log(workInstructionContainer);
        //this.totalNoOfInstruction = this.totalNoOfInstruction + 1;

        this.createProcessHeaderContainer();
    }

    createProcessHeaderContainer() {
        const processHeaderContainer = document.createElement("div");
        processHeaderContainer.setAttribute("id", "processHeaderContainer" + this.index);
        const workInstructionContainer = document.getElementById("workInstructionContainer" + this.index);
        workInstructionContainer.appendChild(processHeaderContainer);
        processHeaderContainer.classList.add("process-header-container");

        this.createProcessNameContainer();
    }

    createProcessNameContainer() {
        const processNameContainer = document.createElement("div");
        processNameContainer.setAttribute("id", "processNameContainer" + this.index);
        const processHeaderContainer = document.getElementById("processHeaderContainer" + this.index);
        processHeaderContainer.appendChild(processNameContainer);
        processNameContainer.classList.add("process-name-container");

        const label = document.createElement("label");
        label.setAttribute("id", "processNameInputLabel" + this.index);
        label.setAttribute("for", "processNameInput" + this.index);
        label.textContent = "PROCESS NAME";
        label.classList.add("process-name-container");
        processNameContainer.appendChild(label);

        const input = document.createElement("input");
        input.setAttribute("id", "processNameInput" + this.index);
        input.setAttribute("type", "text");
        input.classList.add("process-name-input");
        input.placeholder = "   Type here";
        processNameContainer.appendChild(input);

        this.createCheckLocationContainer();
    }

    createCheckLocationContainer() {
        const checkLocationContainer = document.createElement("div");
        checkLocationContainer.setAttribute("id", "checkLocationContainer" + this.index);
        const processHeaderContainer = document.getElementById("processHeaderContainer" + this.index);
        processHeaderContainer.appendChild(checkLocationContainer);
        checkLocationContainer.classList.add("check-location-container");

        const label = document.createElement("label");
        label.setAttribute("id", "checkLocationInputLabel" + this.index);
        label.setAttribute("for", "checkLocationInput" + this.index);
        label.textContent = "CHECK LOCATION";
        label.classList.add("check-location-container");
        checkLocationContainer.appendChild(label);

        const input = document.createElement("input");
        input.setAttribute("id", "checkLocationInput" + this.index);
        input.setAttribute("type", "text");
        input.classList.add("check-location-input");
        input.placeholder = "   Type here";
        checkLocationContainer.appendChild(input);

        this.createInstructionNoContainer();
    }

    createInstructionNoContainer() {
        const instructionNoContainer = document.createElement("div");
        instructionNoContainer.setAttribute("id", "instructionNoContainer" + this.index);
        const processHeaderContainer = document.getElementById("processHeaderContainer" + this.index);
        processHeaderContainer.appendChild(instructionNoContainer);
        instructionNoContainer.classList.add("instruction-no-container");

        const currentInstruction = document.createElement("b");
        currentInstruction.setAttribute("id", "currentInstruction" + this.index);
        currentInstruction.textContent = this.index + 1;
        instructionNoContainer.appendChild(currentInstruction);
        currentInstruction.classList.add("current-instruction");

        const divisionSymbol = document.createElement("b");
        divisionSymbol.setAttribute("id", "divisionSymbol" + this.index);
        divisionSymbol.textContent = "/";
        instructionNoContainer.appendChild(divisionSymbol);

        const totalInstruction = document.createElement("b");
        totalInstruction.setAttribute("id", "totalInstruction" + this.index);
        totalInstruction.textContent = this.totalNoOfInstruction;
        instructionNoContainer.appendChild(totalInstruction);
        totalInstruction.classList.add("total-instructions");

        this.createCheckDetailsContainer();
    }

    createCheckDetailsContainer() {
        const checkDetailsContainer = document.createElement("div");
        checkDetailsContainer.setAttribute("id", "checkDetailsContainer" + this.index);
        const workInstructionContainer = document.getElementById("workInstructionContainer" + this.index);
        workInstructionContainer.appendChild(checkDetailsContainer);
        checkDetailsContainer.classList.add("check-details-container");

        const label = document.createElement("label");
        label.setAttribute("id", "checkDetailsInputLabel" + this.index);
        label.setAttribute("for", "checkDetailsInput" + this.index);
        label.textContent = "CHECK DETAILS";
        label.classList.add("check-details-input");
        checkDetailsContainer.appendChild(label);

        const input = document.createElement("input");
        input.setAttribute("id", "checkDetailsInput" + this.index);
        input.setAttribute("type", "text");
        input.classList.add("check-details-input");
        input.placeholder = "   Type here";
        checkDetailsContainer.appendChild(input);

        this.createWorkAreaContainer();
    }

    createWorkAreaContainer() {
        const workAreaContainer = document.createElement("div");
        workAreaContainer.setAttribute("id", "workAreaContainer" + this.index);
        const workInstructionContainer = document.getElementById("workInstructionContainer" + this.index);
        workInstructionContainer.appendChild(workAreaContainer);
        workAreaContainer.classList.add("work-area-container");

        const imageContainer = document.createElement("div");
        imageContainer.setAttribute("id", "imageContainer" + this.index);
        workAreaContainer.appendChild(imageContainer);
        imageContainer.classList.add("image-container");
       
        imageContainer.addEventListener("dragover", (Event) => {
            this.handleDragOver(Event);
        });
        imageContainer.addEventListener("drop", (Event) => {
            this.handleImageDrop(Event);
        });

        const inputFieldContainer = document.createElement("div");
        inputFieldContainer.setAttribute("id", "inputFieldContainer" + this.index);
        workAreaContainer.appendChild(inputFieldContainer);
        inputFieldContainer.classList.add("input-field-container");

        const inputField1Container = document.createElement("div");
        inputField1Container.setAttribute("id", "inputField1Container" + this.index);
        inputFieldContainer.appendChild(inputField1Container);
        inputField1Container.classList.add("input-field1-container");
        inputField1Container.addEventListener("dragover", (Event) => {
            this.handleDragOver(Event);
        });
        inputField1Container.addEventListener("drop", (Event) => {
            this.handleInputField1Drop(Event);
        });

        const inputField2Container = document.createElement("div");
        inputField2Container.setAttribute("id", "inputField2Container" + this.index);
        inputFieldContainer.appendChild(inputField2Container);
        inputField2Container.classList.add("input-field2-container");
        inputField2Container.addEventListener("dragover", (Event) => {
            this.handleDragOver(Event);
        });
        inputField2Container.addEventListener("drop", (Event) => {
            this.handleInputField2Drop(Event);
        });

        const judgementContainer = document.createElement("div");
        judgementContainer.setAttribute("id", "judgementContainer" + this.index);
        inputFieldContainer.appendChild(judgementContainer);
        judgementContainer.classList.add("judgement-container");
        judgementContainer.addEventListener("dragover", (Event) => {
            this.handleDragOver(Event);
        });
        judgementContainer.addEventListener("drop", (Event) => {
            this.handleJudgementDrop(Event);
        });

        //this.incrementChecklistCounter();
    }

    incrementChecklistCounter() {
        this.totalNoOfInstruction+=1;
        this.index+=1;
    }

    updateTotalInstruction() {
        let currentIndex = this.index;
        //console.log(currentIndex);
        let totalInstructionContainer = null;
        for(let i = 0; i < currentIndex; i++) {
            totalInstructionContainer = document.getElementById("totalInstruction" + i.toString());
            //console.log(totalInstructionContainer.textContent);
            totalInstructionContainer.textContent = this.totalNoOfInstruction;
            //console.log(totalInstructionContainer.textContent);
        }
    }

    addWorkInstruction() {
        this.incrementChecklistCounter();
        this.createWorkInstructionContainer();
        this.updateTotalInstruction();
    }

    getCurrentIndex(containerName) {
        let revContainerName = containerName.split('').reverse().join('');
        //console.log(revContainerName);
        let revStr = [];
        //console.log(typeof(revContainerName[0]));
        for(let i = 0; i < revContainerName.length; i++)
        {
            if(revContainerName[i].match(/[0-9]/) === null)
                {break;}
            revStr.push(revContainerName[i]);
        }
        //console.log(revStr.toString());
        let finalStr = revStr.toString().split('').reverse().join('');
        return finalStr;
    }

    handleDragOver(Event) {
        Event.preventDefault();
        //console.log(Event);
    }

    handleImageDrop(Event) {
        Event.stopPropagation();
        let sourceElement = Event.dataTransfer.getData("text/html");
        let imageContainerText = Event.target.id.toString();
        let index = this.getCurrentIndex(imageContainerText);
        let imageComponent = document.getElementById("imageComponent" + index);
        let imageContainer = document.getElementById("imageContainer" + index);

        if((sourceElement === "&gt;_Image") && (imageComponent === null)) {
            const imageComponent = document.createElement("img");
            imageComponent.setAttribute("id", "imageComponent" + index);
            imageComponent.setAttribute("src", "./image_FILL0_wght400_GRAD0_opsz48.svg");
            Event.target.appendChild(imageComponent);
            imageComponent.classList.add("image-component");
            imageContainer.classList.remove("over");
        }
    }

    handleInputField1Drop(Event) {
        Event.stopPropagation();
        let sourceElement = Event.dataTransfer.getData("text/html");
        let inputField1ContainerText = Event.target.id.toString();
        let index = this.getCurrentIndex(inputField1ContainerText);
        let inputField1Component = document.getElementById("inputField1Component" + index);
        let inputField1Container = document.getElementById("inputField1Container" + index);

        if(sourceElement === "&gt;_Input Field") {
            if(inputField1Component === null) {
                const div = document.createElement("div"); 
                // // div.classList.add("hover-div");
                // // div.setAttribute("draggable", "true");
                div.setAttribute("id", "inputField1Component" + index);
                const label = document.createElement("p");
                label.setAttribute("id", "inputField1Label" + index);
                label.innerHTML = "MC";
                label.style.width = "10ch";
                const input = document.createElement("input");
                input.setAttribute("id", "inputField1Input" + index);
                input.setAttribute("type", "text");
                input.style.width = "13ch";
                div.classList.add("input-field1-component");


                div.addEventListener("mouseenter", (Event) =>{
                    console.log(Event.target);
                    if(document.getElementById("delete1"+index)===null){
                        const del = document.createElement("a");
                        del.setAttribute("id","delete1" + index);
                        //del.setAttribute("type","button");
                        del.setAttribute("style", 'margin-right: 2rem');
                        del.innerHTML += '<i class="material-icons">delete</i>';
                        div.appendChild(del);
                        del.onclick = function(){
                           // //const del = document.getElementById("inputField1Container" + index);
                            inputField1Container.innerHTML='';
                        }
                    }
                    if(document.getElementById("edit1"+index)===null) {
                        // //console.log(document.getElementById("edit1"+index));
                        const edit1 = document.createElement("a");
                        edit1.setAttribute("id","edit1" + index);
                        edit1.innerHTML += '<span class="material-icons">edit</span>';
                        div.appendChild(edit1);
                        edit1.onclick = function(){
                            var x = document.getElementById("edit");
                            x.style.display = "block"
                            const he3 = document.createElement("h3");
                            he3.innerHTML = "<h3>Edit</h3>"
                            const inp = document.createElement("input");
                            inp.setAttribute("type", "text");
                            inp.setAttribute("id","txt");
                            const button = document.createElement("button");
                            button.setAttribute("id", "icn");
                            button.innerHTML += '<span class="material-symbols-outlined">check_circle</span>';
                                button.onclick = function () {
                                x.style.display = "none";
                                var val = document.getElementById("txt").value;
                                label.innerHTML = val;
                                x.innerHTML="";
                            }
                            x.appendChild(he3);
                            x.appendChild(inp);
                            x.appendChild(button);
                        }
                    }
                    console.log(document.getElementById("edit1"+index).value);
                });


                // // const del_div = document.createElement("div");
                // // del_div.classList.add("icon");
                // // const del = document.createElement("button");
                // // del.innerHTML += '<span class="material-icons">delete</span>';
                // // del.onclick = function(){
                // //     //const del = document.getElementById("inputField1Container" + index);
                // //     inputField1Container.innerHTML='';
                // // }
                // // del_div.appendChild(del);
                // // hdiv.appendChild(del_div);

                // // div.addEventListener("dragstart", function(Event) {
                // //     alert(Event.currentTarget.id);
                // //     Event.currentTarget.style.opacity = 0.4;
                // //     Event.dataTransfer.effectAllowed = "move";
                // // });
                div.appendChild(label);
                div.appendChild(input);
                Event.target.appendChild(div);
                inputField1Container.classList.remove("over");
                
                // // Event.target.appendChild(input);
                // // console.log(inputField1Container.classList);
                // // console.log(inputField1Container.classList);
                // // comp = document.querySelectorAll(".input-field1-component");
                // // console.log("Component lenght" + comp.length);
            }
        }
    }

    // // hovermouse(){
    // //     console.log("inside hover");
    // //     console.log(this.index);
    // //     const inputField1Component = document.getElementById("inputField1Component" + this.index);
    // //     inputField1Component.style.color = "red";
    // // }

    handleInputField2Drop(Event) {
        Event.stopPropagation();
        let sourceElement = Event.dataTransfer.getData("text/html");
        let inputField2ContainerText = Event.target.id.toString();
        let index = this.getCurrentIndex(inputField2ContainerText);
        let inputField2Component = document.getElementById("inputField2Component" + index);
        let inputField2Container = document.getElementById("inputField2Container" + index);

        if(sourceElement === "&gt;_Input Field") {
            console.log(inputField2Component);
            if(inputField2Component === null) {
                const div = document.createElement("div");
                div.classList.add("input-field2-component");
                div.setAttribute("id", "inputField2Component" + index);
                const label = document.createElement("p");
                label.setAttribute("id", "inputField2Label" + index);
                label.innerHTML = "QA";
                label.style.width = "10ch";
                const input = document.createElement("input");
                input.setAttribute("id", "inputField2Input" + index);
                input.setAttribute("type", "text");
                input.setAttribute("size", "10rem");
                input.style.width = "13ch";

                div.addEventListener("mouseenter", (Event) =>{
                    console.log(Event.target);
                    if(document.getElementById("delete2"+index)===null){
                        const del1 = document.createElement("a");
                        del1.setAttribute("id","delete2" + index);
                        del1.setAttribute("style", 'margin-left: 0.5rem');
                        del1.innerHTML += '<span class="material-icons">delete</span>';
                        div.appendChild(del1);
                        del1.onclick = function(){
                          // //const del = document.getElementById("inputField1Container" + index);
                            inputField2Container.innerHTML='';
                        }
                    }
                    if(document.getElementById("edit2"+index)===null) {
                       // //console.log(document.getElementById("edit2"+index));
                        const edit2 = document.createElement("a");
                        edit2.setAttribute("id","edit2" + index);
                       //edit2.setAttribute("style", 'margin-right: 1rem');
                        edit2.setAttribute("style", 'margin-left: 1rem');
                        edit2.innerHTML += '<span class="material-icons">edit</span>';
                        div.appendChild(edit2);
                        edit2.onclick = function(){
                            var x = document.getElementById("edit2");
                            x.style.display = "block"
                            const he3 = document.createElement("h3");
                            he3.innerHTML = "<h3>Edit</h3>"
                            const inp = document.createElement("input");
                            inp.setAttribute("type", "text");
                            inp.setAttribute("id","txt");
                            const button = document.createElement("button");
                            button.setAttribute("id", "icn");
                            button.innerHTML += '<span class="material-symbols-outlined">check_circle</span>';
                                button.onclick = function () {
                                x.style.display = "none";
                                var val = document.getElementById("txt").value;
                                label.innerHTML = val;
                                x.innerHTML="";
                            }
                            x.appendChild(he3);
                            x.appendChild(inp);
                            x.appendChild(button);
                        }
                    }
                    console.log(document.getElementById("edit2"+index).value);
                });
                div.appendChild(label);
                div.appendChild(input);
                Event.target.appendChild(div);
               // //Event.target.appendChild(input);
               // //console.log(inputField1Container.classList);
                inputField2Container.classList.remove("over");
               // //console.log(inputField1Container.classList);
               // //comp = document.querySelectorAll(".input-field1-component");
               // //console.log("Component lenght" + comp.length);
            }
        }

    }

    handleJudgementDrop(Event) {
        Event.stopPropagation();
        let sourceElement = Event.dataTransfer.getData("text/html");
        let judgementContainerText = Event.target.id.toString();
        let index = this.getCurrentIndex(judgementContainerText);
        let judgementComponent = document.getElementById("judgementComponent" + index);
        let judgementContainer = document.getElementById("judgementContainer" + index);

        if((sourceElement === "&gt;_Judgement") && (judgementComponent === null)) {
            const judgementComponent = document.createElement("div");
            judgementComponent.setAttribute("id", "judgementComponent" + index);
            Event.target.appendChild(judgementComponent);
            judgementComponent.classList.add("judgement-component");
            judgementContainer.classList.remove("over");
            const okButton = document.createElement("button");
            okButton.setAttribute("id", "okButton" + index);
            okButton.textContent = "OK";
            judgementComponent.appendChild(okButton);
            okButton.classList.add("judgement-button");
            okButton.classList.add("judgement-ok-button");
            okButton.addEventListener("click", function(Event) {
                Event.preventDefault();
            });
            const ngButton = document.createElement("button");
            ngButton.setAttribute("id", "ngButton" + index);
            ngButton.textContent = "NG";
            ngButton.classList.add("judgement-button");
            ngButton.classList.add("judgement-ng-button");
            judgementComponent.appendChild(ngButton);
            ngButton.addEventListener("click", function(Event) {
                Event.preventDefault();
            });

            const del2 = document.createElement("button");
           // //del1.setAttribute("id", "deleteicon" + index);
            del2.innerHTML += '<i class="material-icons">delete</i>';
            del2.onclick = function(){
                judgementContainer.innerHTML='';
            }
            judgementComponent.appendChild(del2);
        }
    }
}

export {ChecklistContainer};