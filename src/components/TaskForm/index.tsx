import React from "react";
import styles from './styles.module.scss'

interface Props {
  btnText: string,
}

const TaskForm = (props: Props) => {
  return(
    <form className={styles.form}>
      <div className={styles.input_container}>
        <label htmlFor="title">Título:</label>
        <input type="text" name="title" id="title" placeholder="Título da tarefa" />
      </div>
      <div className={styles.input_container}>
        <label htmlFor="difficulty">Dificuldade:</label>
        <input type="text" name="difficulty" id="difficulty" placeholder="Dificuldade da tarefa" />
      </div>
      <input type="submit" value={props.btnText} />
    </form>
  );
};

export default TaskForm;
