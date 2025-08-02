import React from 'react'
import { GridLoader } from "react-spinners"

const Loader = () => {
    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <GridLoader color="rgb(47, 56, 104)" />
        </div>
    )
}

export default Loader
