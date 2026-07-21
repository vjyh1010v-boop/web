import { useState, useRef } from "react";
import style1 from './Ex16.module.css';
import table from './ex16.data'

const Table = () => {
  const [ea, setEa] = useState(Array(table.length).fill(0))

  const handleNum = e => {
    const { id, value } = e.target;
    const newEa = [...ea];
    newEa[id] = value;
    setEa(newEa);
  }
  return (
    <>
      <h1>16. 데이터 임포트 후 실시간 연산</h1>
      <div className={style1}>
        <table className={style1.table}>
          <thead>
            <tr>
              <th>제품명</th>
              <th>단가</th>
              <th>수량</th>
              <th>카테고리</th>
              <th>배송료</th>
              <th>소계</th>
            </tr>
          </thead>
          <tbody>
            {table.map((item, index) => (
              <tr key={index}>
                <td>{item.product_name}</td>
                <td>{item.price}</td>
                <td>
                  <input min="0" type="number" value={ea[index]} onChange={handleNum} id={index} />
                </td>
                <td>{item.category}</td>
                <td>{item.delivery_price}</td>
                <td>{item.price * ea[index] + (ea[index] > 0 ? item.delivery_price : 0)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Table;


