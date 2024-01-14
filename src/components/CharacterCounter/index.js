import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'

class CharacterCounter extends Component {
  state = {wordList: [], currWord: ''}

  onAddWord = event => {
    event.preventDefault()
    const {wordList, currWord} = this.state
    if (currWord.length === 0) return
    const newWordObj = {
      id: uuidv4(),
      name: currWord,
    }
    const updatedWordList = [...wordList, newWordObj]
    this.setState({wordList: updatedWordList, currWord: ''})
  }

  onChangeText = event => {
    this.setState({currWord: event.target.value})
  }

  render() {
    const {wordList, currWord} = this.state
    return (
      <div className="bg-container">
        <div className="inner-container">
          <div className="inner-left-cont">
            <div className="inner-left-header-cont">
              <h1>Count the characters like a Boss...</h1>
            </div>
            {wordList.length === 0 ? (
              <div className="no-user-inputs-cont">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                  alt="no user inputs"
                />
              </div>
            ) : (
              <ul className="added-items-cont">
                {wordList.map(eachWordObj => (
                  <li key={eachWordObj.id}>
                    <p>{eachWordObj.name}</p> :{' '}
                    <span>{eachWordObj.name.length}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="inner-right-cont">
            <h1>Character Counter</h1>
            <form className="input-container" onSubmit={this.onAddWord}>
              <input
                type="text"
                value={currWord}
                onChange={this.onChangeText}
                placeholder="Enter the Characters here"
              />
              <button type="submit">Add</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default CharacterCounter
