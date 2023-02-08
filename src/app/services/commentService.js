import httpService from "./httpService";
const commentEndpoint = "comment/";

const commentService = {
    createComment: async (payload) => {
        const { data } = await httpService.put(commentEndpoint + payload._id, payload);
        console.log("data", data);
        return data;
    },
    returnComment: async (commentId) => {
        const { data } = await httpService.delete(commentEndpoint + commentId);
        return data;
    },
    getComment: async (pageId) => {
        const { data } = await httpService.get(commentEndpoint, {
            params: {
                orderBy: `"pageId"`,
                equalTo: `"${pageId}"`
            }
        });
        return data;
    }
};
export default commentService;
