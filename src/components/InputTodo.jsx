import React from 'react';

export const InputTodo = ({ todoText, handleTodoText, onChangeTodoText, disabled }) => {
  return (
    <>
      <div className='p-4 rounded-t border border-gray-400 border-b-0 space-x-2'>
        <input
          disabled={disabled}
          className='rounded-xl py-1 px-2 outline-none border'
          type='text'
          placeholder='TODOを入力'
          value={todoText}
          onChange={(event) => onChangeTodoText(event)}
          onKeyDown={(event) => {
            // 変換のEnterはスルーする
            if (event.nativeEvent.isComposing) return;
            if (event.key === 'Enter') return handleTodoText(todoText);
          }}
        />
        <button
          disabled={disabled}
          className='rounded-xl border py-1 px-4 bg-gray-100 hover:bg-white'
          onClick={() => handleTodoText(todoText)}
        >
          追加
        </button>
        {disabled && (
          <span className='text-red-500'>登録できるtodoは5個までだよ!!</span>
        )}
      </div>
    </>
  );
};
