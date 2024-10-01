import React from 'react'
import { Link } from 'react-router-dom'
import Container from './Container'

const Menu = () => {
    return (
        <Container>
            <div className='py-2 bg-blue-100 px-2 mb-2 flex gap-2'>
                <div>
                    <Link to='/'>Home</Link>
                </div>
                <div>
                    <Link to='/login'>Login</Link>
                </div>
            </div>
        </Container>
    )
}

export default Menu
