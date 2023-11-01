import {useState, useEffect} from "react"

const Button = () => {
  const [num, setNum] = useState(0)

  useEffect(() => {
    console.log("1")
  }, [])
  return (
    <div>
      <p>{num}</p> 
      <button onClick={() => setNum(prev => prev + 1)}>Button</button>
    </div>
  )
}

export default Button