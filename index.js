"use strict";
const todos = [
    {done: true, text: "lorem ipsum 1 "},
    {done: false, text: "lorem ipsum 2 "},
    {done: true, text: "lorem ipsum 3 "},
];

const todoItem = () =>
<li class="todo-item">
                <label class="todo-description">
                    <input type="checkbox" />
                    <span>buy bread</span>
                </label>
                <button>X</button>
            </li>;