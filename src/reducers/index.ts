import { combineReducers } from 'redux'
import { tasksReducer } from './tasks'
import { Task } from '../actions'

export interface StoreState {
	tasks: Task[]
}
export const reducers = combineReducers<StoreState>({
	tasks: tasksReducer,
})
