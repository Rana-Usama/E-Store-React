import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
 return (
  <div className='cards'>
    
   <h1>Check out These Epic Products!</h1>
   
   <div className='cards__container'>
    <div  className='cards__wrapper'>
     <ul className='cards__items'> 
     
      <CardItem
       src="https://i.picsum.photos/id/357/3888/2592.jpg?hmac=322FsZ93_k9v7NNFeCTlqk_gobPP_1mYJIQwk7GxjMc"
       text='Imported'
       label='Table Watch'
       path='/services'
      >
      </CardItem>

      <CardItem
       src="https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMGRlY29yfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
       text='Few Left'
       label='Wall Decor'
       path='/services'
      >
      </CardItem>

      <CardItem
       src="https://images.unsplash.com/photo-1590373717962-014ba271c061?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80"
       text='Limited Stock'
       label='Speakers'
       path='/services'
      >
      </CardItem>

      {/* <CardItem
       src="https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMGRlY29yfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
       text='Few Left'
       label='Wall Decor'
       path='/services'
      >
      </CardItem> */}


     </ul>
     <ul className='cards__items'> 
       <CardItem
       src="https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMGRlY29yfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
       text='Few Left'
       label='Wall Decor'
       path='/services'
      >
      </CardItem>

      <CardItem
       src="https://i.picsum.photos/id/119/3264/2176.jpg?hmac=PYRYBOGQhlUm6wS94EkpN8dTIC7-2GniC3pqOt6CpNU"
       text='Limited Time Offer'
       label='Acessories'
       path='/services'
      >
      </CardItem>
      <CardItem
       src="https://images.unsplash.com/photo-1510850441099-643bc6053741?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
       text='Buy Now With Special Discounts'
       label='LED'
       path='/services'
      >
      </CardItem>

      <CardItem
       src="https://images.unsplash.com/photo-1603351154351-5e2d0600bb77?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
       text='Limited Time Offer'
       label='Airpods'
       path='/services'
      >
      </CardItem>
     </ul>
    </div>
   </div>
  </div>

 )
}

export default Cards
