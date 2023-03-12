import postgres from 'postgres';

const sql = postgres({ host: '127.0.0.1' });

await sql`
  CREATE TABLE IF NOT EXISTS customers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE
  )
`;

await sql`
  INSERT INTO customers (name, email) VALUES
  ('Jane Doe', 'jane@example.com'),
  ('Jonas Smith', 'jonas@example.com')
`;

console.log(await sql`SELECT * FROM customers`);
