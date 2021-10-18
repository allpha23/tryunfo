import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import checkButtonAttr from './components/checkButtonAttr';
import checkButtonValue from './components/checkButtonValue';
import emptyStates from './components/emptyStates';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      ...emptyStates(),
      hasTrunfo: false,
      cardDeck: [],
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.test = this.test.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({ [name]: value }, () => this.test());
  }

  onSaveButtonClick(e) {
    e.preventDefault();
    const { cardDeck, cardTrunfo } = this.state;
    cardDeck.push({ ...this.state });
    if (cardTrunfo === true) this.setState({ ...emptyStates(), hasTrunfo: true });
    else this.setState({ ...emptyStates(), hasTrunfo: false });
  }

  test() {
    const {
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardName,
      cardDescription,
      cardImage,
      cardRare,
    } = this.state;

    const checkValue = checkButtonValue([cardName, cardDescription, cardImage, cardRare]);
    const checkAttr = checkButtonAttr(cardAttr1, cardAttr2, cardAttr3);

    if (checkValue && checkAttr) this.setState({ isSaveButtonDisabled: false });
    else this.setState({ isSaveButtonDisabled: true });
  }

  render() {
    return (
      <div className="cardCreate">
        <Form
          { ...this.state }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <div className="cardApp">
          <header>
            <h1>Pré-visualização</h1>
          </header>
          <div className="cardBody">
            <Card { ...this.state } />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
