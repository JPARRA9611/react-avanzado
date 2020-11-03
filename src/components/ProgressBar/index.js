import React, { useState, useEffect } from 'react'
import { DivProgressBar, InsideProgressBar } from './styles'

export const ProgressBar = ({ time }) => {
  const [progress, setProgress] = useState('0')

  useEffect(_ => {
    const updateProgress = step => {
      setProgress(parseInt(progress) + parseInt(step))
    }
    if (progress < '100') {
      var load = setTimeout(() => {
        updateProgress('10')
      }, time)
    }

    return () => clearTimeout(load)
  })

  return (
    <>
      <DivProgressBar>
        <InsideProgressBar width={`${progress}%`} />
      </DivProgressBar>
    </>
  )
}
