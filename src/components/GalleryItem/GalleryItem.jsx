import { useState } from 'react';

function GalleryItem({ item }) {
    const [description, setDescription] = useState(false);

    return(
        <>
        {description ? (
            <p key={item.id} onClick={()=> setDescription(false)}>
                {item.description}
            </p>
        ) : (
            <img src={item.path} width={'250rem'} />
        )}
        
        </>


    )
}

export default GalleryItem;