import ChatPanel from '../components/ChatPanel/ChatPanel'
import FloorplanDisplay from '../components/FloorplanDisplay/FloorplanDisplay'
import StreamingText from '../components/StreamingText/StreamingText'
import classes from './Floorplan.module.css'

function Floorplan() {
  return (
    <div className={`w-full flex flex-row h-[calc(100vh-var(--nav-height))]`}>
      <div className="bg-white h-full w-2/3">
        <FloorplanDisplay />
      </div>
      <div className="bg-blue-300 h-full w-1/3 p-4">
        <ChatPanel />
      </div>
    </div>
  )
}

export default Floorplan
