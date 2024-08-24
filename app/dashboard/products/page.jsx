import styles from "../../ui/dashboard/products/products.module.css";
import Search from "../../ui/dashboard/search/search.jsx";
import Link from "next/link";
import Image from "next/image";
import Pagination from "../../ui/dashboard/pagination/pagination.jsx";

const Products = () => {
  return (
    <div className={styles.container}>
    <div className={styles.top}>
        <Search placeholder={"Search for Product..."} />
        <Link href="/dashboard/products/add">
            <button className={styles.addButton}>Add New</button>
        </Link>
    </div>
    <table className={styles.table}>
        <thead>
            <tr>
                <td>Title</td>
                <td>Description</td>
                <td>Price</td>
                <td>Created At</td>
                <td>Stock</td>
                <td>Action</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <div className={styles.product}>
                        <Image
                            src="/noproduct.jpg"
                            alt="product"
                            width={40}
                            height={40}
                            className={styles.productImage}
                        />
                        <span>Iphone</span>
                    </div>
                </td>
                <td>Description</td>
                <td>$999</td>
                <td>13.Aug.2024</td>
                <td>34</td>
                <td>
                  <div className={styles.buttons}>

                  <Link href="/dashboard/products/test">
                  <button className={`${styles.button} ${styles.view}`}>View</button>
                  </Link>
                  <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                  </div>
                </td>
            </tr>
        </tbody>
    </table>
    <Pagination/>
</div>
  )
}

export default Products
