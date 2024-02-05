'use strict' // Установка JS на строгий режим написания кода;

// Функция выбора изображения;
let viewing_photos = document.getElementById('viewing_photos_id');
let viewing_photos_card = document.getElementById('viewing_photos_card_id');
let img_main = document.getElementById(`img_main_id`);
let video_main = document.getElementById(`video_main_id`);
let video_main_play = document.getElementById('video_main_play_id');
viewing_photos.style.display = 'none';
viewing_photos_card.style.display = 'none';
img_main.style.display = 'none';
video_main.style.display = 'none';
document.addEventListener('click', (e)=>{
    for (let i=0; i<100; i++) {
        if (e.target.id == `photo_${i}_id` || e.target.id == `img_${i}_id`) {
            viewing_photos.style.display = 'flex';
            viewing_photos_card.style.display = 'flex';
            img_main.style.display = 'flex';
            img_main.src = `${i}.jpeg`;
        }
        if (e.target.id == `video_${i}_id` || e.target.id == `video_img_${i}_id`) {
            viewing_photos.style.display = 'flex';
            viewing_photos_card.style.display = 'flex';
            video_main.style.display = 'flex';
            video_main_play.src = `video_${i}.mp4`;
            video_main.load();
            video_main.volume = 0.5;
            video_main.play();
        }
    }
});

// Функция закрытия просмотра фото или видео;
let viewing_photos_close = document.getElementById('viewing_photos_close_id');
viewing_photos_close.onclick = () => {
    img_main.style.display = 'none';
    viewing_photos.style.display = 'none';
    viewing_photos_card.style.display = 'none';
    video_main.style.display = 'none';
    video_main.pause();
    video_main.currentTime = 0;
};

// Функция перехода на каталоги;
let catalog_buttom_main = document.getElementById('catalog_buttom_main_id');
let catalog_buttom_about_us = document.getElementById('catalog_buttom_about_us_id');
let catalog_buttom_room = document.getElementById('catalog_buttom_room_id');
let catalog_buttom_contacts = document.getElementById('catalog_buttom_contacts_id');

let catalog_buttom_main_mini = document.getElementById('catalog_buttom_main_mini_id');
let catalog_buttom_about_us_mini = document.getElementById('catalog_buttom_about_us_mini_id');
let catalog_buttom_room_mini = document.getElementById('catalog_buttom_room_mini_id');
let catalog_buttom_contacts_mini = document.getElementById('catalog_buttom_contacts_mini_id');

catalog_buttom_main.onclick = () => {scroll_element_f('georgian_bg_id')};
catalog_buttom_about_us.onclick = () => {scroll_element_f('description_hostel_id')};
catalog_buttom_room.onclick = () => {scroll_element_f('room_id')};
catalog_buttom_contacts.onclick = () => {scroll_element_f('contacts_id')};

catalog_buttom_main_mini.onclick = () => {scroll_element_f('georgian_bg_id')};
catalog_buttom_about_us_mini.onclick = () => {scroll_element_f('description_hostel_id')};
catalog_buttom_room_mini.onclick = () => {scroll_element_f('room_id')};
catalog_buttom_contacts_mini.onclick = () => {scroll_element_f('contacts_id')};

function scroll_element_f(text) {
    buttom_phone_catalog_row.style.display = 'none';
    let element = document.getElementById(text);
    var elementRect = element.getBoundingClientRect();
    var offset = elementRect.top - 100;
    window.scrollTo({
        top: window.scrollY + offset,
        behavior: "smooth"
      });
};

// Функция вывода каталога в режиме телефона;
let buttom_phone_catalog = document.getElementById('buttom_phone_catalog_id');
let buttom_phone_catalog_row = document.getElementById('buttom_phone_catalog_row_id');
buttom_phone_catalog_row.style.display = 'none';
buttom_phone_catalog.onclick = () => {
    buttom_phone_catalog_row.style.display = '';
}


// Функция адаптации встречающей страницы;
let georgian_text = document.getElementById('georgian_text_id');
let georgian_text_2 = document.getElementById('georgian_text_2_id');
let georgian_text_3 = document.getElementById('georgian_text_3_id');
let contacts_info = document.getElementById('contacts_info_id');
let georgian_text_h1 = document.getElementById('georgian_text_h1_id');
let georgian_text_h2 = document.getElementById('georgian_text_h2_id');
let georgian_text_h2_2 = document.getElementById('georgian_text_h2_2_id');
let georgian_text_2_row_1 = document.getElementById('georgian_text_2_row_1_id');
let georgian_text_2_row_2 = document.getElementById('georgian_text_2_row_2_id');
georgian_text.style.width = `50vw`;
setInterval(()=>{
    let win_wodth = 1600/(window.innerWidth);
    // Заголовок;
    if (window.innerWidth > 1200) {
        georgian_text.style.width = `50vw`;
    }
    if (window.innerWidth <= 1200 && window.innerWidth > 800) {
        georgian_text.style.width = `${win_wodth*38}vw`;
    }
    if (window.innerWidth <= 800) {
        let widt_win = window.innerWidth/800
        georgian_text.style.width = `80vw`;
        georgian_text_h1.style.fontSize = `${widt_win*65}px`;
        georgian_text_h2.style.fontSize = `${widt_win*45}px`;
        georgian_text_h2_2.style.fontSize = `${widt_win*35}px`;
    }
    else {
        georgian_text_h1.style.fontSize = '65px';
        georgian_text_h2.style.fontSize = '45px';
        georgian_text_h2_2.style.fontSize = '35px';
    }
    // Цены;
    if (window.innerWidth > 900) {
        georgian_text_2.style.right = `${win_wodth*19}vw`;
        georgian_text_2.style.width = `${win_wodth*25}vw`;
    }
    if (window.innerWidth <= 900 && window.innerWidth > 750) {
        georgian_text_2.style.right = `${win_wodth*21}vw`;
        georgian_text_2.style.width = `${win_wodth*21}vw`;
    }
    if (window.innerWidth <= 750 && window.innerWidth > 580) {
        georgian_text_2.style.right = `${win_wodth*15}vw`;
        georgian_text_2.style.width = `${win_wodth*16}vw`;
    }
    if (window.innerWidth <= 580 && window.innerWidth > 490) {
        georgian_text_2.style.right = `${win_wodth*12}vw`;
        georgian_text_2.style.width = `${win_wodth*14}vw`;
    }
    if (window.innerWidth <= 490) {
        georgian_text_2.style.right = `${win_wodth*10}vw`;
        georgian_text_2.style.width = `${win_wodth*11}vw`;
        georgian_text_2.style.top = '40vh';
    }
    else {
        georgian_text_2.style.top = '50vh';
    }
    if (window.innerWidth <= 900) {
        let widt_win = (window.innerWidth)/1000;
        georgian_text_2_row_1.style.fontSize = `${widt_win*24}px`;
        georgian_text_2_row_2.style.fontSize = `${widt_win*24}px`;
        document.getElementById('span_text_1_id').style.fontSize = `${widt_win*24}px`;
        document.getElementById('span_text_2_id').style.fontSize = `${widt_win*24}px`;
        document.getElementById('span_text_3_id').style.fontSize = `${widt_win*24}px`;
        document.getElementById('bed_png_id').style.height = `${widt_win*140}px`;
        document.getElementById('bed_two_png_id').style.height = `${widt_win*140}px`;
        document.getElementById('span_text_1_img_id').style.height = `${widt_win*80}px`;
        document.getElementById('span_text_2_img_id').style.height = `${widt_win*80}px`;
        document.getElementById('span_text_3_img_id').style.height = `${widt_win*80}px`;
        document.getElementById('bed_png_id').style.width = `${widt_win*140}px`;
        document.getElementById('bed_two_png_id').style.width = `${widt_win*140}px`;
        document.getElementById('span_text_1_img_id').style.width = `${widt_win*80}px`;
        document.getElementById('span_text_2_img_id').style.width = `${widt_win*80}px`;
        document.getElementById('span_text_3_img_id').style.width = `${widt_win*80}px`;
    }
    else {
        georgian_text_2_row_1.style.fontSize = '';
        georgian_text_2_row_2.style.fontSize = '';
        document.getElementById('span_text_1_id').style.fontSize = `22px`;
        document.getElementById('span_text_2_id').style.fontSize = `22px`;
        document.getElementById('span_text_3_id').style.fontSize = `22px`;
        document.getElementById('bed_png_id').style.height = `140px`;
        document.getElementById('bed_two_png_id').style.height = `140px`;
        document.getElementById('span_text_1_img_id').style.height = `80px`;
        document.getElementById('span_text_2_img_id').style.height = `80px`;
        document.getElementById('span_text_3_img_id').style.height = `80px`;
        document.getElementById('bed_png_id').style.width = `140px`;
        document.getElementById('bed_two_png_id').style.width = `140px`;
        document.getElementById('span_text_1_img_id').style.width = `80px`;
        document.getElementById('span_text_2_img_id').style.width = `80px`;
        document.getElementById('span_text_3_img_id').style.width = `80px`;
    }
    // Условие;
    if (window.innerWidth > 1150) {
        georgian_text_3.style.width = `${19*win_wodth}vw`;
    }
    if (window.innerWidth <= 1150 && window.innerWidth > 750) {
        georgian_text_3.style.width = `${18*win_wodth}vw`;
    }
    if (window.innerWidth <= 750 && window.innerWidth > 580) {
        georgian_text_3.style.width = `${14*win_wodth}vw`;
    }
    if (window.innerWidth <= 580 && window.innerWidth > 490) {
        georgian_text_3.style.width = `${12*win_wodth}vw`;
    }
    if (window.innerWidth <= 490) {
        georgian_text_3.style.width = `${9*win_wodth}vw`;
        georgian_text_3.style.top = '40.5vh';
    }
    else {
        georgian_text_3.style.top = '52.5vh';
    }

    // табличка с контактами;
    if (window.innerWidth > 1000) {
        contacts_info.style.zoom = (window.innerWidth)/1200;
    }
    if (window.innerWidth <= 1000 && window.innerWidth > 800) {
        contacts_info.style.zoom = (window.innerWidth)/1100;
    }
    if (window.innerWidth <= 800) {
        contacts_info.style.zoom = (window.innerWidth)/1000;
    }

}, 100);

// Функция запрося занятых коек;
let count_customers = 0; // количество мест;
function get_costomers_f() {
    let xhr = new XMLHttpRequest(); // XMLHttp метод для ajax "GET" запроса;
    xhr.open('GET', 'https://homefortalmaty.ru/get_costomers', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let data = JSON.parse(xhr.responseText); // Cписок имен в JSON формате;
            // Здесь может быть функция;
            console.log(data);
            count_customers = data.length;
            for (let i=1; i<count_customers + 1; i++) {
                if (data[i-1][3] != '') {
                    document.getElementById(`room_${i}_id`).style.backgroundColor = 'red';
                    let date_text = data[i-1][1];
                    date_text = date_text.split('-');
                    let mount_arrow = {"01": 'января', "02": 'февраля', "03": 'марта', "04": 'апреля', "05": 'майя', "06": 'июня', "07": 'июля', "08": 'августа', "09": 'сентября', "10": 'октября', "11": 'ноября', "12": 'декабря'}
                    document.getElementById(`room_${i}_id`).innerText = (date_text[2] + ' ' + mount_arrow[date_text[1]] + ' ' + date_text[0]);
                }
                else {document.getElementById(`room_${i}_id`).style.backgroundColor = 'green'}
            }
        }
    }
    xhr.send();
};
get_costomers_f();

