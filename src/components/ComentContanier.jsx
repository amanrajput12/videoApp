import React from 'react'

const ComentContanier = ({commentInfo}) => {
    console.log('comment container',commentInfo);
    
  
  return (
    
    <div className='m-5 p-2'>
        <h2 className='text-2xl font-bold'>Comment</h2>
        {commentInfo.map((data) =>
            <Comment comments={data.snippet} />
        )}
    </div>
  )
}
const Comment =({comments})=>{
    console.log('comments are',comments);
    const {topLevelComment}= comments
    const {snippet} =topLevelComment
    let commentTime =  new Date(snippet.publishedAt)
    const time = commentTime.toDateString()
     
    console.log('top',snippet);
    return(
    <div className='p-2 m-1 flex items-center'>
     <img className='rounded-full w-14 h-14' src={snippet.authorProfileImageUrl} alt="profile" />
     <div className='px-3 shadow-lg'>
        <h1>{snippet.authorDisplayName} {`${time}`} </h1>
        
        <h2 className=''>{snippet.textOriginal}</h2>
     </div>
    </div>
    )
}
export default ComentContanier