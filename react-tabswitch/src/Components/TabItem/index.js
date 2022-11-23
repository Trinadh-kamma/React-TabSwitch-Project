
import './index.css'

const TabItem = props => {
  const {tabDetails, onClickTab, isActive} = props
  const {tabId, displayText} = tabDetails
  
  const onUpdateTabProjects = () => {
    onClickTab(tabId)
  }

  const isActiveTab = isActive ? "active-tab-btn" : ""

  return (
    <li className="each-tab">
        <button className={`each-tab-name ${isActiveTab}`} onClick={onUpdateTabProjects}>{displayText} </button>
    </li>
  )
}

export default TabItem 