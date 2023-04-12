// Write your JS code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class BlogItemDetails extends Component {
  state = {blogItem: {}, isLoading: true}

  componentDidMount() {
    this.getBlogItem()
  }

  getBlogItem = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()

    const updatedData = {
      id: data.id,
      title: data.title,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      author: data.author,
      content: data.content,
      topic: data.topic,
    }

    this.setState({blogItem: updatedData, isLoading: false})
  }

  renderBlogItemDetail = () => {
    const {blogItem} = this.state
    const {id, title, imageUrl, avatarUrl, author, content, topic} = blogItem
    return (
      <div className="blogItemDetail">
        <h1 className="title">{title}</h1>

        <div className="avatarDetailContainer">
          <img src={avatarUrl} alt={`avatar${id}`} className="avatar" />
          <p className="authorName">{author}</p>
        </div>

        <div>
          <img src={imageUrl} alt={title} className="image" />
          <p className="content">{content}</p>
        </div>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          this.renderBlogItemDetail()
        )}
      </div>
    )
  }
}

export default BlogItemDetails
