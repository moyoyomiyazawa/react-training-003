import React, { useState } from 'react';
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

  const handleTodoText = (todoText) => {
    if (todoText.length === 0) return alert('文字を入力してください');
    setIncompleteTodos([...incompleteTodos, todoText]);
    setTodoText('');
  };

  return (
    <>
      <div className='container mx-auto my-10 max-w-2xl'>
        {/* タスク追加フォーム */}
        <div className='p-4 rounded-t border border-gray-400 border-b-0 space-x-2'>
          <input
            className='rounded-xl py-1 px-2 outline-none border'
            type='text'
            placeholder='TODOを入力'
            value={todoText}
            onChange={(event) => setTodoText(event.target.value)}
            onKeyDown={(event) => {
              // 変換のEnterはスルーする
              if (event.nativeEvent.isComposing) return;
              if (event.key === 'Enter') return handleTodoText(todoText);
            }}
          />
          <button
            className='rounded-xl border py-1 px-4 bg-gray-100 hover:bg-white'
            onClick={() => handleTodoText(todoText)}
          >
            追加
          </button>
        </div>

        {/* 未完了リスト */}
        <div className='pt-2 pb-4 px-4 border border-gray-400 border-b-0'>
          <h2 className='text-center mt-0 font-bold text-gray-500'>
            未完了のTODO
          </h2>
          <ul>
            {incompleteTodos.map((todo, index) => {
              return (
                <li key={index} className='grid grid-cols-2 py-1'>
                  <div>
                    <span className='mr-2'>{todo}</span>
                  </div>
                  <div className='text-right space-x-2'>
                    <button
                      className='rounded-xl border py-0 px-4 bg-gray-100 hover:bg-white'
                      onClick={() => {
                        // 完了リストに該当項目を追加する
                        setCompleteTodos((prevCompleteTodos) => [
                          ...prevCompleteTodos,
                          incompleteTodos[index],
                        ]);
                        // 未完了リストから該当項目を削除する
                        setIncompleteTodos((prevIncompleteTodos) =>
                          prevIncompleteTodos.filter((_, i) => i !== index)
                        );
                      }}
                    >
                      完了
                    </button>
                    <button
                      className='rounded-xl border py-0 px-4 bg-gray-100 hover:bg-white'
                      onClick={() => {
                        // 現在の項目のindexと一致しないものだけをフィルタリングした新しい配列を生成（結果として指定した要素を削除）
                        setIncompleteTodos((prevIncompleteTodos) =>
                          prevIncompleteTodos.filter((_, i) => i !== index)
                        );
                      }}
                    >
                      削除
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        {/* 完了リスト */}
        <div className='pt-2 pb-4 px-4 rounded-b border border-gray-400'>
          <h2 className='text-center mt-0 font-bold text-gray-500'>
            完了したTODO
          </h2>
          <ul>
            {completeTodos.map((todo, index) => {
              return (
                <li key={index} className='grid grid-cols-2 py-1'>
                  <div>
                    <span className='mr-2'>{todo}</span>
                  </div>
                  <div className='text-right'>
                    <button
                      className='rounded-xl border py-0 px-4 bg-gray-100 hover:bg-white'
                      onClick={() => {
                        // 未完了リストに該当項目を追加する
                        setIncompleteTodos((prevIncompleteTodos) => [
                          ...prevIncompleteTodos,
                          completeTodos[index],
                        ]);
                        // 完了リストから該当項目を削除する
                        setCompleteTodos((prevCompleteTodos) =>
                          prevCompleteTodos.filter((_, i) => i !== index)
                        );
                      }}
                    >
                      戻す
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
