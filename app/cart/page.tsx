interface ICartItem {
  cartlist: string[];
}

export default function Cart() {
  const cartlist = ["Tomatoes", "Pasta"];

  return (
    <div>
      <h4 className="title">Cart</h4>
      <CartItem cartlist={cartlist} />
      <CartItem cartlist={cartlist} />
    </div>
  );
}

function CartItem({ cartlist }: ICartItem) {
  return (
    <div className="cart-item">
      <p>{cartlist}</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
}
