import React from 'react';

export const CompleteTodos = ({ completeTodos, onClickRestore }) => {
  return (
    <>
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
                    onClick={() => onClickRestore(index)}
                  >
                    戻す
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
