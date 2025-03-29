// API 호출을 위한 기본 URL 설정
const API_BASE_URL = "http://127.0.0.1:8000/api";

// 개별 API 함수 정의
const fetchDataA = async () => {
    return fetch(`${API_BASE_URL}/internal_group/create`).then((res) => res.json());
};


// 키워드 → API 함수 매핑
const apiFunctions = {
    "내부그룹추가": fetchDataA
};

// 키워드에 따라 API 호출
export const callApiByKeyword = async (keyword) => {
    const apiFunction = apiFunctions[keyword];
    if (apiFunction) {
        try {
            const result = await apiFunction();
            return result;
        } catch (error) {
            console.error("API 호출 중 오류 발생:", error);
            return { message: "API 호출 중 오류 발생" };
        }
    } else {
        return { message: "유효하지 않은 키워드입니다." };
    }
};