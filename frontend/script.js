import {OrderList} from '/frontend/data.js'
    document.getElementById('ListForm').innerHTML = OrderList;


const ItemImage =  document.getElementById('ItemImage');
const ItemName = document.getElementById('ItemName');
const ItemPrice = document.getElementById('ItemPrice');
const SubmitOrder = document.getElementById('SubmitOrder');

function listOrderItems(){
    let OrderListHTML = "";
    for(let i=0;i<OrderList.length;i++){

       OrderListHTML += `
       <form>
            <img src="" alt="" id="ItemImage">
            <h3 class="ItemName" id="ItemName">${OrderList[i].itemName}</h3>
            <h3 class="ItemPrice" id="ItemPrice">${OrderList[i].itemPrice}</h3>
            <button type="Submit" class="SubmitOrder" id="SubmitOrder">Add to Cart</button>
        </form>`
    }
        document.getElementById('ListForm').innerHTML = OrderListHTML;

}
listOrderItems()
//document.addEventListener('Click', finction(e)){
    //if(e.target.dataset.)
//}