// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {eachBlogItem} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = eachBlogItem

  return (
    <Link to={`/blogs/${id}`} className="blog-item-link">
      <div className="blogItemContainer">
        <div className="blogItem">
          <div>
            <img src={imageUrl} alt={`item${id}`} className="blogItemImage" />
          </div>

          <div>
            <h1 className="blogItemTopic">{topic}</h1>

            <h1 className="blogItemTitle">{title}</h1>
            <div className="blogItemAvatarDetails">
              <div>
                <img
                  src={avatarUrl}
                  alt={`avatar${id}`}
                  className="avatarImage"
                />
              </div>
              <p className="author">{author}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
