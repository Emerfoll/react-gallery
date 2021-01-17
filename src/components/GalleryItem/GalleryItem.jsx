import { useState } from 'react';

function GalleryItem({ item, likeClick }) {
    const [description, setDescription] = useState(false);

    return(
        <>
        {description ? (
            <p key={item.id} onClick={()=> setDescription(false)}>
                {item.description}
            </p>
        ) : (
            <img src={item.path} onClick={()=> setDescription(true)} width={'250rem'} />
        )}
            <>
            
            <button id={item.id} onClick={likeClick}>Like</button>
            <p>{item.likes}</p>
            </>
        </>


    )
}

export default GalleryItem;