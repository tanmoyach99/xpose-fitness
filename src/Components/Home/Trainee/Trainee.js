import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";
import ReactPaginate from "react-paginate";
import TraineeComment from "./TraineeComment";

const Trainee = () => {
  const [comment, setComment] = useState([]);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const [pageNumber, setPageNumber] = useState(0);

  const commentPerPage = 3;
  const pagesVisited = pageNumber * commentPerPage;

  const displayComment = comment.slice(
    pagesVisited,
    pagesVisited + commentPerPage
  );

  const pageCount = Math.ceil(comment.length / commentPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  useEffect(() => {
    const url = `http://localhost:5055/comments`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setComment(data));
  }, []);

  return (
    <div className="mt-5 container-fluid trainee-comment">
      <h1 className="text-center gym-brand"> Client's Say</h1>
      <p className="mt-3 text-secondary text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio mollitia
        ullam ipsa tempora, omnis ad!
      </p>
      <div className="row mt-5 d-flex comment-section justify-content-center p-5 ">
        {displayComment.map((comment) => (
          <TraineeComment comment={comment}></TraineeComment>
        ))}
        <div className="m-5 p-5">
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBtn"}
            previousLinkClassName={"previousBtn"}
            nextLinkClassName={"nextBtn"}
            activeClassName={"paginationActive"}
          />
        </div>
      </div>
    </div>
  );
};

export default Trainee;
