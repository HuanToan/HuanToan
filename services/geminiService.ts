import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const sendGeminiMessage = async (
  history: ChatMessage[], 
  userMessage: string,
  context: string
): Promise<string> => {
  try {
    const systemInstruction = `
      Bạn là một gia sư Toán học thân thiện, chuyên hỗ trợ học sinh lớp 8 tại Việt Nam. 
      Bạn đang hỗ trợ học sinh học sách giáo khoa "Kết nối tri thức với cuộc sống".
      
      Ngữ cảnh bài học hiện tại của học sinh:
      ${context}

      Quy tắc:
      1. Trả lời ngắn gọn, dễ hiểu, phù hợp lứa tuổi học sinh lớp 8.
      2. Sử dụng tiếng Việt chuẩn.
      3. Nếu học sinh hỏi bài tập, hãy hướng dẫn cách giải chứ không chỉ đưa ra đáp án cuối cùng.
      4. Khuyến khích học sinh suy nghĩ.
      5. Nếu câu hỏi không liên quan đến toán học, hãy lịch sự từ chối và hướng học sinh quay lại bài học.
      6. QUAN TRỌNG: Viết TẤT CẢ các công thức toán học dưới dạng LaTeX và bọc trong dấu $, ví dụ: $x^2 + 2x$, $\\frac{1}{2}$. Không dùng Markdown block code cho công thức.
    `;

    const model = 'gemini-2.5-flash';

    // Construct the prompt by combining history and new message
    const conversationHistory = history.slice(-5).map(msg => 
      `${msg.role === 'user' ? 'Học sinh' : 'Gia sư'}: ${msg.text}`
    ).join('\n');

    const prompt = `
      ${conversationHistory}
      Học sinh: ${userMessage}
      Gia sư:
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        systemInstruction: systemInstruction,
      }
    });

    return response.text || "Xin lỗi, tôi không thể trả lời lúc này.";

  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Đã xảy ra lỗi khi kết nối với gia sư AI. Vui lòng thử lại sau.";
  }
};