import React from "react";
import _ from "lodash";
import CommentsList from "../common/comments/commentsList";
import AddCommentForm from "../common/comments/addCommentForm";
import { useComment } from "../../hooks/useComment";

const Comments = () => {
    const { createComment, comments } = useComment();
    const handleSubmit = (data) => {
        createComment(data);
    };
    const handleRemoveComment = (id) => {
        // api.comments.remove(id).then((id) => {
        //     setComments(comments.filter((x) => x._id !== id));
        // });
    };
    const sortedComments = _.orderBy(comments, ["created_at"], ["desc"]);
    return <>
        <div className="card mb-2">
            {" "}
            <div className="card-body ">
                <AddCommentForm onSubmit={handleSubmit} />
            </div>
        </div>
        {sortedComments.length > 0 && (
            <div className="card mb-3">
                <div className="card-body ">
                    <h2>Comments</h2>
                    <hr />
                    <CommentsList
                        comments={sortedComments}
                        onRemove={handleRemoveComment}
                    />
                </div>
            </div>
        )}
    </>;
};
export default Comments;
