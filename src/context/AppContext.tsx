import { createContext, useState } from 'react'

interface AppContextType {
  selectedProduct: number | null
  setSelectedProduct: (product: number) => void
  selectedFloorplan: number | null
  setSelectedFloorplan: (floorplan: number) => void
}

const initialState = {
  selectedProduct: null,
  setSelectedProduct: () => {},
  selectedFloorplan: null,
  setSelectedFloorplan: () => {},
}

export const AppContext = createContext<AppContextType>(initialState)

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null)
  const [selectedFloorplan, setSelectedFloorplan] = useState<number | null>(
    null
  )
  return (
    <AppContext.Provider
      value={{
        selectedProduct,
        setSelectedProduct,
        selectedFloorplan,
        setSelectedFloorplan,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
