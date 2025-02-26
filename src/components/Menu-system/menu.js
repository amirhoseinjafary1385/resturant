import React, { useState } from "react";
import Search from "../Searching/Search";

{/* <RecipeList recipes={filteredRecipes} onSelectRecipe={handleRecipeSelect} /> */}
const Menu = ({addToCart}) => {
    const [message, setMessage] = useState("");//وضعیت برای پیام معرفی

    const dishes = [
        //recepie-dishes
        { id: 1, name: 'پیتزا مارگاریتا', price: 150000 },
        { id: 2, name: 'پاستا آلفردو', price: 140000 },
        { id: 3, name:  'پاستا کاپلینی', price: 240000 },
        { id: 4, name: 'کباب کوبیده', price: 135000 },
        { id: 5, name:  'کوبیده مرغ جوجه کباب', price: 100000 },
        { id: 6, name:  'کوکو گوشت  ', price: 200000 },
        { id: 7, name:  'پیتزا ایتالیایی', price: 194000},
        //Increase Info
        
    ];
    
    const handleAddToCart = (dish) => {
        addToCart(dish);
        setMessage(`${dish.name} با موفقیت به سبد خرید شما اضافه شد!`); // تنظیم پیام با backticks
        setTimeout(() => setMessage(""), 3000); // پاک کردن پیام بعد از 3 ثانیه
    };

    return(
        <div className="menu">
            <h2>منو غذا</h2>
            {dishes.map(dish =>(
                <div key={dish.id} className="menu-item">
                    <h3>{dish.name}</h3>
                    <p>قیمت: {dish.price} تومان</p>  
                    function addToCart(params) {
                        
                    }                  
                    <button onClick={() => addToCart(dish)}>اضافه کردن به سبد خرید شما...</button>
                </div>               
            ))}
            {message && <div className="success-message">{message}</div>} {/* نمایش پیام */}
        </div>
    );
};

export default Menu;
