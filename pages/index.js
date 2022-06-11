import React, { Fragment } from "react";
import styles from "../styles/index.module.css"
import Link from "next/dist/client/link";

export default function index({users}) {
  return (
    <div className={styles.index_content}>
      <h1>index</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Firstname</th>
            <th scope="col">Lastname</th>
            <th scope="col">Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((data, index) => (
            <tr key={`${index}`}>
              <td>{`${index+1}`}</td>
              <td>{data.firstname}</td>
              <td>{data.lastname}</td>
              <td>{data.email}</td>
              <td>
                <Link href={(data.id.toString())}>
                  <button type="button">check</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export async function getStaticProps(){
  const url = "http://192.168.1.51:3000/api/getAll"
  const res = await fetch(url)
  const data = await res.json()
  const receive = data.data.user
  return {
    props: {
      users: receive
    }
  }
}