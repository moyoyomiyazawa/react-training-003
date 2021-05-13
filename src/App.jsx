import React from 'react';
import './styles/output.css';

export const App = () => {
  return (
    <>
      <div>
        <input type='text' placeholder='TODOを入力' />
        <button>追加</button>
      </div>
      <div>
        <p>未完了のTODO</p>
        <ul>
          <li>
            あああああ
            <button>完了</button>
            <button>削除</button>
          </li>
          <li>
            あああああ
            <button>完了</button>
            <button>削除</button>
          </li>
        </ul>
      </div>
      <div>
        <p>完了のTODO</p>
        <ul>
          <li>
            あああああ
            <button>完了</button>
            <button>削除</button>
          </li>
          <li>
            あああああ
            <button>完了</button>
            <button>削除</button>
          </li>
        </ul>
      </div>
    </>
  );
};
