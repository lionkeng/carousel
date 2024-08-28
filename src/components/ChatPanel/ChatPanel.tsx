import { useState, useEffect } from 'react'
import StreamingText from '../StreamingText/StreamingText'
import { ChatBubbleIcon, PersonIcon } from '@radix-ui/react-icons'
import magnolia from '../../assets/magnolia'
const botMessages = [
  'That is a great choice! Discover your dream home with this spacious floor plan featuring a modern kitchen that opens to a bright family room, perfect for entertaining. Enjoy seamless indoor-outdoor living with a screened porch ideal for relaxation. Additional highlights include a convenient two-car garage and an inviting dining room that sets the stage for memorable gatherings. Would you like to learn more about this floor plan?',
  'For the first floor, here are a couple of options you can consider:',
]

function BotMessage({ message }: { message: string }): JSX.Element {
  return (
    <div className="flex items-start flex-row pb-4 pt-4">
      <ChatBubbleIcon className="mr-2 mt-1 text-yellow-300 w-6 h-6" />
      <div className="w-full text-gray-600">
        <StreamingText text={message} />
      </div>
    </div>
  )
}

function UserMessage({ message }: { message: string }): JSX.Element {
  return (
    <div className="flex items-start flex-row">
      <PersonIcon className="mr-2 mt-1 text-zinc-700 w-6 h-6" />
      <div className="w-full text-zinc-900 font-bold">
        <StreamingText text={message} />
      </div>
    </div>
  )
}

function timeout(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function sleep(
  ms: number,
  fn: (...args: unknown[]) => unknown,
  ...args: unknown[]
): Promise<unknown> {
  await timeout(ms)
  return fn(...args)
}

function ChatPanel(): JSX.Element {
  const [messages, setMessages] = useState<
    Array<{ type: 'user' | 'bot'; text: string }>
  >([])
  const [userInput, setUserInput] = useState('')
  const [displayedOptions, setDisplayedOptions] = useState<boolean>(false)
  const nextBotMessage = (botMessage: string) => {
    setMessages((prev) => [
      ...prev,
      {
        type: 'bot' as const,
        text: botMessage,
      },
    ])
  }

  useEffect(() => {
    // Simulate initial bot message
    setTimeout(() => {
      setMessages([{ type: 'bot', text: botMessages[0] }])
    }, 1000)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (userInput.trim()) {
      setMessages((prev) => [...prev, { type: 'user', text: userInput }])
      setUserInput('')

      // Simulate bot response after a delay
      await sleep(1500, () =>
        nextBotMessage("Thank you for your question. I'm processing it now...")
      )
      await sleep(2000, () => nextBotMessage(botMessages[1]))
      await sleep(2000, () => setDisplayedOptions(true))
    }
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow overflow-y-auto p-4">
        {messages.map((message, index) =>
          message.type === 'bot' ? (
            <BotMessage key={index} message={message.text} />
          ) : (
            <UserMessage key={index} message={message.text} />
          )
        )}
        {displayedOptions && (
          <div className="flex flex-col">
            {magnolia.map((option, index) => (
              <div key={index}>
                <h4 className="font-bold mt-4 mb-4 text-zinc-700">{`Optional ${option.fp}`}</h4>
                <img
                  className="w-32 h-auto fit-contain mb-2"
                  src={option.image}
                  alt={option.fp}
                />
                <p className="text-zinc-700 italic">{option.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <form onSubmit={handleSubmit} className="p-4 border-t">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Type your message..."
          className="w-full p-2 border rounded"
        />
      </form>
    </div>
  )
}

export default ChatPanel
