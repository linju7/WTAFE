// API 호출을 위한 기본 URL 설정
const API_BASE_URL = "http://127.0.0.1:8000/api";

/**
 * API 호출을 위한 공통 함수
 * @param {string} endpoint - API 엔드포인트 (예: "/create/internal_group")
 * @param {string} method - HTTP 메서드 ("GET", "POST", "PUT", "DELETE")
 * @param {object} body - 요청 본문 (POST, PUT 시 필요)
 * @returns {Promise<object>} - API 응답 데이터
 */
const callApi = async (endpoint, method = "GET", body = null) => {
    try {
        const options = {
            method,
            headers: {
                "Content-Type": "application/json",
            },
        };

        if (body) {
            options.body = JSON.stringify(body);
        }

        const response = await fetch(`${API_BASE_URL}${endpoint}`, options);
        return await response.json();
    } catch (error) {
        console.error("API 호출 중 오류 발생:", error);
        return { message: "API 호출 중 오류 발생" };
    }
};

// 키워드 → API 요청 매핑
const apiFunctions = {
    "내부그룹추가": () => callApi("/create/internal_group", "POST"),
};

// 키워드에 따라 API 호출
export const callApiByKeyword = async (keyword, data = null) => {
    const apiFunction = apiFunctions[keyword];
    if (apiFunction) {
        return await apiFunction(data);
    } else {
        return { message: "유효하지 않은 키워드입니다." };
    }
};