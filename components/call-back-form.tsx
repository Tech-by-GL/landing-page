"use client";

import { useState } from "react";

export default function CallbackForm() {
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async () => {
    if (!phone) return;

    setLoading(true);
    try {
      await fetch("https://formsubmit.co/ajax/ducthang@chamchi.ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          phone,
          _subject: "📞 PHHS cần tư vấn AI",
          _captcha: "false",
          _template: "table",
        }),
      });

      setPhone("");
      setShowModal(true);
    } catch (err) {
      console.error(err);
      alert("Gửi thất bại, vui lòng thử lại!");
    } finally {
      setLoading(false);
      console.log("Đã gửi yêu cầu tư vấn AI:", phone);
    }
  };

  return (
    <>
      {/* Form nhập & nút gọi */}
      <div className="max-w-md mx-auto w-full">
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Nhập số điện thoại"
          className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-sm"
          required
        />

        <button
          onClick={handleSubmit}
          disabled={!phone || loading}
          className="bg-primary cursor-pointer text-white font-medium py-2 px-6 rounded-xl hover:bg-primary/90 transition mt-2 w-full flex items-center justify-center"
        >
          {loading ? "Đang gửi..." : "Nhận tư vấn miễn phí"}
        </button>
      </div>

      {/* Modal cảm ơn */}
      {showModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-xl p-6 max-w-sm w-[90%] text-center space-y-4 shadow-xl">
            <h3 className="text-xl font-bold text-primary">Cảm ơn bạn!</h3>
            <p className="text-gray-700">
              Chăm Chỉ sẽ liên hệ với bạn trong vòng{" "}
              <strong>15&nbsp;phút</strong>.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="bg-primary text-white px-4 py-2 rounded-xl hover:bg-primary/90 transition"
            >
              Đóng
            </button>
          </div>
        </div>
      )}
    </>
  );
}
