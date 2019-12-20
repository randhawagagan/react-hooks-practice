import React, { useState } from "react";

export default React.memo(() => {
  const [name, setName] = useState('');
  console.log("name component called ")
  return (
    <label>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        onClick={e => e.target.setSelectionRange(0, e.target.value.length)}
        placeholder="Untitled">
      </input>
    </label>
  )
}
)

