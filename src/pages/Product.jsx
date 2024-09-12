import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Shirt from "./ProductCard/Shirt";
import Pant from "./ProductCard/Pant";
import ShirtPopup from "./Popup/ShirtPopup";
import PantPopup from "./Popup/PantPopup";
import SockPopup from "./Popup/SockPopup";
import ShoesPopup from "./Popup/ShoesPopup";
import BallPopup from "./Popup/BallPopup";
import GaiterPopup from "./Popup/GaiterPopup";
import GoalPopup from "./Popup/GoalPopup";

const Product = () => {
  const shirts = [
    {
      id: 1,
      img: "1.jpg",
      name: "Manchester United 2024",
      text: "เสื้อแข่งชุดเหย้าของสโมสรที่อยู่เหนือกาลเวลาสำหรับฤดูกาล 24/25 ตัวนี้โดดเด่นยิ่งกว่าเดิมด้วยด้านข้างลำตัวแทรกแถบผ้าสีแดงสดและดีไซน์ค่อยๆไล่ระดับสีทั้งด้าหน้าและด้านหลังสำหรับเสื้อแข่งจากอาดิดาสเวอร์ชันนี้มีเทคโนโลยีHEAT.RDYที่ระบายอากาศได้ดีและดีเทลน้ำหนักเบาเพื่อการโชว์ฝีเท้าอย่างมั่นใจผลิตภัณฑ์ชิ้นนี้ผลิตจากวัสดุรีไซเคิล 100% เราช่วยกันลดขยะเลิกพึ่งพาทรัพยากรที่มีอยู่อย่างจำกัดและลดปริมาณการปล่อยคาร์บอนที่เกิดจากสินค้าที่เราผลิตโดยนำวัสดุเดิมที่ใช้ผลิตไปแล้วกลับมาใช้ซ้ำอีกครั้ง",
      price: 4600,
    },
    {
      id: 2,
      img: "2.png",
      name: "ASERNAL 2024",
      text: "เสื้อแข่งชุดเหย้าของสโมสรที่อยู่เหนือกาลเวลาสำหรับฤดูกาล 24/25 ตัวนี้โดดเด่นยิ่งกว่าเดิมด้วยด้านข้างลำตัวแทรกแถบผ้าสีแดงสดและดีไซน์ค่อยๆไล่ระดับสีทั้งด้าหน้าและด้านหลังสำหรับเสื้อแข่งจากอาดิดาสเวอร์ชันนี้มีเทคโนโลยีHEAT.RDYที่ระบายอากาศได้ดีและดีเทลน้ำหนักเบาเพื่อการโชว์ฝีเท้าอย่างมั่นใจผลิตภัณฑ์ชิ้นนี้ผลิตจากวัสดุรีไซเคิล100%เราช่วยกันลดขยะเลิกพึ่งพาทรัพยากรที่มีอยู่อย่างจำกัดและลดปริมาณการปล่อยคาร์บอนที่เกิดจากสินค้าที่เรผลิต โดยนำวัสดุเดิมที่ใช้ผลิตไปแล้วกลับมาใช้ซ้ำอีกครั้ง",
      price: 4600,
    },
    {
      id: 3,
      img: "3.png",
      name: "Manchester City 2024",
      text: "ผ้า ULTRAWEAVE ที่ออกแบบเป็นพิเศษช่วยลดน้ำหนักและการเสียดสี เทคโนโลยีดูดซับเหงื่อ dryCELL ออกแบบมาเพื่อช่วยให้คุณแห้งสบายผลิตจากวัสดุรีไซเคิล 100% ไม่รวมขอบและการตกแต่ง",
      price: 4600,
    },
    {
      id: 4,
      img: "4.png",
      name: "Liverpool 2024",
      text: "Nike Dri-FIT ADVยกระดับเทคโนโลยีซับเหงื่อของเราด้วยการระบายความร้อนขั้นสูงและโซนการระบายอากาศ เพื่อช่วยให้คุณแห้งสบายอยู่เสมอ จากการทดสอบของนักกีฬา ผ้าแบบรูเปิดในบริเวณที่มีความร้อนสูงช่วยให้คุณรู้สึกเย็นเสมอ ดีไซน์ของแท้มีลุคแบบเดียวกับที่นักกีฬามืออาชีพสวมใส่ในสนาม",
      price: 4600,
    },
  ];

  const pants = [
    {
      id: 1,
      img: "1.png",
      name: "กางเกงผู้ชาย แมนยู 2024",
      text: "ตัดเย็บจากโพลีเอสเตอร์ (รีไซเคิล) 100%เทคโนโลยี AEROREADYทรงเรกูลาร์เอวยางยืด มีเชือกผูกปักตราสโมสรแมนเชสเตอร์ยูไนเต็ดกางเกงฟุตบอล ADIDAS",
      price: 1700,
    },
    {
      id: 2,
      img: "2.png",
      name: "กางเกงผู้ชาย อาร์เซนอล 2024",
      text: "ตัดเย็บจากโพลีเอสเตอร์ (รีไซเคิล) 100%เทคโนโลยี AEROREADYทรงเรกูลาร์เอวยางยืด มีเชือกผูกปักตราสโมสรแมนเชสเตอร์ยูไนเต็ดกางเกงฟุตบอล ADIDASทรงเรกูลาร์เอวยางยืด มีเชือกผูกโพลีเอสเตอร์ (รีไซเคิล) 100%เทคโนโลยี AEROREADYปักตราสโมสรอาร์เซนอลกางเกงฟุตบอล ADIDAS",
      price: 1700,
    },
    {
      id: 3,
      img: "3.png",
      name: "กางเกงผู้ชาย แมนซิตี้ 2024",
      text: "ตัดเย็บจากโพลีเอสเตอร์ (รีไซเคิล) 100%เทคโนโลยี AEROREADYทรงเรกูลาร์เอวยางยืด มีเชือกผูกปักตราสโมสรแมนเชสเตอร์ยูไนเต็ดกางเกงฟุตบอล ADIDASทรงเรกูลาร์เอวยางยืด มีเชือกผูกโพลีเอสเตอร์ (รีไซเคิล) 100%เทคโนโลยี AEROREADYปักตราสโมสรอาร์เซนอลกางเกงฟุตบอล ADIDASตัดเย็บจากผ้าโพลีเอสเตอร์ 100%ทรงเรกูลาร์เอวสูงปานกลางDryCELL:เทคโนโลยีเพื่อประสิทธิภาพที่ออกแบบมาเพื่อดูดซับความชื้นจากร่างกายและช่วยให้คุณปลอดเหงื่อระหว่างออกกำลังกายตราสัญลักษณ์อย่างเป็นทางการของทีมแต่งรายละเอียดแบรนด์ PUMAกางเกงฟุตบอล PUMA",
      price: 1700,
    },
    {
      id: 4,
      img: "4.png",
      name: "กางเกงผู้ชาย ลิเวอร์พูล 2024",
      text: "ตัดเย็บจากโพลีเอสเตอร์ 100%เทคโนโลยี Nike Dri-FIT กำจัดความชื้นออกจากร่างกายดีไซน์จำลองให้รายละเอียดตามแบบที่ทีมสวมใส่แต่งดีเทลตราสโมสรลิเวอร์พูลที่ด้านหน้ากางเกงฟุตบอล NIKE",
      price: 1700,
    },
  ];

  const socks = [
    {
      id: 1,
      img: "1.png",
      name: "ADIDAS Adi 23",
      text: "โพลีเอสเตอร์รีไซเคิล 84% คอตตอน 11% อีลาสเตน 5%ความยาวระดับเข่าเทคโนโลยี AEROREADY ช่วยดูดซับความชื้นเทคโนโลยี FORMOTION",
      price: 330,
    },
    {
      id: 2,
      img: "2.png",
      name: "FUTBOLX Kicker",
      text: "ตัดเย็บจากผ้าสัมผัสนุ่ม ใส่สบายความยาวระดับเข่าตกแต่งโลโก้ที่ด้านหน้าเหมาะสำหรับการสวมใส่เล่นฟุตบอลและเล่นกีฬาถุงเท้าบอล FUTBOLX",
      price: 160,
    },
    {
      id: 3,
      img: "3.png",
      name: "NIKE Academy",
      text: "ตัดเย็บจากผ้าไนลอนผสมผ้าสแปนเด็กซเนื้อผ้านุ่ม ยืดหยุ่น น้ำหนักเบาและระบายอากาศได้ดี สวมใส่สบายเทคโนโลยี Dri-Fit ช่วยดูดซับเหงื่อและความชื้น พร้อมมอบสัมผัสแห้ง เย็น นุ่มและเบาสบายตลอดการสวมใส่เสริมส้นและนิ้วเท้าช่วยเพิ่มความทนทานในบริเวณที่มีการเสียดสีสูงมีสายคาดกระชับโอบรอบอุ้งเท้าเพื่อสัมผัสแห่งการซัพพอร์ตฟิตกระชับกับสรีระเท้าซ้ายและขวาถุงเท้าฟุตบอลเด็ก NIKE",
      price: 349,
    },
    {
      id: 4,
      img: "4.png",
      name: "UMBRO UMBSKTAGAQ323",
      text: "ผลิตจากวัสดุคุณภาพสวมใส่ง่ายนุ่มสบายเหมาะสำหรับการเล่นฟุตบอลถุงเท้าฟุตบอลกันลื่น UMBRO",
      price: 190,
    },
  ];

  const shoes = [
    {
      id: 1,
      name: "NIKE Mercurial Vapor 15  ",
      price: 3300,
      text: "Upper: NikeSkin - วัสดุตาข่ายนุ่มและยืดหยุ่นที่เชื่อมโยงเข้าด้วยกันด้วยการเคลือบบางๆ, AirZoom: วางอยู่บนแผ่นรองและให้สัมผัสที่สปริงตัวได้ดียิ่งขึ้นใต้ฝ่าเท้า, Traction: รูปแบบการยึดเกาะที่เป็นเอกลักษณ์ให้การยึดเกาะแบบซูเปอร์ชาร์จพร้อมการปล่อยอย่างรวดเร็วเพื่อสร้างการแยกตัว, Cushioning: พื้นรองเท้าด้านในรองรับแรงกระแทกและมอบความสบายสูงสุด, SuitableFor: สนามหญ้าจริงและหญ้าเทียม, Speed: ดีมาก, Control: ดี, ShootingPower: ปานกลาง",
      img: "1.png",
    },
    {
      id: 2,
      name: "ADIDAS F50 League  ",
      price: 3500,
      text: "Upper: Fiberskin พร้อมพิมพ์ลาย Sprintgrid, Structure: ทรงเรกูลาร์, โครงสร้างแบบไร้เชือกผูก, Lining: ด้านในรองเท้าซับด้วยผ้า, Outsole: พื้นรองเท้าชั้นล่าง Sprintshell 360 สำหรับพื้นสนามหญ้าจริงและหญ้าเทียม, Studs: ปุ่มสตั๊ดอเนกประสงค์ MG (Multi-Ground) เหมาะสำหรับสนามหญ้าจริงและหญ้าเทียม, Speed: ดีมาก, Control: ดี, ShootingPower: ปานกลาง",
      img: "2.png",
    },
    {
      id: 3,
      name: "NIKE Phantom GX Pro ",
      price: 5400,
      text: "Upper: NikeSkin - โซนสัมผัสที่ขยายใหญ่ขึ้นจากตาข่ายที่ออกแบบเชิงโครงสร้างช่วยให้เท้าสัมผัสบอลได้มากยิ่งขึ้น, Touch: ให้สัมผัสนุ่มคล้ายการถัก, โซนสัมผัสด้านในตัวรองเท้าสตั๊ดยกสูงขึ้น, Heel: ส้นแบบอสมมาตรให้ความสบาย, องค์ประกอบอ่อนนุ่มที่ส้น, Traction: ปุ่มสตั๊ดทรง Tri-star ทํางานร่วมกับร่องดอกยางที่ปลายเท้าเพื่อให้การยึดเกาะระดับสูงสุด, SuitableFor: สนามหญ้าสั้นที่เปียกเล็กน้อย, Speed: ดี, Control: ดีมาก, ShootingPower: ปานกลาง",
      img: "3.png",
    },
    {
      id: 4,
      name: "ADIDAS Predator 24",
      price: 3200,
      text: "Upper: Hybridfeel พร้อมองค์ประกอบ Strikescale, Structure: ทรงเรกูลาร์, มีเชือกผูกรองเท้า, Collar: ส่วนหุ้มข้อ Adiknit, Lining: ด้านในซับด้วยผ้า, Outsole: พื้นรองเท้าชั้นนอก Controlplate 2.0, Studs: ปุ่มสตั๊ดสำหรับพื้นสนามทั่วไป FG (Firm Ground) เหมาะสำหรับพื้นสนามหญ้านุ่มและเปียกเล็กน้อย, Speed: ปานกลาง, Control: ดี, ShootingPower: ดีมาก",
      img: "4.png",
    },
  ];

  const balls = [
    {
      id: 1,
      name: "ADIDAS Euro 24 Pro",
      price: 3000,
      text: "หนังด้านนอกทำจากทีพียูรีไซเคิล 100%, ผิวด้านนอกเย็บด้วยเครื่องจักร, ยางในบิวทิล, สูบลมเพื่อใช้งาน, ลูกฟุตบอล Adidas",
      img: "1.png",
    },
    {
      id: 2,
      name: "ADIDAS UCL Pro ",
      price: 3000,
      text: "โพลียูรีเทน 61%, โพลีเอสเตอร์รีไซเคิล 30%, ป่านรามีเคลือบผิวด้านนอก 9%, โครงสร้างไร้ตะเข็บประกอบด้วยวิธีอัดแรงดันความร้อน, ยางในทำจากบิวไทล์คุณภาพสูง, ผ่านการรับรองระดับ FIFA Quality Pro, พิมพ์โลโก้ UEFA Champions League, สูบลมเพื่อใช้งาน, ลูกฟุตบอล ADIDAS",
      img: "2.png",
    },
    {
      id: 3,
      name: "ADIDAS UCL League ",
      price: 1400,
      text: "หนังด้านนอกทำจากทีพียูรีไซเคิล 100%, โครงสร้างเย็บขึ้นรูปแบบไร้ตะเข็บด้วยเทคโนโลยี TSBE, ยางในทำจากบิวไทล์, พิมพ์โลโก้ UEFA Champions League, สูบลมเพื่อใช้งาน, ลูกฟุตบอล Adidas",
      img: "3.png",
    },
    {
      id: 4,
      name: "ADIDAS UWCL Pro 23/24 ",
      price: 3000,
      text: "ผลิตจากโพลียูรีเทน 61%, โพลีเอสเตอร์รีไซเคิล 30%, รามี 9%, โครงสร้างไร้รอยต่อที่เชื่อมด้วยความร้อน, ยางในทำจากบิวไทล์, ผ่านการรับรองระดับ FIFA Quality Pro, พิมพ์ตรา UEFA Champions League, สูบลมเพื่อใช้งาน, ลูกฟุตบอล Adidas",
      img: "4.png",
    },
  ];

  const gaiters = [
    {
      id: 1,
      name: "ADIDAS Messi Club",
      price: 500,
      text: "ผลิตจากโพลีโพรพีลีน 80% (รีไซเคิล 20%), เสริม EVA ที่รองรับแข้งพอดี, เกราะด้านหน้ามีความแข็งแรง, ด้านในซับด้วยวัสดุสังเคราะห์ที่นุ่ม, สนับแข้งฟุตบอล Adidas",
      img: "1.png",
    },
    {
      id: 2,
      name: "ADIDAS Predator Match",
      price: 800,
      text: "ด้านนอก: โพลีโพรพิลีน 80% โพลีโพรพิลีนรีไซเคิลฉีดขึ้นรูป 20%, เกราะด้านหน้ามีความแข็งแรง, เสริม EVA, สายรัดตีนตุ๊กแก, มีสนับรัดข้อเท้า, สนับแข้งฟุตบอล ADIDAS",
      img: "2.png",
    },
    {
      id: 3,
      name: "NIKE Mercurial Hardshell",
      price: 600,
      text: "สนับแข้ง: โพรพิลีน 70% EVA 30%, สายรัด: โพลีเอสเตอร์ 68% ยาง 21% ไนลอน 11%, การออกแบบทรง Low ช่วยป้องกันขาจากการเสียดสี, ส่วนป้องกันที่ทนทานถูกเย็บเข้ากับโฟมหนาแน่นเพื่อการดูดซับแรงกระแทก, ได้รับการรับรอง CE, สนับแข้งฟุตบอล NIKE",
      img: "3.png",
    },
    {
      id: 4,
      name: "NIKE Mercurial Lite",
      price: 900,
      text: "ปลอก: โพลีเอสเตอร์ 65%/ยาง 19%/สแปนเดกซ์ 16%, ตัวสนับ: K resin 72%/EVA 28%, ตัวสนับแบบกว้างบางมีน้ำหนักเบาและทนทาน, โฟมนุ่มมีรูระบายอากาศและช่วยลดแรงกระแทก, ปลอกยืดช่วยให้สนับเข้าที่ไม่มีเลื่อนหลุดและใช้เทคโนโลยี Dri-FIT เพื่อช่วยซับเหงื่อ, รับรองโดย NOCSAE, สนับแข้งฟุตบอล Nike",
      img: "4.png",
    },
  ];

  const goals = [
    {
      id: 1,
      name: "FUTBOLX Sticky",
      price: 790,
      text: "ยางลาเท็กซ์เยอรมันให้การยึดเกาะที่ยอดเยี่ยมในทุกสภาพอากาศ, ฝ่ามือหนา: 3 มม., ช่วงถุงมือ: ผ้าตาข่ายแจ็คการ์ดสำหรับระบายอากาศภายในถุงมือ, หลังมือ: โฟมเนื้อนุ่มเพื่อเพิ่มความทนทาน ความสบาย และดูดซับได้ดียิ่งขึ้น, การป้องกัน: มีฟิงเกอร์เซฟช่วยป้องกันนิ้วมือจากแรงกระแทกแต่ยังสามารถขยับนิ้วได้อย่างยืดหยุ่น, ถุงมือผู้รักษาประตู FUTBOLX",
      img: "1.png"
    },
    {
      id: 2,
      name: "PUMA Ultra Match RCx1",
      price: 1100,
      text: "ฝ่ามือลาเท็กซ์ Multi-grip 3 มม. ให้การยึดเกาะที่ดีและความทนทาน, ทรงเรกูลาร์, ตัวถุงมือทำจาก PU, หลังมือทำจากลาเท็กซ์ปั๊มนูนให้ความยืดหยุ่นและเพิ่มพลังในการรับลูก, ส่วนหุ้มนิ้วหัวแม่มือมีส่วนประกอบของลาเท็กซ์สูงขึ้นเพื่อการสัมผัสบอล, สายรัดทำจากลาเท็กซ์เต็มความยาวช่วยให้ปิดได้แน่นหนา, ถุงมือผู้รักษาประตู Puma",
      img: "2.png"
    },
    {
      id: 3,
      name: "ADIDAS Predator Match Fingersave ",
      price: 2400,
      text: "ช่วงตัว: โพลีเอสเตอร์รีไซเคิลถัก 100%, ฝ่ามือ: ยางพารา Soft Grip Pro, ตัดเย็บแบบฮาล์ฟเนกาทีฟคัท, สายรัดข้อมือความยาวแบบครึ่งข้อ, มีแกน Fingersave, ถุงมือผู้รักษาประตู ADIDAS",
      img: "3.png"
    },
    {
      id: 4,
      name: "UMBRO Neo Club ",
      price: 590,
      text: "ตัดเย็บจากลาเท็กซ์ โพลีเอสเตอร์ ผ้าคอตตอน ไนลอน ยาง และไฮโฟม, ฝ่ามือแบบแบนเพื่อการสัมผัสบอลสูงสุด, แทรกผ้าตาข่าย เพิ่มการระบายอากาศ, สายรัดข้อมือปรับได้ ช่วยเพิ่มความกระชับพอดี, เหมาะสำหรับผู้เล่นระดับเริ่มต้น, ถุงมือผู้รักษาประตู UMBRO",
      img: "4.png"
    }
  ];
  


  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [isModalOpen3, setIsModalOpen3] = useState(false);
  const [isModalOpen4, setIsModalOpen4] = useState(false);
  const [isModalOpen5, setIsModalOpen5] = useState(false);
  const [isModalOpen6, setIsModalOpen6] = useState(false);
  const [isModalOpen7, setIsModalOpen7] = useState(false);

  const [currentItem1, setCurrentItem1] = useState(null);
  const [currentItem2, setCurrentItem2] = useState(null);
  const [currentItem3, setCurrentItem3] = useState(null);
  const [currentItem4, setCurrentItem4] = useState(null);
  const [currentItem5, setCurrentItem5] = useState(null);
  const [currentItem6, setCurrentItem6] = useState(null);
  const [currentItem7, setCurrentItem7] = useState(null);

  const openShirt = (id) => {
    const item1 = shirts.find((d) => d.id === id);
    if (item1) {
      setCurrentItem1(item1);
      setIsModalOpen1(true);
    }
  };

  const openPant = (id) => {
    const item2 = pants.find((d) => d.id === id);
    if (item2) {
      setCurrentItem2(item2);
      setIsModalOpen2(true);
    }
  };

  const openSock = (id) => {
    const item3 = socks.find((d) => d.id === id);
    if (item3) {
      setCurrentItem3(item3);
      setIsModalOpen3(true);
    }
  };

  const openShoes = (id) => {
    const item4 = shoes.find((d) => d.id === id);
    if (item4) {
      setCurrentItem4(item4);
      setIsModalOpen4(true);
    }
  };

  const openBall = (id) => {
    const item5 = balls.find((d) => d.id === id);
    if (item5) {
      setCurrentItem5(item5);
      setIsModalOpen5(true);
    }
  };

  const openGaiter = (id) => {
    const item6 = gaiters.find((d) => d.id === id);
    if (item6) {
      setCurrentItem6(item6);
      setIsModalOpen6(true);
    }
  };

  const openGoal = (id) => {
    const item7 = goals.find((d) => d.id === id);
    if (item7) {
      setCurrentItem7(item7);
      setIsModalOpen7(true);
    }
  };

  return (
    <>
      <section
        className="w-full h-96 bg-cover bg-center"
        style={{ backgroundImage: "url('./img/bg/product.jpg')" }}
      >
        <Navbar />
      </section>
      <section className="container mx-auto mt-16">
        <h1 className="text-6xl font-bold text-center">Product</h1>
        <h1 className="text-4xl mt-5">เสื้อฟุตบอล</h1>
        <hr className="mt-5 mb-5" />
        <div>
          <div className="flex flex-wrap justify-center gap-10">
            {shirts.map((s) => (
              <div
                key={s.id}
                className="max-w-md bg-white shadow-2xl rounded-xl py-5 transition-transform transform hover:scale-105 hover:shadow-2xl ease-in-out duration-300 cursor-pointer"
              >
                <div className="flex justify-center">
                  <img
                    src={`/img/product/shirt/${s.img}`}
                    className="w-72 h-72 object-cover"
                  />
                </div>
                <div className="flex justify-between p-3">
                  <h1>{s.name}</h1>
                  <h1>{s.price} THB</h1>
                </div>
                <div>
                  <button
                    onClick={() => openShirt(s.id)}
                    className="w-full rounded-full hover:bg-black hover:text-white text-white bg-slate-500 p-3"
                  >
                    รายละเอียด
                  </button>
                </div>
              </div>
            ))}
          </div>

          <ShirtPopup
            isOpen={isModalOpen1}
            onClose={() => setIsModalOpen1(false)}
            item={currentItem1}
          />
        </div>
      </section>

      <section className="container mx-auto mt-10">
        <h1 className="text-4xl mt-5">กางเกงฟุตบอล</h1>
        <hr className="mt-5 mb-5" />
        <div className="flex flex-wrap justify-center gap-10">
          {pants.map((p) => (
            <div
              key={p.id}
              className="max-w-md bg-white shadow-2xl rounded-xl py-5 transition-transform transform hover:scale-105 hover:shadow-2xl ease-in-out duration-300 cursor-pointer"
            >
              <div className="flex justify-center">
                <img
                  src={`/img/product/pant/${p.img}`}
                  className="w-72 h-72 object-cover"
                />
              </div>
              <div className="flex justify-between p-3">
                <h1>{p.name}</h1>
                <h1>{p.price} THB</h1>
              </div>
              <div>
                <button
                  onClick={() => openPant(p.id)}
                  className="w-full rounded-full hover:bg-black hover:text-white text-white bg-slate-500 p-3"
                >
                  รายละเอียด
                </button>
              </div>
            </div>
          ))}
          <PantPopup
            isOpen={isModalOpen2}
            onClose={() => setIsModalOpen2(false)}
            item={currentItem2}
          />
        </div>
      </section>

      <section className="container mx-auto mt-10">
        <h1 className="text-4xl mt-5">ถุงเท้าฟุตบอล</h1>
        <hr className="mt-5 mb-5" />
        <div className="flex flex-wrap justify-center gap-10">
          {socks.map((s) => (
            <div
              key={s.id}
              className="max-w-md bg-white shadow-2xl rounded-xl py-5 transition-transform transform hover:scale-105 hover:shadow-2xl ease-in-out duration-300 cursor-pointer"
            >
              <div className="flex justify-center">
                <img
                  src={`/img/product/sock/${s.img}`}
                  className="w-72 h-72 object-cover"
                />
              </div>
              <div className="flex justify-between p-3">
                <h1>{s.name}</h1>
                <h1>{s.price} THB</h1>
              </div>
              <div>
                <button
                  onClick={() => openSock(s.id)}
                  className="w-full rounded-full hover:bg-black hover:text-white text-white bg-slate-500 p-3"
                >
                  รายละเอียด
                </button>
              </div>
            </div>
          ))}
          <SockPopup
            isOpen={isModalOpen3}
            onClose={() => setIsModalOpen3(false)}
            item={currentItem3}
          />
        </div>
      </section>

      <section className="container mx-auto mt-10">
        <h1 className="text-4xl mt-5">รองเท้าฟุตบอล</h1>
        <hr className="mt-5 mb-5" />
        <div className="flex flex-wrap justify-center gap-10">
          {shoes.map((s) => (
            <div
              key={s.id}
              className="max-w-md bg-white shadow-2xl rounded-xl py-5 transition-transform transform hover:scale-105 hover:shadow-2xl ease-in-out duration-300 cursor-pointer"
            >
              <div className="flex justify-center">
                <img
                  src={`/img/product/shoes/${s.img}`}
                  className="w-72 h-72 object-cover"
                />
              </div>
              <div className="flex justify-between p-3">
                <h1>{s.name}</h1>
                <h1>{s.price} THB</h1>
              </div>
              <div>
                <button
                  onClick={() => openShoes(s.id)}
                  className="w-full rounded-full hover:bg-black hover:text-white text-white bg-slate-500 p-3"
                >
                  รายละเอียด
                </button>
              </div>
            </div>
          ))}
          <ShoesPopup
            isOpen={isModalOpen4}
            onClose={() => setIsModalOpen4(false)}
            item={currentItem4}
          />
        </div>
      </section>

      <section className="container mx-auto mt-10">
        <h1 className="text-4xl mt-5">ลูกฟุตบอล</h1>
        <hr className="mt-5 mb-5" />
        <div className="flex flex-wrap justify-center gap-10">
          {balls.map((b) => (
            <div
              key={b.id}
              className="max-w-md bg-white shadow-2xl rounded-xl py-5 transition-transform transform hover:scale-105 hover:shadow-2xl ease-in-out duration-300 cursor-pointer"
            >
              <div className="flex justify-center">
                <img
                  src={`/img/product/ball/${b.img}`}
                  className="w-72 h-72 object-cover"
                />
              </div>
              <div className="flex justify-between p-3">
                <h1>{b.name}</h1>
                <h1>{b.price} THB</h1>
              </div>
              <div>
                <button
                  onClick={() => openBall(b.id)}
                  className="w-full rounded-full hover:bg-black hover:text-white text-white bg-slate-500 p-3"
                >
                  รายละเอียด
                </button>
              </div>
            </div>
          ))}
          <BallPopup
            isOpen={isModalOpen5}
            onClose={() => setIsModalOpen5(false)}
            item={currentItem5}
          />
        </div>
      </section>

      <section className="container mx-auto mt-10">
        <h1 className="text-4xl mt-5">สนับแข้งฟุตบอล</h1>
        <hr className="mt-5 mb-5" />
        <div className="flex flex-wrap justify-center gap-10">
          {gaiters.map((g) => (
            <div
              key={g.id}
              className="max-w-md bg-white shadow-2xl rounded-xl py-5 transition-transform transform hover:scale-105 hover:shadow-2xl ease-in-out duration-300 cursor-pointer"
            >
              <div className="flex justify-center">
                <img
                  src={`/img/product/gaiter/${g.img}`}
                  className="w-72 h-72 object-cover"
                />
              </div>
              <div className="flex justify-between p-3">
                <h1>{g.name}</h1>
                <h1>{g.price} THB</h1>
              </div>
              <div>
                <button
                  onClick={() => openGaiter(g.id)}
                  className="w-full rounded-full hover:bg-black hover:text-white text-white bg-slate-500 p-3"
                >
                  รายละเอียด
                </button>
              </div>
            </div>
          ))}
          <GaiterPopup
            isOpen={isModalOpen6}
            onClose={() => setIsModalOpen6(false)}
            item={currentItem6}
          />
        </div>
      </section>

      <section className="container mx-auto mt-10">
        <h1 className="text-4xl mt-5">ถุงมือผู้รักษาประตู</h1>
        <hr className="mt-5 mb-5" />
        <div className="flex flex-wrap justify-center gap-10">
          {goals.map((g) => (
            <div
              key={g.id}
              className="max-w-md bg-white shadow-2xl rounded-xl py-5 transition-transform transform hover:scale-105 hover:shadow-2xl ease-in-out duration-300 cursor-pointer"
            >
              <div className="flex justify-center">
                <img
                  src={`/img/product/goal/${g.img}`}
                  className="w-72 h-72 object-cover"
                />
              </div>
              <div className="flex justify-between p-3">
                <h1>{g.name}</h1>
                <h1>{g.price} THB</h1>
              </div>
              <div>
                <button
                  onClick={() => openGoal(g.id)}
                  className="w-full rounded-full hover:bg-black hover:text-white text-white bg-slate-500 p-3"
                >
                  รายละเอียด
                </button>
              </div>
            </div>
          ))}
          <GoalPopup
            isOpen={isModalOpen7}
            onClose={() => setIsModalOpen7(false)}
            item={currentItem7}
          />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Product;
