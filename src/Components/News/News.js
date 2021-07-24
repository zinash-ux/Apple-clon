// import React, {useEffect, useState } from 'react';


// function News() {
//     const [newsItems, getNewsItems]= useState([]);
//     useEffect(()=>{
//         fetch("https://newsapi.org/v2/everything?q=Apple&from=2021-04-15&sortBy=publishedAt&apiKey=44a80998aa484ba7ad7477e960a779ea")
  
       
//         .then((response)=>response.json())
//         .then((data)=>{
//            let articles=data.articles;
//              articles=articles.slice(0, 6);
//                         getNewsItems(articles);
                        
             
//             });
//     },[]);
   

   
//         return (
//           <div className="allVideosWrapper">
//             <div className="container">
//               <div className="row h-100 align-items-center justify-content-center text-center">
//                 <div className="col-12">
//                   <div className="title-wraper bold video-title-wrapper">
//                     Latest News
//                   </div>
//                 </div>
//                 {newsItems.map((singlenews) => {
//                   let url = singlenews.url;
//                 //   let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
//                   let newsWrapper = (
//                     <div key={url} className="col-sm-12 col-md-4">
//                       <div className="singlenewsWrapper">
//                         <div className="videoThumbnail">
//                           <a href={url} target="_blank">
//                             <img src={singlenews.urlToImage} />
//                           </a>
//                         </div>
//                         <div className="videoInfoWrapper">
//                           <div className="newsTitle">
//                             <a href={url} target="_blank">
//                               {singlenews.title}
//                             </a>
//                           </div>
//                           <div className="newsDesc">
//                             {singlenews.description}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   );
//                   return newsWrapper;
//                 })}
    
//      {/* useState(newsWrapper);  */}
//               </div>
//             </div>
//           </div>
//         );
//       }
    
    

// export default News;
