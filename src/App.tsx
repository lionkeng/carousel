import { BrowserRouter, Routes, Route } from 'react-router-dom'
import StoreFront from './pages/StoreFront'
import Category from './pages/Category'
import Navigation from './components/Navigation'

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<StoreFront />} />
            <Route path="/category/:categoryId" element={<Category />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
