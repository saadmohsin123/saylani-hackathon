import './singlepost.css'
import blog1Image from '../../img/blog1.jpg';
import { FaEdit } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';



export default function Singlepost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
        <img className="singlePostImg" src={blog1Image} alt="Blog1" />
        </div>
        <h1 className="singlePostTitle">Topic to be covered in min
            <div className="singlePostEdit">
            <FaEdit className="singlePostIcon" />
            <FaTrash className="singlePostIcon" />
            </div>
        </h1>
        <div className="singlePostInfo">
            <span className="singlePostAuthor">
                Author: <b>Saad</b>
            </span>
            <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. In nobis pariatur maiores ea quod, excepturi modi obcaecati atque esse, fuga laboriosam quidem cumque, ut dolorum. Nulla, vero architecto. Accusantium, modi?Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus accusamus mollitia maiores. Aperiam ipsa nam odit consequatur cumque fugit quos laboriosam natus? Placeat ullam facere quod doloremque voluptatum, sapiente explicabo!Lorem
        </p>
    </div>
  )
}
