"use server";

import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(1, "請輸入姓名"),
  email: z.string().email("請輸入有效的電子郵件"),
  message: z.string().min(1, "請輸入合作意向"),
});

type FormValues = z.infer<typeof formSchema>;

export async function submitContactForm(data: FormValues) {
  try {
    // 驗證表單資料
    const validatedData = formSchema.parse(data);

    // TODO: 實作實際的表單提交邏輯
    // 例如：發送電子郵件、儲存到資料庫等
    console.log("表單資料已驗證：", validatedData);

    return {
      success: true,
      message: "表單已成功提交！我們會盡快與您聯繫。",
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: "表單驗證失敗",
        errors: error.errors.map((err) => ({
          field: err.path[0],
          message: err.message,
        })),
      };
    }

    return {
      success: false,
      message: "提交表單時發生錯誤，請稍後再試。",
    };
  }
}
