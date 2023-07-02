import Post from "./Post";

const postsList = [
  { 
    profileImg: "/assets/img/meowed.svg", profile: "meowed", 
    img:"/assets/img/gato-telefone.svg", imgTxt: "gato-telefone", 
    liked: "respondeai", likedImg:"/assets/img/respondeai.svg", likes: 101523
  },
  { 
    profileImg: "/assets/img/barked.svg", profile: "barked",
    img:"/assets/img/dog.svg", imgTxt: "dog", 
    liked: "memeriagourmet", likedImg:"/assets/img/memeriagourmet.svg", likes: 99159
  },
  { 
    profileImg: "/assets/img/adorable_animals.svg", profile: "adorable_animals",
    img:"/assets/img/iguana.jpeg", imgTxt: "iguana", 
    liked: "filomoderna", 
    likedImg:"/assets/img/filomoderna.svg", likes: 88591
  },
]

export default function Posts() {
    return (
        <div class="posts">
          {
             postsList.map( posts => 
                <Post key={posts.profile} profileImg={posts.profileImg} profile={posts.profile}
                img={posts.img} imgTxt={posts.imgTxt}
                liked={posts.liked} likedImg={posts.likedImg} likes={posts.likes}
                />
             )
      
          }
          
        </div>
    );
}