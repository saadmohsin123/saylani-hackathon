import './post.css'
import blog1Image from '../../img/blog1.jpg';

export default function Post() {
  return (
    <div className="post">
        <img className="postImg" src={blog1Image} alt="Blog1" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">Lorem ipsum dolor sit amet</span>
            <hr />
            <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Ut illum aliquam unde harum ipsa minus. Ipsam, blanditiis 
            incidunt. Ducimus tenetur explicabo ratione at et aut recusandae 
            ea non asperiores eius.
        </p>
    </div>
  )
}
