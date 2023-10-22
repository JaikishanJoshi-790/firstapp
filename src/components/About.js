import React,{useState} from 'react'

export default function About() {
    const [myStyle, setMyStyle] = useState({
        color:'white',
        backgroundColor:'black'
    })
    const [btnText,setBtnText] = useState("enable light mode")
    const toggleMode = ()=>{
        if(myStyle.color == 'white'){
          setMyStyle({
            color:'black',
            backgroundColor:'white',
            border:'2px solid black'
        })  
        setBtnText("enable dark mode")
        }
        else {
            setMyStyle({
                color:'white',
                backgroundColor:'black'
            })
            setBtnText("enable light mode")
        }
    }
  return (
    <div className='container my-5'>
        <h1 style={myStyle}>About Us</h1>
    <div className='container style="width: 100px; height: 200px'>
        <p style={myStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa harum quis sint, saepe placeat nam. Quisquam atque vitae ipsam praesentium labore. Enim obcaecati esse autem, inventore voluptate, porro voluptatibus, neque fuga in expedita aut magnam hic. Sint porro quae quibusdam eius maiores dolor, molestiae, sed ipsam libero, illum ullam? Modi at mollitia cum culpa laudantium voluptatibus quae possimus consectetur officiis ducimus. Reprehenderit blanditiis omnis consequatur quidem molestias excepturi?</p>
    </div>
    <div className="container my-lg-3">
        <button onClick={toggleMode} className='btn-primary rounded-2'>{btnText}</button>
    </div>
    </div>
  )
  }