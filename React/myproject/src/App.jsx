
import React from 'react'
import Card from './component/Card'

const App = () => {
  return (
    // <div style={{display:'flex',flexwrap:'wrap',height:'100vh',width:'100vw'}}>app is working...
    //   <Card username="Ritesh Dubey" image="https://plus.unsplash.com/premium_photo-1739786995646-480d5cfd83dc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FydG9vbiUyMHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww"/>
    //   <Card username="Tanmay Garg" image="https://images.unsplash.com/photo-1740252117070-7aa2955b25f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FydG9vbiUyMHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww"/>
    //   <Card username="Rishav Raj" image="https://images.unsplash.com/photo-1772371272179-3ecc656fc677?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnRvb24lMjBwcm9maWxlJTIwcGljdHVyZXxlbnwwfHwwfHx8MA%3D%3D"/>

    // </div>

    <div>
      <h1>Book Shop</h1>
      <p>Welcome to the best book shop...</p>
      <div>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>

    </div>
  )
}

export default App