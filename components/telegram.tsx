

export const sendTelegramMessage = async (
  message: string,
  groupChat = "errors",
  forceSend = false
) => {
  try {
    const botToken =
  groupChat === "print"
    ? process.env.NEXT_PUBLIC_TELEGRAM_BOT_PRINT_TOKEN
    : process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
const chatId =
  groupChat === "phhs"
    ? process.env.NEXT_PUBLIC_TELEGRAM_CHAT_PHHS_ID
    : groupChat === "errors"
    ? process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID
    : groupChat === "print"
    ? process.env.NEXT_PUBLIC_TELEGRAM_PRINT
    : process.env.NEXT_PUBLIC_TELEGRAM_CHAT_WRONG_ANSWER_ID;
    
    if (
      window.location.href.includes("localhost") ||
      window.location.origin.includes("192.168")
    )
      return;

    const telegramApiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const res = await fetch(telegramApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
      }),
    });
    return res;
  } catch (error) {
    console.error("Error sending message:", error);
  }
};
