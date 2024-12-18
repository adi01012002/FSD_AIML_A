// import React, { useEffect, useState } from "react";

// const Dashboard = () => {
//   const [recipes, SetRecipes] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   useEffect(() => {
//     const url = "https://dummyjson.com/recipes";
//     const res = fetch(url);
//     res
//       .then(() => res.json())
//       .then((data) => {
//         console.log(data);
//         SetRecipes(data.recipes);
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError(err);
//         setLoading(false);
//         console.log("Unexpected Error");
//       });
//   },[]);
//   return (
//     <div>
//       <h1>Menu</h1>
//       {error && <p>{error}</p>}
//       {loading && <p>Loading .....</p>}
//       {!error && !loading && (
//         <div>
//           <table>
//             <tr>
//               <th>&nbsp;</th>
//               <th>Recipes Name</th>
//               <th>Cusine</th>
//               <th>Rating</th>
//               <th>Price</th>
//               <th>Action</th>
//             </tr>
//             {recipes.map((r) => (
//               <tr>
//                 <td><img src={r.image} width="100px" height="50px"/></td>
//                 <td>{r.name}</td>
//                 <td>{r.cuisine}</td>
//                 <td>{r.rating}</td>
//                 <td>120 Rs</td>
//                 <td>
//                   <Button>Add to Cart</Button>
//                 </td>
//               </tr>
//             ))}
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Dashboard;


import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch("https://dummyjson.com/recipes");
        if (!response.ok) {
          throw new Error("Failed to fetch recipes");
        }
        const data = await response.json();
        console.log(data);
        setRecipes(data.recipes); 
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div>
      <h1>Menu</h1>
      {error && <p>{error}</p>}
      {loading && <p>Loading .....</p>}
      {!error && !loading && (
        <div>
          <table>
            <thead>
              <tr>
                <th>&nbsp;</th>
                <th>Recipe Name</th>
                <th>Cuisine</th>
                <th>Rating</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {recipes.map((r, index) => (
                <tr key={index}>
                  <td>
                    <img
                      src={r.image}
                      alt={r.name}
                      width="100px"
                      height="50px"
                    />
                  </td>
                  <td>{r.name}</td>
                  <td>{r.cuisine}</td>
                  <td>{r.rating}</td>
                  <td>120 Rs</td>
                  <td>
                    <button>Add to Cart</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
