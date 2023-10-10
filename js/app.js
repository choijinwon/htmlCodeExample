function showList(date){
    let contents = document.querySelector('.table tbody');

    date.forEach(row => {
       
        let tr = document.createElement('tr');

        let td01 = document.createElement('td');
        td01.innerText = row.num;

        let td02 = document.createElement('td');
        td02.innerText = row.title;

        let td03 = document.createElement('td');
        td03.innerText = row.user;

        let td04 = document.createElement('td');
        td04.innerText = row.date;

        let td05 = document.createElement('td');
        td05.innerText = row.views;

        let td06 = document.createElement('td');
        td06.innerText = row.price;
   
        tr.appendChild(td01);
        tr.appendChild(td02);
        tr.appendChild(td03);
        tr.appendChild(td04);
        tr.appendChild(td05);
        tr.appendChild(td06);
   
        document.querySelector(' .table tbody').appendChild(tr);
    });
   
}
showList(table);
