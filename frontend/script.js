import {orderList} from '/frontend/data.js'

const ItemImage =  document.getElementById('itemImage');
const ItemName = document.getElementById('itemName');
const ItemPrice = document.getElementById('itemPrice');
const submitOrder = document.getElementById('submitOrder');

function listOrderItems(){
    let orderListHTML = "";
    for(let i=0;i<orderList.length;i++){

       orderListHTML += `
       <form class="form">
            <img src="${orderList[i].itemImage}" alt="" id="itemImage" class="itemImage" width=70%>
        <div class="itemDescription">
            <h3 class="itemName" id="itemName">${orderList[i].itemName}</h3>
            <h3 class="itemPrice" id="itemPrice">R${orderList[i].itemPrice}</h3>
            <button type="button" class="submitOrder" id="submitOrder" data-submit-order>Add to Cart</button>
        </div>
        </form>`
    }
        document.getElementById('listForm').innerHTML = orderListHTML;

}
listOrderItems()
document.addEventListener('click', function(event){
    if(event.target.dataset.submitOrder !== undefined){
    listOrderCart(event.target)
}
})
function listOrderCart(button){
    button.textContent = "i was pressed"
}