export async function postData(endpoint, data) {
  try {
    const response = await fetch(`/api/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      credentials: "include",
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "サーバーエラーが発生しました");
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("エラー:", error);
    throw error;
  }
}
