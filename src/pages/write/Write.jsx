import './write.css'
import { FaPlus } from 'react-icons/fa';


export default function Write() {
  return (
    <div className="write">
        <form className='writeForm'>
            <div className="writeFromGroup">
                <label htmlFor="fileInput">
                <FaPlus className="writeIcon" />
                </label>
                <input type="file" id="fileInput" style={{display:"none"}} />
                <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
            </div>
            <div className="writeFromGroup">
                <textarea cols="30" rows="10" placeholder="Tell your story..." type="text" className="writeInput writeText"></textarea>
            </div>
            <button className="writeSubmit">Publish</button>
        </form>
    </div>
  )
}
