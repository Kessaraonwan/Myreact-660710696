import React from "react";
import { Link, useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>404 - Page Not Found</h1>
      <p>ขอโทษน้า หน้านี้ไม่มีอยู่จริง 🥲</p>

      {/* ปุ่มย้อนกลับ */}
      <button onClick={() => navigate(-1)}>⬅️ กลับหน้าที่แล้ว</button>

      <br /><br />

      {/* ลิงก์กลับหน้า Home */}
      <Link to="/">🏠 กลับหน้าแรก</Link>
    </div>
  );
};

export default NotFound;
