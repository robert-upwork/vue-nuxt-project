export default function(cambio) {
  let data = {};
  data = {
    exchange_type: {
      ask: (cambio.exchange_type ? (cambio.exchange_type.ask ? cambio.exchange_type.ask : "3.4567") : "3.4567"),
      bid: (cambio.exchange_type ? (cambio.exchange_type.bid ? cambio.exchange_type.bid : "3.4567") : "3.4567"),
      // ask: cambio.exchange_type.ask ? cambio.exchange_type.ask : "3.4567",
      // bid: cambio.exchange_type.bid ? cambio.exchange_type.bid : "3.4567"
    },
    name: cambio.name ? cambio.name : "-"
  };

  return data;
}
