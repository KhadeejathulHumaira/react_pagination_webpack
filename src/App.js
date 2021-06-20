import React from 'react'
import  ReactDOM from 'react-dom'
import style from'./App.module.css'
import DisplayImages from './Components/DisplayImages'




const App=()=> {
    return (
        <div className={style.body}>
            <DisplayImages/>
        </div>
    )
}

ReactDOM.render(<App/>,document.getElementById("root"))