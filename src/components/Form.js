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
        <label htmlFor="name">
          Nome
          <input
          value={ cardName }
          onChange={ onInputChange }
          id="name" data-testid="name-input" type="text" nome="name"
          />
        </label>
        <label htmlFor="description">
          Descrição
          <textarea
            value={ cardDescription }
            onChange={ onInputChange }
            id="description" data-testid="description-input" name="description"
          />
        </label>
        <label htmlFor="attr1">
          Attr01
          <input
            value={ cardAttr1 }
            onChange={ onInputChange }
            id="attr1" data-testid="attr1-input" type="number" name="attr1"
          />
        </label>
        <label htmlFor="attr2">
          Attr02
          <input
            value={ cardAttr2 }
            onChange={ onInputChange }
            id="attr2" data-testid="attr2-input" type="number" name="attr2"
          />
        </label>
        <label htmlFor="attr3">
          Attr03
          <input
            value={ cardAttr3 }
            onChange={ onInputChange }
            id="attr3" data-testid="attr3-input" type="number" name="attr3"
          />
        </label>
        <label htmlFor="image">
          Imagem
          <input
            value={ cardImage }
            onChange={ onInputChange }
            id="image" data-testid="image-input" type="text" name="image"
          />
        </label>
        <label htmlFor="rare">
          Raridade
          <select
            value={ cardRare }
            onChange={ onInputChange }
            id="rare" data-testid="rare-input" name="rare">
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo">
          <input
            checked={ cardTrunfo }
            onChange={ onInputChange }
            id="trunfo" data-testid="trunfo-input" type="checkbox" name="trunfo"
          />
        </label>
        <button
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick}
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