import React, { Suspense } from "react";
import "./listPage.css";
import Map from "../../components/map/Map";
import Filter from "../../filter/Filter";
import Card from "../../components/card/Card";
import { Await, useLoaderData } from "react-router-dom";

const ListPage = () => {
  const data = useLoaderData();

  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />

          <Suspense fallback={<p>Loading...</p>}>
            <Await
              resolve={data.postResponse}
              errorElement={<p>Error loading posts</p>}
            >
              {(res) =>
                Array.isArray(res.data) ? (
                  res.data.map((post) => (
                    <Card key={post.id} item={post} />
                  ))
                ) : (
                  <p>No posts found</p>
                )
              }
            </Await>
          </Suspense>
        </div>
      </div>

      <div className="mapContainer">
        <Suspense fallback={<p>Loading map...</p>}>
          <Await resolve={data.postResponse}>
            {(res) => <Map items={res.data || []} />}
          </Await>
        </Suspense>
      </div>
    </div>
  );
};

export default ListPage;
