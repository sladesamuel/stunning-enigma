import React, { memo } from "react"

interface ErrorProps {
  error: string
}

const Error = ({ error }: ErrorProps) => (
  <div>{error}</div>
)

export default memo(Error)
