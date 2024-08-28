import React, { useState, useEffect, useCallback } from 'react'

type StreamingTextProps = {
  text: string
  speed?: number // Speed in milliseconds per character
}

const StreamingText: React.FC<StreamingTextProps> = ({ text, speed = 20 }) => {
  const [displayedText, setDisplayedText] = useState('')

  const streamText = useCallback(() => {
    let index = 0
    setDisplayedText('')

    const intervalId = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1))
        index += 1
      } else {
        clearInterval(intervalId)
      }
    }, speed)

    return () => clearInterval(intervalId)
  }, [text, speed])

  useEffect(() => {
    const cleanup = streamText()
    return cleanup
  }, [streamText])

  return <span>{displayedText}</span>
}

export default StreamingText
