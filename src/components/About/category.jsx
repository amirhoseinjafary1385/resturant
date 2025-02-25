import React from "react";
//داده های نمونه برای اطلاعات تماس

const contactInfo = [
    {category: "Intruduction", text: "به وب سایت ما خوش آمدید! ما متعهد به ارائه بهترین خدمات و محصولات به مشتریانمان ماموریت ما ایجاد ارزش و ایجاد تفاوت است در جهان با پیشنهادات ما"},

    {category: "Contact", text: "اگر سوالی دارید، در صورت تمایل با ما تماس بگیرید. ما اینجا هستیم تا کمک کنیم! شما می توانید از طریق روش های زیر با ما در تماس باشید:"},

    {category: "Phone", text: "+989029107727"},
    
    {category: "Phone", text: "+989029107728"},


    {category: "Location(areas)", text: "Iran | Zanjan"},
    
    {category: "Website creator", text: "این وب سایت توسط یک تیم اختصاصی از طراحان و توسعه دهندگان که مشتاق ایجاد تجربیات زیبا و کاربردی وب هستند. با تیم آشنا شوید:"},
    
    {category: "Team", text: "AmirHossein - Lead Developer, Mr.Hossein - Frontend Developer, Mr.Kalantari - Supervisor"},
 
    {category: "Mission", text: "ماموریت ما ارائه محصولات با کیفیت بالا و خدمات استثنایی به مشتریان است. هدف ما نوآوری و بهبود مستمر برای پاسخگویی به نیازهای در حال تغییر مشتریان است."},
    
    {category: "Social", text: "Linkdin: amir-hossien-jafary, Twitter: Your Page, Instagram: music_with_amir"},
   
];

//عملکرد فیلتر کردن اطلاعات تماس بر اساس دسته

const Filtercontactinfo = (excludecatagory = '') => {
    return contactInfo.filter(info => info.category !== excludecatagory);
};


//Export

export { Filtercontactinfo };