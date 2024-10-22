'use client'

import * as React from 'react'
import Link from 'next/link'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,

  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

import { cn } from '@/lib/utils'

export default function NavigationMenuDemo() {
    const [active, setActive] = React.useState('home')
  return (
    <NavigationMenu className="z-[5] max-w-[800px] w-full mx-2">
      <NavigationMenuList className="flex">
        <NavigationMenuItem >
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <span className="text-lg font-bold">Logo</span>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem onClick={() => setActive('home') }>
          <Link href="/" legacyBehavior passHref >
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <span className={active === 'home' ? 'border-b-2 border-slate-600' : ''}>Home</span>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem onClick={() => setActive("blog")}>
          <Link href="/blog" legacyBehavior passHref >
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <span className={active === 'blog' ? 'border-b-2 border-slate-600' : ''}>Blog</span>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'hover:bg-accent block text-text select-none space-y-1 rounded-base border-2 border-transparent p-3 leading-none no-underline outline-none transition-colors hover:border-border dark:hover:border-darkBorder',
            className,
          )}
          {...props}
        >
          <div className="text-base font-heading leading-none">{title}</div>
          <p className="text-muted-foreground font-base line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'