
import './index.css'

const ProjectsList = props => {
  const {eachProjectDetails} = props
  const {imageURL, title, description} = eachProjectDetails
  return (
    <li className="each-project">
      <img alt="img" src={imageURL} className="image"/>
      <h1 className="project-title">{title}</h1>
      <p className="main-project-description">{description}</p>
    </li>
  )
}

export default ProjectsList