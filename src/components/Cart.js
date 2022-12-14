import CartItem from "./CartItem";
import CartResult from "./CartResult";
function Cart() {
  return (
    <div>
        <section className="section">
            <div className="table-responsive">
                <table className="table product-table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Sản Phẩm</th>
                            <th>Giá</th>
                            <th>Số Lượng</th>
                            <th>Tổng Cộng</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <CartItem />
                    </tbody>
                </table>
            </div>
        </section>
    </div>
  );
}

export default Cart;
