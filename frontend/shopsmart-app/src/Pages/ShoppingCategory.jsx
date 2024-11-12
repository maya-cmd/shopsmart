import React from 'react'
import './CSS/ShoppingCategory.css'
import { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Items from '../Components/Items/Items'

const ShoppingCategory = (props) => {
    const{all_product} = useContext(ShopContext);

    console.log("Category passed via props:", props.category);
    console.log("Categories in all_product:", all_product.map(item => item.category));

  return (
    <div className='shopping-category'>
        <img className='shopcategory-banner'src={props.banner} alt="" />
        <div className='shoppingcategory-indexsort'>
            <p>
                <span>showing 1-12</span> out of 36 products
            </p>

            <div className='shoppingcategory-sort'>
                sort by <img src={dropdown_icon} alt="" />

            </div>

        </div>
        <div className='shoppingcategory-products'>
            {all_product.map((item, i)=>{
                if (item.category === props.category){
                    return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                
                }

                else{
                    return null;
                }
                
            })}

        </div>
    </div>
  )
}

export default ShoppingCategory