import React, { Component } from "react";
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form className="form">
        <label htmlFor="cardName">
          Nome
          <input
          value={ cardName }
          onChange={ onInputChange }
          id="cardName" data-testid="name-input" type="text" name="cardName"
          />
        </label>
        <label htmlFor="cardDescription">
          Descrição
          <textarea
            value={ cardDescription }
            onChange={ onInputChange }
            id="cardDescription" data-testid="description-input" name="cardDescription"
          />
        </label>
        <label htmlFor="cardAttr1">
          Attr01
          <input
            value={ cardAttr1 }
            onChange={ onInputChange }
            id="cardAttr1" data-testid="attr1-input" type="number" name="cardAttr1"
          />
        </label>
        <label htmlFor="cardAttr2">
          Attr02
          <input
            value={ cardAttr2 }
            onChange={ onInputChange }
            id="cardAttr2" data-testid="attr2-input" type="number" name="cardAttr2"
          />
        </label>
        <label htmlFor="cardAttr3">
          Attr03
          <input
            value={ cardAttr3 }
            onChange={ onInputChange }
            id="cardAttr3" data-testid="attr3-input" type="number" name="cardAttr3"
          />
        </label>
        <label htmlFor="cardImage">
          Imagem
          <input
            value={ cardImage }
            onChange={ onInputChange }
            id="cardImage" data-testid="image-input" type="text" name="cardImage"
          />
        </label>
        <label htmlFor="cardRare">
          Raridade
          <select
            value={ cardRare }
            onChange={ onInputChange }
            id="cardRare" data-testid="rare-input" name="cardRare">
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="cardTrunfo">
          <input
            checked={ cardTrunfo }
            onChange={ onInputChange }
            id="cardTrunfo" data-testid="trunfo-input" type="checkbox" name="cardTrunfo"
          />
        </label>
        <button
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          className="btnSave" data-testid="save-button">Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;