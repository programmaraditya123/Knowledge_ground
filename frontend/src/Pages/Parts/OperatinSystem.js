import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const OperatinSystem = () => {
  const [parenttopic, setParenttopic] = useState();
  const [indexTopic, setIndexTopic] = useState();
  const [content, setcontent] = useState();
  const [id, setid] = useState();
  const [oneCont, setoneCont] = useState();

  const [cont, setcont] = useState([]);

  const postCont = async () => {
    try {
      const { data } = await axios.post(
        `http://localhost:8080/api/v1/parts/operatingsystem`,
        { parenttopic, indexTopic, content }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const getOnlyCont = async (id) => {
    try {
      const cont = await axios.get(
        `http://localhost:8080/api/v1/parts/operatingsystem/${id}`
      );
      setoneCont(cont.data.cont);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (id) {
      getOnlyCont(id);
    }
  }, [id]);

  const getcont = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/api/v1/parts/getoperatingsystem`
      );

      if (data) {
        setcont(data?.dsaContent);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getcont();
  }, []);

  const handleClick = (id) => {
    setid(id);
  };
  return (
    <div className="body">
      <div className="cont-index">
        <ul>
          {cont?.map((c) => (
            <div key={c._id}>
              <Link>
                <li>{c?.parenttopic} </li>
              </Link>
            </div>
          ))}
        </ul>
      </div>
      <div className="content">
        <div className="leftcont">
          <ul>
            {cont?.map((c) => (
              <div key={c._id}>
                <button onClick={() => handleClick(c._id)} id={c._id}>
                  <li>{c?.indexTopic}</li>
                </button>
              </div>
            ))}
          </ul>
        </div>
        <div className="centercont">
        {!id ? (
            <>
            <h2>{cont[0]?.indexTopic}</h2>
            <p>{cont[0]?.content}</p>
            </>
   ) : (
            <>
            <h2>{oneCont?.indexTopic}</h2>
          <p>{oneCont?.content}</p>
          </>


          )}
          {/* <h2>{oneCont?.indexTopic}</h2>
          <p>{oneCont?.content}</p> */}

          <div className="btn">
            <button className="btn1">Previous</button>
            <button className="btn1">Next</button>
          </div>
        </div>
        <div className="rightcont">
          Adds section or relative links to other pages
        </div>
      </div>
      <div className="post">
        <form onSubmit={postCont}>
          <h2>Post Your Content</h2>
          <input
            type="text"
            value={parenttopic}
            onChange={(e) => setParenttopic(e.target.value)}
            placeholder="Enter the Parent topic"
          />
          <input
            type="text"
            value={indexTopic}
            onChange={(e) => setIndexTopic(e.target.value)}
            placeholder="Enter the full topic"
          />
          <textarea
            id="cont"
            value={content}
            onChange={(e) => setcontent(e.target.value)}
            placeholder="Enter the content"
            name="cont"
          />
          <button type="submit" className="btn1">
            POST
          </button>
        </form>
      </div>
    </div>
  );
};



export default OperatinSystem;
