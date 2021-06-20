import React, { useState } from 'react'
import { images } from './Images'
import style from './DisplayImages.module.css'
import ReactPaginate from 'react-paginate'
import Details from './Details'

function DisplayImages() {
  
    const [noOfImages,setNoOfImages]=useState(images)
    const [pageNumber,setPageNumber]=useState(0)

  

    const imagePerPage=3
    const pagesVisited=pageNumber*imagePerPage
    const pageCount=Math.ceil(images.length/imagePerPage)
    const displayImages=noOfImages.
    slice(pagesVisited,pagesVisited+imagePerPage)
    .map((image)=>{
        return(
            <div className={style.body}>
            <img src={image.imageUrl} className={style.img}></img>
            <h2 className={style.h2} >{image.ownerName}</h2>
            </div>
    )
    })
    const changePage=({selected})=>{
        setPageNumber(selected)
    }
    
    


    return (
        <div>
        <div className={style.div} >
           {
               displayImages
           }
          
        </div>
        <ReactPaginate
           previousLabel={"Previous"}
           nextLabel={"Next"}
           pageCount={pageCount}
           onPageChange={changePage}
           containerClassName={style.ImageButton}
           previousLinkClassName={style.previousButton}
           nextLinkClassName={style.nextButton}
           disabledClassName={style.paginationDisabled}
           activeClassName={style.paginationActive}

           />
        </div>
    )
}

export default DisplayImages
