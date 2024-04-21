import React from 'react'

const Layout = ({ children }:{chirldren:React.ReactNode}) => {
  return (
    <main className='auth'>
        {children}
    </main>
  )
}

export default Layout
