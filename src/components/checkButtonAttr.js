function checkButtonAttr(attr1, attr2, attr3) {
  const atribute1 = Number(attr1);
  const atribute2 = Number(attr2);
  const atribute3 = Number(attr3);

  const value = {
    min: 0,
    max: 90,
    sum: 210,
  };

  const sum = (atribute1 + atribute2 + atribute3) <= value.sum;

  const checkAtribute = ((atribute1 >= value.min) && (atribute1 <= value.max))
    && ((atribute2 >= value.min) && (atribute2 <= value.max))
    && ((atribute3 >= value.min) && (atribute3 <= value.max));

  return checkAtribute && sum;
}

export default checkButtonAttr;
