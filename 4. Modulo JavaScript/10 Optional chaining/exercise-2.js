const order = {};

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

if (order && order.customer && order.customer.address && !order.customer.address.city) {
  console.log('City is required');
}

if (Object.keys(order).find() == 'costumer') {
  if (Object.keys(order.costumer).find() == 'address') {
    if (Object.keys(order.costumer.address).find() == 'city') {
      if (!order.customer.address.city) {
        console.log('City is required');
      }
    }
  }
}