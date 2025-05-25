import React from 'react'
import { cn } from '../../lib/utils'
const Container = ({ children, className }) => {
  return (
    <div className={cn('w-full max-w-screen-xl mx-auto px-1.5')}>
      { children }
    </div>
  )
}

export default Container
