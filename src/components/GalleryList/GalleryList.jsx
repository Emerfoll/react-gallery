import GalleryItem from '../GalleryItem/GalleryItem'

function GalleryList({ galleryList, likeClick }) {
    return(
        <>
            {galleryList.map((item) => (
                <GalleryItem 
                item={item} 
                key={item.id} 
                likeClick={likeClick}/>
            ))}
        </>
    )
}

export default GalleryList;