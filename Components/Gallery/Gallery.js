import React from 'react';
import Box from '../Gallery/Image'
function Gallery(){
    return(
        <>
      <div className='Gallery'>
<Box  src='/images/makeup.jpg' label='Make Up' alt='make up'/>
<Box  src='/images/massage1.jpg' alt='massage' label='Massage Therapy'/>
<Box  src='/images/dreads.jpg' alt='dreads' label='Dreadlocs Installing and Styling'/>
<Box  src='/images/nails.jpg' alt='gel & polish' label='Nail Art'/>
      </div>

<div className='Gallery'>
<Box  src='https://i.pinimg.com/236x/a8/f1/19/a8f1195df039827af94a9efbc4b84f73.jpg' alt='braiding' label='Braiding'/>
<Box  src='https://www.bellanaijaweddings.com/wp-content/uploads/2019/01/Abena-Reginald-BellaNaija-Weddings-292.jpg' alt='bridal make Up' label='Bridal Make Up'/>
<Box  src='https://i.pinimg.com/236x/fa/4e/2e/fa4e2ece1f56e34a1b76db1e848bc9ca.jpg' alt='haircut' label='Hair Cuts'/>
<Box  src='/images/haircut.jpg' alt='haircut' label='Hair Cuts'/>
</div>
<div className='Gallery'>
<Box  src='https://i.pinimg.com/564x/69/90/f9/6990f912ed9421684d6f5698153d1213.jpg' alt='waxing' label='Waxing'/>
<Box  src='https://i.pinimg.com/236x/09/ef/59/09ef591bc7274b41fceab1b91ca3be52.jpg' alt='tatoo' label='Tatoo and Hina Art'/>
<Box  src='https://i.pinimg.com/564x/78/67/d9/7867d9a333104dbf3d8b68b99f3deee3.jpg' alt='pics' label='Photography'/>
      </div>
    </>
    )
}
export  default Gallery;