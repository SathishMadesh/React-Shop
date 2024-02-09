import React, { useState, useEffect } from 'react';

export default function Products() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (componentMounted) {
          const jsonData = await response.json();
          setData(jsonData);
          setFilter(jsonData);
          setLoading(false);
          console.log(filter);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getProducts();

    // Cleanup function for unmounting
    return () => {
      componentMounted = false;
    };
  }, []); 

  return (
    <div>
      
    </div>
  )
}
