// คำถามตามลำดับสำหรับปุ่ม Yes
const questions = [
    "คุณมีหวานใจหรือยัง?",
    "เขาอยู่ห่างจากคุณใช่ไหม?",
    "คุณเคยเจอเขาแล้วใช่ไหม?",
    "คนนั้นคือคนที่ส่งเว็บนี้ให้กับคุณใช่ไหม?"
];

// ข้อความเมื่อกด No ตามลำดับ
const noMessages = [
    "กดทำไม!!",
    "กด Yes สิ",
    "พูดไม่ฟังเลยน้า",
    "ยังอีก!!!!!"
];

let currentQuestionIndex = 0;
let noClickCount = 0;
let yesScale = 1; // ตัวแปรสำหรับขนาดของปุ่ม Yes
const questionElement = document.getElementById('question');
const yesButton = document.querySelector('.cta-button.yes');
const noButton = document.querySelector('.cta-button.no');

// เมื่อกดปุ่ม Yes
yesButton.addEventListener('click', (e) => {
    e.preventDefault();
    // ขยายปุ่ม Yes
    yesScale += 0.2; // เพิ่มขนาดขึ้น 20% ทุกครั้งที่กด
    yesButton.style.transform = `scale(${yesScale})`;

    if (currentQuestionIndex < questions.length - 1) {
        // เปลี่ยนคำถามไปข้อถัดไป
        currentQuestionIndex++;
        questionElement.textContent = questions[currentQuestionIndex];
    } else if (currentQuestionIndex === questions.length - 1) {
        // เมื่อถึงคำถามสุดท้าย ไปหน้า For You
        window.location.href = 'for-you.html';
    }
});

// เมื่อกดปุ่ม No
noButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (noClickCount < 4) {
        // แสดงข้อความตามลำดับ
        alert(noMessages[noClickCount]);
        noClickCount++;
    } else {
        // เมื่อกดเกิน 4 ครั้ง รีเฟรชหน้า
        alert("กดบ่อย ปิดแม่ม!!");
        window.location.reload();
    }
});