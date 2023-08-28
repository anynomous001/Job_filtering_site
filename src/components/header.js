import React from 'react'
import { DataContext } from '../App'

const Header = () => {
    const { filterValue } = React.useContext(DataContext)
    console.log(filterValue + 'header')
    return (
        <div>
            <header className='header'>
            </header>
        </div>
    )
}

export default Header