import html from "../core.js";

function TodoItem({todo},i,editIndex){

    return html`
        <li class="${todo.completed && 'completed'} ${editIndex===i && 'editing'} ">
            <div class="view">
                <input 
                class="toggle" 
                type="checkbox" 
                ${todo.completed && "checked"}
                onchange = "dispatch('toggle',${i})"
                >
                <label
                    ondblclick = "dispatch('startEdit',${i})"
                >${todo.title}</label>
                <button 
                class="destroy" 
                onclick = "dispatch('destroy',${i})"
                ></button>
            </div>
            <input 
            class="edit" 
            value="${todo.title}"
            onkeyup="event.keyCode === 13 && dispatch('endEdit', this.value.trim())|| event.keyCode ===27 && dispatch('cancelEdit')"
            onblur = "dispatch('endEdit', this.value.trim())"
            >
        </li>
    `
}

export default TodoItem