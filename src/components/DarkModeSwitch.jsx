"use client"
import React , {Fragment , useState, useEffect} from 'react'
import { MdLightMode } from "react-icons/md"
import { BsFillMoonFill } from "react-icons/bs"
import { useTheme } from 'next-themes'
function DarkModeSwitch() {
    const { systemTheme, theme, setTheme } = useTheme();
    const [mounted,setMounted] = useState(false);
    useEffect(()=>setMounted(true),[]);
    console.log(`Theme ${theme}`)

    const currentTheme = theme == "system" ? systemTheme : theme;
  return (
    <Fragment>
        {
            mounted && (
                currentTheme == "dark" ? 
                (
                    <MdLightMode className="text-xl cursor-pointer hover:text-amber-500" onClick={()=>setTheme("light")}/> 
                ):  
                (
                    <BsFillMoonFill className="text-xl cursor-pointer hover:text-amber-500" onClick={()=>setTheme("dark")}/>
                )
            )
           
        }
    </Fragment>
  )
}

export default DarkModeSwitch