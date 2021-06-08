import React, { useState, useContext, useEffect } from "react";
import SearchBar from "../components/TrainList/SearchBar";
import SideBar from "../components/TrainList/SideBar";
import List from "../components/TrainList/List";
import { TrainContext } from "../context/context";

const TrainList = (props) => {
  const { syncStorage } = useContext(TrainContext);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    syncStorage();
  }, []);
  const book = (id) => {
    props.history.push(`/trains/${id}`);
  };
  return (
    <div>
      <SearchBar setLoading={setLoading} />
      <div className="row">
        <SideBar />
        <List book={book} loading={loading} />
      </div>
    </div>
  );
};

export default TrainList;
