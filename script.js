var allTasks = []
var myStorage = window.localStorage
if (localStorage.getItem('tasks') !== null) {
  allTasks = JSON.parse(localStorage.getItem('tasks'))
}

window.addEventListener('load', () => {
  var app = new Vue({
    el: '#to-do-app',
    data: {
      allTasks: allTasks
    },
    methods: {
      addNewTask: function (task) {
        allTasks.push({'desc': task, 'category': 'open', 'notes': '', 'dueDate': '', 'priority': ''})
      }
    }
  })
})

Vue.component('task-div', {
  props: ['task'],
  template: `
		<input type= "checkbox" id="taskChecked" :value="taskValue">
		<p v-model="taskValue">{{task.desc}}</p>
		<button type="button" id="openOptions">^</button>
		<option-div>
			v-bind:notes = task.notes
			v-bind:dueBy = task.dueDate
			v-bind:priority = task.priority
		</option-div>
	`
})

Vue.component('option-div', {
  props: ['notes', 'dueDate', 'priority'],
  template: `
		<label for="taskNotes">Notes</label>
		<p id="taskNotes">{{notes}}</p>
		<label for="dueDate">Due date</label>
		<input id="dueDate" type="Date" v-bind:value=dueDate>
		<label for="priority">Priority</label>
		<select value=priority>
		<option disabled value="">Please select one</option>
		<option value="low">Low</option>
		<option value="Medium">Medium</option>
		<option value="High">High</option>
		</select>
		<button v-on:click="">Delete</button>
	`
})
