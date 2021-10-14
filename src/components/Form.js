import React, { Component } from 'react';
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
      // hasTrunfo,
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
            data-testid="name-input"
            id="cardName" type="text" name="cardName"
          />
        </label>
        <label htmlFor="cardDescription">
          Descrição
          <textarea
            value={ cardDescription }
            onChange={ onInputChange }
            data-testid="description-input"
            id="cardDescription" name="cardDescription"
          />
        </label>
        <label htmlFor="cardAttr1">
          Attr01
          <input
            value={ cardAttr1 }
            onChange={ onInputChange }
            data-testid="attr1-input"
            id="cardAttr1" type="number" name="cardAttr1"
          />
        </label>
        <label htmlFor="cardAttr2">
          Attr02
          <input
            value={ cardAttr2 }
            onChange={ onInputChange }
            data-testid="attr2-input"
            id="cardAttr2" type="number" name="cardAttr2"
          />
        </label>
        <label htmlFor="cardAttr3">
          Attr03
          <input
            value={ cardAttr3 }
            onChange={ onInputChange }
            data-testid="attr3-input"
            id="cardAttr3" type="number" name="cardAttr3"
          />
        </label>
        <label htmlFor="cardImage">
          Imagem
          <input
            value={ cardImage }
            onChange={ onInputChange }
            data-testid="image-input"
            id="cardImage" type="text" name="cardImage"
          />
        </label>
        <label htmlFor="cardRare">
          Raridade
          <select
            value={ cardRare }
            onChange={ onInputChange }
            data-testid="rare-input"
            id="cardRare" name="cardRare">
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="cardTrunfo">
          <input
            checked={ cardTrunfo }
            onChange={ onInputChange }
            data-testid="trunfo-input"
            id="cardTrunfo" type="checkbox" name="cardTrunfo"
          />
        </label>
        <button
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          data-testid="save-button"
          type="button"
          className="btnSave">
          Salvar
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
