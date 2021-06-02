import React from 'react';

export const IncompleteTodos = ({
  incompleteTodos,
  onClickComplete,
  onClickDelete,
}) => {
  return (
    <>
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
                    onClick={() => onClickComplete(index)}
                  >
                    完了
                  </button>
                  <button
                    className='rounded-xl border py-0 px-4 bg-gray-100 hover:bg-white'
                    onClick={() => onClickDelete(index)}
                  >
                    削除
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
