import React, { useState } from 'react'

const itemsArr = [];

let itemObject = {
  id : 1,
  name : "Item 1",
  img : "https://images.unsplash.com/photo-1743701168213-89acf87d972c?q=80&w=1124&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  description : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta beatae quia cumque et voluptas id eos ea nobis sapiente modi, alias dolorem? Iste nesciunt laborum, vero fuga soluta exercitationem quidem.",
}

let itemObject2 = {
  id : 2,
  name : "Item 2",
  img : "https://images.unsplash.com/photo-1749741322727-3c51c6b41903?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  description : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta beatae quia cumque et voluptas id eos ea nobis sapiente modi, alias dolorem? Iste nesciunt laborum, vero fuga soluta exercitationem quidem.",
}

let itemObject3 = {
  id : 3,
  name : "Item 3",
  img : "https://images.unsplash.com/photo-1745933115134-9cd90e3efcc7?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  description : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta beatae quia cumque et voluptas id eos ea nobis sapiente modi, alias dolorem? Iste nesciunt laborum, vero fuga soluta exercitationem quidem.",
}

let itemObject4 = {
  id : 4,
  name : "Item 4",
  img : "https://images.unsplash.com/photo-1748281123907-f3057527570b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  description : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta beatae quia cumque et voluptas id eos ea nobis sapiente modi, alias dolorem? Iste nesciunt laborum, vero fuga soluta exercitationem quidem.",
}

itemsArr.push(itemObject);
itemsArr.push(itemObject2);
itemsArr.push(itemObject3);
itemsArr.push(itemObject4);

// const arrItems = itemsArr.map(item => 
//   <div className="col-sm-6 mb-3 mb-sm-0">
//     <div className="card">
//       <img src={item.img} className="card-img-top" alt="..."></img>
//       <div className="card-body">
//         <h5 className="card-title">{item.name}</h5>
//         <p className="card-text">{item.description}</p>
//         <a href="/" className="btn btn-primary">Go somewhere</a>
//       </div>
//     </div>
//   </div>
// );

function DisplayItem(){
  const [count, setCount] = useState(1);
  let item_data = itemsArr.find(item => item.id === count);
  function handleNextClick(){
    if(count < 4)
    {
      setCount(count + 1);
    }
  }

  function handlePreviousClick(){
    if(count > 1){
      setCount(count - 1)
    }
  }

  return (
    <>
      <div className="col-sm-6 mb-3 mb-sm-0">
        <div className="card">
          <img src={item_data.img} className="card-img-top" alt="..."></img>
          <div className="card-body">
            <h5 className="card-title">{item_data.name}</h5>
            <p className="card-text">{item_data.description}</p>
            <a href="/" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      <br/>
       <button onClick={handlePreviousClick}>
        Previous
      </button>
      &nbsp;&nbsp;&nbsp;
      <button onClick={handleNextClick}>
        Next
      </button>
    </>
  );
}

function Body() {
  return (
    <>
      <DisplayItem />
    </>
  )
}

export default Body;