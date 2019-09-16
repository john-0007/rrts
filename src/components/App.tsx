import * as React from 'react'
import { useEffect, FunctionComponent } from 'react'
import { connect } from 'react-redux'
import { Task, fetchTasks } from '../actions'
import { StoreState } from '../reducers'
import { directive } from '@babel/types'

interface AppProps {
	tasks: Task[]
	fetchTasks(): any
}

const _App: FunctionComponent<AppProps> = props => {
	function onButtonClick(): void {
		props.fetchTasks()
	}

	function renderList(): JSX.Element[] {
		return props.tasks.map((task: Task) => {
			return <div key={task.id}>{task.title}</div>
		})
	}

	return (
		<>
			<button onClick={onButtonClick}>Fetch</button>
			{renderList()}
		</>
	)
}

const mapStateToProps = ({ tasks }: StoreState): { tasks: Task[] } => {
	return { tasks }
}

export const App = connect(
	mapStateToProps,
	{ fetchTasks }
)(_App)
