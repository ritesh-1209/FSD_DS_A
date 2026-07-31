import React from 'react'

const Card = ({ username, image }) => {
  return (
    // <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100vh',width:'100vw'}}>
    //     <div style={{borderRadius: '25px',boxShadow:' rgba(0, 0, 0, 0.34) 0px 3px 10px',width:'340px',height:'400px',backgroundColor:'#FEF8DD',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>

    //     <div style={{display:'flex',justifyContent:'center'}}><h2 style={{color:'red'}}>ABES STUDENT CARD</h2></div>
    //     <div> 
    //       <img src={image} alt="profile picture" height="150px" width="150px"/>
    //       </div>
    //     <div style={{fontSize:'18px'}}>
    //         <ul>
    //         <li>B.Tech (DS-A)</li>
    //         <br />
    //         <li>Name: {username}</li>
    //         <br />
    //         <li>Year: 3rd</li>
    //         <br />
    //         </ul>
    //     </div>
    // </div>
    // </div>


    

    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#f4f6f9",
        minHeight: "100vh",
        padding: "30px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div>
        <h1 style={{ color: "#2c3e50", marginBottom: "10px" }}>Book Shop</h1>
      </div>

      <div style={{
        color: "#666",
        fontSize: "18px",
        marginBottom: "30px",
      }}
      >
        Welcome to the best book shop in the area
      </div>

      <div className="container">
        <div
          className="store"
          style={{
            display:'flex',
            flexWrap:'wrap',
            // width: "1100px",
            backgroundColor: "#fff",
            borderRadius: "12px",
            padding: "20px",
            boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
          }}
        >
          {/* <ul
            style={{
              listStyle: "none",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              flexWrap: "wrap",
              padding: "0",
              margin: "0",
              gap: "20px",
            }}
          > */}
            <div className='card'
              style={{
                textAlign: "center",
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "15px",
                width: "180px",
                backgroundColor: "#fafafa",
              }}
            >
              <img
                src="https://rukminim2.flixcart.com/image/480/640/xif0q/book/u/l/e/the-physics-book-original-imagx9p5ggzgm587.jpeg?q=90"
                alt="physicsBook"
                style={{ width: "120px", height: "150px", background: "#ddd" }}
              />
              <h2>Physics</h2>
              <h3 style={{ color: "green" }}>Price: ₹400</h3>
            </div>

            {/* <li
              style={{
                textAlign: "center",
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "15px",
                width: "180px",
                backgroundColor: "#fafafa",
              }}
            >
              <img
                src="https://ebookland.in/cdn/shop/files/cdf19b6e-a862-4c48-9019-0d92b4e40d3a.jpg?v=1747915444"
                alt="chemistryBook"
                style={{ width: "120px", height: "150px", background: "#ddd" }}
              />
              <h2>Chemistry</h2>
              <h3 style={{ color: "green" }}>Price: ₹400</h3>
            </li>

            <li
              style={{
                textAlign: "center",
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "15px",
                width: "180px",
                backgroundColor: "#fafafa",
              }}
            >
              <img
                src="https://m.media-amazon.com/images/I/813twGvRSkL._AC_UF1000,1000_QL80_.jpg"
                alt="mathsBook"
                style={{ width: "120px", height: "150px", background: "#ddd" }}
              />
              <h2>Mathematics</h2>
              <h3 style={{ color: "green" }}>Price: ₹400</h3>
            </li>

            <li
              style={{
                textAlign: "center",
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "15px",
                width: "180px",
                backgroundColor: "#fafafa",
              }}
            >
              <img
                src="https://cdn.apcbooks.co.in/wp-content/uploads/2022/05/Textbook-of-Computer-science-with-python-25_-new.jpg"
                alt="csBook"
                style={{ width: "120px", height: "150px", background: "#ddd" }}
              />
              <h2>Computer Science</h2>
              <h3 style={{ color: "green" }}>Price: ₹400</h3>
            </li>

            <li
              style={{
                textAlign: "center",
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "15px",
                width: "180px",
                backgroundColor: "#fafafa",
              }}
            >
              <img
                src="https://s3.ap-south-1.amazonaws.com/shizzy.in/iipstore/wp-content/uploads/2023/12/24180952/1414-front-cover-page-scaled.jpg"
                alt="logicBook"
                style={{ width: "120px", height: "150px", background: "#ddd" }}
              />
              <h2>Logic & Aptitude</h2>
              <h3 style={{ color: "green" }}>Price: ₹400</h3>
            </li>

            <li
              style={{
                textAlign: "center",
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "15px",
                width: "180px",
                backgroundColor: "#fafafa",
              }}
            >
              <img
                src="https://s3.ap-south-1.amazonaws.com/shizzy.in/iipstore/wp-content/uploads/2023/12/24180952/1414-front-cover-page-scaled.jpg"
                alt="logicBook"
                style={{ width: "120px", height: "150px", background: "#ddd" }}
              />
              <h2>Logic & Aptitude</h2>
              <h3 style={{ color: "green" }}>Price: ₹400</h3>
            </li>

            <li
              style={{
                textAlign: "center",
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "15px",
                width: "180px",
                backgroundColor: "#fafafa",
              }}
            >
              <img
                src="https://s3.ap-south-1.amazonaws.com/shizzy.in/iipstore/wp-content/uploads/2023/12/24180952/1414-front-cover-page-scaled.jpg"
                alt="logicBook"
                style={{ width: "120px", height: "150px", background: "#ddd" }}
              />
              <h2>Logic & Aptitude</h2>
              <h3 style={{ color: "green" }}>Price: ₹400</h3>
            </li>

            <li
              style={{
                textAlign: "center",
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "15px",
                width: "180px",
                backgroundColor: "#fafafa",
              }}
            >
              <img
                src="https://s3.ap-south-1.amazonaws.com/shizzy.in/iipstore/wp-content/uploads/2023/12/24180952/1414-front-cover-page-scaled.jpg"
                alt="logicBook"
                style={{ width: "120px", height: "150px", background: "#ddd" }}
              />
              <h2>Logic & Aptitude</h2>
              <h3 style={{ color: "green" }}>Price: ₹400</h3>
            </li>
          </ul> */}
        </div>
      </div>
    </div>
  )
}

export default Card