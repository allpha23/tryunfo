import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import checkButtonAttr from './components/checkButtonAttr';
import checkButtonValue from './components/checkButtonValue';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.test = this.test.bind(this);
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({ [name]: value }, () => this.test());
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
      <div>
        <h1>Tryunfo</h1>
        <Form { ...this.state } onInputChange={ this.onInputChange } />
        <Card { ...this.state } />
      </div>
    );
  }
}

export default App;
