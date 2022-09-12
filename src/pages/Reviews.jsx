import React from "react";
import Comments from "../components/Comments";
import Footer from "../components/Footer";

const Reviews = () => {
  return (
    <div className="text-black bg-gray-100">
      <Comments commentsUrl="http://localhost:3000/reviews" currentUserId="1" />
      <Footer />
    </div>
  );
};

export default Reviews;
