
class ProductList extends React.Component {
  render() {
    return (
      <div className='ui unstackable items'>
        <Product />
      </div>
    );
  }
}

class Product extends React.Component {
  render() {
    return (
      <div className='item'>
        <div className='image'>
          <img src='images/products/image-aqua.png' />
        </div>
        <div className='middle aligned content'>
        <div className='description'>
          <a>Ethereum Shirt</a>
          <p>Classic logo, delivered n just two weeks. </p>
        </div>
        <div className'extra'>
          <span>Ethereum gear:</span>
          <img
            className='ui avatar image'
            src='images/avatars/daniel.jpg'
          />
          </div>
        </div>
      </div>
    );
  }
}

ReactDom.render(
  <ProductList />,
  document.getElementById('content')
);
