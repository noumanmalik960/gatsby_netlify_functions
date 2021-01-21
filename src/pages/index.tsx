import React, { useEffect, useState } from "react";

const index = () => {
  interface Prop {
    message: string;
  }

  const [data, setData] = useState<Prop>({ message: "Default" });
  useEffect(() => {
    console.log("useEffect called");

    fetch(`/.netlify/functions/hello`)
      .then((response) => response.json())
      .then((thisData) => {
        setData(thisData);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>Salam alaikum</h1>
      {data.message}
    </div>
  );
};

export default index;

// const styles = {
//   fontFamily: "calibri",
//   color: "navy",
// };

// interface Todo {
//   userId: string;
//   id: string;
//   title: string;
//   completed: boolean;
// }

// const index = () => {
//   const [data, setData] = useState<Todo>();
//   const [id, setId] = useState(12);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       const response = await fetch(
//         `https://jsonplaceholder.typicode.com/posts/${id}`
//         );
//         const data = await response.json();
//         setData(data);
//         setLoading(false);
//       };

//       fetchData();
//     }, [id]);

//     if (loading) {
//       return <h1 style={styles}>LOADING!!!!!</h1>;
//     }
//     return (
//       <div>
//       <button onClick={() => setId((id) => (id += 1))}>incr</button>
//       {id}
//       <button onClick={() => setId((id) => (id -= 1))}>decr</button>
//       <h1 style={styles}>{data?.title}!</h1>
//     </div>
//   );
// };
