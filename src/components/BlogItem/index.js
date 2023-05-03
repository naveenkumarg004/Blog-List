import './index.css'

const BlogItem = props => {
  const {eachList} = props
  const {title, description, publishedDate} = eachList
  return (
    <li className="li-cont">
      <div className="top--li-div">
        <h1 className="post-head">{title}</h1>
        <p className="post-date">{publishedDate}</p>
      </div>
      <p className="post-para">{description}</p>
      <hr className="hr" />
    </li>
  )
}

export default BlogItem
