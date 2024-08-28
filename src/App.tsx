import { BrowserRouter, Routes, Route } from 'react-router-dom'
import StoreFront from './pages/StoreFront'
import Category from './pages/Category'
import Navigation from './components/Navigation/Navigation'
import { AppProvider } from './context/AppContext'
import Floorplan from './pages/Floorplan'

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<StoreFront />} />
              <Route path="/category/:categoryId" element={<Category />} />
              <Route path="/floorplan/:floorplanId" element={<Floorplan />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </AppProvider>
  )
}

export default App
