import httpService from "./httpService";
const commentEndpoint = "comment/";

const commentService = {
    createComment: async (payload) => {
        const { data } = await httpService.put(commentEndpoint + payload._id, payload);
        console.log("data", data);
        return data;
    }
};
export default commentService;
