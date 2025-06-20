import { useState } from "react";
import Image from "next/image";
import { sendTelegramMessage } from "./telegram";

export interface RegisterNowProps {
  title: string;
  color: string;
}
export default function RegisterNow({ title, color }: RegisterNowProps) {
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
      {/* Button mở modal */}
      <div>
        <button
          onClick={() => setOpen(true)}
          className={`inline-block ${
            color
              ? `bg-${color}-500 hover:bg-${color}-400`
              : `bg-primary hover:bg-primary/90`
          } text-white text-sm font-semibold px-6 py-3 rounded-xl transition`}
        >
          {title || "Đăng ký ngay"}
        </button>
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 px-4">
          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl w-full max-w-5xl min-h-[520px] relative">
            {/* Nút đóng */}
            <button
              onClick={() => {
                setOpen(false);
                setSuccess(false);
              }}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-xl z-10"
            >
              ✕
            </button>

            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-0">
              {/* Hình ảnh */}

              <div className="relative hidden md:block min-h-[520px] w-full">
                <Image
                  src="https://chamchi.sgp1.cdn.digitaloceanspaces.com/website/5-mini.png"
                  alt="Đăng ký khóa học"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Nội dung form */}
              <div className="p-6 flex flex-col justify-center w-full">
                {!success ? (
                  <>
                    <h3 className="text-lg font-bold text-primary mb-4 text-center">
                      Nhập SĐT để nhận tư vấn miễn phí
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
                    <p className="text-xs text-center text-gray-500 mt-2">
                      Chúng tôi sẽ liên hệ trong vòng 15 phút.
                    </p>
                  </>
                ) : (
                  <div className="text-center space-y-4">
                    <h3 className="text-xl font-bold text-primary">
                      Gửi thành công! ✅
                    </h3>
                    <p className="text-gray-700">
                      Cảm ơn bạn. Chúng tôi sẽ liên hệ trong vòng{" "}
                      <strong>15 phút</strong>.
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
          </div>
        </div>
      )}
    </>
  );
}
