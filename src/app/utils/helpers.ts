export const compareValues = (key: string, asc: boolean = true) => {
  return (a, b) => {
    if(!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      // property doesn't exist on either object
      return 0;
    }
    let varA = (typeof a[key] === 'string') ? a[key].toUpperCase() : a[key];
    let varB = (typeof b[key] === 'string') ? b[key].toUpperCase() : b[key];

    if(key === 'id'){ // exception for IDs - always convert to integer
      varA = parseInt(a[key]);
      varB = parseInt(b[key]);
    }

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
