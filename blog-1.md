## How Pick and Omit Utility Types Help Keep Code DRY in TypeScript

### Introduction

When working with TypeScript, developers often create large interfaces to define the structure of objects. However, not every part of an interface is needed everywhere in an application. Sometimes we only need a few properties, and sometimes we want to exclude certain properties.

If we repeatedly create similar interfaces manually, the code becomes repetitive and difficult to maintain. This is where TypeScript utility types like Pick and Omit become very useful.

These utility types help developers create smaller and specialized "slices" of a master interface without rewriting code. As a result, the code stays clean, reusable, and follows the DRY principle -- Don't Repeat Yourself.

### Understanding the DRY Principle

The DRY principle means developers should avoid writing the same code multiple times.

Duplicated code creates several problems:

- Harder maintenance
- Increased chance of errors
- More time required for updates
- Less readable code

Instead of repeating similar interfaces again and again, TypeScript allows us to reuse existing interfaces efficiently.

### The Problem Without Pick and Omit

Consider a master interface for a user:

```ts
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: string;
}
```

Now imagine we need:

- A public user profile
- A login form
- An admin view

Without utility types, we might create separate interfaces manually:

```ts
interface PublicUser {
  id: number;
  name: string;
  email: string;
}

interface LoginUser {
  email: string;
  password: string;
}
```

At first this looks fine, but in large projects this creates unnecessary duplication.

If the email field changes later, developers must update multiple interfaces manually.

### Using Pick to Create Specialized Slices

The Pick utility type allows us to select specific properties from an existing interface.

#### Syntax

`Pick<Type, Keys>`

#### Example

```ts
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: string;
}

type PublicUser = Pick<User, "id" | "name" | "email">;
```

Now PublicUser automatically contains only:

- id
- name
- email

This prevents rewriting the same fields manually.

### Using Omit to Exclude Properties

The Omit utility type works in the opposite way. Instead of selecting properties, it removes unwanted properties.

#### Syntax

`Omit<Type, Keys>`

#### Example

```ts
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: string;
}

type SafeUser = Omit<User, "password">;
```

Here, SafeUser contains every property except password.

This is very useful when sending user data to the frontend because sensitive information can easily be excluded.

### How Pick and Omit Keep Code DRY

Both Pick and Omit help maintain a single source of truth.

Instead of creating many similar interfaces:

- Developers define one master interface
- Smaller versions are generated automatically

This reduces duplication significantly.

For example:

```ts
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  stock: number;
}

type ProductPreview = Pick<Product, "id" | "title" | "price">;

type ProductWithoutStock = Omit<Product, "stock">;
```

If the Product interface changes later, all related types update automatically. This saves time and reduces bugs.

### Real Benefits in Large Applications

In real-world applications, utility types improve:

- Scalability
- Readability
- Maintainability

For example, in an e-commerce system:

- Customers should not see admin data
- APIs may require only partial information
- Forms may need limited fields

Instead of writing many duplicate interfaces, developers can create clean and reusable slices from one master interface.

This approach becomes especially important in large projects where hundreds of interfaces exist.

### Conclusion

TypeScript utility types like Pick and Omit are powerful tools for writing clean and maintainable code. They allow developers to create specialized slices of a master interface without repeating code manually.

By reducing duplication, these utility types help follow the DRY principle and make applications easier to manage.
