import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api";

const Comments = () => {
    const { userId } = useParams();
    const [comments, setComments] = useState([]);
    useEffect(() => {

    }, []);
    return <>Comments</>;
};

export default Comments;
