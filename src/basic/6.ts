const mango = {
    name: 'Mango',
    age: 30,
    email: 'john@example.com',
    address: {
        city: 'New York',
        country: 'USA'
    }
};

const poly = {
    name: 'Mango',
    age: 30,
    email: 'john@example.com'
};

type User = {
    name:  string;
    age: number;
    email: string;
    address?: string [];
}

const users: User[] = [
    {  name: 'Mango', age: 30, email: 'john@example.com', },
    {  name: 'Mango', age: 30, email: 'john@example.com' }
  ];

  console.log(mango, poly, users)