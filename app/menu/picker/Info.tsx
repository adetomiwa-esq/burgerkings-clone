import React from 'react'
import { AiOutlineRight } from 'react-icons/ai'

export default function Info() {
  return (
    <div className='text-[11px] font-semibold leading-[18px] mb-12'>
        <div>
            <h1 className='text-lg font-bold mb-5'>Information</h1>
            <p className='mb-4'>This item contains <span className='font-black'>wheat, sesame, celery and gluten,</span> may contain <span className='font-black'>milk and eggs,</span> and may be cooked on same equipment as <span className='font-black'>soy.</span> Modifications are not represented in this list.</p>

            <h5 className='mb-4'>Adults need around 2000 kcal a day</h5>

            <ul className='list-disc pl-6 mb-7'>
                <li>
                    <span className='font-black text-[12px]'>{`"Contains"`}</span> means a planned ingredient which is definitely present.
                </li>
                <li>
                    <span className='font-black text-[12px]'>{`"May contain"`}</span>  means a supplier has reported to us a real risk of cross-contact on their production line.
                </li>
                <li>
                <span className='font-black text-[12px]'>{`"May contain via shared equipment"`}</span> means there is a potential cross-contact through shared cooking equipment in our kitchen (Fryers, flame grilling equipment - broiler and toaster)
                </li>
            </ul>
        </div>

        <div>
            <p>
                <span className='font-black text-[12px]'>Toaster:</span> All our buns are toasted in the same toaster. They all contain gluten, some contain sesame and some may contain milk and egg. If you are allergic to any of these ingredients you are advised not to choose any of our sandwich products with a bun.
            </p>

            <p>
                <span className='font-black text-[12px]'>Fryers:</span> We have separate fryer vats for different products but they share an oil filtration system which creates a risk of cross- contact when the oil passes through the filter.
            </p>

            <p>
                <span className='font-black text-[12px]'>Broiler:</span>This high temperature grilling device cooks all our beef patties and also our breakfast sausage patties. Bones: Although we take great care to remove bones from our meat, and poultry products, some small bones may still be present.
            </p>

            <p>
                <span className='font-black text-[12px]'>BURGER KING®:</span>is committed to reducing the risk of allergens present in our kitchens. Our priority is to ensure customers with food allergies and intolerances have accurate information to enable them to make safe choices from our menu.
            </p>

            <p>
                <span className='font-black text-[12px]'>BURGER KING®:</span>kitchens have strict controls in place to reduce the risk of cross-contact such as separate storage areas, utensils and cleaning equipment for products containing allergens. In common with other catering operations, our kitchens are fast-paced and open environments, hence we cannot guarantee that any product is entirely free from any allergen. Customers with food allergies and intolerances should be aware of this information.
            </p>
            <p>For allergen information for branded items such as dip pots, sachets, and bottled drinks, see printed packaging for details.</p>

            <div className="flex justify-between mx-3 my-5 text-lg">
                <p>Nutritional Information and Allergens</p>
                <i><AiOutlineRight /></i>
            </div>

            <button className='bg-[rgb(214,35,0)] text-white w-[93%] mx-auto py-2 rounded-[25px] block'>Select restaurant for pricing</button>

        </div>
    </div>
  )
}
