import React from 'react'
import Images from '../Images.js'
import styles from './Display.module.css'

// Use React Memo to stop re-render of component if nothing changes in props
const Display = React.memo(({modal, setModal, setIndex}) => {
    const handleClick = (id) => {
        setIndex(id)
        setModal(!modal)
        // setCartItems(
        //     ...CartItems,
        //     ModalData[index].name
        // )
    }
    return (
        <>
        <div className={styles.images__flex}>
           {Images.map((image) => {
               return (
                // conditional styling - we check two things  1) the div that has 'bhaji' as the dishName value in the array (Images.map((image)) and 2) window.innerWidth is less than 600 
                <div key={image.id} className={styles.holder} id={image.dishName} style={image.dishName === 'bhaji' && window.innerWidth < 600 ? {flexBasis: '100%', maxWidth: '100%'} : null} onClick={()=>handleClick(image.id)}>
                    <h3 className={styles.dish__name}>{image.dishName}</h3>
                    <img src={image.image} alt="takeaway dish"/>
                </div>
               )
           })}
        </div>
        {/* image overlay */}
        <div className={styles.images__overlay + ' ' + (modal ? ' ' : styles.hide)}></div>
        </>
    )
});

export default Display;