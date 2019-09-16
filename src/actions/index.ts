import axios from 'axios'
import { Dispatch } from 'redux'
import { ActionType } from './types'

export interface Task {
	id: number
	title: string
	completed: boolean
}

export interface FetchTasks {
	type: ActionType.fetchTasks
	payload: Task[]
}

const url = 'https://jsonplaceholder.typicode.com/todos'
export const fetchTasks = () => {
	return async (dispatch: Dispatch) => {
		const response = await axios.get<Task[]>(url)

		dispatch<FetchTasks>({
			type: ActionType.fetchTasks,
			payload: response.data,
		})
	}
}
