// 결제수단 선택

const radioBtns = document.querySelectorAll('input[name="purchase-method-radio"]');

radioBtns.forEach( radioBtn => {

    radioBtn.addEventListener("click" , e => changeMethod(e))
});

function changeMethod(e) {
    radioBtns.forEach( radioBtn => {

        const id = radioBtn.getAttribute("id");

        const target = document.querySelector('label[for="' + id + '"]');

        if(radioBtn.checked) {
            target.classList.add("method-elem-active");

            if(id == "skillpoint") {
                purchaseDetailAreaToSp();
    
                changeHoldingPoint();
                changeDeficientPoint();
    
            }
            else if(id == "credit-card") {
                purchaseDetailAreaToCC();
            }
            else if(id == "account-transfer") {
                purchaseDetailAreaToAT();
            }
            else if(id == "mobile-phone-payment") {
                purchaseDetailAreaToMP();
            }
        }
        else {
            target.classList.remove("method-elem-active");
        }
    
    });
}

function purchaseDetailAreaToSp() {

    const detailArea = document.querySelector(".purchase-detail-area");

    detailArea.replaceChildren("");

    const methodInfo = document.createElement("div");
    methodInfo.classList.add("purchase-method-info");
    methodInfo.classList.add("regular");
    methodInfo.innerText = "스킬마켓 전용 충전형 포인트";

    detailArea.append(methodInfo);

    const line = document.createElement("div");
    line.classList.add("horizontal-border");

    detailArea.append(line);

    const selectMethod = document.createElement("div");
    selectMethod.classList.add("purchase-method-select");

    const pointArea = document.createElement("div");
    pointArea.classList.add("holding-point-area");

    const text1 = document.createElement("div");
    text1.classList.add("regular");
    text1.innerText = "보유 포인트";

    pointArea.append(text1);

    const holdingPoint = document.createElement("div");
    holdingPoint.classList.add("member-holding-point");

    const point = document.createElement("span");
    point.classList.add("holding-point");
    point.classList.add("regular");

    const unit = document.createElement("span");
    unit.classList.add("sp-unit");
    unit.classList.add("regular");
    unit.innerText = "sp";

    holdingPoint.append(point);
    holdingPoint.append(unit);

    pointArea.append(holdingPoint);

    const deficientArea = document.createElement("div");
    deficientArea.classList.add("deficient-point-area");

    const text2 = document.createElement("div");
    text2.classList.add("regular");
    text2.innerText = "부족한 포인트";

    deficientArea.append(text2);

    const tempDiv = document.createElement("div");
    
    const deficientPoint = document.createElement("span");
    deficientPoint.classList.add("deficient-point");
    deficientPoint.classList.add("regular");

    tempDiv.append(deficientPoint);
    tempDiv.append(unit);

    deficientArea.append(tempDiv);

    const chargeBtn = document.createElement("button");
    chargeBtn.classList.add("cash-charge-btn");
    chargeBtn.classList.add("regular");
    chargeBtn.innerText = "충전하기";


    selectMethod.append(pointArea);
    selectMethod.append(deficientArea);
    selectMethod.append(chargeBtn);

    detailArea.append(selectMethod);

}
purchaseDetailAreaToSp();


function purchaseDetailAreaToCC() {

    const detailArea = document.querySelector(".purchase-detail-area");

    detailArea.replaceChildren("");

    detailArea.append("신용카드 거래~~~")

}

function purchaseDetailAreaToAT() {

    const detailArea = document.querySelector(".purchase-detail-area");

    detailArea.replaceChildren("");

    detailArea.append("계좌이체 거래~~~")

}

function purchaseDetailAreaToMP() {

    const detailArea = document.querySelector(".purchase-detail-area");

    detailArea.replaceChildren("");

    detailArea.append("휴대폰 결제 거래~~~")

}


// ---------------------------------------------------------------
let optionNum = 0;
const maxOptionNume = 2;

const projectPrice = 3000000;
const projectDay = 300;
const option1Price = 100000;
const option1Day = 1;
const option2Price = 500000;
const option2Day = 5;

const removeOptionBtn = document.querySelector(".remove-elem");

// 옵션 추가
const addOptionBtn = document.querySelector(".add-elem");
addOptionBtn.addEventListener("click", addOption);
function addOption() {
    const tableElem = document.querySelectorAll(".table-body-elem");


    // table-body-elem
    const tableBodyElem = document.createElement("div");
    tableBodyElem.classList.add("table-body-elem");
    tableBodyElem.classList.add("horizontal-alignment");


    // purchase-item
    const purchaseItem = document.createElement("div");
    purchaseItem.classList.add("regular");
    purchaseItem.classList.add("purchase-item");
    tableBodyElem.append(purchaseItem);

    // select-option
    const selectOption = document.createElement("select");
    selectOption.name = "select-option";
    selectOption.classList.add("select-option");

    const optionElem = document.createElement("option");
    optionElem.disabled = true;
    optionElem.defaultSelected = true;
    optionElem.hidden = true;
    optionElem.value = "";
    optionElem.innerText = "--옵션을 선택해주세요--";

    selectOption.append(optionElem)
    for(var i = 1; i <= 2; i++){
        const optionElem = document.createElement("option");
        optionElem.value = "option" + i;
        optionElem.innerText = "옵션" + i;

        selectOption.append(optionElem)
    }
    purchaseItem.append(selectOption);

    // purchase-quantity
    const purchaseQuantity = document.createElement("div");
    purchaseQuantity.classList.add("purchase-quantity");

    const quantityInput = document.createElement("input");
    quantityInput.type = "number";
    quantityInput.min = "0";
    quantityInput.value = "0";
    quantityInput.classList.add("regular");
    quantityInput.classList.add("quantity-input");
    purchaseQuantity.append(quantityInput);
    tableBodyElem.append(purchaseQuantity);

    // purchase-day
    const purchaseDay = document.createElement("div");
    purchaseDay.classList.add("regular");
    purchaseDay.classList.add("purchase-day");
    purchaseDay.classList.add("align-center");
    tableBodyElem.append(purchaseDay);

    // purchase-price
    const purchasePrice = document.createElement("div");
    purchasePrice.classList.add("regular");
    purchasePrice.classList.add("purchase-price");
    purchasePrice.classList.add("align-end");
    tableBodyElem.append(purchasePrice);
    

    tableElem[tableElem.length - 2].after(tableBodyElem);

    optionNum++;

    if(optionNum == maxOptionNume){
        addOptionBtn.classList.add("add-elem-inactive");
    }

    removeOptionBtn.classList.add("remove-elem-active");

    changeLineValue();
};

// 옵션 삭제
removeOptionBtn.addEventListener("click" , function() {

    const purchaseTableBody = document.querySelector(".purchase-table-body");

    const tableElem = document.querySelectorAll(".table-body-elem");

    purchaseTableBody.removeChild(tableElem[tableElem.length - 2]);

    optionNum--;

    if(optionNum == 0 ){
        removeOptionBtn.classList.remove("remove-elem-active");
    } 

    if(optionNum < maxOptionNume){
        addOptionBtn.classList.remove("add-elem-inactive");
    }

    setTotalPrice();

    changeDeficientPoint();

});


// 수량 변경시 날짜랑 금액 변경
const tableBodyElems = document.querySelectorAll(".table-body-elem");

const elem = tableBodyElems[0];

const inputNumber = elem.querySelector(".quantity-input");

inputNumber.addEventListener("change", function changeValue() {

    const number = inputNumber.value;

    const purchaseDay = elem.querySelector(".purchase-day");
    purchaseDay.innerText = ( number * projectDay ) + " 일";

    const pPrice = elem.querySelector(".purchase-price");
    const newPrice = number * projectPrice;
    const localPrice = newPrice.toLocaleString("ko-KR");
    pPrice.innerText = "₩ " + localPrice;


    setTotalPrice();

    changeDeficientPoint();

})

// 수량 바뀌면 기간이랑 금액 변경
function changeLineValue() {
    const tableBodyElems = document.querySelectorAll(".table-body-elem");

    for(let i = 1; i < tableBodyElems.length - 1; i++) {

        const elem = tableBodyElems[i];
    
        const inputNumber = elem.querySelector(".quantity-input");
    
        inputNumber.addEventListener("change", function changeValue() {
    
            const optionValue = elem.querySelector(".select-option").value;

            const number = inputNumber.value;
    
            const purchaseDay = elem.querySelector(".purchase-day");
            if(optionValue == "option1") {
                
                purchaseDay.innerText = ( number * option1Day ) + " 일";
            }
            else if(optionValue == "option2") {
                
                purchaseDay.innerText = ( number * option2Day ) + " 일";
            }
            else {
                purchaseDay.innerText = " 일";
            }
    
            const pPrice = elem.querySelector(".purchase-price");
            if(optionValue == "option1") {
                newPrice = ( number * option1Price );
                const localPrice = newPrice.toLocaleString("ko-KR");
                pPrice.innerText = "₩ " + localPrice;
            }
            else if(optionValue == "option2") {
                newPrice = ( number * option2Price );
                const localPrice = newPrice.toLocaleString("ko-KR");
                pPrice.innerText = "₩ " + localPrice;
            }
            else {
                purchaseDay.innerText = "";
            }
            
            setTotalPrice();

            changeDeficientPoint();
    
        })
    
    }
    

}


// 총 작업일 / 총 결제금액
function setTotalPrice() {
    let totalDay = 0;
    let totalPrice = 0;

    const tableBodyElems = document.querySelectorAll(".table-body-elem");

    for(let i = 0 ; i < tableBodyElems.length - 1 ; i++){

        const elem = tableBodyElems[i];

        const lineDay = elem.querySelector(".purchase-day").innerText;
        const conversionDay = Number(lineDay.substring( 0, (lineDay.length-2) ));

        totalDay += conversionDay;

        const linePrice = elem.querySelector(".purchase-price").innerText;
        const conversionPrice = Number( linePrice.substring(2).split(",").join("") );

        totalPrice += conversionPrice;

    }

    const totalDayResult = document.querySelector(".total-day-result");
    totalDayResult.innerText = totalDay + " 일";

    let today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    today = year + "/" + month + "/" + date;

    const todayTime = new Date(today);
    deadlineTime = todayTime.getTime() + ( totalDay * 24 * 60 * 60 * 1000 );
    deadline = new Date(deadlineTime);

    deadlineStr = deadline.getFullYear() + "/" + (deadline.getMonth() + 1) + "/" + deadline.getDate();

    totalDayResult.innerText = deadlineStr;

    const totalPriceResult = document.querySelector(".total-payment-result");

    const localPrice = totalPrice.toLocaleString("ko-KR");
    totalPriceResult.innerText = "₩ " + localPrice;

}
setTotalPrice();



// 구매하기 버튼
function getContextPath(){
    const hostIndex = location.href.indexOf( location.host ) + location.host.length;

    const contextPath = location.href.substring( hostIndex, location.href.indexOf( '/', hostIndex + 1 ));

    return contextPath;
}

const purchaseBtn = document.querySelector(".purchase-btn");
purchaseBtn.addEventListener("click", () => {
    const contextPath = getContextPath();

    location.href = contextPath + "/purchase/completed";
})


//----------------------------------------------------------------
// 캐시 결제

function getHoldingPoint() {

    return 3000000;
}

function changeHoldingPoint() {

    document.querySelector(".holding-point").innerText = getHoldingPoint();

}
changeHoldingPoint();

function changeDeficientPoint() {

    const totalPayResult = document.querySelector(".total-payment-result");

    const totalPay = (Number)( totalPayResult.innerText.split(",").join("").substring(2) );

    const deficient = getHoldingPoint() - totalPay;

    document.querySelector(".deficient-point").innerText = deficient;

}
changeDeficientPoint();