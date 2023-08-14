//import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default function Sidebar() {
  return (
    <Navbar sticky='top' className='sidebar flex-column'>
        <Nav.Item>
            <Nav.Link href='/'>New</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href='/'>Used</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href='/'>Certified</Nav.Link>
        </Nav.Item>
    </Navbar>
  )
}
