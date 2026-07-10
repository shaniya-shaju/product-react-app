import React, { useState } from 'react'
import Navigation from './Navigation'

const ProductView = () => {
          const[data,changeData] =useState(
            [
              {"name":"Matte Lipstick","avatar":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyz8SBpMjcKG-YpVdvBtpzr4FWWztax6f-IRCb2c0gyA&s","Price":"₹499"},
              {"name":"Smart Watch","avatar":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxuQJ-2Z7Bl4_FIIqkyb2xHdyt-g84LMpIcjFfDmQ3FA&s=10","Price":"₹1,299"},
              {"name":"Book","avatar":"https://unblast.com/wp-content/uploads/2025/07/Editorial-Book-Mockup-.jpg","Price":"₹50"},
              {"name":"Laptop Cover","avatar":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxlwX79L8WtCYvUexr2OgsKNx4YqJ5XJ1r07_4WVXzOA&s","Price":"₹999"},
              {"name":"Mouse","avatar":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzZU6Hsws-OxUloDw5tiqzuz2kVLlcejABp6uL210Abg&s=10","Price":"₹1,899"},
              {"name":"Keyboard","avatar":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLMXxmQZAbmTdnhv1fwXBL0Di7whojeNmktakJf2KkJw&s=10","Price":"₹1,599"},
              {"name":"Perfume","avatar":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_izNixmgPhPHRSOKKobs0uMZ0Zycrv7nezVfsT1f__A&s","Price":"₹899"},
              {"name":"Earpod","avatar":"https://www.boat-lifestyle.com/cdn/shop/files/ACCG6DS7WDJHGWSH_0.png?v=1727669669","Price":"₹2,299"},
              {"name":"Mobile Cover","avatar":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWT20Ifq4VykmftUF-ySxTL8iZeoyac_EaiY_0l8TbYw&s","Price":"₹299"},
              {"name":"Bluetooth speaker","avatar":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGfA9M99SeC3dnOhzsLnr-uVIXKgrOQARkWJhbwpZeWw&s=10","Price":"₹1,299"},
              {"name":"Running Shoes","avatar":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWHxxUkoUgvCSrwp4BSU_INMd6WW_SUezZqxuj2CFyVw&s=10","Price":"₹3,299"},
            ]
          )
  return (
    <div>
      <Navigation />

      <div className="container mt-4">
        <div className="row g-4">

          {data.map(
            (value,index) =>{
              return (
                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
            <div className="card h-100">
              <img
                src={value.avatar}
                className="card-img-top"
                alt="Matte Lipstick"
                height="300"
              />
              <div className="card-body">
                <h5 className="card-title">{value.name}</h5>
                <p className="card-text">
                  <strong>{value.Price}</strong>
                </p>
                <button className="btn btn-primary">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
              )
            }
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductView