

//  rajputaman accoutn api key
const  GOOGLE_API_KEY ="AIzaSyAGixmYlMp0WOpqgDhohqso6nqc-zY9-fk"

 

export const YOUTUBE_VIDEO_API ='https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key='+GOOGLE_API_KEY

export const CHANNEL_ALLVIDEO =`https://www.googleapis.com/youtube/v3/search?maxResults=50&part=snippet&type=video&key=${GOOGLE_API_KEY}&channelId=`

export const CHANNEL_PLAYLIST =`https://corsproxy.io?https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&maxResults=50&key=${GOOGLE_API_KEY}&channelId=`

export const  PLAYLIST =`https://corsproxy.io?https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&key=${GOOGLE_API_KEY}&maxResults=50&playlistId=`

export const YOUTUBE_SEARCH_API ="https://corsproxy.io?https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="

export const YOUTUBE_COMMENTS_URL =`http://www.googleapis.com/youtube/v3/commentThreads?key=${GOOGLE_API_KEY}&textFormat=plainText&part=snippet&videoId=`

export const YOUTUBE_VIDEO_SEARCH =`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=${GOOGLE_API_KEY}&q=`