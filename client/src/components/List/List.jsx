import React from 'react'
import CardProduct from '../Card/CardProduct';

const List = () => {

    const data = [
        {
          id: 1,
          img: "https://images.unsplash.com/photo-1671726203394-3fb856bdd8d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
          img2: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
          title: "Wood Chair",
          isNew: true,
          oldPrice: 90000,
          price: 85000,
        },
        {
          id: 2,
          img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
          title: "black glasess",
          isNew: true,
          oldPrice: 190000,
          price: 185000,
        },
        {
          id: 3,
          img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
          title: "Retro Camera",
          isNew: false,
          oldPrice: 150000,
          price: 100000,
        },
        {
          id: 4,
          img: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
          title: "Green Plant",
          isNew: false,
          oldPrice: 95000,
          price: 75000,
        },
      ];


  return (
    <div className='list flex gap-5 flex-wrap justify-between'>
        {data?.map(item=>(
            <CardProduct item={item} key={item.id} />
        ))}

    </div>
  )
}

export default List