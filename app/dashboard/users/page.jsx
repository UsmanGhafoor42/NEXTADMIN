import styles from "../../ui/dashboard/users/users.module.css";
import Search from "../../ui/dashboard/search/search.jsx";
import Link from "next/link";
import Image from "next/image";
import Pagination from "../../ui/dashboard/pagination/pagination.jsx";
const Users = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder={"Search for User..."} />
                <Link href="/dashboard/users/add">
                    <button className={styles.addButton}>Add New</button>
                </Link>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Created At</td>
                        <td>Role</td>
                        <td>Status</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={styles.users}>
                                <Image
                                    src="/noavatar.png"
                                    alt="User"
                                    width={40}
                                    height={40}
                                    className={styles.userImage}
                                />
                                <span>John Doe</span>
                            </div>
                        </td>
                        <td>john@gmail.com</td>
                        <td>13.Aug.2024</td>
                        <td>Admin</td>
                        <td>Active</td>
                        <td>
                          <div className={styles.buttons}>

                          <Link href="/dashboard/users/test">
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
    );
};

export default Users;
