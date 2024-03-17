import { useReducer } from 'react';
import { useForm } from '../hooks/useForm';

const initialState = [
    {
        id: new Date().getTime(),
        task: 'Comprar pan',
        done: true
    }
];

const taskReducer = (state = initialState, action = {}) => {
    switch(action.type) {
        case '[TASK] add task':
            return [...state, action.payload];

        case '[TASK] edit task':
            return state.map(task => {
                if (task.id === action.payload) {
                    return {
                        ...task,
                        done: !task.done
                    }
                } else {
                    return task;
                }});

            case '[TASK] delete task':
                return state.filter(task => task.id !== action.payload);
            
            case '[TASK] reset':
                return [];

            default:
                return state;
                    }
                }

export const TaskList = () => {

    const [state, dispatch] = useReducer(taskReducer, initialState)
    
    const {task, formState, onInputChange} = useForm({task: ''})

    const addTask = (e) => {
        e.preventDefault();
        if(formState.task == '') return
        const task = {
            id: new Date().getTime(),
            task: formState.task,
            done: false
        }
        const action = {
            type: '[TASK] add task',
            payload: task
        }
        dispatch(action);
    }

    const editTask = ({id}) => {
        const action = {
            type: '[TASK] edit task',
            payload: id
        }
        dispatch(action);
    }

    const eraseTask = ({id}) => {
        const action = {
            type: '[TASK] delete task',
            payload: id
        }
        dispatch(action);
    }

    const reset = () => {
        const action = {
            type: '[TASK] reset'
        }
        dispatch(action);
    }

    return (
        <>
            <form onSubmit={addTask} >
                <div className="form-group">
                    <input 
                        type="text" 
                        name="task" 
                        className="form-control" 
                        placeholder="new task"
                        value={task} 
                        onChange={onInputChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <button type='button' className="btn btn-danger" onClick={reset}>Reset</button>
            </form>
            <hr />
            <ul className='list-group'>
                {state.map(item => {
                    return (
                        <li key={item.id} className="list-group-item d-flex justify-content-between">
                            <span>{item.task}</span>
                            <div>
                                <input type="checkbox" value={item.edit} onChange={() => editTask(item)} />
                                <button className='btn btn-danger' onClick={() => eraseTask(item)}>❌</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}
