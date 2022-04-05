import React, { useState, ChangeEvent, FormEvent, useEffect} from "react";
import styles from './styles.module.scss';
import { ITask } from '../../interfaces/Task';

interface Props {
  btnText: string,
  taskList: ITask[],
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>,
  task?: ITask | null
  handleUpdate?(id: number, title: string, difficulty: string): void
}

const TaskForm = (props: Props) => {
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>('');
  const [difficulty, setDifficulty] = useState<string>('');

  useEffect(() => {
    if(props.task) {
      setId(props.task.id);
      setTitle(props.task.title);
      setDifficulty(props.task.difficulty);
    }
  }, [props.task])

  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(props.handleUpdate){
      props.handleUpdate(id, title, difficulty);
    } else {
      const id = Math.floor(Math.random() * 1000);
      const newTask: ITask = {id, title, difficulty};
  
      props.setTaskList!([...props.taskList, newTask]);
  
      setTitle('');
      setDifficulty('');
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if(e.target.name === 'title') {
      setTitle(e.target.value);
    } else {
      setDifficulty(e.target.value);
    }
  }

  return(
    <form className={styles.form} onSubmit={addTaskHandler}>
      <div className={styles.input_container}>
        <label htmlFor="title">Título:</label>
        <input 
          type="text" 
          name="title" 
          id="title" 
          value={title}
          placeholder="Título da tarefa" 
          onChange={handleChange} 
        />
      </div>
      <div className={styles.input_container}>
        <label htmlFor="difficulty">Dificuldade:</label>
        <input 
          type="text" 
          name="difficulty" 
          id="difficulty" 
          value={difficulty}
          placeholder="Dificuldade da tarefa" 
          onChange={handleChange} 
        />
      </div>
      <input type="submit" value={props.btnText} />
    </form>
  );
};

export default TaskForm;
