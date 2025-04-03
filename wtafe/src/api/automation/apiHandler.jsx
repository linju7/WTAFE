import { callApiByKeyword } from "./api"

export const handleApiCall = async (keyword) => {
    try {
        const result = await callApiByKeyword(keyword);
        alert(result.message);
    } catch (error) {
        console.error("API 호출 실패:", error);
        alert("API 호출 중 오류가 발생했습니다.");
    }
};