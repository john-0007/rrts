import { Task, FetchTasks } from '../actions'
import { ActionType } from '../actions/types'

export const tasksReducer = (state: Task[] = [], action: FetchTasks) => {
	switch (action.type) {
		case ActionType.fetchTasks:
			return action.payload
		default:
			return state
	}
}
