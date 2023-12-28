import React from "react";

interface Props {
    displayCart: boolean
}

export default function Cart({displayCart}: Props){
    return(
        <div className={`w-[30%] h-[20svh] absolute top-[50px] right-0 ${displayCart ? 'block':'hidden'}`}>
            <div>
                <h3>{`You don't have anything in your cart yet!`}</h3>

                <div>
                    <span>Total*</span>
                    <span>£0.00</span>
                </div>

                <h6>Order can not exceed £100.00</h6>
            </div>
            
            <button>
                Checkout
            </button>
        </div>
    )
}