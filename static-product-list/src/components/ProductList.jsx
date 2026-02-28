function ProductList() {
    const products = [
      {
        id: 1,
        name: "Laptop",
        description: "High-performance laptop for professionals.",
        price: 1200,
      },
      {
        id: 2,
        name: "Smartphone",
        description: "Latest model with advanced features.",
        price: 800,
      },
      {
        id: 3,
        name: "Headphones",
        description: "Noise-cancelling over-ear headphones.",
        price: 250,
      },
    ];
  
    return (
      <div>
        <h2>Product List</h2>
  
        {products.map((product) => (
          <div key={product.id} style={{ marginBottom: "1rem" }}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p><strong>${product.price}</strong></p>
          </div>
        ))}
      </div>
    );
  }
  
  export default ProductList;