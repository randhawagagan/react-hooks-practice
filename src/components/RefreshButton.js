import React from 'react'

const RefreshButton = React.memo(({ cb }) => {
  console.log("refresh component called")
  return <button className="button-refresh-colors" onClick={cb}>&#8634;</button>
})

export default RefreshButton