const order = {};

// Codice da semplificare
// if (order && order.customer && order.customer.address && !order.customer.address.city) {
//   console.log('City is required');
// }

/*
const order = {
  customer: {
    adress: {
      city: ???
      ...
    }
    ...
  }
  ...
}
*/

// Controllo su order per assicurarsi che sia dichiarato, inizializzato, diverso da null/undefined
if (typeof order !== 'undefined' && order !== null) {

  // Controllo sull'esistenza di un valore per la chiave city (e del percorso precedente)
  if (order?.customer?.address?.city == undefined) {
    console.log('City is required');
  } else {
    console.log('City is defined');
  }

} else {
  console.log('order not declared/inizialized or equals to null/undefined or just declared');
}

