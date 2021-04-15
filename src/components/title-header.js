import React, {useState, useEffect} from 'react'

export default function TitleHeader(){
    const titles = ["Software Engineer", "Product Manager", "Chief of Staff"]

    const [curTitle, setCurTitle] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurTitle(prevTitle => (prevTitle + 1) % 3)
        }, 3000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="absolute top-1/3 right-1/4">
            <h1 className="raanan-bold text-white text-8xl">Chris Moffitt</h1>
            <h2 className="stix-reg yellow-theme text-4xl">: {titles[curTitle]}</h2>
            <h2 className="stix-reg grey-theme text-3xl py-3">Who likes to turn creative ideas into reality</h2>
        </div>
        
    )
}