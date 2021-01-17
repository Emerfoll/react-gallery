import GalleryItem from '../GalleryItem/GalleryItem'

function GalleryList({ galleryList}) {
    return(
        <>
            {galleryList.map((item) => (
                <GalleryItem item={item} key={item.id} />
            ))}
        </>
    )
}

export default GalleryList;