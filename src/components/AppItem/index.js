import {Component} from 'react'

import './index.css'

class AppItem extends Component {
  state = {isClicked: false, enter: ''}

  one = event => {
    this.setState({enter: event.target.value})
  }

  start = () => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  render() {
    const {isClicked, enter} = this.state
    return (
      <div className="main-container">
        <div className="container">
          <h1 className="header">Editable Text Input</h1>
          <div className="input-container">
            {isClicked === true ? (
              <div className="desc-container">
                <p className="desc">{enter}</p>
                <button type="button" className="button" onClick={this.start}>
                  Edit
                </button>
              </div>
            ) : (
              <>
                <input
                  type="text"
                  className="input"
                  value={enter}
                  onChange={this.one}
                />
                <button type="button" className="button" onClick={this.start}>
                  Save
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    )
  }
}
export default AppItem
