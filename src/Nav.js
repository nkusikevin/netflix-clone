import React,{useEffect, useState} from 'react'
import './nav.css'
function Nav() {
    const [show ,handleShow] = useState(false)
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY>100){
                handleShow(true)
            }else{
                handleShow(false)
            }
        })
        return()=>{
            window.removeEventListener('scroll')
        }
    }, [])
    return (
        <div className={`nav ${show && 'nav_block'}`}>
<img
className='nav_log' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png" alt="NKMOVIES"/>
        </div>
    )
}

export default Nav
