Vue.component('task-list', {
	template:`
		<div> 
			<task v-for="task in tasks">{{ task.task }}</task>
		</div>`,
//il faut utililiser `` et nn '' et je sais pas pourquoi -_-
	data(){
		return {
			tasks:[
				{ task: 'task 1', complete: false},
				{ task: 'task 2', complete:true },
				{ task: 'task 3', complete:true },
				{ task: 'task 4', complete: false}
			]
		};
	}
});


Vue.component('task',{
	//template: '<li> Foobar </li>'
	template: '<li> <slot> </slot> </li>',

	 /*data(){return { message: 'Foobar'};}*/
});

new Vue({
	el:'#root'
})