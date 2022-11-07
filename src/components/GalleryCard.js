
const Photo = ({image}) => {
  const {likes,user,description,urls} = image
  // const {medium} = profile_image
  const {small,regular} = urls
  const {name,profile_image,links} = user
  const {html} =links

  return (
    <article className="photo__container">
      <a href={regular}>
      <img className="photo-main" src={small} alt={description} />
      </a>
      <div className="author__info--hover">
        <div className="author__info">
          <h3 className="author__name">{name}</h3>
          <h3 className="photo__likes">{likes}</h3>
        </div>
        <div className="author__profile">
          <a  href={html} >
           <img src={profile_image.medium} alt={name} />
          </a>
        </div>
      </div>
    </article>
  )
}

export default Photo
