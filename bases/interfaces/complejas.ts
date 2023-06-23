(() => {
  // * las interfaces se definen de forma descendente

  interface Client {
    name: string;
    age: number;
    address?: Address;
    getFullAdress: (id: string) => string;
  }

  interface Address {
    city: string;
    zipCode: string;
  }

  const client: Client = {
    age: 25,
    name: "Luis",
    address: {
      city: "Santo Domingo",
      zipCode: "108797",
    },
    getFullAdress: (id) => {
      return `this is my id ${id}`;
    },
  };

  // console.log(client.getFullAdress("123"));
})();
