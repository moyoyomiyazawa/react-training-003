import React, { useState } from 'react';
import { InputTodo } from 'components/InputTodo';
import { IncompleteTodos } from 'components/IncompleteTodos';
import { CompleteTodos } from 'components/CompleteTodos';
import './styles/output.css';

export const App = () => {
  const [todoText, setTodoText] = useState('');
  const [incompleteTodos, setIncompleteTodos] = useState([
    'プログラミング',
    '音楽',
  ]);
  const [completeTodos, setCompleteTodos] = useState([
    '確定申告',
    '○○プロジェクトのデモ制作',
  ]);

  const onChangeTodoText = (event) => {
    setTodoText(event.target.value);
  };
  const handleTodoText = (todoText) => {
    if (todoText.length === 0) return alert('文字を入力してください');
    setIncompleteTodos([...incompleteTodos, todoText]);
    setTodoText('');
  };
  const onClickComplete = (index) => {
    setCompleteTodos((prevCompleteTodos) => [
      ...prevCompleteTodos,
      incompleteTodos[index],
    ]);
    setIncompleteTodos((prevIncompleteTodos) =>
      prevIncompleteTodos.filter((_, i) => i !== index)
    );
  };
  const onClickDelete = (index) => {
    setIncompleteTodos((prevIncompleteTodos) =>
      prevIncompleteTodos.filter((_, i) => i !== index)
    );
  };
  const onClickRestore = (index) => {
    // 未完了リストに該当項目を追加する
    setIncompleteTodos((prevIncompleteTodos) => [
      ...prevIncompleteTodos,
      completeTodos[index],
    ]);
    // 完了リストから該当項目を削除する
    setCompleteTodos((prevCompleteTodos) =>
      prevCompleteTodos.filter((_, i) => i !== index)
    );
  };

  const INPUT_LIMIT = 5;
  const disabled = incompleteTodos.length >= INPUT_LIMIT;

  return (
    <>
      <div className='container mx-auto my-10 max-w-2xl'>
        <InputTodo
          {...{ todoText, handleTodoText, onChangeTodoText, disabled }}
        />
        <IncompleteTodos
          {...{ incompleteTodos, onClickComplete, onClickDelete }}
        />
        <CompleteTodos {...{ completeTodos, onClickRestore }} />
      </div>
    </>
  );
};
