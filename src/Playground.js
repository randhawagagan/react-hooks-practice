// import React, { useState, useEffect, useRef } from "react";
// import styles from '../style.css';
// import Paint from './components/Paint'
// import randomColor from 'randomcolor'
// function Playground() {
//   const [count, setCount] = useState(0)
//   const inputRef = useRef();
//   const [color, setColor] = useState(null)
//   useEffect(() => {
//     setColor(randomColor())
//     inputRef.current.focus()
//   }, [count])
//   return (
//     <div style={{ borderTop: `10px solid ${color}` }}>
//       {count}
//       <button onClick={() => setCount(currentCount => currentCount - 1)}>-</button>
//       <button onClick={() => setCount(currentCount => currentCount + 1)}>+</button>
//       <hr />
//       <input ref={inputRef} type="range" onChange={e => setCount(e.target.value)} value={count} />
//     </div>
//   )
// }

// export default Playground;
import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import randomColor from 'randomcolor'

export default function Playground() {
  const [count, setCount] = useState(30)

  const inputRef = useRef()

  const [color, setColor] = useState(randomColor())
  useEffect(() => inputRef.current.focus(), [count])

  const cb = useCallback(num => console.log(num), [count])

  return (
    <div style={{ borderTop: `10px solid ${color}` }}>
      {count}
      <button onClick={() => setCount(currentCount => currentCount - 1)}>-</button>
      <button onClick={() => setCount(currentCount => currentCount + 1)}>+</button>
      <button onClick={() => setColor(randomColor())}>Change Color</button>
      <hr />
      <input ref={inputRef} type="range" onChange={e => setCount(e.target.value)} value={count} />
      <Calculate cb={cb} num={count} />
    </div>
  )
}

const Calculate = React.memo(({ cb, num }) => {
  cb(num)
  const renderCount = useRef(1)
  return <div>{renderCount.current++}</div>
})