// const colors = ['#f87171', '#60a5fa', '#fbbf24', '#34d399', '#a78bfa']; // Five color options

// // Function to update the placeholder visibility
// function updatePlaceholderVisibility() {
//     const taskContainer = document.getElementById("task-container");
//     if (taskContainer.children.length === 0) {
//         document.getElementById("placeholder").style.display = "flex";

//         document.getElementById("floating-new-list-button").style.display = "none"; // Hide on small screens
//     } else {
//         document.getElementById("placeholder").style.display = "none";

//         document.getElementById("floating-new-list-button").style.display = "block"; // Show on small screens

//     }
// }

// document.addEventListener("DOMContentLoaded", function () {

//     function addNewTask(listContainerId) {
//         const taskContainer = document.createElement("div");
//         taskContainer.classList.add("flex", "items-center", "mb-1", "p-0", "bg-transparent", "rounded-md", "w-full");

//         const taskId = `task-${Math.random().toString(36).substr(2, 9)}`;

//         taskContainer.innerHTML = `
//         <input type="checkbox" id="${taskId}" class="rounded-full bg-transparent focus:ring-1 focus:ring-orange-500 w-5 h-5 cursor-pointer m-0 mr-2">

//         <label for="${taskId}" class="flex-grow">
//         <input type="text" class="p-0 border rounded-md w-full bg-transparent placeholder:text-gray-700 text-white border-none focus:outline-none" placeholder="Enter your task here" style="background-color: transparent; color: white;" />
//         `;

//         const cardContainer = document.getElementById(listContainerId);
//         cardContainer.appendChild(taskContainer);

//         // Task strike-through functionality
//         document.getElementById(taskId).addEventListener("change", function () {
//             if (this.checked) {
//                 this.nextElementSibling.querySelector('input').style.textDecoration = "line-through";
//             } else {
//                 this.nextElementSibling.querySelector('input').style.textDecoration = "none";
//             }
//         });
//     }


//     function createCard(taskContainer) {

//         const card = document.createElement("div");
//         card.classList.add(
//             "bg-orange-200",
//             "rounded-lg",
//             "border-2",
//             "border-white",
//             "p-4",
//             "span-1",
//             "w-full",
//             "relative",
//             "shadow-md",
//             "max-w-md",
//             "overflow-y-auto"
//         );

//         card.style.height = "fit-content";
//         card.style.minWidth = "200px";
//         card.style.maxWidth = "250px";
//         card.style.maxHeight = "700px";
//         card.style.minHeight = "auto";
//         card.style.columnSpan = "2";
//         card.style.backgroundColor = colors[1]; // Default color
//         const cardId = `card-${Math.random().toString(36).substr(2, 9)}`;

//         // Generate color buttons
//         const colorButtons = colors.map((color) => `
//         <button class="color-option w-6 h-6 rounded-full border cursor-pointer" data-color="${color}" style="background-color: ${color};"></button>
//         `).join('');

//         card.innerHTML = `
//         <!-- Delete button -->
//         <div class="absolute bottom-0.5 right-0.5">
//             <!-- Delete Button -->
//             <img class="delete-card m-1 " src="./assets/images/close-square-svgrepo-com.svg" alt="close button" width="20" height="20">
//         </div>
//         <!-- Input title -->
//         <input type="text" class="title-list-each-input w-full mb-2 p-2 text-2xl font-bold bg-transparent border border-gray-600 rounded-lg focus:outline-none placeholder:text-gray-600 text-gray-800 " placeholder="Enter list name" />
//         <!-- Card List -->
//         <div id="${cardId}" class="task-list flex-col mb-2"></div>

//         <button class="add-task-button bg-slate-700 text-white px-4 py-2 rounded-2xl hover:bg-slate-800 transition mt-2">+ Add new task</button>
//         <!-- Color Options -->
//             <div class="flex mt-4 gap-2 flex-grow ">
//                 ${colorButtons}
//             </div>
//         `;

//         taskContainer.appendChild(card);

//         // Update placeholder visibility
//         updatePlaceholderVisibility();

//         // Add event listeners
//         addEventListenersToCard(card, cardId);


//     }

//     function addEventListenersToCard(card, cardId) {
//         // Add event listener for color buttons
//         card.querySelectorAll(".color-option").forEach(function (colorButton) {
//             colorButton.addEventListener("click", function () {
//                 card.style.backgroundColor = colorButton.dataset.color;
//             });
//         });

//         // Add event listener for delete button
//         card.querySelector(".delete-card").addEventListener("click", function () {
//             // ask for the conformation

//             if (confirm("Are you sure you want to delete this card?")) {
//                 card.remove();
//                 updatePlaceholderVisibility();
//             }
//         });

//         // Add event listener for the dynamically created 'Add new task' button
//         card.querySelector(".add-task-button").addEventListener("click", function () {
//             addNewTask(cardId);
//         });
//     }


//     document.getElementById("new-list-button").addEventListener("click", function () {
//         const taskContainer = document.getElementById("task-container");
//         taskContainer.classList.remove("hidden");

//         createCard(taskContainer); // Call the createCard function
//     });

//     document.getElementById("floating-new-list-button").addEventListener("click", function () {
//         document.getElementById("placeholder").style.display = "none";
//         document.getElementById("new-list-button").click();
//     });


//     document.getElementById("panel-new-list-button").addEventListener("click", function () {
//         document.getElementById("placeholder").style.display = "none";
//         document.getElementById("new-list-button").click();
//     });

//     // Placeholder display logic: Check for remaining cards
//     if (document.querySelectorAll("#task-container .task-list").length === 0) {
//         document.getElementById("placeholder").style.display = "flex";
//     }

// });


// document.addEventListener("DOMContentLoaded", function () {
//     // Add event listener for the hide button
//     document.getElementById("hide-sidebar-button").addEventListener("click", function () {
//         const sidebar = document.getElementById("side-bar"); // Get the sidebar by ID

//         // Check if the sidebar is currently visible
//         if (!sidebar.classList.contains("hidden")) {
//             sidebar.classList.add("hidden"); // Add hidden class

//             // Wait for the transition to complete before hiding visibility
//             setTimeout(() => {
//                 sidebar.style.visibility = 'hidden'; // Set visibility to hidden
//             }, 300); // Match the duration of your CSS transition

//             this.textContent = "Show Sidebar"; // Update button text
//         } else {
//             sidebar.style.visibility = 'visible'; // Set visibility to visible first
//             sidebar.classList.remove("hidden"); // Remove hidden class

//             this.textContent = "Hide Sidebar"; // Update button text
//         }
//     });
// });





document.addEventListener("DOMContentLoaded", function () {
    const colors = ['#f87171', '#60a5fa', '#fbbf24', '#34d399', '#a78bfa'];

    // Caching DOM elements
    const taskContainer = document.getElementById("task-container");
    const placeholder = document.getElementById("placeholder");
    const floatingNewListButton = document.getElementById("floating-new-list-button");
    const newListButton = document.getElementById("new-list-button");
    const hideSidebarButton = document.getElementById("hide-sidebar-button");
    const sideBar = document.getElementById("side-bar");

    // Function to update the placeholder visibility
    function updatePlaceholderVisibility() {
        placeholder.style.display = taskContainer.children.length === 0 ? "flex" : "none";
        floatingNewListButton.style.display = taskContainer.children.length === 0 ? "none" : "block"; // Hide on small screens
    }

    // Improved Unique ID Generation
    function generateUniqueId() {
        return crypto.randomUUID(); // Using crypto for guaranteed uniqueness
    }

    // Reusable function to create task input elements
    function createTaskInput(taskId) {
        const taskContainer = document.createElement("div");
        taskContainer.classList.add("flex", "items-center", "mb-1", "p-0", "bg-transparent", "rounded-md", "w-full");

        taskContainer.innerHTML = `
            <input type="checkbox" id="${taskId}" class="rounded-full bg-transparent focus:ring-1 focus:ring-orange-500 w-5 h-5 cursor-pointer m-0 mr-2" aria-label="Complete task">
            <label for="${taskId}" class="flex-grow">
                <input type="text" class="p-0 border rounded-md w-full bg-transparent placeholder:text-gray-700 text-white border-none focus:outline-none" placeholder="Enter your task here" aria-label="Task input" />
            </label>
        `;

        return taskContainer;
    }

    function addNewTask(listContainerId) {
        const taskId = generateUniqueId();
        const taskElement = createTaskInput(taskId);

        const cardContainer = document.getElementById(listContainerId);
        cardContainer.appendChild(taskElement);

        // Task strike-through functionality
        taskElement.querySelector("input[type='checkbox']").addEventListener("change", function () {
            const input = taskElement.querySelector('input[type="text"]');
            input.style.textDecoration = this.checked ? "line-through" : "none";
        });

        updatePlaceholderVisibility(); // Update visibility after adding a task
    }

    function createCard(taskContainer) {
        const card = document.createElement("div");
        card.classList.add("custom-card", "span-1", "w-full", "relative", "shadow-md", "overflow-y-auto");

        const cardId = generateUniqueId();
        const colorButtonsHTML = colors.map(color => `
            <button class="color-option custom-color-button" data-color="${color}" style="background-color: ${color};" aria-label="Select color"></button>
        `).join('');

        card.innerHTML = `
            <div class="absolute bottom-0.5 right-0.5">
                <img class="delete-card m-1" src="./assets/images/close-square-svgrepo-com.svg" alt="close button" width="20" height="20" aria-label="Delete card">
            </div>
            <input type="text" class="title-list-each-input custom-title" placeholder="Enter list name" aria-label="Card title input" />
            <div id="${cardId}" class="task-list flex-col mb-2"></div>
            <button class="add-task-button custom-add-task-button" aria-label="Add new task">+ Add new task</button>
            <div class="custom-color-options">${colorButtonsHTML}</div>
        `;

        taskContainer.appendChild(card);
        updatePlaceholderVisibility();
        addEventListenersToCard(card, cardId);
    }

    function addEventListenersToCard(card, cardId) {
        // Event delegation for color selection buttons
        card.addEventListener("click", function (event) {
            if (event.target.classList.contains("color-option")) {
                card.style.backgroundColor = event.target.dataset.color;
            }
        });

        card.querySelector(".delete-card").addEventListener("click", function () {
            if (confirm("Are you sure you want to delete this card?")) {
                card.remove();
                updatePlaceholderVisibility();
            }
        });

        card.querySelector(".add-task-button").addEventListener("click", function () {
            addNewTask(cardId);
        });
    }

    // Event listeners for buttons
    newListButton.addEventListener("click", function () {
        taskContainer.classList.remove("hidden");
        createCard(taskContainer);
    });

    floatingNewListButton.addEventListener("click", function () {
        placeholder.style.display = "none";
        newListButton.click();
    });

    // hideSidebarButton.addEventListener("click", function () {
    //     sideBar.classList.toggle("hidden");
    //     this.textContent = sideBar.classList.contains("hidden") ? "Show Sidebar" : "Hide Sidebar";
    // });

    // Add event listener for the hide button
    hideSidebarButton.addEventListener("click", function () {
        // Check if the sidebar is currently visible
        if (!sideBar.classList.contains("hidden")) {
            sideBar.classList.add("hidden"); // Add hidden class

            // Ensure visibility change happens after the width transition
            sideBar.addEventListener("transitionend", function () {
                // This ensures the sidebar is hidden after the width transition completes
                sideBar.style.visibility = 'hidden';
            }, { once: true }); // Only trigger this once

            this.textContent = "Show Sidebar"; // Update button text
        } else {
            // Set visibility to visible first
            sideBar.style.visibility = 'visible'; // Ensure it's visible before expanding

            sideBar.classList.remove("hidden"); // Remove hidden class to show sidebar

            // Wait for the sidebar to be visible before updating the text
            setTimeout(() => {
                this.textContent = "Hide Sidebar"; // Update button text
            }, 0); // Ensure this runs after the next repaint
        }
    });

    // Keyboard Navigation
    document.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            newListButton.click();
        }
    });

    // Initial setup
    updatePlaceholderVisibility();
});
