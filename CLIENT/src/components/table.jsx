import { useTable, usePagination } from 'react-table';
import axios from 'axios';
import { useEffect, useState } from 'react';
import React from 'react'; // 


const ArticleTable = () => {
    let access = localStorage.getItem('access');
    // console.log(access,'<---access');
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    

    async function fetchData() {
        setIsLoading(true);
        try {
            const response = await axios.get('http://103.175.216.126:8000/api/articles', {
                headers: {
                    Authorization: `Bearer ${access}`,
                },
            });
            setData(response.data.data);
            console.log(response.data.data , '<---data');
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

  
           

    if (isLoading) return <div className='text-center'>Loading...</div>;
    if (error) return <div className='text-center'>Error loading articles, Login first!</div>;

    return (
        <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  No
                </label>
              </th>
              <th>Articles</th>
              <th>Sumber</th>
              <th>Likes</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {data.map((data , i) => (
                <tr key={data.id}>
                <th>
                  <label>
                    <p>
                        {i+1}
                    </p>
                    
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={data.image}
                          alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                
                      <div className="font-bold">{data.title}</div>
                      <div className="text-sm opacity-50">{new Date(data.date).toLocaleString('default', {day: '2-digit', month: '2-digit', year: 'numeric'})}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {data.website.name}
                  <br />
                  <span className="badge badge-ghost badge-sm ">{data.status}</span>
                </td>
                <td>{data.like}</td>
                <th>
                  <a href={data.website.url} className="btn btn-ghost btn-xs" target="_blank" rel="noopener noreferrer">details</a>
                </th>
              </tr>
            ))}
        
          
           
          </tbody>
          {/* foot */}
       
        </table>
      </div>
    );
};

export default ArticleTable;

