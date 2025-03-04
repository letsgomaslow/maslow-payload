'use client'

import clsx from 'clsx'
import React from 'react'
import { useTheme } from '@/providers/Theme'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

export const Logo = (props: Props) => {
  const { loading: loadingFromProps, priority: priorityFromProps, className } = props
  const { theme } = useTheme() 
  const loading = loadingFromProps || 'lazy'
  const priority = priorityFromProps || 'low'

  const logoSrc =
    theme === 'dark'
      ? '/media/maslow-logo.png' 
      : '/media/Maslow-black.png' 

  return (
    <img
      alt="Maslow Logo"
      height={34}
      loading={loading}
      fetchPriority={priority}
      decoding="async"
      className={clsx('max-w-[10.375rem] w-full h-[34px]', className)}
      src={logoSrc}
    />
  )
}
