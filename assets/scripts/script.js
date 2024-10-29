const colors = ['#f87171', '#60a5fa', '#fbbf24', '#34d399', '#a78bfa']; // Five color options

// Function to update the placeholder visibility
function updatePlaceholderVisibility() {
    const taskContainer = document.getElementById("task-container");
    if (taskContainer.children.length === 0) {
        document.getElementById("placeholder").style.display = "flex";

        document.getElementById("floating-new-list-button").style.display = "none"; // Hide on small screens
    } else {
        document.getElementById("placeholder").style.display = "none";

        document.getElementById("floating-new-list-button").style.display = "block"; // Show on small screens

    }
}

document.addEventListener("DOMContentLoaded", function () {

    function addNewTask(listContainerId) {
        const taskContainer = document.createElement("div");
        taskContainer.classList.add("flex", "items-center", "mb-1", "p-0", "bg-transparent", "rounded-md", "w-full");

        const taskId = `task-${Math.random().toString(36).substr(2, 9)}`;

        taskContainer.innerHTML = `
        <input type="checkbox" id="${taskId}" class="rounded-full bg-transparent focus:ring-1 focus:ring-orange-500 w-5 h-5 cursor-pointer m-0 mr-2">

        <label for="${taskId}" class="flex-grow">
        <input type="text" class="p-1 border rounded-md w-full bg-transparent placeholder:text-gray-600 text-white border-none focus:outline-none" placeholder="Enter your task here" style="background-color: transparent; color: white;" />
        `;

        const cardContainer = document.getElementById(listContainerId);
        cardContainer.appendChild(taskContainer);

        // Task strike-through functionality
        document.getElementById(taskId).addEventListener("change", function () {
            if (this.checked) {
                this.nextElementSibling.querySelector('input').style.textDecoration = "line-through";
            } else {
                this.nextElementSibling.querySelector('input').style.textDecoration = "none";
            }
        });
    }


    function createCard(taskContainer) {

        const card = document.createElement("div");
        card.classList.add(
            "bg-orange-200",
            "rounded-lg",
            "p-4",
            "span-1",
            "w-full",
            "relative",
            "shadow-md",
            "max-w-md",
            "overflow-y-auto"
        );

        card.style.height = "fit-content";
        card.style.minWidth = "200px";
        card.style.maxWidth = "250px";
        card.style.maxHeight = "700px";
        card.style.minHeight = "auto";
        card.style.columnSpan = "2";
        card.style.backgroundColor = colors[1]; // Default color
        const cardId = `card-${Math.random().toString(36).substr(2, 9)}`;

        // Generate color buttons
        const colorButtons = colors.map((color) => `
        <button class="color-option w-6 h-6 rounded-full border cursor-pointer" data-color="${color}" style="background-color: ${color};"></button>
        `).join('');

        card.innerHTML = `
        <!-- Delete button -->
        <div class="flex m-0 p-0 justify-end">
            <!-- Delete Button -->
            <img class="delete-card m-1" src="./assets/images/close-square-svgrepo-com.svg" alt="close button" width="20" height="20">
        </div>
        <!-- Input title -->
        <input type="text" class="w-full mb-4 p-2 text-lg font-bold bg-transparent border border-gray-600 rounded-lg focus:outline-none placeholder:text-gray-600 text-gray-800" placeholder="Enter list name" />
        <!-- Card List -->
        <div id="${cardId}" class="task-list flex-col mb-2"></div>
        
        <button class="add-task-button bg-slate-700 text-white px-4 py-2 rounded hover:bg-slate-800 transition mt-2">+ Add new task</button>
        <!-- Color Options -->
            <div class="flex mt-4 gap-2 flex-grow ">
                ${colorButtons}
            </div>
        `;

        taskContainer.appendChild(card);

        // Update placeholder visibility
        updatePlaceholderVisibility();

        // Add event listeners
        addEventListenersToCard(card, cardId);


    }

    function addEventListenersToCard(card, cardId) {
        // Add event listener for color buttons
        card.querySelectorAll(".color-option").forEach(function (colorButton) {
            colorButton.addEventListener("click", function () {
                card.style.backgroundColor = colorButton.dataset.color;
            });
        });

        // Add event listener for delete button
        card.querySelector(".delete-card").addEventListener("click", function () {
            // ask for the conformation
            /* 
            HERE
            */
            card.remove();
            updatePlaceholderVisibility();
        });

        // Add event listener for the dynamically created 'Add new task' button
        card.querySelector(".add-task-button").addEventListener("click", function () {
            addNewTask(cardId);
        });
    }


    document.getElementById("new-list-button").addEventListener("click", function () {
        const taskContainer = document.getElementById("task-container");
        taskContainer.classList.remove("hidden");

        createCard(taskContainer); // Call the createCard function
    });

    document.getElementById("floating-new-list-button").addEventListener("click", function () {
        document.getElementById("placeholder").style.display = "none";
        document.getElementById("new-list-button").click();
    });


    document.getElementById("panel-new-list-button").addEventListener("click", function () {
        document.getElementById("placeholder").style.display = "none";
        document.getElementById("new-list-button").click();
    });

    // Placeholder display logic: Check for remaining cards
    if (document.querySelectorAll("#task-container .task-list").length === 0) {
        document.getElementById("placeholder").style.display = "flex";
    }

});
