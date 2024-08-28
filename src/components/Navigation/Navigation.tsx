import { useEffect } from 'react'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { Link } from 'react-router-dom'
import classes from './Navigation.module.css'

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
    <NavigationMenu.Root className={classes.root}>
      <NavigationMenu.List className={classes.list}>
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
      <NavigationMenu.Viewport />
    </NavigationMenu.Root>
  )
}

export default Navigation
