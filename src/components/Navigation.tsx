import { useEffect } from 'react'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { Link } from 'react-router-dom'

const Navigation = () => {
  useEffect(() => {
    const nav = document.querySelector('nav')
    if (nav) {
      const navHeight = nav.offsetHeight
      document.documentElement.style.setProperty(
        '--nav-height',
        `${navHeight}px`
      )
    }
  }, [])

  return (
    <nav className="h-16">
      {' '}
      {/* or whatever height you're using */}
      <NavigationMenu.Root className="relative z-[1] flex w-screen justify-center">
        <NavigationMenu.List className="center flex list-none rounded-[6px] bg-white p-1 shadow-[0_2px_10px] shadow-blackA7">
          <NavigationMenu.Item>
            <NavigationMenu.Link asChild>
              <Link
                to="/"
                className="block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none text-violet11 no-underline outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-violet7"
              >
                Home
              </Link>
            </NavigationMenu.Link>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Root>
    </nav>
  )
}

export default Navigation
