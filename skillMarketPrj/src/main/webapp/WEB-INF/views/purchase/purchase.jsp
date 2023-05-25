<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@ include file="/WEB-INF/views/common/setup.jsp" %>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" href="${root}/static/css/purchase/purchase.css">
<script defer src="${root}/static/js/purchase/purchase.js"></script>
</head>
<body>

    <div class="wrap">

		<%@ include file="/WEB-INF/views/common/header.jsp" %>
		
		<main>
			
            <div class="purchase-area">

                <div class="project-info">
                    <img src="${root}/static/img/${infoVo.estimateThumbnail}" alt="프로젝트 썸네일" class="project-thumbnail">
                    <div class="project-info-text">
                        <div class="project-title bold">${infoVo.estimateTitle}</div>
                        <div class="project-explanation regular">
                            ${infoVo.estimateLineIntroduction}
                        </div>
                    </div>
                </div>

                <div class="purchase-table">
                    <div class="purchase-table-head horizontal-alignment">
                        <div class="purchase-item">항목</div>
                        <div class="purchase-quantity table-subhead">수량</div>
                        <div class="purchase-day table-subhead">작업일</div>
                        <div class="purchase-price table-subhead">금액</div>
                    </div>

                    <div class="purchase-table-body ">
                        <div class="table-body-elem horizontal-alignment">
                            <div class="regular purchase-item">${infoVo.estimateTitle}</div>
                            <div class="purchase-quantity">
                                <input class="quantity-input" type="number" min="1" value="1">
                            </div>
                            <div class="regular purchase-day align-center">${infoVo.estimatePeriod} 일</div>
                            <div class="regular purchase-price align-end prjPrice">${infoVo.estimatePrice }</div>
                        </div>
                        <div class="table-body-elem btn-row horizontal-alignment">
                            <div class="add-elem bold">
                                +
                            </div>
                            <div class="remove-elem bold">
                                -
                            </div>
                        </div>
                    </div>

                    <div class="purchase-table-footer horizontal-alignment">
                        <div class="total-day horizontal-alignment">
                            <div class="bold ">마감 예정일</div>
                            <div class="bold total-day-result"></div>
                        </div>
                        •
                        <div class="total-pay horizontal-alignment">
                            <div class="bold ">총 결제금액</div>
                            <div class="bold total-payment-result"></div>
                        </div>
                    </div>
                </div>

                <div class="bold purchase-method-title">결제수단</div>

                <div class="method-radio-div">
                    <input type="radio" name="purchase-method-radio" id="skillpoint" checked>
                    <input type="radio" name="purchase-method-radio" id="credit-card">
                    <input type="radio" name="purchase-method-radio" id="account-transfer">
                    <input type="radio" name="purchase-method-radio" id="mobile-phone-payment">
                </div>

                <div class="payment-table">
                    <div class="purchase-method horizontal-alignment">
                        <div class=" skillpoint" id="skillpoint">
                            <label for="skillpoint" class="purchase-method-elem method-elem-active">스킬포인트</label>
                        </div>
                        <div class=" credit-card method-elem-inactive" id="credit-card">
                            <label for="credit-card" class="purchase-method-elem">신용카드</label>
                        </div>
                        <div class=" account-transfer method-elem-inactive" id="account-transfer">
                            <label for="account-transfer" class="purchase-method-elem">계좌이체</label>
                        </div>
                        <div class=" mobile-phone-payment method-elem-inactive" id="mobile-phone-payment" >
                            <label for="mobile-phone-payment" class="purchase-method-elem">휴대폰 결제</label>
                        </div>
                    </div>
                    <div class="purchase-method-detail">

                        <div class="purchase-detail-area">

                            <!-- js에서 생성 -->
                            
                        </div>

                    </div>
                </div>

                <button class="purchase-btn bold">구매하기</button>

            </div>

		</main>

		<%@ include file="/WEB-INF/views/common/footer.jsp" %>
        
    </div>

    <script>
        sessionStorage.setItem("optionList", '${optionList}');
        sessionStorage.setItem("userCash", '${userCash}');
    </script>

</body>
</html>