import react, { useState, useEffect } from "react";

export default function HookPage(props) {
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    console.log("effect");
    document.title = `点击了${count}次`;
  }, [count]);

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  return (
    <div>
      <h3>HookPage</h3>
      <p>{count}</p>
      <button onClick={() => setCount(count+1)}>add</button>
      <p>{useClock().toLocaleTimeString()}</p>
    </div>
  )
}

//自定义hook，命名use开头
function useClock() {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  return date;
}