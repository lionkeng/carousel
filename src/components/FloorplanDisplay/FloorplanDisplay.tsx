import { useContext } from 'react'
import floorplans from '../../assets/floorplans'
import { AppContext } from '../../context/AppContext'
import classes from './FloorplanDisplay.module.css'

/**
 * This function component will render the floorplan image at the center of the parent div
 * @returns JSX.Element
 */
function FloorplanDisplay(): JSX.Element {
  const { selectedFloorplan } = useContext(AppContext)
  const floorplan = floorplans[selectedFloorplan || 0]
  return (
    <div className="relative w-full h-full">
      <div className="absolute top-0 left-0 z-10 p-4 text-zinc-700">
        <h2 className="text-xl font-bold mb-2">{floorplan.name}</h2>
        <p className="text-sm">{floorplan.description}</p>
      </div>
      <img
        className={`${classes.image} absolute top-0 left-0`}
        src={floorplan.image}
        alt="floorplan"
      />
    </div>
  )
}

export default FloorplanDisplay
