import React from 'react';

function JSXExamples() {
    const greeting = <h1>Hello, React with JSX!!!</h1>;
    const name = 'เกษรา';
    const age = 21;

    const currentYear = new Date().getFullYear(); // แก้จาก Data() → Date()

    const user = {
        firstName: 'เกษรา',
        lastName: 'อ่อนหวาน',
        age: 21,
        hobbies: ['เล่นเกม', 'เต้นบัลเล่ต์', 'ฟังเพลง', 'ดูหนัง']
    };

    const formatName = (user) => {
        return `${user.firstName} ${user.lastName}`;
    };

    const isLoggedIn = true;
    const hasNotification = 3;

    const handleInput = (e) => {
        console.log('พิมพ์:', e.target.value);
    };

    return (
        <div className="jsx-examples" style={{ padding: '20px' }}>
            <h1>JSX Example</h1>

            {/* === 1. การแสดงผลข้อมูลพื้นฐาน === */}
            <section>
                <h2>📝 การแสดงผลข้อมูล</h2>
                {greeting}
                <p>สวัสดีคุณ {name} อายุ {age} ปี</p>
                <p>ปีนี้คือปี {currentYear}</p>
                <p>ชื่อเต็ม: {formatName(user)}</p>
            </section>

            {/* === 2. การใช้ Attributes === */}
            <section>
                <h2>🎨 Attributes ใน JSX</h2>
                {/* ใช้ className แทน class */}
                <div className="text-primary">ใช้ className แทน class</div>

                {/* camelCase attributes */}
                <button
                    onClick={() => alert('คลิกแล้ว!')}
                    onMouseEnter={() => console.log('เมาส์เข้า')}
                >
                    Hover หรือ Click ดู
                </button>

                {/* style attribute รับ object */}
                <div
                    style={{
                        backgroundColor: '#E8F5E8',
                        padding: '15px',
                        borderRadius: '8px',
                        marginTop: '10px'
                    }}
                >
                    <p>Inline styles ใช้ object</p>
                </div>
            </section>

            {/* === 3. Conditional Rendering === */}
            <section>
                <h2>🔀 Conditional Rendering</h2>

                {/* ternary operator */}
                <p>สถานะ: {isLoggedIn ? ' ล็อกอินแล้ว' : ' ยังไม่ได้ล็อกอิน'}</p>

                {/* && operator */}
                {hasNotification > 0 && (
                    <p>🔔 คุณมี {hasNotification} การแจ้งเตือนใหม่</p>
                )}

                {/* if-else ผ่าน IIFE */}
                {(() => {
                    if (user.age >= 18) {
                        return <p>✅ {formatName(user)} เป็นผู้ใหญ่แล้ว</p>;
                    } else {
                        return <p>👶 {formatName(user)} ยังเป็นเด็ก</p>;
                    }
                })()}
            </section>

            {/* === 4. Lists และ Keys === */}
            <section>
                <h2>📋 การแสดงผล Lists</h2>

                <p>งานอดิเรกของ {user.firstName}:</p>
                <ul>
                    {user.hobbies.map((hobby, index) => (
                        <li key={index}>
                            {index + 1}. {hobby}
                        </li>
                    ))}
                </ul>

                {/* ซับซ้อนขึ้น */}
                <h3>รายการสินค้า</h3>
                <ul>
                    {[
                        { id: 1, name: 'สมุดโน้ต', price: 89, inStock: true },
                        { id: 2, name: 'ปากกาสีเจล', price: 35, inStock: true },
                        { id: 3, name: 'เทปกาวลายการ์ตูน', price: 55, inStock: false }
                    ].map((product) => (
                        <li key={product.id}>
                            {product.name} - ฿{product.price.toLocaleString()}{' '}
                            {product.inStock ? 'มีสินค้า' : 'สินค้าหมด'}
                        </li>
                    ))}
                </ul>
            </section>

            {/* === 5. Fragment === */}
            <section>
                <h2>🧩 React Fragment</h2>
                <React.Fragment>
                    <h3>หัวข้อ</h3>
                    <p>เนื้อหา</p>
                </React.Fragment>

                <>
                    <h3>หัวข้ออื่น</h3>
                    <p>เนื้อหาอื่น</p>
                </>
            </section>

            {/* === 6. การจัดการ Events === */}
            <section>
                <h2>🎯 Event Handling ใน JSX</h2>
                <input type="text" placeholder="พิมพ์อะไรก็ได้..." onChange={handleInput} />
                <br />
                <select>
                    <option value="">-- เลือกภาษา --</option>
                    <option value="js">JavaScript</option>
                    <option value="py">Python</option>
                    <option value="java">Java</option>
                </select>
            </section>

            {/* === 7. Comments ใน JSX === */}
            <section>
                <h2>💬 Comments ใน JSX</h2>
                {/* นี่คือ comment ใน JSX */}
                <p>Comment ใน JSX ต้องอยู่ใน {'{/* curly braces */}'}</p>

                {
                    // นี่ก็เป็น comment เช่นกัน
                    // แต่อยู่ใน JavaScript expression
                }
            </section>
        </div>
    );
}

export default JSXExamples;
