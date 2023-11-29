function HomeDetails({ products }) {
  // console.log(products);
  const productElements = products.products.map((product) => (
    <div
      className="boxProduct"
      key={product.id}
      onClick={() => {
        products.setView(!products.view), products.setItem(product);
      }}
    >
      <img src={product.img} alt="" />
      <p className="product description">{product.title}</p>
      <p className="product reference">Ref: {product.reference}</p>
      <p className="product price">{product.price}DT</p>
    </div>
  ));

  return <div className="product-list">{productElements}</div>;
}

export default HomeDetails;
