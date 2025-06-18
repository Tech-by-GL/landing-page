"use client";

import { useState } from "react";
import { sendTelegramMessage } from "./telegram";

export default function RegisterNow() {
  const [open, setOpen] = useState(false);
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async () => {
    if (!phone) return;
    setLoading(true);
    try {
      await sendTelegramMessage(
        `📞 PHHS đăng ký khóa học cho bé. SĐT: ${phone}`,
        "phhs"
      );
      setSuccess(true);
      setPhone("");
    } catch (err) {
      alert("Gửi không thành công, hãy thử lại!");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Nút mở modal */}
      <div className="mt-6">
        <button
          onClick={() => setOpen(true)}
          className="inline-block bg-primary text-white text-sm font-semibold px-6 py-3 rounded-xl hover:bg-primary/90 transition"
        >
          Đăng ký ngay cho bé
        </button>
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-xl p-6 w-[90%] max-w-sm shadow-xl">
            {/* Nút đóng */}
            <button
              onClick={() => {
                setOpen(false);
                setSuccess(false);
              }}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>

            {/* Nội dung */}
            {!success ? (
              <>
                <h3 className="text-lg font-bold text-primary mb-4 text-center">
                  Để lại SĐT – Chăm Chỉ gọi lại trong 15′
                </h3>

                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Nhập số điện thoại"
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                />

                <button
                  onClick={handleSubmit}
                  disabled={!phone || loading}
                  className="bg-primary text-white font-medium py-2 px-6 rounded-xl hover:bg-primary/90 transition mt-4 w-full disabled:opacity-60"
                >
                  {loading ? "Đang gửi..." : "Gửi yêu cầu"}
                </button>
              </>
            ) : (
              /* Thông báo thành công */
              <div className="text-center space-y-4">
                <h3 className="text-xl font-bold text-primary">
                  Cảm ơn bạn!
                </h3>
                <p className="text-gray-700">
                  Chúng tôi sẽ liên hệ trong vòng <strong>15&nbsp;phút</strong>.
                </p>
                <button
                  onClick={() => {
                    setOpen(false);
                    setSuccess(false);
                  }}
                  className="bg-primary text-white px-4 py-2 rounded-xl hover:bg-primary/90 transition"
                >
                  Đóng
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
