export const compareValues = (key: string, asc: boolean) => {
  return (a, b) => {
    if(!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      // property doesn't exist on either object
      return 0;
    }
    let varA = (typeof a[key] === 'string') ? a[key].toUpperCase() : a[key];
    let varB = (typeof b[key] === 'string') ? b[key].toUpperCase() : b[key];

    let comparison = 0;

    if (varA > varB) {
      comparison = 1;
    }
    else if (varA < varB) {
      comparison = -1;
    }
    return (
      asc ? comparison : (comparison * -1)
    );
  };
}

export const detectSignum = (value: number) => {
  return (value)? ((value < 0)? 'negative' : 'positive' ) : 'zero'
}